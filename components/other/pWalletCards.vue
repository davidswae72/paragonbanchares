<template>
  <v-card
    :to="$vuetify.breakpoint.xsOnly ? to : ''"
    :color="color"
    flat
    dark
    min-height="150"
    min-width="260"
    width="300"
    class="curso mx-2 px-4 rounded-lg d-flex align-center"
  >
    <v-icon size="40" left color="white">
      {{ icon }}
    </v-icon>
    <div style="z-index: 2" class="d-flex ml-2 flex-column">
      <div class="light--text text-subtitle-1">
        {{ name }}
      </div>
      <div v-if="!loading">
        <div
          v-if="amount !== 0"
          class="text-h6 text-md-h5 mb-2 font-weight-bold"
        >
          {{ amount | currency }}
        </div>
        <div v-else class="text-h6 text-md-h5 mb-2 font-weight-bold">
          <span>₦0.00</span>
        </div>
      </div>
      <div v-else>
        <v-progress-circular indeterminate size="20" :width="2" color="white" />
      </div>
      <div v-if="$vuetify.breakpoint.smAndUp" class="mb-n3 mt-1">
        <v-btn outlined small color="white" class="mt-1 text-caption" :to="to">
          View
        </v-btn>
      </div>
    </div>
    <p-pattern style="z-index: 1" />
  </v-card>
</template>

<script>
import pPattern from "./pPattern.vue";
export default {
  components: { pPattern },
  filters: {
    currency(val) {
      if (val) {
        val = parseFloat(val);
        return val.toLocaleString("en-NG", {
          style: "currency",
          code: "NG",
          currency: "NGN",
        });
      } else {
      }
    },
  },
  props: {
    name: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    amount: {
      type: Number,
      default: 0,
    },
    iconColor: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "orange",
    },
    to: {
      type: String,
      default: "#",
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
.curso {
  cursor: pointer;
}
</style>
