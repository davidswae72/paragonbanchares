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
                src="/bg/35.jpeg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="100%"
                cover
              >
                <v-card-text class="pa-4 pa-md-8">
                  <div class="text-h5 text-md-h4 font-weight-bold">
                    Credit Card
                  </div>
                  <p
                    class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                  >
                    We make it easy to choose the credit card that is right for
                    you, including Visa (trademark symbol),
                    <br class="hidden-sm-and-down" />
                    MasterCard ™ Gold, Platinum Visa and the Visa Flex Miles
                    Cards
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
              First Finance Credit Cards
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Anyone who opens a personal checking account may apply for a free
              Paragon Banchares Bank CheckCard. It's the card that works like a check,
              anywhere VISA is accepted. It also serves as an ATM card at any
              PULSE/CIRRUS/DASH affiliated Automatic Teller Machine or PULSEPAY
              terminal. Choose your own Personal Identification Number (PIN) at
              your nearest Paragon Banchares Bank location.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              There is no fee for withdrawals or transactions at ATMs we
              operate. There is a fee for transactions at other ATMs. There is
              no charge or annual fee for using the CheckCard in place of
              writing a check. No identification or checkbook to carry. All
              CheckCard purchases are identified on your monthly statement.
            </p>

            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              To report lost or stolen Paragon Banchares Bank Checkcards or ATM Cards:
              Monday – Friday from 8:30am to 5:00pm
            </p>

            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              We make it easy to choose the credit card that is right for you,
              including Visa (trademark symbol), MasterCard ™ Gold, Platinum
              Visa and the Visa Flex Miles Cards that reward you with free
              airline tickets. These cards are accepted worldwide at businesses,
              financial institutions and ATMs. MasterCard® and VISA® Card
              applications are available at all Paragon Banchares Bank location.
              Credit Cards are subject to credit approval.
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
          content: `  We make it easy to choose the credit card that is right for you,
              including Visa (trademark symbol), MasterCard ™ Gold, Platinum
              Visa and the Visa Flex Miles Cards that reward you with free
              airline tickets. These cards are accepted worldwide at businesses,
              financial institutions and ATMs.`,
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
      