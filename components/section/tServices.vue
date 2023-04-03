<template>
  <v-row justify="center" class="ma-0 bg-how py-16">
    <v-col cols="12" md="8" class="text-center">
      <div
        class="
          text-h5 text-capitalize
          white--text
          font-weight-bold
          text-sm-h3
          mb-2
        "
      >
        How <span class="accent--text mx-1"> it</span> works
      </div>
      <v-divider
        style="width: 100px; padding: 1px"
        class="accent mb-6 my-4 ma-auto"
      ></v-divider>
      <p
        class="
          text-subtitle-2
          white--text
          text-sm-subtitle-1
          font-weight-light
          mb-2
        "
      >
        To start trading and making profit in our platform requires no
        <br class="d-none d-sm-block" />
        professional skills. In just three easy steps you are a millionaire.
      </p>
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
          <home-card :type="2" :dark="item.dark" :data="item" />
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
        number: 1,
        image: "mdi-credit-card-outline",
        title: "Online payments ",
        description:
          "Make online payments in any payment gateway using our bank. Shop seamlessly with your debit card.",
      },
      {
        delay: 600,
        number: 2,
        dark: true,
        image: "mdi-cash-minus",
        title: "Loan programms",
        description:
          "We offer loans to investors and intending business men and women. Fast payments and transparent transactions.",
      },
      {
        delay: 700,
        number: 3,
        image: "mdi-bank-outline",
        title: "Online Banking",
        description:
          "We are more than just an online bank. We bank online! Trusted by many. Save money, transfer and lots more.",
      },
    ],
  }),
};
</script>

<style>
.bg-how {
  background: linear-gradient(rgba(248, 166, 44, 0.6), rgba(248, 166, 44, 0.6)),
    url("/bg/b1.webp");
  background-size: cover;

  background-position: center center;
  background-repeat: no-repeat;
}
</style>