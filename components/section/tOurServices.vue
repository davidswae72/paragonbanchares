<template>
  <v-row justify="center" class="ma-0 white py-16">
    <v-col cols="12" md="8" class="text-center">
      <div
        class="
          text-h5 text-capitalize
          dark--text
          font-weight-bold
          text-sm-h3
          mb-2
        "
      >
        Take <span class="accent--text mx-1"> A look at</span> Our Service
      </div>
      <v-divider
        style="width: 100px; padding: 1px"
        class="accent mb-6 my-4 ma-auto"
      ></v-divider>
      <!-- <p
        class="
          text-subtitle-2
          dark--text
          text-sm-subtitle-1
          font-weight-light
          mb-2
        "
      >
        To start trading and making profit in our platform requires no
        <br class="d-none d-sm-block" />
        professional skills. In just three easy steps you are a millionaire.
      </p> -->
    </v-col>
    <v-col cols="12" md="10" class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-col
          v-for="(item, i) in howItWorks"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <v-card flat class="py-4">
            <v-card-text class="d-flex align-start">
              <v-btn fab depressed large color="secondary">
                <v-icon large> {{ item.icon }} </v-icon>
              </v-btn>

              <div class="dark--text ml-2 ml-sm-4">
                <span class="text-capitalize text-subtitle-1 text-sm-h6">{{
                  item.title
                }}</span>
                <p
                  style="line-height: 1.5"
                  class="text-subtitle-2 font-weight-light"
                >
                  {{ item.description }}
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import HomeCard from "~/components/section/homeCard.vue";

export default {
  components: { HomeCard },

  data: () => ({
    howItWorks: [
      {
        delay: 500,
        icon: "mdi-hand-coin",

        title: "Personal Loan",
        description:
          "Paragon Banchares Bank makes installment loans at all of our full-service bank locations, with friendly, helpful loan officers.",
      },
      {
        delay: 600,

        icon: "mdi-cash-fast",

        title: "Easy and fast answer",
        description: "Frequently Asked Questions - FAQs",
      },
      {
        delay: 700,
        icon: "mdi-account-network-off",
        title: "No additional papers",
        description:
          "Membership Home; Become a Member; Open a Savings, Checking, Residence and Non-Residence Account, (Sign up Required) Get Involved.",
      },
      {
        delay: 800,
        icon: "mdi-shield-lock",
        title: "Secure financial services",
        description:
          "Whether you're facing retirement or looking to better understand certain investment ideas, we can help you address your most pressing money questions.",
      },
      {
        delay: 900,
        icon: "mdi-poll",
        title: "Good investments",
        description:
          "If you're not sure the best place to park your money for the long-term, we have 7 investment options that will put your money to work.",
      },
      {
        delay: 1000,
        icon: "mdi-arrange-send-to-back",
        title: "Accumulation goals",
        description:
          "Generally, the goal is to keep funds invested, reinvest income and capital gains, and have these compound for as long as possible.",
      },
    ],
  }),
};
</script>

<style>
</style>