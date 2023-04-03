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
                src="/bg/37.jpeg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="100%"
                cover
              >
                <v-card-text class="pa-4 pa-md-8">
                  <div class="text-h5 text-md-h4 font-weight-bold">
                    Personal Loan
                  </div>
                  <p
                    class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                  >
                    We take pride in helping families with affordable solutions
                    to their money needs. <br class="hidden-sm-and-down" />
                    Contact your nearest Paragon Banchares Bank Branches.
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
              First Finance Personal Loan
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Paragon Banchares Bank makes installment loans at all of our
              full-service bank locations, with friendly, helpful loan officers.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              If you are ready to purchase an automobile or truck, whether new
              or used, we are ready to finance the vehicle for you. We have
              competitive interest rates and terms on auto loans.
            </p>

            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              If you have been considering a recreational vehicle, motor home,
              boat or other leisure vehicle, we can loan the money you need,
              with a repayment plan to suit you.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Every individual and family has unique needs. Situations arise
              when you need to borrow money for special needs, whether it's a
              dream vacation, or an emergency. It's times like these that First
              Chartered Bank can help. We are the financial friends you like to
              have.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              For important needs in life that requires a Personal Loan, see
              your Paragon Banchares Bank loan officer right away. If you do not
              already have a loan officer, we will be happy to introduce you to
              the right banker. We also make Personal Loans secured by stocks,
              certificates of deposit, or other personal assets.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              We take pride in helping families with affordable solutions to
              their money needs. Contact your nearest Paragon Banchares Bank Branches.
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
  name: "PersonalLoan",
  data: () => ({}),
  methods: {},
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "Personal Loan",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "We take pride in helping families with affordable solutions to their money needs. Contact your nearest Paragon Banchares Bank Branches.",
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
          