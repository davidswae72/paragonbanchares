<template>
  <v-container fluid class="pa-0 pb-16 mb-16">
    <v-row
      style="height: 60vh"
      justify="center"
      align="center"
      class="bg-contact py-16 white--text"
    >
      <v-col cols="12" md="9" class="text-center white--text mt-10">
        <h4 class="text-h4 text-md-h2 font-weight-bold mb-4">
          Customer <span class="accent--text">Service</span> Center
        </h4>
      </v-col>
    </v-row>
    <v-row no-gutters class="ma-0">
      <v-col cols="12" class="pa-2 primary trabsparent" />
    </v-row>
    <v-row justify="center" class="white text2--text py-16 px-4 px-md-10">
      <v-col cols="12" md="4">
        <v-card flat tile color="transparent">
          <v-card-title class="dark--text text-h5 text-sm-h4 font-weight-bold">
            Get In Touch</v-card-title
          >
          <v-card-text>
            <div class="d-flex my-2 align-center">
              <v-avatar tile color="primary">
                <v-icon color="white">mdi-map-marker</v-icon>
              </v-avatar>
              <div class="dark--text ml-2 ml-sm-4">
                <span class="text-subtitle-1"
                  >3005 Cranberry Hwy Rt 6 28, Wareham MA 2538, USA..</span
                >
              </div>
            </div>
            <div class="d-flex my-2 align-center">
              <v-avatar tile color="primary">
                <v-icon color="white">mdi-phone</v-icon>
              </v-avatar>
              <div
                class="d-flex flex-column align-start dark--text ml-2 ml-sm-4"
              >
                <!-- <a href="tel:+14247043234" class="text-subtitle-1"
                  >+1 (424) 704-3234</a
                > -->
                <span class="text-caption text-sm-subtitle-2 font-weight-light">
                  MON-FRI , 09:00 AM - 05:00 PM
                </span>
              </div>
            </div>
            <div class="d-flex my-2 align-center">
              <v-avatar tile color="primary">
                <v-icon color="white">mdi-email</v-icon>
              </v-avatar>
              <div class="dark--text ml-2 ml-sm-4">
                <a href="mailto:info@paragonbancharesbk.online" class="text-subtitle-1"
                  >info@paragonbancharesbk.online</a
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- todo this is for the telegram link chart box -->

      <!-- <v-col cols="12" md="8">
        <div class="elfsight-app-aecb7326-8312-4a72-904f-b1aad59f0fc3"></div>
      </v-col>
       -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Contact",

  data: () => ({}),

  methods: {},
  created() {
    window.scrollTo(0, 0);
  },

  head() {
    return {
      title: "Contact Us",
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
        // {
        //   src: "https://apps.elfsight.com/p/platform.js",
        // },
      ],
    };
  },
};
</script>

<style>
.bg-contact {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/bg/33.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
