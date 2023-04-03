<template>
  <v-container fluid class="pa-0 pb-16 mb-16">
    <v-row
      style="height: 60vh"
      justify="center"
      align="center"
      class="bg-career py-16 white--text"
    >
      <v-col cols="12" md="9" class="text-center white--text mt-10">
        <h4 class="text-h4 text-md-h2 font-weight-bold mb-4">Careers</h4>
      </v-col>
    </v-row>
    <v-row no-gutters class="ma-0">
      <v-col cols="12" class="pa-2 primary trabsparent" />
    </v-row>
    <v-row justify="center" class="ma-0 py-6">
      <v-col cols="12" md="10">
        <v-card flat rounded="lg" height="450" width="100%">
          <v-img
            src="/bg/20.jpg"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
            height="100%"
            cover
          >
            <v-card-text class="pa-4 pa-md-8">
              <div class="text-h5 text-md-h4 font-weight-bold">Careers</div>
              <p class="text-subtitle-2 text-md-subtitle-1 font-weight-light">
                We demonstrates our resolve to closely tie our future success to
                <br class="hidden-sm-and-down" />
                our ability to satisfactorily meet and exceed our customer’s
                needs.
              </p>
              <v-btn
                tile
                to="/register"
                large
                depressed
                color="white dark--text"
                class="font-weight-light text-subtitle-2 px-8"
              >
                Join Us Now
              </v-btn>
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="ma-0 px-2" justify="center">
      <v-col cols="12" md="10">
        <div class="primary--text text-h4 text-sm-h3 mb-2 font-weight-light">
          First Finance Careers
        </div>
        <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
          Customer care is an essential source of competitive advantage in the
          face of generic products offered by the management. Customer care is a
          cornerstone of the bank’s long term competitive advantage. First
          Chartered Bank explicitly speaks of our bank’s customer centric focus.
          Thus, our business in Paragon Banchares Bank is centered on our customers
          and their ultimate satisfaction.
        </p>
        <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
          We are committed to delivering seamless customer service and
          maintaining long-term customer relationship in every location we
          operate. Our banking application, has good customer information system
          module which provides adequate information/data needed to serve the
          customer better.
        </p>
      </v-col>
      <v-col cols="12" md="10" class="px-0">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" md="4">
            <PShowCard :src="'/bg/14.jpg'" :chip="false" />
          </v-col>
          <v-col cols="12" md="4">
            <PShowCard :src="'/bg/15.jpg'" :chip="false" />
          </v-col>
          <v-col cols="12" md="4">
            <PShowCard :src="'/bg/22.jpg'" :chip="false" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="10">
        <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
          Our self-service options can help you easily access the information
          you're looking for. If you need additional assistance, Contact us or
          speak with a Customer Care representative.
        </p>
        <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
          We listen to our customers
        </p>
        <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
          We have identified unique ways of getting feedback from our customers
          because feedback is fundamental to the continuity and sustenance of
          our business. For us to continuously stay alive in the hearts of our
          customers and also get their feedback at the instant, we have
          earmarked the following channels of communication:
        </p>
        <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
          All customer complaints get instant attention. We strive to attend to
          issues within 24 hours and provide solutions or options accordingly.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>
    
    <script>
import PShowCard from "../components/section/pShowCard.vue";
export default {
  name: "Contact",
  data: () => ({}),
  methods: {},
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "Careers",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Have any questions or feedback? Please get in touch with us by filling the contact form below and our support will get back to you within 24 hours",
        },
      ],
      script: [
        {
         // src: "https://apps.elfsight.com/p/platform.js",
        },
      ],
    };
  },
  components: { PShowCard },
};
</script>
    
    <style>
.bg-career {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/bg/bb.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
    