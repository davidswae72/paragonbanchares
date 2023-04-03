<template>
  <v-row v-if="!showNotify" class="ma-0">
    <v-col cols="12" class="px-0 text3--text text-h6">
      <div> {{ !newBank ? 'Manage Banks' : 'Add New Bank' }}</div>

      <div v-if="!newBank" class="text-caption text-sm-body-2 mt-2 text1--text">
        This is where funds you have on BBMPCS will be sent to when you initiate a withdrawal. Funds are sent instantly.
      </div>
    </v-col>
    <v-col v-if="!newBank" cols="12" class="pa-0">
      <p-scroll>
        <p-bank

          v-for="myBank in myBanks"
          :id="myBank.bankId"
          :key="myBank.bankId"
          :name="myBank.bankName"
          :acc-number="myBank.bankAccount"
          :default-bank="myBanks && myBanks.length === 1"
        />
      </p-scroll>
    </v-col>
    <v-col v-if="!newBank" cols="12" :class="myBanks && !myBanks.length === 0 ? 'mt-n10' : 'mt-n4'">
      <p-icon-card :action="()=>{newBank = true}" center outline :icon="'mdi-plus'" :title="'New Bank'" />
    </v-col>
    <v-col v-if="newBank" cols="12" class="pa-0 ">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submit"
      >
        <v-row class="ma-0">
          <v-col cols="12" class="pa-0">
            <v-text-field
              v-model="accountNumber"
              type="text"
              name="accountNumber"
              outlined
              color="secondary"
              label="Account Number"
              :rules="accountNumberRules"
              class="text-subtitle-2 font-weight-light rounded-md"
              @change="clearResolve"
              @keyup="clearResolve"
            />
          </v-col>
          <v-col cols="12" class="pa-0 ">
            <v-autocomplete
              v-model="bank"
              :items="banks"
              item-text="name"
              outlined
              color="secondary"
              label="Bank"
              required
              :rules="[(v) => !!v || 'Bank is required']"
              @change="clearResolve"
            />
          </v-col>
          <v-col v-if="resolved" cols="12" class="pa-0">
            <v-text-field
              v-model="accountName"
              disabled
              type="text"
              name="accountName"
              outlined
              color="secondary"
              label="Account Name"
              class="text-subtitle-2 font-weight-light rounded-md"
            />
          </v-col>
          <v-col v-if="!resolved" cols="12" class="pa-0">
            <v-btn
              block
              depressed
              :loading="resolving"
              large
              color="secondary"
              class="text-subtitle-2 font-weight-light "
              @click="resolveBank"
            >
              Resolve Account Number
            </v-btn>
          </v-col>
          <v-col v-else cols="12" class="pa-0">
            <v-btn
              type="submit"
              block
              depressed
              large
              :loading="loading.bank"
              color="secondary"
              class="text-subtitle-2 font-weight-light "
            >
              Add Bank
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-col>
  </v-row>
  <v-row v-else>
    <p-notify :button="notifybutton" :title="'New Bank'" :subtitle="`Bank added successfully`" />
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PBank from './pBank.vue'
import pIconCard from '~/components/other/pIconCard.vue'
import PScroll from '~/components/other/pScroll.vue'
import PNotify from '~/components/other/pNotify.vue'
export default {
  components: { pIconCard, PScroll, PBank, PNotify },
  props: ['sideBarToggle'],
  data: () => ({
    valid: true,
    newBank: false,
    showNotify: false,
    resolved: false,
    resolving: false,
    accountNumber: '',
    accountNumberRules: [v => !!v || 'Account Number is required'],
    bank: '',
    accountName: null
  }),

  computed: {
    ...mapGetters({ user: 'authentication/getUser', loading: 'authentication/getLoading', banks: 'controller/getBanks', getBankCode: 'controller/getBankCode' }),
    myBanks () {
      return this.user && this.user.Banks
    },
    notifybutton () {
      return {
        is: true,
        text: 'Done',
        action: () => {
          this.sideBarToggle(false)
        }
      }
    }
  },
  methods: {
    ...mapActions({ initAlert: 'controller/initAlert', addBank: 'authentication/addBank' }),
    submit () {
      console.log(this.banks)
      this.$refs.form.validate()
      if (this.$refs.form.validate()) {
        const payload = {
          bankName: this.bank,
          bankAccount: this.accountNumber
        }
        console.log(payload)
        this.addBank(payload)
        this.checkIfDone()
      }
    },

    async resolveBank () {
      this.resolving = true
      try {
        const bankCode = this.getBankCode(this.bank)
        const config = {
          headers: {
            Authorization: 'Bearer sk_test_ef83939a7d5eea21c2e5b53522c692cff16cb023'
          }
        }

        const { data } = await this.$axios.get(`https://api.paystack.co//bank/resolve?account_number=${this.accountNumber}&bank_code=${bankCode}`, config)
        this.accountName = data.data.account_name
        this.initAlert({ is: true, type: 'success', message: data.message })
        this.resolving = false
        this.resolved = true
      } catch (error) {
        this.initAlert({ is: true, type: 'error', message: 'Could not resolve account name. Check details or try again' })
        this.resolving = false
      }
    },

    clearResolve () {
      this.resolved = false
      this.accountName = ''
    },
    checkIfDone () {
      setInterval(() => {
        if (this.loading.bank) {
          this.showNotify = true
        }
      }, 1000)
    }

  }

}
</script>

<style>

</style>
