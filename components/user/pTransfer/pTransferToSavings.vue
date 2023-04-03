<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="submit"
  >
    <v-row class="ma-0 my-2">
      <v-col cols="12" class="px-0 text3--text text-h6">
        <div>
          Transfer to a savings plan
        </div>
      </v-col>

      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="pAmount"
          type="text"
          name="amount"
          outlined
          color="secondary"
          label="Enter Amount"
          :rules="amountRules"
          class="text-subtitle-2 font-weight-light rounded-md"
        />
      </v-col>
      <v-col cols="12" class="px-0 pt-0 font-weight-medium text3--text">
        Select Savings Plan
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-select
          v-model="plan"
          color="secondary"
          :items="plans"
          item-text="name"
          item-value="name"
          label="Savings Plan"
          outlined
          class="text-subtitle-2 font-weight-light"
          return-object
          single-line
        />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-text-field
          v-model="password"
          :type="show ? 'text' : 'password'"
          name="password"
          outlined
          color="secondary"
          label="Password"
          :rules="passwordRules"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          class="text-subtitle-2 font-weight-light rounded-md"
          @click:append="show = !show"
        />
      </v-col>
      <v-col cols="12" class="pa-0">
        <v-btn
          large
          block
          type="submit"
          depressed
          color="secondary"
          class="text-subtitle-2 font-weight-normal "
        >
          Transfer
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>

export default {
  name: 'TransferLogic',

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
    amount: '',
    valid: true,
    show: false,
    amountRules: [v => !!v || 'Amount is required'],
    plan: null,
    plans: [
      { name: 'Daily Savings', abbr: 'DS' },
      { name: 'DMI', abbr: 'DMI' },
      { name: 'Smart Savings', abbr: 'SS' },
      { name: 'Fixed Savings', abbr: 'FS' }
    ],
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

  methods: {
    submit () {
      const payload = {
        amount: this.amount,
        plan: this.remark,
        password: this.password
      }

      console.log(payload)
    }

  }
}
</script>

<style>

</style>
