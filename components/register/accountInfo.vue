<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="pb-2"
    @submit.prevent="submit"
  >
    <v-row no-gutters class="py-4">
      <v-col cols="6" class="py-0">
        <v-select
          v-model="accType"
          name="accType"
          dense
          color="primary"
          :items="[
            'Checking Account',
            'Savings Account',
            'Fixed Deposit Account',
            'Premium First Finance Account',
          ]"
          outlined
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          :rules="[(v) => !!v || 'Account Type is required']"
          label="Account Type"
          required
        />
      </v-col>
      <v-col cols="6" class="py-0">
        <v-select
          v-model="currency"
          name="currency"
          dense
          color="primary"
          :items="currencies"
          item-text="name"
          return-object
          outlined
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          :rules="[(v) => !!v || 'Currency is required']"
          label="Currency"
          required
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-textarea
          v-model="accDescription"
          name="accDescription"
          type="text"
          dense
          outlined
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          rows="2"
          color="primary"
          label="Account Description"
        />
      </v-col>

      <v-col cols="12" class="py-0">
        <v-btn
          depressed
          tile
          type="submit"
          :loading="loading.register"
          class="
            text-capitalize
            mx-1
            bg-gradient
            white--text
            text-subtitle-2
            font-weight-regular
          "
        >
          Create Account
        </v-btn>
        <v-btn
          class="
            text-capitalize
            mx-1
            rounded
            text-subtitle-2
            font-weight-regular
          "
          text
          @click="switchStep(1)"
        >
          Back
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "PersonalDetails",
  props: ["switchStep"],
  data: () => ({
    valid: true,
    accType: "",
    accDescription: "",
    currency: {},
  }),
  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
      state: "authentication/getState",
    }),
    currencies() {
      return this.state("currencies");
    },
  },
  methods: {
    ...mapMutations({ setData: "authentication/setData" }),
    ...mapActions({ register: "authentication/register" }),
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const account = {
          accType: this.accType,
          accDescription: this.accDescription,
          currency: this.currency.name,
          symbol: this.currency.symbol,
        };
        this.setData({ type: "account", value: account });
        this.register();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
</style>
