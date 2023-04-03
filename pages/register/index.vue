<template>
  <v-container>
    <v-row style="height: 100hv" justify="center" class="py-4">
      <v-col
        cols="12"
        md="10"
        class="font-weight-light text-subtitle-1 text-md-h6 my-2"
      >
        <v-card flat class="mx-auto">
          <v-card-title class="d-flex pa-0 flex-column align-center">
            <v-btn
              height="80"
              text
              x-large
              to="/"
              class="text-upptercase font-weight-bold"
            >
              <v-img max-width="200" src="/logo/gold2.svg" />
            </v-btn>

            <div class="text-button mb-n2 mt-2 white--text">Create Account</div>
          </v-card-title>
          <v-card-text class="pa-0">
            <v-row class="mt-2">
              <v-col cols="12" class="py-0">
                <v-stepper v-model="step">
                  <v-stepper-header>
                    <v-stepper-step :complete="step > 1" step="1">
                      Personal Information
                    </v-stepper-step>

                    <v-divider />

                    <v-stepper-step :complete="step > 2" step="2">
                      Residence Information
                    </v-stepper-step>

                    <v-divider />

                    <v-stepper-step :complete="step > 3" step="3">
                      Account Information
                    </v-stepper-step>
                    <v-divider />
                  </v-stepper-header>

                  <v-stepper-items>
                    <v-stepper-content step="1">
                      <personal-info :step="step" :switch-step="switchStep" />
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <residence-info :switch-step="switchStep" />
                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <account-info :switch-step="switchStep" />
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
              </v-col>
              <v-col cols="12" class="py-1 mt-2 text-center">
                <div class="dark--text text-subtitle-1 mt-2">
                  Already a member?
                  <nuxt-link
                    to="/login"
                    tag="a"
                    class="font-weight-medium accent--text"
                  >
                    Login
                  </nuxt-link>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import accountInfo from "~/components/register/accountInfo.vue";
import personalInfo from "~/components/register/personalInfo.vue";
import register from "~/components/register/register.vue";
import residenceInfo from "~/components/register/residenceInfo.vue";

export default {
  components: { personalInfo, residenceInfo, accountInfo, register },
  layout: "welcome",
  data: () => ({
    step: 1,
  }),
  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
    }),
  },

  async created() {
    // await this.$store.dispatch("controller/runApp");
    await this.$store.dispatch("authentication/initCurrency");
  },

  methods: {
    switchStep(step) {
      this.step = step;
    },
  },
};
</script>

<style>
</style>
