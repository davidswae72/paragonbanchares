<template>
  <v-container fluid class="pa-0 pb-16 mb-16">
    <v-row
      style="height: 30vh"
      justify="center"
      align="center"
      class="bg-private-banking py-16 white--text"
    >
      <v-col cols="12" md="9" class="text-center white--text mt-10">
        <h4 class="text-h4 text-md-h2 font-weight-bold mb-4">
          PRIVATE BANKING
        </h4>
      </v-col>
    </v-row>
    <v-row no-gutters class="ma-0">
      <v-col cols="12" class="pa-2 primary trabsparent" />
    </v-row>

    <v-row class="ma-0" justify="center">
      <v-col cols="12" md="8">
        <v-row justify="center" class="ma-0">
          <v-col cols="12" class="py-6">
            <v-card flat rounded="lg" height="450" width="100%">
              <v-img
                src="/bg/39.jpeg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="100%"
                cover
              >
                <v-card-text class="pa-4 pa-md-8">
                  <div class="text-h5 text-md-h4 font-weight-bold">
                    Insurance
                  </div>
                  <p
                    class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                  >
                    As a Paragon Banchares Bank Private customer, your Relationship
                    Manager <br class="hidden-sm-and-down" />
                    will work with you to provide insurance solutions that meet
                    your needs.
                  </p>
                  <!-- <v-btn
                    tile
                    to="/register"
                    large
                    depressed
                    color="white dark--text"
                    class="font-weight-light text-subtitle-2 px-8"
                  >
                    Join Us Now
                  </v-btn> -->
                </v-card-text>
              </v-img>
            </v-card>
          </v-col>
          <v-col cols="12">
            <div
              class="primary--text text-h4 text-sm-h3 mb-2 font-weight-light"
            >
              First Finance Insurance
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Peace of mind for you and your family
            </p>

            <p
              class="text-subtitle-2 text-sm-subtitle-1 font-weight-light mt-4"
            >
              As a Paragon Banchares Bank Private customer, your Relationship Manager
              will work with you to provide insurance solutions that meet your
              needs. Whether you are looking for protection for your life and
              lifestyle, your home and contents or your car, we can help create
              a package that is both suitable, and flexible enough to change
              when your circumstances and goals do.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Superior home insurance Paragon Banchares Bank Private gives you access
              to a market leading home insurance service. This excellent service
              comes with home emergency cover as standard, complimentary 24-hour
              personal security support and advice on everything from safety
              abroad to identity theft.
            </p>

            <div class="text-subtitle-1 text-sm-h6 dark--text my-4">
              Get a quote and apply online
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Car solutions Your Relationship Manager can help connect you with
              comprehensive car insurance, motor legal protection and breakdown
              cover - including a 24-hour claim line, temporary hire car, and
              unlimited cover for standard fit in-car equipment. And take out a
              second policy and we may be able to match the no claims discount.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" class="py-10">
        <TQuickLinks page="private" />
      </v-col>
    </v-row>
  </v-container>
</template>
          
          <script>
import TQuickLinks from "~/components/section/tQuickLinks.vue";
export default {
  name: "BankingServices",
  data: () => ({}),
  methods: {},
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "Insurance",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: `As a Paragon Banchares Bank Private customer, your Relationship Manager will work with you to provide insurance solutions that meet your needs.`,
        },
      ],
      script: [
        {
        //  src: "https://apps.elfsight.com/p/platform.js",
        },
      ],
    };
  },
  components: { TQuickLinks },
};
</script>
          
          <style>
.bg-private-banking {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/bg/b1.webp");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
          