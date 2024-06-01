<template>
  <v-container style="overflow: hidden" fluid class="pa-0">
    <TSlide />
    <v-row no-gutters class="ma-0">
      <v-col cols="12" class="pa-2 white trasnparent mt-n1" />
    </v-row>

    <v-row justify="center" class="ma-0 bg-gradient">
      <v-col cols="10" class="pa-0">
        <TCards />
      </v-col>
    </v-row>

    <TFreelance />
    <TOurServices />
    <TServices />

    <v-row no-gutters class="ma-0">
      <v-col cols="12" class="pa-2 bg-gradient trasnparent mt-n2" />
    </v-row>

    <TLoans />
    <TExpectation />
    <TClient />

    <v-row justify="center" class="bg-gradient bg-getstarted ma-0 py-16">
      <v-col cols="12" md="10" class="pa-0">
        <v-divider class="white"></v-divider>
      </v-col>
      <v-col cols="12" md="8" class="text-center py-16 mb-10">
        <div class="text-h5 text-sm-h3 white--text font-weight-bold my-2">
          Apply for an account in minutes
        </div>
        <div class="text-subtitle-1 white--text font-weigh-light my-2">
          Get your First Finance account today!
        </div>
        <v-btn
          to="/register"
          x-large
          tile
          depressed
          class="accent white--text rounded-md text-subtitle-2 my-2 ma-0 px-10"
        >
          Get Your Account
        </v-btn>
      </v-col>
    </v-row>
    <!-- <div class="elfsight-app-b4cdf708-7383-442a-b21a-e0644b54382c"></div> -->
  </v-container>
</template>

<script>
import TCards from "~/components/section/tCards.vue";
import TFreelance from "~/components/section/tFreelance.vue";
import TServices from "~/components/section/tServices.vue";
import TLoans from "~/components/section/tLoans.vue";
import TExpectation from "~/components/section/tExpectation.vue";
import TClient from "~/components/section/tClient.vue";
import TSlide from "~/components/section/tSlide.vue";
import TOurServices from "../components/section/tOurServices.vue";
export default {
  components: {
    TCards,
    TFreelance,
    TServices,
    TLoans,
    TExpectation,
    TClient,
    TOurServices,
    TSlide,
  },
  filters: {
    currency(val) {
      if (val) {
        return val.toLocaleString();
      } else {
      }
    },
  },

  data: () => ({
    videoId: "v7FcdXYpuEw",
    playerVars: {
      autoplay: 0,
    },
    windowWidth: 0,
    volume: 13776746,
    teams: [
      {
        delay: 500,
        image: "/people/pic1.jpeg",
        name: " Rinda Smith",
        occupation: " Founder, RindaMath Co.",
        description:
          "Started trading with Universal Live Trade Trades 2019. The odds are great! Like their withdrawals are instant and payment is flawless.",
      },
      {
        delay: 600,
        image: "/people/pic5.jpeg",
        name: "Rita Robert",
        occupation: "Financial analyst, Blossom.",
        description:
          "Was actually contemplating on which platform to trade my bitcoin until my husband told me about Paragon Banchares Bank. Simplicity of trading and on-time payouts cannot be over-emphasized.",
      },
    ],
    plans: [
      {
        delay: 500,
        name: "Starter",
        startup: 500,
        leverage: 10,
        income: 0.5,
        max: 1000,
      },
      {
        delay: 600,
        name: "Bronze",
        startup: 1000,
        leverage: 20,
        income: 1,
        max: 5000,
      },
      {
        delay: 700,
        name: "Silver",
        startup: 5000,
        leverage: 50,
        income: 5,
        max: 10000,
      },
      {
        delay: 800,
        name: "Gold",
        startup: 10000,
        leverage: 100,
        income: 10,
        max: 9999,
      },
    ],

    discovers: [
      {
        name: "Trust",
        description: "Our company is fully regulated by the FCA and CySec",
        image: "/logo/trust.png",
      },
      {
        name: "Security",
        description:
          "Your funds are protected by industry leading security protocols",
        image: "/logo/security.png",
      },
      {
        name: "Privacy",
        description:
          "We will never share your private data without your permission",
        image: "/logo/privacy.png",
      },
    ],

    services: [
      {
        name: "Professional team",
        description:
          "ttub is managed by a team who have extensive experience in the field of investment.",
        icon: "mdi-account-settings-outline",
        delay: 500,
      },
      {
        name: "Instant payments",
        description:
          "We believe in instant payments so that our clients enjoy payouts without any unnecessary waiting time.",
        icon: "mdi-clock-check-outline",
        delay: 600,
      },
      {
        name: "Profitable plans",
        description:
          "Our investment plans are designed to generate maximum profits with minimum investment.",
        icon: " mdi-chart-line",
        delay: 700,
      },
    ],
    stats: [
      {
        name: "Toal assets",
        total: "14 M+",

        delay: 500,
      },
      {
        name: "YEARS OF EXPERIENCE",
        total: "8",

        delay: 600,
      },
      {
        name: "QUALIFIED TRADERS",
        total: "78",

        delay: 700,
      },
      {
        name: "RUNNING DAYS",
        total: "3551",
        delay: 800,
      },
    ],
  }),
  computed: {
    activeUser() {
      const users = 1868365;
      return Math.floor(Math.random() * users) + 268365;
    },
  },
  created() {
    window.scrollTo(0, 0);
  },

  head() {
    return {
      title: "Home",
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
      script: [
        {
          src: "https://apps.elfsight.com/p/platform.js",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/coinponent/coinponent@undefined/dist/coinponent.js",
        },
        {
          // src:"//code.tidio.co/ob0ab7tvexyqe2r4cczaoftekwfe6knf.js",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
