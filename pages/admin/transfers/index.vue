<template>
  <v-card outlined>
    <v-card-text>
      <v-data-table
        :search="search"
        loading-text="Loading... Please wait"
        :loading="loading.loan"
        :headers="headers"
        :items="transfers"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title class="text-subtitle-1 d-flex align-center text-uppercase">
              Transfer Request
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical />
            <v-chip class="ml-1" color="secondary" label outlined>
              {{ transfers && transfers.length }}
            </v-chip>

            <v-spacer />
            <v-text-field
              v-model="search"
              prepend-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
            <!-- <v-spacer></v-spacer>
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Investment</v-btn> -->
          </v-toolbar>
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip small :color="getColor(item.status)" class="text-uppercase">
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-btn
            color="primary"
            depressed
            small
            @click="action( true, item)"
          >
            Action
          </v-btn>
        </template>
      </v-data-table>
    </v-card-text>
    <transfer-action :data="transfer" :modal="modal" :toggle="action" />
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import transferAction from '~/components/admin/transferAction.vue'

export default {
  components: { transferAction },
  layout: 'admin',

  data: () => ({
    modal: false,
    transfer: {},
    search: '',
    headers: [
      {
        text: 'Amount',
        align: 'start',
        sortable: false,
        value: 'amount'
      },

      {
        text: 'Acc Number',
        value: 'accNumber'
      },
      {
        text: 'Username',
        value: 'username'
      },
      {
        text: 'Remote Pin',
        value: 'remotePin'
      },
      {
        text: 'Beneficiary',
        value: 'fullName'
      },
      {
        text: 'Country',
        value: 'country'
      },
      {
        text: 'IBAN',
        value: 'iban'
      },
      {
        text: 'Date',
        value: 'date'
      },
      {
        text: 'Status',
        value: 'status'
      },
      {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }
    ]
  }),
  computed: {
    ...mapGetters({ loading: 'admin/getLoading', state: 'admin/getState' }),
    transfers () {
      const arr = []
      console.log(this.state('transfers'))
      this.state('transfers').forEach((el) => {
        el.amount = (el.amount).toLocaleString('en-US', {
          style: 'currency',
          code: 'US',
          currency: 'USD'
        })
        el.accNumber = el.sender.accNumber
        el.username = el.sender.username
        el.remotePin = el.sender.remotePin

        el.fullName = `${el.beneficiary.firstName} ${el.beneficiary.lastName}`
        el.country = el.beneficiary.country
        el.bank = el.beneficiary.bank
        el.iban = el.beneficiary.iban
        arr.push(el)
      })
      return arr
    }

  },
  methods: {
    action (state, transfer) {
      this.transfer = transfer
      this.modal = state
    },

    getColor (type) {
      if (type && type.toLowerCase() === 'fail') {
        return 'error'
      } else if ((type && type.toLowerCase() === 'success') || (type && type.toLowerCase() === 'success')) {
        return 'success'
      } else if (type && type.toLowerCase() === 'pending') {
        return 'secondary'
      } else {
        return type
      }
    }
  }

}
</script>

<style>

</style>
