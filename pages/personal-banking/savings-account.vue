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
                src="/bg/22.jpg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="100%"
                cover
              >
                <v-card-text class="pa-4 pa-md-8">
                  <div class="text-h5 text-md-h4 font-weight-bold">
                    Savings Accounts
                  </div>
                  <p
                    class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                  >
                    This is the easy way for every person to save money, with a
                    safe, convenient account. <br class="hidden-sm-and-down" />
                    It's good for any individual with savings goals.
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
              First Finance Savings Accounts
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              This is the easy way for every person to save money, with a safe,
              convenient account. It's good for any individual with savings
              goals.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              You may make unlimited deposits to the account. Withdrawals are
              limited to six per quarter. After six withdrawals per quarter,
              there is a $1.3 fee per additional withdrawal.
            </p>

            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Interest is compounded and paid quarterly. You will receive
              quarterly statements. The fee for a savings account is $6.5 per
              quarter. This is waived for minors (under age 18) and full-time
              students.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              You can avoid the fee with a $150 minimum daily balance or $200
              average quarterly balance. Open your Savings Account with a
              minimum opening deposit of $100 at your nearest Paragon Banchares Bank
              Branches.
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
          