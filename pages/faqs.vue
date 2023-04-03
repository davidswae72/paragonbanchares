<template>
  <v-container fluid class="pa-0 py-16">
    <v-row
      style="height: 60vh"
      justify="center"
      align="center"
      class="bg-faq py-16 white--text"
    >
      <v-col cols="12" md="9" class="text-center white--text mt-10">
        <h4 class="text-h4 text-md-h2 font-weight-bold mb-4">
          Frequently <span class="accent--text">Asked</span> Questions
        </h4>
      </v-col>
    </v-row>
    <v-row no-gutters class="ma-0">
      <v-col cols="12" class="pa-2 primary trabsparent" />
    </v-row>
    <v-row justify="center" class="white dark--text px-4 px-md-10 pb-16">
      <v-col cols="12" sm="10">
        <TFaqs />
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import TFaqs from "../components/section/tFaqs.vue";
export default {
  name: "FAQs",
  data: () => ({}),
  methods: {},
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "FAQs",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "Frequently Asked Questions",
        },
      ],
      script: [
        {
        //  src: "https://apps.elfsight.com/p/platform.js",
        },
      ],
    };
  },
  components: { TFaqs },
};
</script>
  
  <style>
.bg-faq {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/bg/30.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>
  