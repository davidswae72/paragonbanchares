<template>
  <v-card flat max-width="450" class="rounded-lg px-md-4 py-2">
    <v-card-title
      class="
        d-flex
        flex-column
        justify-center
        font-weight-light
        text-subtitle-1 text-md-h6
        my-2
      "
    >
      <div class="dark--text font-weight-medium text-h5">
        Verify Phone Number
      </div>
      <div
        class="text-subtitle-1 text1--text text-center my-1 font-weight-light"
      >
        OTP has been sent to
        <span class="font-weight-bold">{{
          password && password.phoneNumber | hideNumber
        }}</span>
      </div>
    </v-card-title>
    <v-card-text class="px-sm-6">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-row justify="center">
          <!-- <v-col cols="2" class="py-0 mb-n1">
            <v-text-field
              v-model="otp"
              type="text"
              name="otp"
              dense
              outlined
              color="primary"

              :rules="otpRules"
              class="text-subtitle-2 text-center font-weight-light rounded-md"
            />
          </v-col>
          <v-col cols="2" class="py-0 mb-n1">
            <v-text-field

              type="text"
              name="otp"
              dense
              outlined
              color="primary"

              :rules="otpRules"
              class="text-subtitle-2 text-center font-weight-light rounded-md"
            />
          </v-col>
          <v-col cols="2" class="py-0 mb-n1">
            <v-text-field

              type="text"
              name="otp"
              dense
              outlined
              color="primary"

              :rules="otpRules"
              class="text-subtitle-2 text-center font-weight-light rounded-md"
            />
          </v-col>
          <v-col cols="2" class="py-0 mb-n1">
            <v-text-field

              type="text"
              name="otp"
              dense
              outlined
              color="primary"
              :rules="otpRules"
              class="text-subtitle-2 text-center font-weight-light rounded-md"
            />
          </v-col>
          <v-col cols="2" class="py-0 mb-n1">
            <v-text-field

              type="text"
              name="otp"
              dense
              outlined
              color="primary"
              :rules="otpRules"
              class="text-subtitle-2 text-center font-weight-light rounded-md"
            />
          </v-col> -->
          <v-col cols="12" class="py-1 my-2 d-flex justify-center">
            <vue-otp-box
              :number-of-boxes="6"
              color="#52BA00"
              position="center"
              @inputValue="inputValue"
            />
          </v-col>
          <v-col cols="12" class="py-1 my-2 d-flex justify-space-between">
            <div class="">
              <span>Not me</span>
              <a
                style="text-decoration: underline"
                class="font-weight-bold"
                @click="setForm('Start')"
              >
                (Change number)
              </a>
            </div>
            <div class="">
              <a
                style="text-decoration: underline"
                class="font-weight-bold"
                @click="resendOtp"
              >
                Resend OTP
                <v-circular-progress intermediate color="secondary" />
              </a>
            </div>
          </v-col>
          <v-col cols="12" class="py-2">
            <v-btn
              type="submit"
              :loading="loading.password"
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
import VueOtpBox from "vue-otp-box";
import "vue-otp-box/dist/VueOtpBox.css";

export default {
  name: "Otp",
  filters: {
    hideNumber(val) {
      const first3 = val && val.slice(0, 4);
      const last4 = val && val.slice(-3);
      return `${first3} **** ${last4}`;
    },
  },
  components: {
    VueOtpBox,
  },
  props: ["update", "phoneNumber", "setForm"],
  data: () => ({
    valid: true,
    otp: "",
    otpRules: [(v) => !!v || ""],
  }),
  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
      password: "authentication/getPassword",
    }),
  },
  methods: {
    ...mapActions({
      resetPassword: "authentication/resetPassword",
      sendOtp: "authentication/sendPasswordOtp",
    }),
    inputValue(otp) {
      this.otp = otp;
    },
    submit() {
      this.$refs.form.validate();
      if (this.otp !== "") {
        this.resetPassword(this.otp);
      }
    },

    resendOtp() {
      this.sendOtp({
        phoneNumber: this.password.phoneNumber,
      });
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
