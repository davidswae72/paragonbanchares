<template>
  <v-app>
    <navbar />
    <v-main class="main">
      <p-pattern style="opacity: 0.9" />
      <p-alert />
      <v-slide-y-transition mode="out-in">
        <keep-alive>
          <nuxt />
        </keep-alive>
      </v-slide-y-transition>
    </v-main>
    <v-footer
      style="min-height: 300px"
      color="dark light--text"
      class="d-flex justify-center pt-6"
    >
      <v-row justify="center" class="ma-0">
        <v-col cols="12" md="11">
          <v-card tile elevation="10" class="marginTop px-6 py-10">
            <v-card-text class="pa-0 px-sm-4">
              <v-row align="center" justify="center" no-gutters>
                <v-col cols="12" md="6">
                  <v-btn
                    height="70"
                    text
                    x-large
                    to="/"
                    class="text-upptercase font-weight-bold ml-n5"
                  >
                    <v-img max-width="180" src="/logo/gold2.svg" />
                  </v-btn>
                  <div
                    style="line-height: 1.3"
                    class="font-weight-light text1--text text-subtitle-1 py-4 mt-4"
                  >
                    Paragon Banchares Bank is subsidiary of Belfius Bank & issuer of
                    Debt instruments. We are a privately operates personal and
                    business banking, including Internet Banking services based
                    in the Belgium with operations all over the world and
                    managed by security professionals with years of experiences
                    in banking security and network protection.
                  </div>
                  <v-btn
                    to="/register"
                    x-large
                    depressed
                    tile
                    class="bg-gradient white--text text-subtitle-2 ma-0 px-8"
                  >
                    Open Account
                  </v-btn>
                </v-col>
                <v-col md="2" />
                <v-col cols="12" sm="8" md="4" class="pa-0 mt-10 mt-md-0">
                  <div class="text-h6 my-1 dark--text font-weight-medium">
                    Subscribe to our Newsletter
                  </div>
                  <div
                    class="text-subtitle-2 mb-2 text-md-subtitle-1 my-1 dark--text text-capitalize"
                  >
                    Get daily updates on Opportunities
                  </div>
                  <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="pb-2"
                    @submit.prevent="subscribe"
                  >
                    <v-text-field
                      v-model="email"
                      name="email"
                      type="email"
                      :rules="emailRules"
                      class="text-subtitle-2 text-sm-subtitle-1 font-weight-light"
                      outlined
                      placeholder="Enter Email Address"
                    />
                    <v-btn
                      x-large
                      block
                      depressed
                      tile
                      class="bg-gradient white--text text-subtitle-2 ma-0 mt-n2 px-8"
                    >
                      Subscribe
                    </v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          md="10"
          class="d-flex flex-column flex-md-row justify-center align-center"
        >
          <!-- <v-sheet
            flat
            color="transparent white--text "
            class="mb-4 mb-md-0 text-center text-md-left"
          >
            <v-btn
              v-for="link in sideLinks"
              :key="link.name"
              :target="link.target"
              tile=""
              small
              color="accent"
              class="font-weight-light"
              text
              :to="link.to"
              :href="link.route"
              exact
            >
              {{ link.name }}
            </v-btn>
          </v-sheet>

          <v-spacer /> -->
          <span class="accent--text text-body-2 font-weight-light">
            ©2019 - {{ new Date().getFullYear() }} paragonbanchares.online All rights reserved.
          </span>
        </v-col>
        <v-col col="12" md="10">
          <v-divider class="accent my-3" />
          <v-card flat class="transparent">
            <v-card-text>
              <v-row align="center" no-gutters justify="center">
                <v-col
                  cols="12"
                  class="white--text d-flex flex-column text-center align-center"
                >
                  <span class="font-weight-light mb-2 mb-md-0">
                    Connect with us
                  </span>
                  <div class="text-center">
                    <v-btn
                      href="tel:+18507337175"
                      text
                      color="white"
                      class="text-subtitle-1 pl-0"
                      target="_blank"
                    >
                     +1 (509) 231-8074
                    </v-btn>
                    <br class="d-block d-sm-none" />
                    <v-btn
                      v-for="social in socialLink"
                      :key="social.name"
                      :href="social.to"
                      target="_blank"
                      color="white social-hover"
                      icon
                    >
                      <v-icon :style="social.name == 'send-outline' ? 'transform : rotate(320deg)' : 'transform : rotate(0deg)'">
                        {{ social.icon }}
                      </v-icon>
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import PAlert from "~/components/other/pAlert.vue";
import pPattern from "~/components/other/pPattern.vue";
export default {
  components: { pPattern, PAlert },
  data: () => ({
    drawer: false,

    mainLinks: [
      { name: "Home", route: "/" },
      { name: "About Us", route: "/about" },
      { name: "Contacts", route: "/contact" },
    ],

    socialLink: [
      {
        name: "facebook",
        to: "https://facebook.com",
        icon: "mdi-facebook",
      },
      {
        name: "twitter",
        to: "https://twitter.com",
        icon: "mdi-twitter",
      },
      {
        name: "instagram",
        to: "https://instagram.com",
        icon: "mdi-instagram",
      },
      {
        name: "send-outline",
        to: "https://t.me/Paragon BancharesBank",
        icon: "mdi-send-outline",
      },
    ],
  }),
  head() {
    return {
      title: "First Finance",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Paragon Banchares Bank is where you trade Bitcoin and other cryptocurrencies without having prior knowledge of computers. Just create a one-time account, fund and cashout weekly.",
        },

        {
          hid: "og:description",
          property: "og:description",
          content:
            "Paragon Banchares Bank is where you trade Bitcoin and other cryptocurrencies without having prior knowledge of computers. Just create a one-time account, fund and cashout weekly.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "/ttub.png",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:image:src",
          property: "twitter:image:src",
          content: "/ttub.png",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Paragon Banchares Bank",
        },
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
        },
      ],
    };
  },

  methods: {
    toggleDrawer(state) {
      this.drawer = state;
    },
  },
};
</script>

<style>
.marginTop {
  margin-top: -8rem;
}
</style>
