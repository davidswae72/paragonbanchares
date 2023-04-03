<template>
  <p-side-bar :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex flex-column">
        <span>
          Profile Details
        </span>
      </div>
    </template>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submit"
    >
      <v-row no-gutters class="ma-0 my-2">
        <v-col cols="12" class="px-0 mb-2 text3--text text-h6">
          Edit Profile
        </v-col>
        <v-col cols="12" class=" py-4 d-flex align-center">
          <v-avatar style="border:2px solid #dddd" size="90">
            <v-img src="/logo/default.png" />
          </v-avatar>

          <span style="cursor:pointer" class="ml-2">Tab to change</span>
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="firstName"
            type="text"
            name="firstName"
            outlined
            color="secondary"
            label="FirstName"
            :rules="firstNameRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="lastName"
            type="text"
            name="lastName"
            outlined
            color="secondary"
            label="Last Name"
            :rules="lastNameRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="email"
            type="text"
            name="email"
            outlined
            color="secondary"
            label="Email"
            :rules="emailRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col cols="12" class="pa-0">
          <v-text-field
            v-model="phoneNumber"
            type="text"
            name="phoneNumber"
            outlined
            color="secondary"
            label="Phone Number"
            :rules="phoneNumberRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>

        <v-col cols="12" class="pa-0">
          <v-btn
            large
            block
            type="submit"
            :loading="loading.profile"
            depressed
            color="secondary"
            class="text-subtitle-2 font-weight-normal "
          >
            Update Profile
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </p-side-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import pSideBar from '../other/pSideBar.vue'
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
    profilePic: '',
    firstName: '',
    firstNameRules: [v => !!v || 'First Name is required'],
    lastName: '',
    lastNameRules: [v => !!v || 'Last Name is required'],
    phoneNumber: '',
    phoneNumberRules: [v => !!v || 'Phone Number is required'],
    email: '',
    emailRules: [
      v => !!v || 'Email is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]

  }),
  computed: {
    ...mapGetters({ user: 'authentication/getUser', loading: 'controller/getLoading' }),
    pFirstName: {
      get () {
        return this.user && this.user.firstName
      },
      set (val) {

      }
    }
  },

  methods: {
    submit () {
      this.$refs.form.validate()
      if (this.$refs.form.validate()) {
        console.log({
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          phontNumber: this.phontNumber,
          profilePic: this.email
        })
      }
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
