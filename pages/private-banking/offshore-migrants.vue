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
                src="/bg/bg-3.jpg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="100%"
                cover
              >
                <v-card-text class="pa-4 pa-md-8">
                  <div class="text-h5 text-md-h4 font-weight-bold">
                    Offshore & Migrants
                  </div>
                  <p
                    class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                  >
                    Our range of offshore banking solutions is no longer
                    <br class="hidden-sm-and-down" />
                    available to new customers.
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
              First Finance Offshore Migrants
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Our range of offshore banking solutions is no longer available to
              new customers.
            </p>

            <p
              class="text-subtitle-2 text-sm-subtitle-1 font-weight-light mt-4"
            >
              Existing offshore customers can go on with Paragon Banchares Bank
              International directives for offshore banking services. While, new
              customers should visit any of our branches for more information.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Migrant banking Whether you are moving from anywhere in the world
              to the Belgium, or considering moving permanently or temporarily
              Belgium, you can be confident your banking requirements will be
              looked after at Paragon Banchares Bank.
            </p>

            <div class="text-subtitle-1 text-sm-h6 dark--text my-4">
              Our Migrant Banking teams can help make your move as smooth as
              possible.
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              For more information, please
              <v-btn
                to="/contact"
                text
                class="
                  text-decoration-underline text-subtitle-1 text-lowercase
                  mx-0
                  px-0
                "
                color="primary "
                >contact our Migrant Banking teams.</v-btn
              >
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
  name: "OffshoreMigrant",
  data: () => ({}),
  methods: {},
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "Offshore & Migrant",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: ` Existing offshore customers can go on with Paragon Banchares Bank
              International directives for offshore banking services. While, new
              customers should visit any of our branches for more information.`,
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
            