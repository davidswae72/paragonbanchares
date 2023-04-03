<template>
  <v-col v-if="!loading.all" style="z-index: 3" cols="12" class="pa-0 pLoading">
    <v-row no-gutters class="ma-0">
      <v-col cols="4" style="padding: 2px 0" class="primary" />
      <v-col cols="4" style="padding: 2px 0" class="dark" />
      <v-col cols="4" style="padding: 2px 0" class="accent" />
    </v-row>
  </v-col>
  <v-col v-else cols="12" class="pa-0 pLoading">
    <v-row no-gutters class="ma-0">
      <v-col cols="4">
        <v-progress-linear color="priamry" indeterminate />
      </v-col>
      <v-col cols="4">
        <v-progress-linear color="dark" indeterminate />
      </v-col>
      <v-col cols="4">
        <v-progress-linear color="accent" indeterminate />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PLoading",
  props: {
    color: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    ...mapGetters({ loading: "authentication/getLoading" }),
  },
};
</script>

<style>
.pLoading {
  position: fixed;
  top: 0;
  left: 0;
}
</style>
