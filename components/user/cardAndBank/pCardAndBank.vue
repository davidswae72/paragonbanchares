<template>
  <p-side-bar :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex text3--text flex-column">
        <span> Card & Bank Settings </span>
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
          outline
          :icon="method.icon"
          :title="method.title"
          :action="method.action"
        />
      </v-col>
    </v-row>
    <add-card v-if="display === 'card'" :side-bar-toggle="toggle" />
    <add-bank v-if="display === 'bank'" :side-bar-toggle="toggle" />
  </p-side-bar>
</template>

<script>
import PIconCard from '../../other/pIconCard.vue'
import pSideBar from '../../other/pSideBar.vue'
import AddBank from './addBank.vue'
import AddCard from './addCard.vue'

export default {
  name: 'PFundWallet',
  components: { pSideBar, PIconCard, AddCard, AddBank },
  filter: {
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
    methods () {
      return [
        {
          title: 'Debit/Credit Card',
          description: 'Use your debit card to instantly fund your wallet.',
          icon: 'mdi-credit-card',
          action: () => {
            this.display = 'card'
          }
        },
        {
          title: 'Bank Account',
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
