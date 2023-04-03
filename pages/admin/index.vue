<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" no-gutters class="ma-0">
      <v-col cols="12">
        <v-card dark flat tile color="primary">
          <p-pattern />
          <v-card-text class="text-center">
            <div>
              <span class="text-subtitle-1 white--text">Total Revenue</span>
            </div>
            <div v-if="user && user.account.accBalance !== 0" class="text-h6 text-sm-h4 font-weight-bold white--text my-1">
              {{ user && user.account.accBalance | currency }}
            </div>
            <div v-else class="text-h6 text-sm-h4 font-weight-bold white--text my-1">
              $0.00
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        v-for="(wallet, i) in wallets"
        :key="i"
        cols="12"
        sm="6"
        md="3"
        class="pb-0"
      >
        <x-wallet-card :type="wallet.type" :icon="wallet.icon" :title="wallet.title" :amount="wallet.amount" :number="wallet.number" />
      </v-col>
      <v-col cols="12" class="my-2" />
      <x-transaction />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import XTransaction from '~/components/other/xTransaction.vue'
import xWalletCard from '~/components/other/xWalletCard.vue'
export default {
  name: 'Admin',
  components: { xWalletCard, XTransaction },
  layout: 'admin',
  data: () => ({}),
  computed: {
    ...mapGetters({ state: 'admin/getState' }),
    wallets () {
      return [
        {
          title: 'Total Users',
          type: 'number',
          number: this.state('users') && this.state('users').length
        },
        {
          title: 'Deposit Request',
          type: 'number',
          number: this.state('deposits') && this.state('deposits').length
        },
        {
          title: 'Fund Transfer Request',
          type: 'number',
          number: this.state('transfers') && this.state('transfers').length
        },
        {
          title: 'Loan Request',
          type: 'number',
          number: this.state('loans') && this.state('loans').length
        }
      ]
    }
  },
  methods: {}

}
</script>

<style>

</style>
