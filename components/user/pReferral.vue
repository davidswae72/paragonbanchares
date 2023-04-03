<template>
  <p-side-bar :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex flex-column">
        <span>
          Refer & Earn
        </span>
      </div>
    </template>
    <v-form>
      <v-row no-gutters class="ma-0 my-2">
        <v-col cols="12" class="d-flex align-center px-0 text3--text text-subtitle-1">
          My Referral Earnings
          <v-spacer />

          <span class="secondary--text text-h6">{{ 7000 | currency }}</span>
        </v-col>
        <v-col cols="12">
          <v-card flat class="rounded-lg my-4">
            <v-card-text class="purple text-caption white--text">
              Refer your friends and get rewarded with <strong>₦500.00</strong>  for each friend that signs up and saves using the referral code below. Your friends also get <strong>₦500.00</strong>  when they signup and fund a new savings plan.
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="10" class="mx-auto text-center py-4">
          <div class="text3--text mb-2">
            Referral Code
          </div>
          <p-icon-card :styles="'py-3'" center :icon="'mdi-content-copy'" :title="'BB-934AKLS'" />
        </v-col>
        <v-col cols="12" class="mb-2">
          <span class="text3--text text-body-1 ">Referrals</span>
        </v-col>
        <v-col cols="12" class="py-2">
          <p-icon-card
            outline
            :styles="'py-2'"
            :icon="'mdi-account-multiple-check'"
            :title="'N1,000'"
            :description="'Grace Ekeuwei'"
          />
        </v-col>
        <v-col cols="12" class="py-2">
          <p-icon-card
            outline
            :styles="'py-2'"
            :icon="'mdi-account-multiple-check'"
            :title="'N7,000'"
            :description="'Grace Ekeuwei'"
          />
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
      alert('Clicked')
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

<style>

</style>
