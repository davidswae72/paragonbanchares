<template>
  <p-side-bar :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex flex-column">
        <span> Transfer </span>
        <span class="text-caption">
          Current ttub Balance : <strong>{{ 1000000 | currency }}</strong>
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
      <v-col cols="12" class="px-0 pt-0 text3--text text-subtitle-2">
        You can send funds to another user on BBMPCS or transfer to your savings
        instead.
      </v-col>
      <v-col v-for="(method, i) in methods" :key="i" cols="12" class="px-0">
        <p-icon-card
          outline
          center
          top
          :styles="'py-6'"
          :icon="method.icon"
          :title="method.title"
          :description="method.description"
          :action="method.action"
        />
      </v-col>
    </v-row>
    <p-transfer-to-user v-if="display === 'user'" />
    <p-transfer-to-savings v-if="display === 'savings'" />
  </p-side-bar>
</template>

<script>
import PIconCard from '../../other/pIconCard.vue'
import pSideBar from '../../other/pSideBar.vue'
import PTransferToSavings from './pTransferToSavings.vue'
import PTransferToUser from './pTransferToUser.vue'

export default {
  name: 'PFundWallet',
  components: { pSideBar, PIconCard, PTransferToUser, PTransferToSavings },
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
    display: 'start'
  }),
  computed: {
    methods () {
      return [
        {
          title: 'Tranfer to BBMPCS User',
          description: 'Transfer funds to another bbmpcs user',
          icon: 'mdi-account-arrow-right',
          action: () => {
            this.display = 'user'
          }
        },
        {
          title: 'Transfer to Savings Plan',
          description: 'Transfer funds to any of your savings plan',
          icon: 'mdi-piggy-bank',
          action: () => {
            this.display = 'savings'
          }
        }
      ]
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
