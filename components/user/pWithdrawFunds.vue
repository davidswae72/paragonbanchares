<template>
  <p-side-bar :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex flex-column">
        <span> Withdraw </span>
        <span class="text-caption">
          Current ttub Balance : <strong>{{ amount | currency }}</strong>
        </span>
      </div>
    </template>
    <v-form>
      <v-row no-gutters class="ma-0 my-2">
        <v-col cols="12" class="px-0 text3--text text-h6">
          Withdraw from Wallet
        </v-col>
        <v-col cols="12" class="px-0 my-2">
          <v-text-field
            v-model="pAmount"
            type="text"
            name="amount"
            outlined
            color="secondary"
            label="Amount"
            :rules="amountRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col cols="12" class="px-0 pb-2 text3--text">
          Select Bank
        </v-col>
        <v-col v-if="isBank" cols="12" class="px-0">
          <v-select
            v-model="bank"
            :items="banks"
            item-text="name"
            item-value="name"
            label="Savings Plan"
            outlined
            class="text-subtitle-2 font-weight-light"
            return-object
            single-line
          />
        </v-col>
        <v-col
          v-if="isBank && bank !== null"
          cols="12"
          class="px-0 mb-4 mt-n2 text3--text"
        >
          <p-icon-card
            rounded
            :img="getBankImg(bank && bank.name)"
            :size="24"
            :styles="'py-4'"
            :pattern="false"
            outline
            :title="'*** **** 0020'"
            :description="bank && bank.name"
          />
        </v-col>
        <v-col
          v-if="!isBank"
          cols="12"
          class="px-0 my-2 text-subtitle-1 text3--text"
        >
          You've not added any bank accounts,
          <a
            style="text-decoration: underline"
            class="accent--text font-weight-medium"
            @click="to('#')"
          >
            click here
          </a>
          to add
        </v-col>
        <v-col v-if="isBank" cols="12" class="px-0">
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
        <v-col cols="12" class="px-0">
          <v-btn
            large
            block
            type="submit"
            depressed
            color="secondary"
            class="text-subtitle-2 font-weight-normal"
          >
            Proceed
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </p-side-bar>
</template>

<script>
import PIconCard from '../other/pIconCard.vue'
import pSideBar from '../other/pSideBar.vue'
export default {
  name: 'PFundWallet',
  components: { pSideBar, PIconCard },
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
    show: false,
    isBank: false,
    bank: null,
    banks: [
      { name: 'Zenith Bank', abbr: 'DS' },
      { name: 'Access Bank Plc', abbr: 'DMI' },
      { name: 'UBA Bank', abbr: 'SS' },
      { name: 'First Bank', abbr: 'FS' }
    ],
    amount: '',
    amountRules: [v => !!v || 'Amount is required'],
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
      console.log(this.amount)
    },
    getBankImg (name) {
      return `/banks/${name}.png`
    },
    to (to) {
      this.$router.push(to)
    }
  }
}
</script>

<style></style>
