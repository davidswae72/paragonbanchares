import Vue from 'vue'
import api from '../services/api'

export const state = () => ({

  loading: {
    fundWallet: false,
    transactions: false
  },

  transactions: null
})

export const getters = {
  getLoading (state) {
    return state.loading
  },
  getMyTransactions (state) {
    return state.transactions !== null ? state.transactions : []
  }
}

export const mutations = {
  setState (state, { type, value }) {
    state[type] = value
  },
  setLoading (state, { type, is }) {
    state.loading[type] = is
  }

}

export const actions = {
  async fundWallet ({ commit, state, dispatch }, payload) {
    commit('setLoading', { type: 'fundWallet', is: true })

    const accessToken = Vue.$cookies.get('accessToken')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }

    try {
      const { data } = await this.$axios.post(api.fundWallet, payload, config)
      commit('setLoading', { type: 'fundWallet', is: false })
      console.log(data)
      dispatch('controller/initAlert', { is: true, type: 'info', message: data }, { root: true })

      // Get user session
      dispatch('authentication/getSessionDetails', { root: true })
      dispatch('myTransactions')
    } catch (error) {
      commit('setLoading', { type: 'fundWallet', is: false })
      console.log(error)
      const err = error.response.data.error.message
      dispatch('controller/initAlert', { is: true, type: 'error', message: err }, { root: true })
    }
  },
  async transferFunds ({ commit, state, dispatch }, payload) {
    commit('setLoading', { type: 'transfer', is: true })

    const accessToken = Vue.$cookies.get('accessToken')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }

    try {
      const { data } = await this.$axios.post(api.transferFunds, payload, config)
      commit('setLoading', { type: 'transfer', is: false })
      console.log(data)
      dispatch('controller/initAlert', { is: true, type: 'info', message: data }, { root: true })

      // Get user session
      dispatch('authentication/getSessionDetails', { root: true })
      dispatch('myTransactions')
    } catch (error) {
      commit('setLoading', { type: 'transfer', is: false })
      console.log(error)
      const err = error.response.data.error.message
      dispatch('controller/initAlert', { is: true, type: 'error', message: err }, { root: true })
    }
  },

  async myTransactions ({ commit, state, dispatch }) {
    commit('setLoading', { type: 'transactions', is: true })

    const accessToken = Vue.$cookies.get('accessToken')
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      }
    }

    try {
      const { data } = await this.$axios.get(api.myTransactions, config)
      commit('setLoading', { type: 'transactions', is: false })
      // dispatch('controller/initAlert', { is: true, type: 'info', message: data }, { root: true })
      console.log(data)
      const sortedData = data.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt)
      })

      console.log(data)
      console.log('sortedData', sortedData)

      commit('setState', { type: 'transactions', value: sortedData })
      // Get user session
      dispatch('authentication/getSessionDetails', null, { root: true })
    } catch (error) {
      commit('setLoading', { type: 'transactions', is: false })
      console.log(error)
      const err = error.response.data.error.message
      dispatch('controller/initAlert', { is: true, type: 'error', message: err }, { root: true })
    }
  }
}
