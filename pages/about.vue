<template>
  <v-container fluid class="pa-0 pb-16 mb-16">
    <v-row
      style="height: 60vh"
      justify="center"
      align="center"
      class="bg-about px-0 py-16 white--text"
    >
      <v-col
        cols="12"
        md="9"
        class="
          text-h4 text-md-h2 text-center
          font-weight-bold
          white--text
          mt-10
        "
      >
        About <span class="secondary--text">Us</span>
      </v-col>
    </v-row>
    <v-row
      justify="space-around"
      class="ma-0 white dark--text py-16 px-4 px-md-10"
    >
      <v-col
        data-aos="fade-right"
        data-aos-delay="700"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="6"
      >
        <v-card dark flat class="transparent">
          <v-card-text
            class="
              white--text
              text-caption text-subtitle-1
              font-weight-light
              text-left
            "
          >
            <div class="text-subtitle-1 my-4">
              <div class="secondary--text text-capitalize font-weight-medium">
                HOW WE WERE FOUNDED
              </div>
              <div class="text3--text text-h5 text-sm-h3 font-weight-bold">
                Easy, fee-free banking for entrepreneurs
              </div>
            </div>
            <v-divider
              style="width: 50px; padding: 1px"
              class="secondary mb-4"
            ></v-divider>
            <div class="text-subtitle-2 font-weight-light text2--text">
              <p class="mb-6">
                trustedunion has a large footprint across the globe operating in
                20 Asian and 10 African countries. The Bank also operates in the
                United Kingdom, the United States of America and with presence
                in Paris.
              </p>
              <p class="mb-6">
                Today, trustedunion is one of the largest financial services
                groups on the South American continent.The bank provides
                corporate, commercial, SME, consumer and personal (retail)
                banking services to more than 18 million customers, served
                through diverse channels: over 1,000 business offices and
                customer touch points (2,539 ATMs, 24,168 PoS, robust online
                banking and mobile banking, social media etc). Additionally,
                trustedunion offers pension custody and related services. We
                have proven expertise and capacity in key sectors of economies
                across Asia especially in Oil and Gas, Infrastructure Finance,
                Agric and Commodity/Export.
              </p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        data-aos="fade-left"
        data-aos-delay="700"
        data-aos-once="true"
        data-aos-easing="ease-in-out"
        cols="12"
        md="6"
      >
        <v-card
          class="transparent"
          flat
          :max-height="$vuetify.breakpoint.xsOnly ? 300 : 400"
        >
          <v-card-text>
            <v-img
              :height="$vuetify.breakpoint.xsOnly ? 300 : 400"
              src="/bg/11.jpeg"
              contain
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" class="accent lighten-5 ma-0 py-10">
      <v-col cols="12" md="8" class="text-center py-16">
        <div class="text-h5 text-sm-h3 text3--text font-weight-bold my-2">
          Ready <span class="secondary--text">To</span> Talk?
        </div>
        <div class="text-subtitle-1 text1--text font-weigh-light my-2">
          Our team is here to answer your question about 1cityfinace
        </div>
        <v-btn
          to="/contact"
          x-large
          depressed
          class="
            bg-gradient
            white--text
            rounded-md
            text-subtitle-2
            my-2
            ma-0
            px-10
          "
        >
          Contact Us
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center" class="bg-get ma-0 py-10">
      <v-col cols="12" md="8" class="text-center py-16">
        <div class="text-h5 text-sm-h3 white--text font-weight-bold my-2">
          Apply for an account in minutes
        </div>
        <div class="text-subtitle-1 white--text font-weigh-light my-2">
          Get your 1citychoice account today!
        </div>
        <v-btn
          to="/register"
          x-large
          depressed
          class="white accent--text rounded-md text-subtitle-2 my-2 ma-0 px-10"
        >
          Get Your Account
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
  data: () => ({}),
  created() {
    window.scrollTo(0, 0);
  },
  head() {
    return {
      title: "About Us",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            " Paragon Banchares Bank vision is to open the global markets for everyone to trade and invest in a simple and transparent way.",
        },
      ],
    };
  },
};
</script>

<style>
.bg-about {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/bg/12.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.bg-get {
  background: linear-gradient(
      rgba(0, 174, 255, 0.9) 18%,
      rgba(0, 255, 207, 0.9) 100%
    ),
    url("/bg/bb.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
