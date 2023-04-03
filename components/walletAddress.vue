<template>
  <x-side-bar :loading="loading.wallet" :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex text3--text flex-column">
        <span class="text-h6 d-flex align-center">
          Update Wallet Address
        </span>
      </div>
    </template>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submit"
    >
      <v-row no-gutters class="ma-0 pt-4">
        <v-col cols="12" class="py-0">
          <v-text-field
            v-model="wallet"
            type="text"
            name="wallet"
            dense
            outlined
            color="primary"
            label="Wallet Address"
            required
            class="text-subtitle-2 font-weight-light "
          />
        </v-col>

        <v-col cols="12" class="py-0 d-flex align-center">
          <v-spacer />
          <v-btn
            block
            depressed
            type="submit"
            :loading="loading.wallet"
            tile
            color="primary"
            class="text-capitalize rounded text-subtitle-2 font-weight-regular"
          >
            Update Address
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </x-side-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import xSideBar from './xSideBar.vue'

export default {
  components: { xSideBar },
  props: ['drawer', 'toggle'],
  data: () => ({
    valid: true,
    wallet: '',
    walletRules: [
      v => !!v || 'Wallet Address is required'
    ]

  }),
  computed: {
    ...mapGetters({ loading: 'admin/getLoading' })
  },
  methods: {
    ...mapActions({ updateWalletAddress: 'admin/updateWalletAddress' }),
    submit () {
      this.$refs.form.validate()
      if (this.$refs.form.validate()) {
        this.updateWalletAddress(this.wallet)
        this.clear()
      }
    },
    clear () {
      this.reset()
      this.resetValidation()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }

  }

}
</script>

<style>

</style>
