<template>
  <v-card outlined>
    <v-card-text>
      <v-data-table
        :search="search"
        loading-text="Loading... Please wait"
        :loading="loading.loan"
        :headers="headers"
        :items="loans"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title class="text-subtitle-1 d-flex align-center text-uppercase">
              Loans Request
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical />
            <v-chip class="ml-1" color="secondary" label outlined>
              {{ loans && loans.length }}
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
    <loan-action :data="loan" :modal="modal" :toggle="action" />
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import loanAction from './loanAction.vue'
export default {
  components: { loanAction },
  props: {
    user: Object
  },
  data: () => ({
    modal: false,
    loan: {},
    search: '',
    headers: [
      {
        text: 'Amount',
        align: 'start',
        sortable: false,
        value: 'amount'
      },
      {
        text: 'Monthly Payment',
        value: 'monthlyPayment'
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
    loans () {
      const arr = []
      console.log(this.state('loans'))
      this.state('loans').forEach((el) => {
        el.amount = (el.amount).toLocaleString('en-US', {
          style: 'currency',
          code: 'US',
          currency: 'USD'
        })
        el.monthlyPayment = (el.monthlyPayment).toLocaleString('en-US', {
          style: 'currency',
          code: 'US',
          currency: 'USD'
        })
        if (el.userID === this.user.userID) {
          arr.push(el)
        }
      })
      return arr
    }

  },
  methods: {
    action (state, loan) {
      this.loan = loan
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
