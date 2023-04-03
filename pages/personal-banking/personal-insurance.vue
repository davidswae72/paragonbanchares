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
                src="/bg/39.jpeg"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                height="100%"
                cover
              >
                <v-card-text class="pa-4 pa-md-8">
                  <div class="text-h5 text-md-h4 font-weight-bold">
                    Personal Insurance
                  </div>
                  <p
                    class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                  >
                    Choose from a range of extra options that gives you the
                    choice and <br class="hidden-sm-and-down" />
                    flexibility to build the right level of cover to protect
                    your home, possessions and lifestyle.
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
              First Finance Personal Insurance
            </div>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Home Insurance to suit your home and lifestyle. Choose from a
              range of extra options that gives you the choice and flexibility
              to build the right level of cover to protect your home,
              possessions and lifestyle.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              How it works:
            </p>
            <div class="text-subtitle-1 text-sm-h6 dark--text my-4">
              Choose the core cover required.
            </div>
            <ul class="mb-4">
              <li class="text-subtitle-2 font-weight-light">
                Core Buildings - covered up to $400,000 as standard
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Core Contents - covered up to $50,000 as standard
              </li>
              <li class="text-subtitle-2 font-weight-light">
                Or Both - Combine Core Buildings & Contents for maximum
                protection.
              </li>
            </ul>

            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Technology and Entertainment* - Electrical items like TVs, cameras
              and computers are covered against accidental damage and loss, both
              inside and outside your home. Accidental Damage - You can add
              accidental damage cover to your core cover. And because this
              doesn't include items covered by other packages you won't pay to
              insure the same things twice.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Personal Items* - From your glasses to cash or your pedal cycle,
              make sure you have enough cover for all your personal items
              whether you're at home or out and about. Garden* - Protect your
              plants, garden, furniture, lawns and tools. You can even have your
              garden re-landscaped should emergency services ever damage it.
            </p>
            <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
              Home Emergency - 24/7 Home Emergency assistance, help and advice
              which includes cover for loss of heating, emergency roof repairs
              and securing broken windows or doors. Legal Expenses - Access to a
              wide range of legal solutions, including professional mediation
              and consumer protection. *Optional cover not available if you
              purchase core buildings only
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
  name: "PersonalInsurance",
  data: () => ({}),
  methods: {},
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "Personal Insurance",
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
          