<template>
  <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
    <v-row v-if="!show" class="ma-0">
      <v-col cols="12" class="pa-0">
        <div class="text-h5 text-md-h4 font-weight-bold">Enter Email</div>
        <p
          class="text-left text-subtitle-2 text-md-subtitle-1 font-weight-light"
        >
          Please enter the email address to register / log in for Trust Tower
          Bank
        </p>
      </v-col>

      <v-col cols="12" class="pa-0 mb-n1">
        <v-text-field
          v-model="email"
          type="email"
          name="email"
          dense
          outlined
          color="primary"
          label="Email"
          :rules="emailRules"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-btn
          :loading="loading.token"
          depressed
          color="accent"
          class="
            text-capitalize
            mx-1
            rounded
            text-subtitle-2
            font-weight-regular
          "
          @click="sendCode"
        >
          Continue
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" class="pa-0">
        <div class="text-h5 text-md-h4 font-weight-bold">
          Email Verification
        </div>
        <p
          class="text-left text-subtitle-2 text-md-subtitle-1 font-weight-light"
        >
          Enter the email verification code sent to <strong>{{ email }}</strong>
        </p>
      </v-col>
      <v-col cols="12" class="pa-0 mt-n1">
        <v-text-field
          v-model="token"
          type="token"
          name="token"
          dense
          outlined
          color="primary"
          label="Verification Code"
          :rules="tokenRules"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="12" class="pa-0 text-left text-subtitle-2 mt-n1 mb-1">
        <div>
          Didn't get code?
          <v-btn
            :loading="loading.token"
            text
            class="
              text-subtitle-2 text-capitalize
              px-0
              font-weight-light
              secondary--text
            "
            @click="generateToken(email)"
          >
            Resend Code
          </v-btn>
        </div>
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-btn
          type="submit"
          depressed
          color="accent"
          class="
            text-capitalize
            mx-1
            rounded
            text-subtitle-2
            font-weight-regular
          "
        >
          Continue
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    valid: true,
    show: false,
    verify: false,
    loadingToken: false,
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    token: "",
    tokenRules: [(v) => !!v || "Verification Code is required"],
  }),
  computed: {
    ...mapGetters({
      state: "authentication/getState",
      loading: "authentication/getLoading",
    }),
  },
  methods: {
    ...mapMutations({
      setState: "authentication/setState",
      setData: "authentication/setData",
    }),
    ...mapActions({
      useToken: "authentication/useToken",
      initAlert: "controller/initAlert",
      generateToken: "authentication/generateToken",
    }),
    sendCode() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.generateToken(this.email);
        this.checkIfDone();
      }
    },
    submit() {
      this.checkToken();
      if (this.verify) {
        this.useToken(this.token);

        const other = {
          email: this.email.trim(),
          token: this.token,
        };

        this.setData({ type: "other", value: other });
        this.setState({ type: "template", value: "other" });
      }
    },
    checkToken() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const tokens = this.state("tokens");
        console.log(tokens);

        const verify = tokens.find((el) => el.code === parseInt(this.token));

        console.log(verify);
        if (verify) {
          if (verify.used) {
            this.verify = false;
            this.initAlert({
              is: true,
              persistence: true,
              type: "error",
              message:
                "Token Code has been used already, Please resend verification code again",
            });
          } else {
            this.verify = true;
          }
        } else {
          this.verify = false;
          this.initAlert({
            is: true,
            persistence: true,
            type: "error",
            message:
              "This Token is not valid, Please resend verification code again",
          });
        }
      }
      console.log(this.verify);
      return this.verify;
    },

    checkIfDone() {
      setInterval(() => {
        if (this.loading.verify) {
          setTimeout(() => {
            this.show = true;
          }, 2000);
        }
      }, 1000);
    },
  },
};
</script>

<style>
</style>
