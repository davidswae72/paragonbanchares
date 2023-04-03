// import Cookie from 'js-cookie'
import { db } from "@/services/firebase";
import emailjs, { init } from "emailjs-com";

export const state = () => ({
  activePage: "Home",

  loading: {
    edit: false,
    users: false,
    deposit: false,
    transfer: false,
    loan: false,
    transactions: false,
    wallet: false,
    imsCode: false,
    generate: false,
    verify: false,
  },

  alert: {
    is: false,
    type: "",
    message: "",
    title: "",
    persistence: false,
  },

  transactionID: "",

  users: [],
  deposits: [],
  transfers: [],
  loans: [],
  transactions: [],
  verifications: [],
  imsCodes: [],
  wallet: "",
});

export const getters = {
  getState: (state) => (payload) => {
    return state[payload];
  },

  getAlert(state) {
    return state.alert;
  },
  getLoading(state) {
    return state.loading;
  },
};

export const mutations = {
  setState(state, { type, value }) {
    state[type] = value;
  },

  setActivePage(state, active) {
    state.activePage = active;
  },
  setAlert(state, alert) {
    state.alert = alert;
  },
  setLoading(state, { type, is }) {
    state.loading.all = is;
    state.loading[type] = is;
  },
};

export const actions = {
  // Alert
  initAlert({ commit }, { is, type, timer, persistence, title, message }) {
    if (typeof persistence === "undefined") {
      persistence = false;
    }
    if (typeof timer === "undefined") {
      timer = null;
    }
    commit("setAlert", { is, type, title, timer, persistence, message });
  },

  // Walle Address
  async initWalletAddress({ commit }) {
    commit("setLoading", { type: "wallet", is: true });
    await db.collection("wallet").onSnapshot((snapshot) => {
      const data = snapshot.docs;
      let wallet;
      data.forEach((doc) => {
        // get user detail
        wallet = doc.data();
      });
      commit("setState", { type: "wallet", value: wallet.address });
      commit("setLoading", { type: "wallet", is: false });
    });
  },

  // Update the wallet address
  async updateWalletAddress({ commit, dispatch }, payload) {
    commit("setLoading", { type: "wallet", is: true });
    await db
      .collection("wallet")
      .doc("wallet")
      .update({
        address: payload,
      })
      .then(() => {
        commit("setLoading", { type: "wallet", is: false });
        dispatch(
          "controller/initAlert",
          { is: true, type: "success", message: "Wallet Address Updated" },
          { root: true }
        );
      })
      .catch((error) => {
        commit("setLoading", { type: "wallet", is: false });
        console.log(error.message);
        dispatch(
          "controller/initAlert",
          { is: true, type: "error", message: error.message },
          { root: true }
        );
      });
  },

  async initUsers({ commit }) {
    commit("setLoading", { type: "users", is: true });
    await db
      .collection("users")
      .where("role", "==", "user")
      .onSnapshot((snapshot) => {
        const users = [];
        const data = snapshot.docs;
        data.forEach((doc) => {
          // get user detail
          const user = doc.data();
          user.accBalance = `${
            user.symbol
          }${user.account.accBalance.toLocaleString()}`;
          users.push(user);
        });

        console.log(users);
        commit("setState", { type: "users", value: users });
        commit("setLoading", { type: "users", is: false });
      });
  },

  async editUser({ commit, dispatch }, payload) {
    commit("setLoading", { type: "edit", is: true });
    const ref = db.collection("users");
    await ref
      .doc(payload.userID)
      .update(payload)
      .then(() => {
        commit("setLoading", { type: "edit", is: false });
        dispatch(
          "controller/initAlert",
          { is: true, type: "success", message: "User update successfully" },
          { root: true }
        );
      })
      .catch((error) => {
        commit("setLoading", { type: "edit", is: false });
        dispatch(
          "controller/initAlert",
          { is: true, type: "error", message: error.message },
          { root: true }
        );
      });
  },

  async createTransaction({ commit, dispatch }, payload) {
    const ref = db.collection("transactions");
    await ref
      .add(payload)
      .then((docRef) => {
        // update the transaction ID
        commit("setState", { type: "transactionID", value: docRef.id });
        ref
          .doc(docRef.id)
          .update({
            transactionID: docRef.id,
          })
          .then(() => {
            console.log("transactionID update");
          })
          .catch((error) => {
            console.log(error.message);
          });
        console.log("Transaction created successfully");
        console.log("transaction submited");
      })
      .catch((error) => {
        console.log(error.message);
        // dispatch('controller/initAlert', { is: true, type: 'error', message: error.message }, { root: true })
      });
  },

  async initTransactions({ commit }) {
    commit("setLoading", { type: "transaction", is: true });
    await db.collection("transactions").onSnapshot((snapshot) => {
      const transactions = [];
      const data = snapshot.docs;
      console.log(data);
      data.forEach((doc) => {
        // get transaction detail
        const transaction = doc.data();
        transactions.push(transaction);
      });

      // console.log(transactions)
      commit("setState", { type: "transactions", value: transactions });
      commit("setLoading", { type: "transaction", is: false });
    });
  },

  async initDeposit({ commit }) {
    commit("setLoading", { type: "deposit", is: true });
    await db.collection("deposit").onSnapshot((snapshot) => {
      const deposits = [];
      const data = snapshot.docs;
      // console.log(data)
      data.forEach((doc) => {
        // get deposit detail
        const deposit = doc.data();
        deposits.push(deposit);
      });

      // console.log(deposits)
      commit("setState", { type: "deposits", value: deposits });
      commit("setLoading", { type: "deposit", is: false });
    });
  },

  async initTransfer({ commit }) {
    commit("setLoading", { type: "transfer", is: true });
    await db.collection("transfers").onSnapshot((snapshot) => {
      const transfers = [];
      const data = snapshot.docs;
      // console.log(data)
      data.forEach((doc) => {
        // get transfer detail
        const transfer = doc.data();
        transfers.push(transfer);
      });

      // console.log(transfers)
      commit("setState", { type: "transfers", value: transfers });
      commit("setLoading", { type: "transfers", is: false });
    });
  },

  async initLoan({ commit }) {
    commit("setLoading", { type: "loan", is: true });
    await db.collection("loans").onSnapshot((snapshot) => {
      const loans = [];
      const data = snapshot.docs;
      // console.log(data)
      data.forEach((doc) => {
        // get loan detail
        const loan = doc.data();
        loans.push(loan);
      });

      // console.log(loans)
      commit("setState", { type: "loans", value: loans });
      commit("setLoading", { type: "loan", is: false });
    });
  },

  async initIMSCode({ commit }) {
    commit("setLoading", { type: "imsCode", is: true });
    await db.collection("imscode").onSnapshot((snapshot) => {
      const imsCodes = [];
      const data = snapshot.docs;
      // console.log(data)
      data.forEach((doc) => {
        // get imsCode detail
        const data = doc.data();
        imsCodes.push(data);
      });

      console.log(imsCodes);
      commit("setState", { type: "imsCodes", value: imsCodes });
      commit("setLoading", { type: "imsCode", is: false });
    });
  },

  generateCode({ commit, dispatch, state }) {
    commit("setLoading", { type: "generate", is: true });
    const code = Math.floor(100000 + Math.random() * 900000);
    const id = code.toString();
    const ims = {
      code,
      used: false,
    };
    // Check if Code alread exist
    const check = state.imsCodes.find((el) => el.code === code);

    if (check) {
      this.dispatch("generateCode"); // Start all over again
    } else {
      // Generate
      db.collection("imscode")
        .doc(id)
        .set(ims)
        .then(() => {
          commit("setLoading", { type: "generate", is: false });
          dispatch(
            "controller/initAlert",
            {
              is: true,
              type: "success",
              persistence: true,
              message: `I.M.S Code ${code} Generated`,
            },
            { root: true }
          );
        })
        .catch((error) => {
          dispatch(
            "controller/initAlert",
            {
              is: true,
              type: "error",
              persistence: true,
              message: error.message,
            },
            { root: true }
          );
          commit("setLoading", { type: "generate", is: false });
          console.log(error.message);
        });
    }
  },

  async updateTransactions({ state, rootState, commit, dispatch }, payload) {
    // console.log(payload)
    commit("setLoading", { type: payload.type, is: true });
    if (checkTransaction(payload.transactionID)) {
      // update the deposit | transfer | loan transaction
      const ref = db.collection(payload.type).doc(payload.ID);
      await ref
        .update({
          status: payload.status,
        })
        .then(() => {
          console.log(`${payload.type} updated`);
          // call transaction functions
          updateTransaction(payload.status, payload.message);
          if (payload.transaction === "deposit") {
            depositFN(payload.amount);
          } else if (
            payload.transaction === "transfers" &&
            payload.status === "fail"
          ) {
            refundFN(payload.amount);
          } else if (payload.transaction === "loans") {
            console.log("loan");
          }
        })
        .catch((error) => {
          commit("setLoading", { type: payload.type, is: false });
          console.log(error.message);
          // dispatch('controller/initAlert', { is: true, type: 'error', message: error.message }, { root: true })
        });
    }

    // Update the transaction
    function updateTransaction(status, message) {
      commit("setLoading", { type: payload.type, is: true });
      db.collection("transactions")
        .doc(payload.transactionID)
        .update({
          status,
          message,
          updated: true,
        })
        .then(() => {
          commit("setLoading", { type: payload.type, is: false });
          console.log("transaction updated");
        })
        .catch((error) => {
          commit("setLoading", { type: payload.type, is: false });
          console.log(error.message);
        });
    }

    // Return transfer fund back to user
    function refundFN(amount) {
      commit("setLoading", { type: payload.type, is: true });
      const user = state.users.find((el) => {
        return el.userID === payload.userID;
      });

      user.account.accBalance += amount;
      db.collection("users")
        .doc(user.userID)
        .update(user)
        .then(() => {
          commit("setLoading", { type: payload.type, is: false });
          console.log("User Balance Updated");
          dispatch(
            "controller/initAlert",
            {
              is: true,
              type: "success",
              message: "Transaction updated successfully",
            },
            { root: true }
          );
        })
        .catch((error) => {
          commit("setLoading", { type: payload.type, is: false });
          console.log(error.message);
        });
    }

    // Add the deposit amount to the book balance when approved
    function depositFN(amount) {
      commit("setLoading", { type: payload.type, is: true });
      const user = state.users.find((el) => {
        return el.userID === payload.userID;
      });
      // updated user book balance
      user.account.bookBalance += amount;
      db.collection("users")
        .doc(user.userID)
        .update(user)
        .then(() => {
          commit("setLoading", { type: payload.type, is: false });
          console.log("User Balance Updated");
          dispatch(
            "controller/initAlert",
            {
              is: true,
              type: "success",
              message: "Transaction updated successfully",
            },
            { root: true }
          );
        })
        .catch((error) => {
          commit("setLoading", { type: payload.type, is: false });
          console.log(error.message);
        });
    }

    // check transaction if it has been updated already
    function checkTransaction(ID) {
      const transaction = state.transactions.find((el) => {
        return el.transactionID === ID;
      });
      if (transaction.updated) {
        commit("setLoading", { type: payload.type, is: false });
        dispatch(
          "controller/initAlert",
          {
            is: true,
            type: "error",
            message: "Transaction Has been updated already",
          },
          { root: true }
        );
        return false;
      } else {
        commit("setLoading", { type: payload.type, is: false });
        return true;
      }
    }
  },

  async initVerifications({ commit, dispatch }, payload) {
    console.log("Verification initing....");
    commit("setLoading", { type: "verify", is: true });

    await db.collection("verifications").onSnapshot((snapshot) => {
      const verifications = [];
      const data = snapshot.docs;
      console.log(data);
      data.forEach((doc) => {
        // get verification detail
        const verification = doc.data();
        verifications.push(verification);
      });

      // console.log(verifications)
      commit("setState", { type: "verifications", value: verifications });
      commit("setLoading", { type: "verify", is: false });
    });
  },

  async verifyFunction({ commit, dispatch }, payload) {
    commit("setLoading", { type: "verify", is: true });
    const user = payload.user;
    delete payload.user;

    await db
      .collection("verifications")
      .doc(payload.userID)
      .update(payload)
      .then(() => {
        commit("setLoading", { type: "verify", is: false });

        //Send Email to Client
        emailjs
          .send(
            "service_8hw6rux",
            "template_xk16s6g",
            {
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
              documentType: payload.type,
              documentStatus: payload.status,
              message:
                payload.status === null
                  ? "Your document was declined please send upload or contact support at support@paragonbanchares.online"
                  : "Your document has been approved",
            },
            "LbDRZcVgBxI5b5Bi5"
          )
          .then(() => {
            console.log("Email Sent to User Successfully");
          });

        dispatch(
          "controller/initAlert",
          { is: true, type: "success", message: "Document Updated" },
          { root: true }
        );
      })
      .catch((error) => {
        commit("setLoading", { type: "verify", is: false });
        console.log(error.message);
        dispatch(
          "controller/initAlert",
          { is: true, type: "error", message: error.message },
          { root: true }
        );
      });
  },

  initAdmin({ dispatch }) {
    dispatch("initUsers");
    dispatch("initDeposit");
    dispatch("initVerifications");
    dispatch("initTransfer");
    dispatch("initIMSCode");
    dispatch("initLoan");
    dispatch("initTransactions");
    dispatch("initWalletAddress");
  },
};
