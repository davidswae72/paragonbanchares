<template>
  <v-card
    flat
    min-width="250"
    class=""
    style="overflow: hidden; border: 1px solid #01579b"
  >
    <p-pattern />
    <v-progress-linear v-if="loading" indeterminate color="primary" />
    <v-col v-else cols="12" style="padding: 1px 0" class="primary" />
    <v-card-text class="d-flex align-center text-subtitle-1 text2--text py-1">
      <v-icon v-if="icon" size="30" color="secondary" left>
        {{ icon }}
      </v-icon>
      <div style="width: 100%" class="ml-2">
        <div class="font-weight-medium text-subtitle-1">
          {{ title }}
        </div>
        <div
          class="dark--text text-subtitle-2 text-sm-h6 font-weight-medium mt-n1"
        >
          <div v-if="type === 'amount'">
            <span v-if="amount !== 0">{{ amount | currency }}</span>
            <span v-else>$0.00</span>
          </div>
          <span v-if="type === 'text'"> {{ text.toLocaleString() }}</span>
          <span v-if="type === 'number'"> {{ number }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  filters: {
    currency(val) {
      if (val) {
        val = parseInt(val);
        return val.toLocaleString("en-US", {
          style: "currency",
          code: "US",
          currency: "USD",
        });
      } else {
      }
    },
  },
  props: {
    title: String,
    type: String,
    loading: Boolean,
    icon: String,
    amount: [String, Number],
    number: [String, Number],
    text: [String, Number],
  },
};
</script>

<style>
</style>
