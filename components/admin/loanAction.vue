<template>
  <v-dialog
    v-model="modal"
    persistent
  >
    <v-card :loading="loading.deposit" flat max-width="300" class="mx-auto">
      <v-card-title class="text-subtitle-1 font-weight-medium text-uppercase">
        Action
        <v-spacer />
        <v-btn small outlined icon @click="toggle(false, {})">
          <v-icon size="20">
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="">
        <v-row class="ma-0">
          <v-col cols="12" class="text-subtitle-1 px-0 font-weight-medium">
            <div>Loan request of {{ data && data.amount }}</div>
          </v-col>
          <v-col cols="12" class="py-0 mb-n1 px-sm-1">
            <v-textarea
              v-model="message"
              name="message"
              type="text"
              dense
              rows="2"
              outlined
              class="text-subtitle-2 font-weight-light rounded-md"
              color="primary"
              label="Message"
              required
            />
          </v-col>
          <v-col cols="6" class="px-1">
            <v-btn
              depressed
              block
              color="error"
              class="text-capitalize rounded text-subtitle-2 font-weight-regular ma-0"
              @click="update('fail')"
            >
              Decline
            </v-btn>
          </v-col>
          <v-col cols="6" class="px-1">
            <v-btn
              depressed
              block
              color="success"
              class="text-capitalize rounded text-subtitle-2 font-weight-regular ma-0"
              @click="update('success')"
            >
              Approve
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  props: {
    data: Object,
    modal: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function
    }
  },
  data: () => ({
    size: 70,
    message: ''

  }),
  computed: {
    ...mapGetters({ loading: 'admin/getLoading' })

  },
  methods: {
    ...mapActions({ initAlert: 'controller/initAlert', updateLoan: 'admin/updateTransactions' }),
    update (status) {
      if (this.message === '') {
        this.initAlert({
          is: true,
          type: 'error',
          message: 'Message must not be empty'
        })
      } else {
        const payload = {
          ID: this.data.loanID,
          transactionID: this.data.transactionID,
          status,
          message: this.message,
          type: 'loans',
          userID: this.data.userID
        }

        this.updateLoan(payload)
        this.checkIfDone()
      }
    },
    checkIfDone () {
      setInterval(() => {
        if (!this.loading.loan) {
          setTimeout(() => {
            this.message = ''
            this.toggle(false, {})
            window.location.reload()
          }, 2000)
        }
      }, 1000)
    }

  }

}
</script>

<style>

</style>
