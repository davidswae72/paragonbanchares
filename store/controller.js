import { auth, db, st } from '@/services/firebase'
import emailjs from 'emailjs-com'

export const state = () => ({

  activePage: 'Home',

  loading: {
    loan: false,
    deposit: false,
    transfer: false

  },

  alert: {
    is: false,
    type: '',
    message: '',
    title: '',
    persistence: false
  },

  loanID: '',
  transferID: '',
  depositID: '',
  transactionID: '',
  verificationID:'',

  transactions: []

})

export const getters = {

  getState: state => (payload) => {
    return state[payload]
  },

  getAlert (state) {
    return state.alert
  },

  getActivePage (state) {
    return state.activePage
  },

  getLoading (state) {
    return state.loading
  }

}

export const mutations = {
  setState (state, { type, value }) {
    state[type] = value
  },

  setActivePage (state, active) {
    state.activePage = active
  },

  setAlert (state, alert) {
    state.alert = alert
  },
  setLoading (state, { type, is }) {
    state.loading.all = is
    state.loading[type] = is
  }

}

export const actions = {
// Alert
  initAlert ({ commit }, { is, type, timer, persistence, title, message }) {
    if (typeof persistence === 'undefined') {
      persistence = false
    }
    if (typeof timer === 'undefined') {
      timer = null
    }
    commit('setAlert', { is, type, title, timer, persistence, message })
  },

  // Loan Application
  async loanForm ({ commit, dispatch }, payload) {
    commit('setLoading', { type: 'loan', is: true })
    const userID = auth.currentUser.uid
    const ref = db.collection('loans')
    payload.userID = userID

    await ref.add(payload).then((docRef) => {
      // update the loan ID
      commit('setState', { type: 'loanID', value: docRef.id })
      ref.doc(docRef.id).update({
        loanID: docRef.id
      })
      console.log('loan submited')
      // Transaction details
      payload.purpose = `Applied for loan of $${(payload.amount).toLocaleString()}`
      payload.transaction = 'loan'
      payload.ID = docRef.id
      const transaction = payload
      dispatch('transactions', transaction)
      dispatch('initAlert', { is: true, type: 'success', message: 'Loan application submitted successful and under review' })
      commit('setLoading', { type: 'loan', is: false })
    }).catch((error) => {
      dispatch('initAlert', { is: true, type: 'error', message: error.message })
      commit('setLoading', { type: 'loan', is: false })
    })
  },

// Submit Proof of Payment
async uploadDocument ({ commit, rootState, dispatch }, payload) {

  commit('setLoading', { type: 'veriy', is: true })
  const userID = auth.currentUser.uid

  const obj = {
    back:'',
    front:'',
    type: payload.type,
    userID,
    status:'pending',
   }

  const ref = db.collection('verifications').doc(userID)
  await ref.set(obj).then((docRef) => {
   
    console.log('Document Updated')
    // Upload Proof
    uploadDoc(payload)

    
    if(payload.name == 'front'){
      emailjs.send("service_9h102x8","template_ec103dl", {
        name: `${payload.user.firstName} ${payload.user.lastName}`,
        email: payload.user.email,
        documentType: payload.type,
        documentStatus: 'Pending',
      }, 'ztss67Yd8feZPMfnB').then(() => {
        console.log('Email Sent to Admin Successfully')
      })
    }
 
    // dispatch('initAlert', { is: true, type: 'success', persistence: true, message: 'Document uploaded successfully' })
    commit('setLoading', { type: 'verify', is: false })
  }).catch((error) => {
    dispatch('initAlert', { is: true, type: 'error', persistence: true, message: error.message })
    commit('setLoading', { type: 'verify', is: false })
  })


  async function uploadDoc(){
    
    console.log(payload.name)

    let documentURL
    const photo = payload.photo
    const filename = photo.name
    const ext = filename.slice(filename.lastIndexOf('.'))

    await st.ref(`document/${filename}`)
      .put(photo)
      .then((res) => {
        // console.log('start download')
        st.ref(`document/${filename}`)
          .getDownloadURL()
          .then((url) => {
            documentURL = url
            console.log(documentURL)
            // update photo in the database
            ref.update({
              [payload.name]: documentURL
            }).then(function () {
              console.log('Document updated')
              dispatch('authentication/initVerification', null, { root: true })
              dispatch('initAlert', { is: true, type: 'success', persistence: true, message: 'Document uploaded successfully' })
            })
              .catch(function (error) {
                // The document probably doesn't exist.
                console.log(error.message)
                dispatch('controller/initAlert', { is: true, type: 'error', message: error.message }, { root: true })
              })
          })
          .catch((error) => {
            console.log(error.message)
            dispatch('controller/initAlert', { is: true, type: 'error', message: error.message }, { root: true })
          })
      }).catch((err) => {
        console.log(err)
        dispatch('controller/initAlert', { is: true, type: 'error', message: err.message }, { root: true })
      })
  }
},

  // Fund Transfer
  async transferForm ({ commit, dispatch }, payload) {
    commit('setLoading', { type: 'transfer', is: true })
    const userID = auth.currentUser.uid
    const ref = db.collection('transfers')
    payload.userID = userID

    await ref.add(payload).then((docRef) => {
      // update the transferID
      commit('setState', { type: 'transferID', value: docRef.id })
      ref.doc(docRef.id).update({
        transferID: docRef.id
      })
      console.log('transfer submited')

      // Terminate imscode
      useIMSCode(payload.imsCode)

      // Transaction details
      payload.purpose = `${payload.beneficiary.firstName} ${payload.beneficiary.lastName} <br/> ${payload.beneficiary.bank}`
      payload.transaction = 'transfer'
      payload.ID = docRef.id
      const transaction = payload
      dispatch('transactions', transaction)
      // Deduct Balance
      dispatch('deductBalance', payload.beneficiary.amount)

      dispatch('initAlert', { is: true, type: 'success', message: 'Fund Transfer  submitted successful and under review' })
      commit('setLoading', { type: 'transfer', is: false })
    }).catch((error) => {
      commit('setLoading', { type: 'transfer', is: false })
      dispatch('initAlert', { is: true, type: 'error', message: error.message })
    })

    function useIMSCode (code) {
      code = code.toString()
      db.collection('imscode').doc(code).update({
        used: true
      })
    }
  },

  async deductBalance ({ rootState, dispatch }, amount) {
    // get user details
    const userID = auth.currentUser.uid
    const user = rootState.authentication.user
    const currentBal = user.account.accBalance

    // deduct amount from balance
    const newBalance = currentBal - amount
    user.account.accBalance = newBalance

    // update user in database
    const ref = db.collection('users')

    await ref.doc(userID).update(user).then(() => {
      console.log('Balance deducted')
    }).catch((error) => {
      console.log(error.message)
      dispatch('initAlert', { is: true, type: 'error', message: error.message })
    })
  },

  // Transactions
  async transactions ({ commit, dispatch, rootState }, payload) {
    const ref = db.collection('transactions')
    payload.message = ''
    payload.updated = false
    payload.balance = rootState.authentication.user.account.accBalance
    console.log(payload.balance)
    await ref.add(payload).then((docRef) => {
      // update the transaction ID
      commit('setState', { type: 'transactionID', value: docRef.id })
      ref.doc(docRef.id).update({
        transactionID: docRef.id
      })

      const transaction = {
        deposit: 'deposit',
        loan: 'loans',
        transfer: 'transfers'
      }

      db.collection(transaction[payload.transaction]).doc(payload.ID).update({
        transactionID: docRef.id
      })

      console.log('transaction submited')
    }).catch((error) => {
      dispatch('initAlert', { is: true, type: 'error', message: error.message })
    })
  },

  async initTransactions ({ commit }) {
    commit('setLoading', { type: 'transaction', is: true })
    const userID = auth.currentUser.uid
    await db.collection('transactions')
      .where('userID', '==', userID)
      .onSnapshot((snapshot) => {
        const transactions = []
        const data = snapshot.docs
        // console.log(data)
        data.forEach((doc) => {
          // get transaction detail
          const transaction = doc.data()
          transactions.push(transaction)
        })

        transactions.sort((a, b) => new Date(b.date) - new Date(a.date))
        // console.log(transactions)
        commit('setState', { type: 'transactions', value: transactions })
        commit('setLoading', { type: 'transaction', is: false })
      })
  },

  // Submit Proof of Payment
  async submitProof ({ commit, dispatch }, data) {
    commit('setLoading', { type: 'deposit', is: true })
    const payload = data.proof
    const userID = auth.currentUser.uid
    const ref = db.collection('deposit')
    payload.userID = userID
    await ref.add(payload).then((docRef) => {
      // update the loan ID
      commit('setState', { type: 'depositID', value: docRef.id })
      ref.doc(docRef.id).update({
        depositID: docRef.id
      })
      console.log('Deposit submited')
      // Upload Proof
      dispatch('uploadPhoto', data)
      // Transaction details
      payload.purpose = 'Trust Tower Bank'
      payload.transaction = 'deposit'
      payload.ID = docRef.id
      const transaction = payload
      dispatch('transactions', transaction)
      dispatch('initAlert', { is: true, type: 'success', message: 'Proof of payment submitted successful and under review' })
      commit('setLoading', { type: 'deposit', is: false })
    }).catch((error) => {
      dispatch('initAlert', { is: true, type: 'error', message: error.message })
      commit('setLoading', { type: 'deposit', is: false })
    })
  },

  async uploadPhoto ({ commit, dispatch, state }, payload) {
    const ID = state.depositID
    const ref = db.collection('deposit').doc(ID)

    let recieptURL
    const photo = payload.photo
    const filename = photo.name
    const ext = filename.slice(filename.lastIndexOf('.'))

    await st.ref(`reciept/${ID}${ext}`)
      .put(photo)
      .then((res) => {
        // console.log('start download')
        st.ref(`reciept/${ID}${ext}`)
          .getDownloadURL()
          .then((url) => {
            recieptURL = url
            // update photo in the database
            ref.update({
              photoURL: recieptURL
            }).then(function () {
              console.log('Deposit updated')
            })
              .catch(function (error) {
                // The document probably doesn't exist.
                console.log(error.message)
                dispatch('controller/initAlert', { is: true, type: 'error', message: error.message }, { root: true })
              })
          })
          .catch((error) => {
            console.log(error.message)
            dispatch('controller/initAlert', { is: true, type: 'error', message: error.message }, { root: true })
          })
      }).catch((err) => {
        console.log(err)
        dispatch('controller/initAlert', { is: true, type: 'error', message: err.message }, { root: true })
      })
  },

  async runApp({commit}){

    console.log('Initing App...')
    const currencies = [
      {
        name:'EUR',
        rate:1,
        symbol:'€',
      },
      {
        name:'GBP',
        rate:1,
        symbol:'£',
      },
      {
        name:'USD',
        rate:1,
        symbol:'$',
      },
      {
        name:'AUD',
        rate:1,
        symbol:'AI',
      },
      {
        name:'BWP',
        rate:1,
        symbol:'P',
      },
      {
        name:'ZAR',
        rate:1,
        symbol:'R',
      },
      {
        name:'ZMW',
        rate:1,
        symbol:'ZK',
      },
    ]

    // Init wallet Address
    await db.collection('wallet').add({
      name:'Bitcoin',
      address:'wallet address',
      photoURL: 'null'
    }).then(docRef => {

      db.collection('wallet').doc(docRef.id).update({
        id: docRef.id
      }).then(() =>{
        console.log('Wallet ID Updated')
      }).catch(error => {
        console.log(error.message)
      })


      console.log('Currency Inited')
    }).catch(error => {
      console.log(error.message)
    })

    //Init Currencies
    await currencies.forEach(el => {
      db.collection('currency').doc(el.name.toLowerCase()).set(el).then(() => {
        console.log('Currency Inited')
      }).catch(error => {
        console.log(error.message)
      })
    })

  },

  // Initialize App
  initApp ({ dispatch }) {
    dispatch('initTransactions')
    dispatch('authentication/initToken',null, { root: true })
    dispatch('authentication/initVerification', null, { root: true })
  }

}
