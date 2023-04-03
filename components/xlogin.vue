<template>
  <v-card
    flat
    max-width="400"
    color="transparent"
    class="mx-auto rounded-lg px-md-4 py-4"
  >
    <v-card-title
      class="
        flex-column
        justify-center
        font-weight-light
        text-subtitle-1 text-md-h6
        my-2
      "
    >
      <v-btn
        height="80"
        text
        x-large
        to="/"
        class="text-upptercase font-weight-bold ml-n6 mb-n4 pa-0"
      >
        <v-img max-width="200" src="/logo/gold2.svg" />
      </v-btn>
      <div class="text-button mb-n2 mt-4 white--text">Account Login</div>
    </v-card-title>
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-row no-gutters>
          <v-col cols="12" class="py-0 mb-n1">
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
          <v-col cols="12" class="py-0 mb-n1">
            <v-text-field
              v-model="password"
              :type="show ? 'text' : 'password'"
              name="password"
              dense
              outlined
              color="primary"
              label="Password"
              :rules="passwordRules"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              class="text-subtitle-2 font-weight-light rounded-md"
              @click:append="show = !show"
            />
          </v-col>
          <v-col cols="12" class="py-0 mb-2 text-center">
            <div>
              <nuxt-link
                to="/password/reset"
                tag="a"
                class="font-weight-medium accent--text"
              >
                Forgot Password
              </nuxt-link>
            </div>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              tile
              large
              type="submit"
              depressed
              block
              :loading="loading.login"
              class="bg-gradient white--text text-subtitle-2 font-weight-normal"
            >
              Sign in
            </v-btn>
          </v-col>
          <v-col cols="12" class="dark--text py-1 mt-2 text-center">
            <div>
              New to <strong>Paragon Banchares Bank?</strong>
              <nuxt-link
                to="/register"
                tag="a"
                class="font-weight-medium accent--text"
              >
                Register
              </nuxt-link>
            </div>
          </v-col>
          <v-col cols="12" class="mt-2">
            <div class="text-caption secondary--text">
              <u> Before you login, please remember: </u><br />
              <strong> Paragon Banchares Bank </strong> will not ask you for your
              online access and private information Don't let anyone know your
              security details
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Personal",
  props: ["update", "setForm"],
  data: () => ({
    valid: true,
    show: false,
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
    ],
  }),
  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
    }),
  },
  methods: {
    ...mapActions({ loginUser: "authentication/loginUser" }),

    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const payload = {
          email: this.email.trim(),
          password: this.password,
          date: this.getDate("current"),
        };
        console.log(payload);
        this.loginUser(payload);
      }
    },

    clear() {
      this.reset();
      this.resetValidation();
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getDate(get, days) {
      const currentDate = new Date();
      let newDate;

      function addDays(days) {
        const result = new Date(currentDate);
        result.setDate(result.getDate() + days);
        return formatDate(result);
      }

      function formatDate(date) {
        const hours = date.getHours() % 12 || 12;
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}-${hours}:${date.getMinutes()}`;
      }

      if (get === "add") {
        newDate = addDays(days);
      } else if (get === "current") {
        newDate = formatDate(currentDate);
      }
      return newDate;
    },
  },
};
</script>

<style>
</style>
