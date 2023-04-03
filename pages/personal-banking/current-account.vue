<template>
  <v-container fluid class="pa-0 pb-16 mb-16">
    <v-row
      style="height: 30vh"
      justify="center"
      align="center"
      class="bg-personal-banking py-16 white--text"
    >
      <v-col cols="12" md="9" class="text-center white--text mt-10">
        <h4 class="text-h4 text-md-h2 font-weight-bold mb-4">
          PERSONAL BANKING
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
                src="/bg/30.jpg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="100%"
                cover
              >
                <v-card-text class="pa-4 pa-md-8">
                  <div class="text-h5 text-md-h4 font-weight-bold">
                    Current Accounts
                  </div>
                  <p
                    class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                  >
                    This is the right choice in personal checking when you want
                    monthly statements with imaged checks.
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
              First Finance Current Accounts
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              This is the right choice in personal checking when you want
              monthly statements with imaged checks. There is no per check fee,
              and you have unlimited check writing.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              You'll receive monthly statements, along with images of your
              cancelled checks. Avoid the monthly fee of just $500 for Personal
              Checking with a $900 minimum daily balance or a $15,000 average
              monthly balance.
            </p>

            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              You'll have our free Paragon Banchares Bank CheckCard which is also your
              ATM Card. Overdraft Privilege available after qualifying period.
              Open your Personal Checking Account with a minimum opening deposit
              of $350 at Paragon Banchares Bank center.
            </p>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3" class="py-10">
        <TQuickLinks page="personal" />
      </v-col>
    </v-row>
  </v-container>
</template>
        
        <script>
import TQuickLinks from "~/components/section/tQuickLinks.vue";
export default {
  name: "CreditCard",
  data: () => ({}),
  methods: {},
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "Credit Card",
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
        //  src: "https://apps.elfsight.com/p/platform.js",
        },
      ],
    };
  },
  components: { TQuickLinks },
};
</script>
        
        <style>
.bg-personal-banking {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/bg/23.jpg");
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
}
</style>
        