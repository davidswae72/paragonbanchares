<template>
  <v-card flat max-width="450" class="rounded-lg px-md-4 py-2">
    <v-card-title
      class="justify-center font-weight-light text-subtitle-1 text-md-h6 my-2"
    >
      <div class="font-weight-medium dark--text text-h5">Forgot Password</div>
      <div class="text-subtitle-1 text1--text my-1 font-weight-light">
        Enter your {{ isPhone ? "Phone Number" : "Email" }} to reset your
        password
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
          <v-col v-if="isPhone" cols="12" class="py-0 mb-n1">
            <v-text-field
              v-model="phoneNumber"
              type="number"
              name="phoneNumber"
              dense
              outlined
              color="primary"
              label="Phone Number"
              :rules="phoneNumberRules"
              class="text-subtitle-2 font-weight-light rounded-md"
            />
          </v-col>
          <v-col v-if="isEmail" cols="12" class="py-0 mb-n1">
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

          <v-col cols="12" class="py-2">
            <v-btn
              type="submit"
              depressed
              block
              color="secondary"
              class="text-subtitle-2 font-weight-normal"
            >
              Next
            </v-btn>
          </v-col>
          <v-col v-if="isPhone" cols="12" class="py-1 mt-2 text-center">
            <div>
              Cant access this phone number?
              <a
                style="text-decoration: underline"
                class="font-weight-bold"
                @click="switchField(false)"
              >
                Click to Use email
              </a>
            </div>
          </v-col>
          <v-col v-else cols="12" class="py-1 mt-2 text-center">
            <div>
              Cant access this email?
              <a
                style="text-decoration: underline"
                class="font-weight-bold"
                @click="switchField(true)"
              >
                Click to Use Phone number
              </a>
            </div>
          </v-col>
          <v-col cols="12" class="py-1 mt-2 text-center">
            <div>
              Back to?
              <nuxt-link to="/login" tag="a" class="font-weight-bold">
                Login
              </nuxt-link>
            </div>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  layout: "welcome",
  props: ["update", "setForm"],
  data: () => ({
    isPhone: true,
    isEmail: false,
    valid: true,
    phoneNumber: "",
    phoneNumberRules: [(v) => !!v || "Phone Number is required"],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
      alert: "authentication/getAlert",
    }),
  },

  methods: {
    ...mapMutations({ setRegistration: "authentication/setRegistration" }),
    ...mapActions({ initAlert: "controller/initAlert" }),
    submit() {
      if (this.isPhone && !this.isEmail) {
        if (this.phoneNumber.trim() !== "") {
          // Update the phoneNumber for password otp
          this.update("phoneNumber", this.phoneNumber);
          this.setForm("Password");
        } else {
          this.initAlert({
            is: true,
            type: "error",
            message: "Phone Number not be empty",
          });
        }
      } else if (this.isEmail && !this.isPhone) {
        if (this.email.trim() !== "") {
          // Update the email for password otp
          this.update("email", this.email);
          this.setForm("Password");
        } else {
          this.initAlert({
            is: true,
            type: "error",
            message: "Email not be empty",
          });
        }
      } else {
        this.initAlert({
          is: true,
          type: "error",
          message: "Field Must not be empty",
        });
      }
    },

    switchField(state) {
      this.isPhone = state;
      this.isEmail = !this.isPhone;
      this.clear();
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
