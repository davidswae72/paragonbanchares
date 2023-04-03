<template>
  <v-form>
    <v-row class="ma-0 my-2">
      <v-col cols="12" class="px-0 text3--text text-h6">
        <div>
          {{ title }}
        </div>
      </v-col>
      <v-col cols="12" class="px-0 d-flex justify-space-between align-center">
        <v-progress-linear color="accent" height="10" :value="value" />
      </v-col>
    </v-row>

    <v-row v-if="display === 'recipient'" class="ma-0">
      <v-col cols="12" class="px-0 py-4 text-subtitle-2 text1--text ">
        <span class="secondary--text mt-1"> <strong> NB</strong> </span><span> Min ₦100 and Max ₦10,000,000</span>
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="pAmount"
          type="text"
          name="amount"
          outlined
          color="primary"
          label="Enter Amount"
          :rules="amountRules"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="recipient"
          type="text"
          name="recipient"
          outlined
          color="primary"
          label="Recipient's Phone Number"
          :rules="recipientRules"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-btn
          large
          block
          depressed
          color="secondary"
          class="text-subtitle-2 font-weight-normal"
          @click="confirmUser"
        >
          Confirm User
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="display === 'amount'" no-gutters class="ma-0">
      <v-col cols="12" class="px-0 py-2 mb-4 text3--text">
        <p-icon-card
          rounded
          :img="'/team/whyte.jpg'"
          :size="24"
          :styles="'py-4'"
          outline
          :title="'Grace Ekuewei'"
          :description="'@graceekuewei'"
        />
      </v-col>

      <v-col cols="12" class="px-0">
        <v-text-field
          v-model="remark"
          type="text"
          name="remark"
          outlined
          color="primary"
          label="Transaction remark"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="password"
          :type="show ? 'text' : 'password'"
          name="password"
          outlined
          color="primary"
          label="Password"
          :rules="passwordRules"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          class="text-subtitle-2 font-weight-light rounded-md"
          @click:append="show = !show"
        />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-row class="ma-0">
          <v-col cols="3" class="py-0 pl-0 pr-1">
            <v-btn
              large
              depressed
              block
              outlined
              color="primary"
              class="text-subtitle-2 font-weight-normal"
              @click="back"
            >
              Back
            </v-btn>
          </v-col>
          <v-col cols="9" class="py-0 pr-0 pl-1">
            <v-btn
              large
              depressed
              block
              color="primary"
              class="text-subtitle-2 font-weight-normal"
              @click="submit"
            >
              Transfer
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-if="display === 'confirm'" class="ma-0">
      <v-col cols="12" class="px-1">
        Confirm
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import pIconCard from '~/components/other/pIconCard.vue'
export default {
  name: 'TransferLogic',
  components: { pIconCard },
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
  data: () => ({
    value: 25,
    show: false,
    title: 'Tranfer to BBMPC user',
    display: 'recipient',
    amount: '',
    amountRules: [v => !!v || 'Amount is required'],
    recipient: '',
    recipientRules: [v => !!v || 'Recipient is required'],
    remark: '',
    password: '',
    passwordRules: [v => !!v || 'Password is required']
  }),
  computed: {
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
  watch: {
    display () {
      const amount = (parseInt(this.amount)).toLocaleString('en-NG', {
        style: 'currency',
        code: 'NG',
        currency: 'NGN'
      })
      const obj = {
        recipient: [33.3, 'Tranfer to BBMPC user'],
        amount: [66.6, `Transfer ${amount} to Grace E.`],
        confirm: [100, 'Transfer Successful']
      }
      this.value = obj[this.display][0]
      this.title = obj[this.display][1]
    }
  },

  methods: {
    submit () {
      const payload = {
        amount: this.amount,
        remark: this.remark,
        password: this.password,
        user: '@graceekuewei'
      }

      console.log(payload)
    },
    confirmUser () {
      console.log('Confirming user')
      this.next()
    },
    next () {
      const obj = {
        recipient: 'amount',
        amount: 'confirm',
        confirm: 'confirm'
      }
      this.display = obj[this.display]
    },
    back () {
      const obj = {
        recipient: 'recipient',
        amount: 'recipient',
        confirm: 'amount'
      }
      this.display = obj[this.display]
    }
  }
}
</script>

<style>

</style>
