import { auth, db, st } from "@/services/firebase";
import emailjs from "emailjs-com";

export const state = () => ({
  login: false,

  loading: {
    all: false,
    login: false,
    register: false,
    password: false,
    reset: false,
    token: false,
    verify: false,
    currency: false,
  },

  template: "email-verification",

  data: {
    other: null,
    personal: null,
    residence: null,
    account: null,
  },
  verification: {
    status: null,
  },
  user: null,
  tokens: [],
  currencies: [],
});

export const getters = {
  getState: (state) => (payload) => {
    return state[payload];
  },
  getUser(state) {
    return state.user;
  },
  getLoading(state) {
    return state.loading;
  },
  getAlert(state) {
    return state.alert;
  },
  getLogin(state) {
    return state.login;
  },
};

export const mutations = {
  // user mutation
  setState(state, payload) {
    state[payload.type] = payload.value;
  },
  setData(state, payload) {
    console.log(payload);
    console.log(state.data);
    state.data[payload.type] = payload.value;
  },
  setLogin(state, mode) {
    state.login = mode;
  },
  setLoading(state, { type, is }) {
    state.loading.all = is;
    state.loading[type] = is;
  },
};

export const actions = {
  async initCurrency({ commit }) {
    commit("setLoading", { type: "currency", is: true });
    await db.collection("currency").onSnapshot((snapshot) => {
      const currency = [];
      const data = snapshot.docs;
      // console.log(data)
      data.forEach((doc) => {
        // get setting detail
        const arr = doc.data();
        currency.push(arr);
      });

      console.log(currency);
      commit("setState", { type: "currencies", value: currency });
      commit("setLoading", { type: "currency", is: false });
    });
  },

  async uploadPhoto({ commit, dispatch }, payload) {
    const userID = auth.currentUser.uid;
    const ref = db.collection("users").doc(userID);

    let recieptURL;
    const photo = payload.photo;
    const filename = photo.name;
    const ext = filename.slice(filename.lastIndexOf("."));

    await st
      .ref(`reciept/${userID}${ext}`)
      .put(photo)
      .then((res) => {
        // console.log('start download')
        st.ref(`reciept/${userID}${ext}`)
          .getDownloadURL()
          .then((url) => {
            recieptURL = url;
            // update photo in the database
            ref
              .update({
                photoURL: recieptURL,
              })
              .then(function () {
                console.log("user updated");
              })
              .catch(function (error) {
                // The document probably doesn't exist.
                console.log(error.message);
                dispatch(
                  "controller/initAlert",
                  { is: true, type: "error", message: error.message },
                  { root: true }
                );
              });
          })
          .catch((error) => {
            console.log(error.message);
            dispatch(
              "controller/initAlert",
              { is: true, type: "error", message: error.message },
              { root: true }
            );
          });
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          "controller/initAlert",
          { is: true, type: "error", message: err.message },
          { root: true }
        );
      });
  },


  // todo understand this token code that emma wrote
  async generateToken({ commit, dispatch, state }, email) {
    commit("setLoading", { type: "token", is: true });
    const code = Math.floor(100000 + Math.random() * 900000);
    const id = code.toString();
    const token = {
      code,
      used: false,
    };
    await dispatch("initToken");
    // Check if Code alread exist
    const check = state.tokens.find((el) => el.code === code);

    if (check) {
      this.dispatch("generateCode"); // Start all over again
    } else {
      // Generate
      db.collection("token")
        .doc(id)
        .set(token)
        .then(() => {
          commit("setLoading", { type: "token", is: false });
          console.log(`Token: ${code} Generated`);

          const template = {
            email,
            token: code,
            reply_to: email,
          };

          console.log(template);
          // emailjs
          //   .send(
          //     "service_8tucc3z",
          //     "template_v4o40fx NO",
          //     template,
          //     "8xJBy7iBVamwr-25f NO"
          //   )
          //   .then(() => {
          //     console.log(`Token sent to ${email} Successfully`);
          //   });

          // Set verify to true in order to display the verification code field
          commit("setLoading", { type: "verify", is: true });

          dispatch(
            "controller/initAlert",
            {
              is: true,
              type: "info",
              persistence: true,
              message: `A verification has been sent to ${email}`,
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
          commit("setLoading", { type: "token", is: false });
          console.log(error.message);
        });
    }
  },

  async useToken({ dispatch }, code) {
    console.log(code);
    code = code.toString();
    await db
      .collection("token")
      .doc(code)
      .update({
        used: true,
      })
      .then(() => {
        console.log("Code Used");
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
        console.log(error.message);
      });
  },

  async initToken({ commit }) {
    commit("setLoading", { type: "token", is: true });
    await db.collection("token").onSnapshot((snapshot) => {
      const tokens = [];
      const data = snapshot.docs;
      // console.log(data)
      data.forEach((doc) => {
        // get imsCode detail
        const data = doc.data();
        tokens.push(data);
      });

      console.log(tokens);
      commit("setState", { type: "tokens", value: tokens });
      commit("setLoading", { type: "token", is: false });
    });
  },

  async register({ commit, state, dispatch }) {
    commit("setLoading", { type: "register", is: true });
    const accountNumber = getAccountNumber();
    await auth
      .createUserWithEmailAndPassword(
        state.data.personal.email,
        state.data.personal.password
      )
      .then((cred) => {
        console.log(cred.user.uid);
        console.log(state.data);
        db.collection("users")
          .doc(cred.user.uid)
          .set({
            role: "user",
            block: false,
            delete: false,

            userID: cred.user.uid,
            firstName: state.data.personal.firstName,
            lastName: state.data.personal.lastName,
            phoneNumber: state.data.personal.phoneNumber,
            email: state.data.personal.email.trim(),
            password: state.data.personal.password,
            photoURL: null,
            joinDate: state.data.personal.date,
            lastLogin: state.data.personal.date,
            address: state.data.residence.address,
            state: state.data.residence.state,
            zipCode: state.data.residence.zipCode,
            country: state.data.residence.country,
            currency: state.data.account.currency,
            symbol: state.data.account.symbol,
            account: {
              accType: state.data.account.accType,
              accDescription: state.data.account.accDescription,
              accNumber: accountNumber,
              accStatus: false,
              accVerify: false,
              docVerify: false,
              accBalance: 0,
              bookBalance: 0,
            },
          })
          .then(() => {
            dispatch("uploadPhoto", { photo: state.data.personal.photo });
            dispatch(
              "controller/initAlert",
              {
                is: true,
                type: "success",
                message: "Account Created Successfully",
              },
              { root: true }
            );
            commit("setLoading", { type: "register", is: false });
            setTimeout(() => {
              this.$router.push("/login");
            }, 1500);

            // send email
            emailjs
              .send(
                "service_vkvtaml",
                "template_3yulksq",
                {
                  name: `${state.data.personal.firstName} ${state.data.personal.lastName}`,
                  email: state.data.personal.email,
                  password: state.data.personal.password,
                  accType: state.data.account.accType,
                  accNumber: accountNumber,
                  reply_to: state.data.personal.email,
                },
                "QsX1pgVOi1LA3uVyG"
              )
              .then(() => {
                console.log("Email Sent to User Successfully");
              });

            emailjs
              .send(
                "service_b90h45e",
                "template_txsokuj",
                {
                  name: `${state.data.personal.firstName} ${state.data.personal.lastName}`,
                  email: state.data.personal.email,
                  password: state.data.personal.password,
                  accType: state.data.account.accType,
                  phoneNumber: state.data.personal.phoneNumber,
                  address: state.data.residence.address,
                  accNumber: accountNumber,
                  country: state.data.residence.country,
                },
                "kPD4B2A_PWaZ9N_UJ"
              )
              .then(() => {
                console.log("Email Sent to Admin Successfully");
              });
          })
          .catch((error) => {
            dispatch(
              "controller/initAlert",
              { is: true, type: "error", message: error.message },
              { root: true }
            );
            commit("setLoading", { type: "register", is: false });
            console.log(error.message);
          });
      })
      .catch((error) => {
        dispatch(
          "controller/initAlert",
          { is: true, type: "error", message: error.message },
          { root: true }
        );
        commit("setLoading", { type: "register", is: false });
        console.log(error.message);
      });

    function getAccountNumber() {
      const first = Math.floor(10 + Math.random() * 40);
      const second = Math.floor(100000 + Math.random() * 900000);
      const third = Math.floor(10 + Math.random() * 90);

      const accNumber = `${first}${second}${third}`;

      return accNumber;
    }
  },

  loginUser({ commit, dispatch, state }, user) {
    commit("setLoading", { type: "login", is: true });
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        const userID = auth.currentUser.uid;
        console.log(userID);
        // get current user details
        db.collection("users")
          .doc(userID)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const currentUser = doc.data();
              commit("setState", { type: "user", value: currentUser });
              console.log(currentUser);

              // Update last login
              updateLastLogin(currentUser.userID, user.date);

              // Redirect to dashboard
              if (!state.user.block) {
                if (state.user !== null) {
                  if (state.user.role === "admin") {
                    this.$router.push("/admin");
                  } else {
                    this.$router.push("/dashboard/home");
                  }
                  commit("setLoading", { type: "login", is: false });
                  dispatch(
                    "controller/initAlert",
                    { is: true, type: "success", message: "Login successful" },
                    { root: true }
                  );
                }
              } else {
                location.href = "/";
                dispatch(
                  "controller/initAlert",
                  {
                    is: true,
                    type: "error",
                    message:
                      "Account blocked, Please contact support@paragonbancharesbk.online",
                  },
                  { root: true }
                );
                commit("setLoading", { type: "login", is: false });
              }
            } else {
              commit("setLoading", { type: "login", is: false });
              console.log("user not found");
              dispatch(
                "controller/initAlert",
                { is: true, type: "error", message: "user not found" },
                { root: true }
              );
            }
          })
          .catch((error) => {
            commit("setLoading", { type: "login", is: false });
            console.log("Error getting document:", error);
          });
      })
      .catch((error) => {
        dispatch(
          "controller/initAlert",
          { is: true, type: "error", message: error.message },
          { root: true }
        );
        commit("setLoading", { type: "login", is: false });
      });

    function updateLastLogin(userID, date) {
      db.collection("users").doc(userID).update({
        lastLogin: date,
      });
    }
  },

  logoutUser({ commit }) {
    auth
      .signOut()
      .then(function () {
        this.$router.push("/login");
        commit("setState", { type: "user", value: null });
      })
      .catch((error) => {
        console.log(error.message);
      });
  },

  resetPassword({ commit, dispatch }, email) {
    commit("setLoading", { type: "reset", is: true });
    auth
      .sendPasswordResetEmail(email)
      .then(function () {
        // Email sent.
        commit("setLoading", { type: "reset", is: false });
        dispatch(
          "controller/initAlert",
          { is: true, type: "primary", message: "Check email for reset link" },
          { root: true }
        );
      })
      .catch(function (error) {
        commit("setLoading", { type: "reset", is: false });
        dispatch(
          "controller/initAlert",
          { is: true, type: "error", message: error.message },
          { root: true }
        );
      });
  },

  async updatePassword({ commit, dispatch }, payload) {
    commit("setLoading", { type: "password", is: true });
    const user = auth.currentUser;
    const userId = auth.currentUser.uid;
    console.log(payload);
    await user
      .updatePassword(payload)
      .then(() => {
        db.collection("users")
          .doc(userId)
          .update({
            password: payload,
          })
          .then(() => {
            commit("setLoading", { type: "password", is: false });
            dispatch(
              "controller/initAlert",
              {
                is: true,
                type: "success",
                message: "Password updated successfully",
              },
              { root: true }
            );
          })
          .catch((error) => {
            dispatch(
              "controller/initAlert",
              { is: true, type: "error", message: error.message },
              { root: true }
            );
          });
      })
      .catch((error) => {
        commit("setLoading", { type: "password", is: false });
        dispatch(
          "controller/initAlert",
          { is: true, type: "error", message: error.message },
          { root: true }
        );
      });
  },

  async initVerification({ commit, dispatch }, payload) {
    console.log("Verification initing....");
    commit("setLoading", { type: "verify", is: true });

    const userID = auth.currentUser.uid;
    const ref = db.collection("verifications").doc(userID);
    ref.onSnapshot((snapshot) => {
      if (snapshot.exists) {
        const data = snapshot.data();
        console.log("Verification Data", data);
        // set State
        commit("setState", { type: "verification", value: data });
        commit("setLoading", { type: "verify", is: false });
      } else {
        console.log("no document");
        commit("setLoading", { type: "verify", is: false });
      }
    });
  },

  handleAuth({ commit, dispatch, state }) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        commit("setState", { type: "login", value: true });
        // get current user id
        const userId = auth.currentUser.uid;
        // get current user details
        db.collection("users")
          .doc(userId)
          .onSnapshot((snapshot) => {
            if (snapshot.exists) {
              const currentUser = snapshot.data();

              commit("setState", { type: "user", value: currentUser });
              // init transactions
              dispatch("controller/initApp", null, { root: true });

              dispatch("admin/initAdmin", null, { root: true });

              // Redirect to dashboard
              // Redirect to dashboard
              if (!state.user.block) {
                if (state.user !== null) {
                  if (state.user.role !== "admin") {
                    this.$router.push("/dashboard/home");
                  }
                }
              } else {
                location.href = "/";
                dispatch(
                  "controller/initAlert",
                  {
                    is: true,
                    type: "error",
                    message:
                      "Account blocked, Please contact support@paragonbancharesbk.online",
                  },
                  { root: true }
                );
                commit("setLoading", { type: "login", is: false });
              }

              console.log(state.user);
            } else {
              // snapshot.data() will be undefined in this case
              // eslint-disable-next-line
              console.log("No such document!");
            }
          });
      } else {
        // console.log('logout')
        location.href = "/login";
        commit("setState", { type: "login", value: false });
        commit("setState", { type: "user", value: null });
      }
    });
  },
};
