<template>
  <v-row justify="center" class="ma-0 bg lighten-5 py-16">
    <v-col cols="12" md="8" class="text-center">
      <div
        class="
          text-h5 text-capitalize
          dark--text
          font-weight-bold
          text-sm-h3
          mb-2
        "
      >
        We always try
        <span class="accent--text mx-1"> to understand customers</span>
        expectation
      </div>
      <v-divider
        style="width: 100px; padding: 0.5px"
        class="accent mb-6 my-4 ma-auto"
      ></v-divider>
      <p
        class="
          text-subtitle-2
          dark--text
          text-sm-subtitle-1
          font-weight-light
          mb-2
        "
      >
        To start trading and making profit in our platform requires no
        <br class="d-none d-sm-block" />
        professional skills. In just three easy steps you are a millionaire.
      </p>
    </v-col>
    <v-col cols="12" md="10" class="">
      <v-row justify="center" class="ma-0">
        <v-col cols="12" md="10" class="d-flex justify-space-around flex-wrap">
          <count-card
            data-aos-delay="500"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            :dark="dark"
            :number="'18K+'"
            :text="'Customers'"
          />
          <count-card
            data-aos-delay="600"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            :dark="dark"
            :number="'20K'"
            :text="'Feedback'"
          />
          <count-card
            data-aos-delay="700"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            :dark="dark"
            :number="'5,000+'"
            :text="'Workers'"
          />
          <count-card
            data-aos-delay="800"
            data-aos-once="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            :dark="dark"
            :number="'70+'"
            :text="'Contributors'"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" md="10">
      <v-card
        max-width="600"
        outlined
        style="border: 1px dashed #e90000"
        rounded="md"
        class="mx-auto py-4"
      >
        <v-card-text class="d-flex flex-column flex-sm-row align-cneter">
          <div class="d-flex flex-column text-center text-sm-left">
            <span class="text-h6 text-sm-h5 font-weight-bold dark--text"
              >Have any question about us?</span
            >
            <span class="text-subtitle-2 font-weight-light dark--text"
              >Don't hesitate to contact us</span
            >
          </div>
          <v-spacer></v-spacer>
          <div class="mt-3 mt-sm-0 text-center text-sm-left">
            <v-btn
              to="/contact"
              x-large
              depressed
              tile
              class="bg-gradient white--text text-subtitle-2 ma-0 px-10"
            >
              Contact Us
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import countCard from "./countCard.vue";
export default {
  components: { countCard },
  data: () => ({}),
};
</script>

<style scoped>
.bg {
  background: url("/bg/map.png");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>