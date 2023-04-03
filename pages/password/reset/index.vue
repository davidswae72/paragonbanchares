<template>
  <v-container>
    <v-row justify="center" class="py-16 mt-10">
      <v-col cols="12">
        <v-card
          flat
          max-width="400"
          color="transparent"
          class="mx-auto rounded-lg px-md-4 py-2"
        >
          <v-card-title
            class="
              flex-column
              justify-center
              font-weight-light
              text-subtitle-1 text-md-h6
              my-2
            "
          >
            <v-btn
              height="80"
              text
              x-large
              to="/"
              class="text-upptercase font-weight-bold ml-n6 mb-n4 pa-0"
            >
              <v-img max-width="200" src="/logo/gold2.svg" />
            </v-btn>
            <div class="text-button mb-n2 mt-2 white--text">
              Forgot Password
            </div>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              @submit.prevent="submit"
            >
              <v-row no-gutters>
                <v-col cols="12" class="py-0 mb-n1">
                  <v-text-field
                    v-model="email"
                    type="email"
                    name="email"
                    dense
                    outlined
                    color="primary"
                    label="Email"
                    :rules="emailRules"
                    class="text-subtitle-2 font-weight-light rounded-md"
                  />
                </v-col>

                <v-col cols="12" class="py-2">
                  <v-btn
                    type="submit"
                    :loading="loading.reset"
                    depressed
                    block
                    large
                    tile
                    class="
                      bg-gradient
                      white--text
                      text-subtitle-2
                      font-weight-normal
                    "
                  >
                    Reset Password
                  </v-btn>
                </v-col>

                <v-col cols="12" class="dark--text py-1 mt-2 text-center">
                  <div>
                    Back to?
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
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  props: ["update", "setForm"],
  layout: "welcome",
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
  }),

  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
    }),
  },

  methods: {
    ...mapMutations({ setRegistration: "authentication/setRegistration" }),
    ...mapActions({
      initAlert: "controller/initAlert",
      resetPassword: "authentication/resetPassword",
    }),

    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.resetPassword(this.email);
      }
    },

    clear() {
      this.reset();
      this.resetValidation();
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
