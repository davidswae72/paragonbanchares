<template>
  <v-row v-if="!show" class="ma-0 py-10 text2--text px-0 px-md-6">
    <v-col cols="12" class="text-center pa-0">
      <div class="text-h5 text-md-h4 font-weight-bold">Open an Account</div>
      <div class="text-h6 text-md-h5 font-weight-light accent--text mt-2">
        In 5 easy steps
      </div>
      <div class="text-left text-subtitle-1 text-sm-h6 font-weight-light mt-4">
        Banking Onboarding is the
        <span class="font-weight-bold">first step</span> to become a
        <span class="font-weight-bold">Paragon Banchares Bank client</span>. Onboard
        now and get access to the most comprehensive banking service offered.
      </div>
      <p
        class="
          text-left text-subtitle-2 text-md-subtitle-1 text-md-h6
          font-weight-bold
          my-3
        "
      >
        What you need:
      </p>
      <div
        class="
          d-flex
          text-left
          align-center
          text-subtitle-2 text-md-subtitle-1 text-md-h6
          font-weight-light
        "
      >
        <v-icon color="accent" left> mdi-alert-circle-check </v-icon>
        <span class="ml-1">Smartphone with a camera and an identity card</span>
      </div>
      <div
        class="
          d-flex
          text-left
          align-center
          text-subtitle-2 text-md-subtitle-1 text-md-h6
          font-weight-light
        "
      >
        <v-icon color="accent" left> mdi-alert-circle-check </v-icon>
        <span class="ml-1">Third party cookies enabled in your browser</span>
      </div>
      <div
        class="
          d-flex
          text-left
          align-center
          text-subtitle-2 text-md-subtitle-1 text-md-h6
          font-weight-light
        "
      >
        <v-icon color="accent" left> mdi-alert-circle-check </v-icon>
        <span class="ml-1"
          >Your ID or Passport ready for the identity verification</span
        >
      </div>
      <p class="text-left text-subtitle-1 text-sm-h6 font-weight-light mt-4">
        Be assured that no transaction takes place during the onboarding
        process, and clients do not make any financial obligation.
      </p>
      <p class="text-left text-subtitle-1 text-sm-h6 font-weight-light mt-4">
        Please don't hesitate to contact us directly if you still have open
        questions.
      </p>
    </v-col>
    <v-col cols="12" @click="show = true">
      <v-btn
        depressed
        tile
        color="accent"
        class="text-capitalize mx-1 text-subtitle-2 font-weight-regular"
      >
        Continue
      </v-btn>
    </v-col>
  </v-row>
  <v-row v-else class="ma-0 py-10 text2--text px-0 px-md-6">
    <component :is="component" :switch-step="switchStep" />
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";
import emailVerification from "./emailVerification.vue";
import Other from "./other.vue";
export default {
  name: "Registration",
  components: { emailVerification, Other },
  props: ["switchStep"],
  data: () => ({
    valid: true,
    show: false,
  }),
  computed: {
    ...mapGetters({ state: "authentication/getState" }),
    component() {
      return this.state("template");
    },
  },
  methods: {
    sendCode() {},
  },
};
</script>

<style>
</style>
