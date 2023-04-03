<template>
  <p-side-bar :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex flex-column">
        <span>
          Security Settings
        </span>
      </div>
    </template>

    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submit"
    >
      <v-row no-gutters>
        <v-col cols="12" class="pa-0 text3--text text-h6 mb-4">
          <div>
            Change Password
          </div>

          <div class="text-caption text-sm-body-2 text1--text">
            Change your BBMPCS password using the form below.
          </div>
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="oldPassword"
            :type="show2 ? 'text' : 'password'"
            name="oldPassword"

            outlined
            color="secondary"
            label="New Password"
            :rules="oldPasswordRules"
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            class="text-subtitle-2 font-weight-light rounded-md"
            @click:append="show = !show"
          />
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="password"
            :type="show ? 'text' : 'password'"
            name="password"

            outlined
            color="secondary"
            label="New Password"
            :rules="passwordRules"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            class="text-subtitle-2 font-weight-light rounded-md"
            @click:append="show = !show"
          />
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="confirmPassword"
            :type="show1 ? 'text' : 'password'"
            name="confirmPassword"

            outlined
            color="secondary"
            label="Confirm Password"
            required
            class="text-subtitle-2 font-weight-light rounded-md"
            :rules="[confirmPasswordRules, passwordConfirmationRule]"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
          />
        </v-col>

        <v-col cols="12" class="pa-0">
          <v-btn
            :loading="loading.password"
            type="submit"
            depressed
            block
            large
            color="secondary"
            class="text-subtitle-2 font-weight-normal "
          >
            Update Password
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </p-side-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import pSideBar from './pSideBar.vue'
export default {
  name: 'PFundWallet',
  components: { pSideBar },
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
    valid: true,
    show: false,
    show1: false,
    show2: false,

    oldPassword: '',
    oldPasswordRules: [
      v => !!v || 'Old Password is required'
    ],
    password: '',
    passwordRules: [
      v => !!v || 'New Password is required',
      v => (v && v.length >= 6) || 'New Password must be greater than 6 characters'
    ],
    confirmPassword: '',
    confirmPasswordRules: [
      v => !!v || 'Confirm Password is required'
    ]

  }),
  computed: {
    ...mapGetters({
      loading: 'authentication/getLoading'
    }),
    passwordConfirmationRule () {
      return () => (this.password === this.confirmPassword) || 'Password must match'
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

<style>

</style>
