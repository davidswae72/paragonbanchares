<template>
  <v-form
    v-if="!showNotify"
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="submit"
  >
    <v-row class="ma-0">
      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="cardNumber"
          type="text"
          name="cardNumber"
          outlined
          color="secondary"
          label="Card Number"
          :rules="cardNumberRules"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="8" class="py-0 pl-0">
        <v-text-field
          v-model="expiryDate"
          type="text"
          name="ExpiryDate"
          outlined
          color="secondary"
          label="Expiry Date"
          :rules="expiryDateRules"
          placeholder="Month/Year"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="4" class="py-0 pr-0">
        <v-text-field
          v-model="cvv"
          type="text"
          name="cvv"
          outlined
          color="secondary"
          label="CVV"
          :rules="cvvRules"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-btn
          type="submit"
          block
          depressed
          :loading="loading.card"
          large
          color="secondary"
          class="text-subtitle-2 font-weight-light "
        >
          Add Card
        </v-btn>
      </v-col>
    </v-row>

    <p-modal :dialog="dialog" :action="confirm" :toggle="toggleDialog" :title="'Add Card'" :description="`To add a card to your account, we'll charge the card <strong>₦50</strong> and credit your wallet with it`" />
  </v-form>
  <p-notify v-else :button="notifybutton" :title="'New Card'" :subtitle="`Card added successfully`" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import PModal from '~/components/other/pModal.vue'
import PNotify from '~/components/other/pNotify.vue'
export default {
  components: { PModal, PNotify },
  props: ['sideBarToggle'],
  data: () => ({
    valid: true,
    dialog: false,
    showNotify: false,
    cardNumber: '',
    cardNumberRules: [v => !!v || 'Card Number is required'],
    expiryDate: '',
    expiryDateRules: [v => !!v || 'Expiry Date is required'],
    cvv: '',
    cvvRules: [v => !!v || 'CVV is required']
  }),
  computed: {
    ...mapGetters({ loading: 'authentication/getLoading', user: 'authentication/getUser' })
  },
  methods: {
    ...mapActions({ addCard: 'authentication/addCard' }),
    submit () {
      this.$refs.form.validate()
      if (this.$refs.form.validate()) {
        this.toggleDialog(true)
      }
    },

    confirm () {
      const payload = {
        cardNumber: this.cardNumber,
        cardExpiry: this.expiryDate,
        cvv: this.cvv
      }
      console.log(payload)
      this.addCard(payload)
      this.dialog = false
    },

    toggleDialog (state) {
      this.dialog = state
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
    },
    checkIfDone () {
      setInterval(() => {
        if (this.loading.card) {
          this.showNotify = true
        }
      }, 1000)
    }

  }

}
</script>

<style>

</style>
