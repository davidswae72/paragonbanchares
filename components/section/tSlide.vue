<template>
  <v-carousel
    height="100vh"
    cycle
    continuous
    hide-delimiter-background
    class="pa-0"
  >
    <v-carousel-item
      reverse-transition="slide-x-transition"
      transition="slide-x-reverse-transition"
      v-for="(item, i) in items"
      :key="i"
    >
      <v-row
        align="center"
        justify="center"
        :class="`bg-home${i + 1}`"
        class="primary darken-2 ma-0 px-md-10 pt-sm-16"
        style="height: 100vh; overflow: hidden"
      >
        <v-col cols="12" md="8">
          <div
            class="
              white--text
              text-left text-sm-center
              d-flex
              justify-start justify-sm-center
              align-center
            "
          >
            <div class="d-flex align-start flex-column align-sm-center">
              <span
                style="
                  border: 1px solid #ffffff69;
                  background-color: #ffffff1c;
                  max-width: 300px;
                "
                class="d-flex rounded-xl pa-1 align-center mb-4"
              >
                <span class="text-uppercase text-subtitle-2 white--text mx-2">{{
                  item.subtitle
                }}</span>
              </span>
              <div
                class="
                  text-uppercase
                  text-left
                  text-sm-center
                  text-h4
                  text-sm-h3
                  text-md-h2
                  font-weight-medium
                  overflow-x-visible
                "
                v-html="item.title"
              ></div>
              <div class="mt-5">
                <p
                  style="line-height: 1.5rem"
                  class="
                    text-subtitle-2 text-sm-subtitle-1 text-left text-sm-center
                    font-weight-light
                  "
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
          <div class="mt-2 text-left text-sm-center">
            <v-btn
              to="/register"
              x-large
              depressed
              tile
              color="accent"
              class="white--text text-subtitle-2 ma-0 px-10"
            >
              Open Account
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        subtitle: "Our Online Banking",
        title: `Get <span class="accent--text">Connected</span>`,
        description: `Online banking is part of the broader context for the move to
                  online banking, where banking services are delivered over the
                  internet. The shift from traditional to digital banking has
                  been gradual and remains ongoing, and is constituted by
                  differing degrees of banking service digitization.`,
      },
      {
        subtitle: "Innovation Objectives",
        title: `Be <span class="accent--text">Innovative</span> Now`,
        description: `Innovation objectives are goals to improve things by an order of magnitude. Innovation typically requires experimentation, risk taking and creativity. As such, innovation objectives may involve greater levels of uncertainty than a typical business objective that aims for predictable and quickly obtainable improvements.`,
      },
      {
        subtitle: "Buy Forex With Us",
        title: `FX <span class="accent--text">Market</span> `,
        description: `The foreign exchange market is a global decentralized or over-the-counter market for the trading of currencies. This market determines the foreign exchange rate. It includes all aspects of buying, selling and exchanging currencies at current or determined prices.`,
      },
    ],
  }),
};
</script>

<style>
.bg-home1 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/bg/14.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* Set a specific height */
  /* min-height: 300px; */

  /* Create the parallax scrolling effect */
  /* background-attachment: fixed; */
}
.bg-home2 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/bg/12.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* Set a specific height */
  /* min-height: 300px; */

  /* Create the parallax scrolling effect */
  /* background-attachment: fixed; */
}
.bg-home3 {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/bg/cointrade.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  /* Set a specific height */
  /* min-height: 300px; */

  /* Create the parallax scrolling effect */
  /* background-attachment: fixed; */
}
</style>