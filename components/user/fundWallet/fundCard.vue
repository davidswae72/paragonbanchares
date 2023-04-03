<template>
  <v-form
    v-if="!newCard"
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-row class="ma-0">
      <v-col cols="12" class="px-0 text3--text text-h6">
        Debit / Credit Card
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="pAmount"
          type="text"
          name="amount"
          outlined
          color="secondary"
          label="Amount"
          :rules="amountRules"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="12" class="pa-0 text3--text">
        Select Card
      </v-col>
      <v-col cols="12" class="px-0 text3--text">
        <v-card
          v-for="card in cards"
          :key="card.cardId"
          flat
          @click="submit(card.cardId)"
        >
          <p-icon-card
            rounded
            :icon="'mdi-credit-card'"
            :size="24"
            :styles="'py-4'"
            outline
            :loading="loading.fundWallet"
            :icon-color="'secondary'"
            :title="`*** **** ${card.last4}`"
            :description="card.bank"
          />
        </v-card>
      </v-col>
      <v-col cols="12" class="px-0 text3--text">
        <p-icon-card
          :icon="'mdi-plus'"
          :size="24"
          :styles="'py-4'"
          center
          outline
          :title="'New Card'"
          :action="()=>{newCard = true}"
        />
      </v-col>
    </v-row>
    <v-row />
  </v-form>
  <v-row v-else no-gutters>
    <v-col v-if="newCard" cols="12" class="pa-0">
      <card-form />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PIconCard from '../../other/pIconCard.vue'
import CardForm from '../cardAndBank/cardForm.vue'

export default {
  name: 'FundCard',
  components: { PIconCard, CardForm },
  props: ['sideBarToggle'],
  data: () => ({
    display: 'start',
    showNotify: false,
    newCard: false,
    amount: '',
    amountRules: [v => !!v || 'Amount is required']
  }),
  computed: {
    ...mapGetters({ loading: 'wallet/getLoading', user: 'authentication/getUser' }),
    cards () {
      return this.user && this.user.Cards
    },
    pAmount: {
      get () {
        let val = parseInt(this.amount)
        val = val.toLocaleString()
        if (val === 'NaN') {
          return ''
        } else {
          return `₦${val}`
        }
      },
      set (val) {
        // check if the first Character is ₦ and remove it
        const firstChar = val.charAt(0)
        if (firstChar === '₦') {
          val = val.substring(1)
        }

        // Convert the value to a number
        if (val !== null) {
          val = val.split(',').join('')
          val = parseInt(val)
          this.amount = val
        }
      }
    }
  },
  methods: {
    ...mapActions({ fundWallet: 'wallet/fundWallet' }),
    submit (cardId) {
      if (this.amount !== '') {
        const payload = {
          amount: (this.amount).toString(),
          cardId
        }
        console.log(this.amount)
        this.fundWallet(payload)
        this.checkIfDone()
      }
    },

    checkIfDone () {
      setInterval(() => {
        if (this.loading.fundWallet) {
          this.sideBarToggle(false)
        }
      }, 1000)
    }
  }

}
</script>

<style>

</style>
