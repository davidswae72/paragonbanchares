<template>
  <p-side-bar :loading="loading.fundWallet" :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex text3--text flex-column">
        <span> Fund Wallet </span>
        <span class="text-caption">
          Current ttub Balance : <strong>{{ amount | currency }}</strong>
        </span>
      </div>
    </template>

    <v-btn
      v-if="display !== 'start'"
      text
      color="secondary"
      class="pa-0 text-body-2"
      @click="display = 'start'"
    >
      <v-icon left>
        mdi-arrow-left
      </v-icon>
      Back
    </v-btn>
    <v-row v-if="display === 'start'" class="ma-0 my-2">
      <v-col cols="12" class="pa-0 text3--text text-h6">
        How do you want to fund?
      </v-col>
      <v-col v-for="(method, i) in methods" :key="i" cols="12" class="px-0">
        <p-icon-card
          center
          top
          outline
          :styles="'py-6'"
          :icon="method.icon"
          :title="method.title"
          :description="method.description"
          :action="method.action"
        />
      </v-col>
    </v-row>
    <fund-card v-if="display === 'card'" :side-bar-toggle="toggle" />

    <v-row v-if="display === 'bank'" class="ma-0">
      <v-col cols="12" class="px-0 text3--text text-h6">
        Bank Transfer
      </v-col>
      <v-col cols="12" class="pa-0 text3--text">
        Transfer fund to the account details below
      </v-col>
      <v-col cols="12" class="px-0 text3--text">
        <p-account
          :acc-name="'Peter Emmanuel Whyte'"
          :bank="'Wema Bank'"
          :acc-number="7820765461"
        />
      </v-col>
    </v-row>
  </p-side-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import PIconCard from '../../other/pIconCard.vue'
import pSideBar from '../../other/pSideBar.vue'
import PAccount from '../pAccount.vue'
import FundCard from './fundCard.vue'
export default {
  name: 'PFundWallet',
  components: { pSideBar, PIconCard, PAccount, FundCard },
  filters: {
    currency (val) {
      if (val) {
        val = parseFloat(val)
        return val.toLocaleString('en-NG', {
          style: 'currency',
          code: 'NG',
          currency: 'NGN'
        })
      } else {
      }
    }
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    },
    toggle: Function
  },
  data: () => ({
    display: 'start',
    amount: '',
    amountRules: [v => !!v || 'Amount is required']
  }),
  computed: {
    ...mapGetters({
      user: 'authentication/getUser',
      loading: 'wallet/getLoading'
    }),
    cards () {
      return this.user && this.user.Cards
    },
    methods () {
      return [
        {
          title: 'Debit / Credit Card',
          description: 'Use your debit card to instantly fund your wallet.',
          icon: 'mdi-credit-card',
          action: () => {
            this.display = 'card'
          }
        },
        {
          title: 'Bank Transfer',
          description:
            'Transfer funds into your ttub Account Number to fund your wallet.',
          icon: 'mdi-bank',
          action: () => {
            this.display = 'bank'
          }
        }
      ]
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
  mounted () {},
  methods: {
    submit () {
      console.log(this.amount)
    },
    getBankImg (name) {
      return `/banks/${name}.png`
    }
  }
}
</script>

<style></style>
