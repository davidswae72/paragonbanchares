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
                src="/bg/38.jpeg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="100%"
                cover
              >
                <v-card-text class="pa-4 pa-md-8">
                  <div class="text-h5 text-md-h4 font-weight-bold">
                    Mortgages
                  </div>
                  <p
                    class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                  >
                    Our well thought - out loan choices with peculiar features
                    to suit your needs,<br class="hidden-sm-and-down" />
                    aspirations and financial conditions is a must to
                    experience.
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
              First Finance Mortgages
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              The more you know, the easier it is Owning a house is everyone’s
              dream, doing so through a hassle-free process is an icing on the
              cake. This is what Paragon Banchares Bank stands to offer - making the
              dream of owing your own home a reality!
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Whether you are planning to buy a land and build later, or
              commence construction or buy an already developed home, we are
              there all the way as a trusted companion, guiding and supporting
              financially when others fail to.
            </p>

            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Our well thought - out loan choices with peculiar features to suit
              your needs, aspirations and financial conditions is a must to
              experience.
            </p>

            <div class="text-subtitle-1 text-sm-h6 dark--text my-4">
              What do I need to know?
            </div>
            <ul>
              <li class="text-subtitle-2 font-weight-light">
                Steps to Property Ownership
              </li>
              <li class="text-subtitle-2 font-weight-light">
                What can I use the loan for?
              </li>
              <li class="text-subtitle-2 font-weight-light">
                What are the loan features?
              </li>
              <li class="text-subtitle-2 font-weight-light">
                How do I insure my property?
              </li>
              <li class="text-subtitle-2 font-weight-light">
                What document do I need to provide for the loan request?
              </li>
              <li class="text-subtitle-2 font-weight-light">
                What about Non Resident Mortgage Facility?
              </li>
            </ul>

            <div class="text-subtitle-1 text-sm-h6 dark--text my-4">
              Available Mortgages
            </div>
            <ul>
              <li class="text-subtitle-2 font-weight-light">
                Developed Home Purchase
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Land Acquisition
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Home Construction
              </li>
              <li class="text-subtitle-2 font-weight-light">Home Renovation</li>
              <li class="text-subtitle-2 font-weight-light">
                Existing Mortgage Refinance
              </li>
              <li class="text-subtitle-2 font-weight-light">
                No charges for everyday transactions - just stay in credit.
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Up to $25 interest and fee free Planned Overdraft1.
              </li>
            </ul>

            <div class="text-subtitle-1 text-sm-h6 dark--text my-4">
              Benefits
            </div>
            <ul>
              <li class="text-subtitle-2 font-weight-light">
                Interest rate is variable and benchmarked on Home & Savings
                stands Prime Lending Rate
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Available for tenor of up to 20 years
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Loan Amount up to 80% of property value subject to a maximum
                amount of $70m for Brussels property
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Loan Amount up to 80% of property value subject to a maximum
                amount of $400,000.00 for for Brussels property
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Freedom to repay loan in full without prepayment penalty
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Monthly or structured pre-agreed repayments terms
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Interest only repayment allowed up until completion, if property
                is under construction
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Progressive drawdown against bank approved Quantity Surveyor’s
                certificate Reduced or no COT on linked account
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Negotiable management fee... and more
              </li>
            </ul>
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
  name: "Mortgages",
  data: () => ({}),
  methods: {},
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "Mortgages",
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
          