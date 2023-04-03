<template>
  <v-card flat max-width="450" class="rounded-lg px-md-4 py-2">
    <v-card-title
      class="
        d-flex
        flex-column
        justify-center
        font-weight-light
        text-subtitle-1 text-md-h6
        mt-2
      "
    >
      <div class="font-weight-medium dark--text text-h5">Rest Password</div>
      <div
        class="text-subtitle-1 text1--text text-center my-1 font-weight-light"
      >
        Enter a new password
      </div>
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
              v-model="password"
              :type="show ? 'text' : 'password'"
              name="password"
              dense
              outlined
              color="primary"
              label="New Password"
              :rules="passwordRules"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              class="text-subtitle-2 font-weight-light rounded-md"
              @click:append="show = !show"
            />
          </v-col>
          <v-col cols="12" class="py-0 mb-n1">
            <v-text-field
              v-model="confirmPassword"
              :type="show1 ? 'text' : 'password'"
              name="confirmPassword"
              dense
              outlined
              color="primary"
              label="Confirm Password"
              required
              class="text-subtitle-2 font-weight-light rounded-md"
              :rules="[confirmPasswordRules, passwordConfirmationRule]"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="show1 = !show1"
            />
          </v-col>

          <v-col cols="12" class="py-2">
            <v-btn
              :loading="loading.password"
              type="submit"
              depressed
              block
              color="secondary"
              class="text-subtitle-2 font-weight-normal"
            >
              Next
            </v-btn>
          </v-col>
          <v-col cols="12" class="py-1 mt-2 text-center">
            <div>
              Already have an account?
              <nuxt-link to="/login" tag="a" class="font-weight-bold">
                Login
              </nuxt-link>
            </div>
          </v-col>
          <v-col cols="12" class="py-1 mt-1 text-center">
            <div>
              By signing up, you agree to our
              <nuxt-link to="/login" tag="a" class="font-weight-bold">
                Terms
              </nuxt-link>
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
    show1: false,

    password: "",
    passwordRules: [
      (v) => !!v || "New Password is required",
      (v) =>
        (v && v.length >= 6) ||
        "New Password must be greater than 6 characters",
    ],
    confirmPassword: "",
    confirmPasswordRules: [(v) => !!v || "Confirm Password is required"],
  }),
  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
      passwordDetails: "authentication/getPassword",
    }),
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
  methods: {
    ...mapActions({
      sendOtp: "authentication/sendPasswordOtp",
      initAlert: "controller/initAlert",
    }),
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        if (this.checkPassword(this.password)) {
          this.update("password", this.password);
          this.update("confirm_password", this.confirmPassword);
          this.sendOtp({ phoneNumber: this.passwordDetails.phoneNumber });
        }
      }
    },

    checkPassword(password) {
      const pattern =
        /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*([^\w\s]|[_]))\S{8,}$/;
      if (password.length < 8) {
        this.initAlert({
          is: true,
          type: "error",
          message: "Password must not be less than 8 characters",
        });
        return false;
      } else if (!pattern.test(password)) {
        this.initAlert({
          is: true,
          type: "error",
          message:
            "password must be 8 characters long and contain atleast one lowercase, uppercase, number and special character",
        });
        return false;
      } else {
        return true;
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
  },
};
</script>

<style>
</style>
