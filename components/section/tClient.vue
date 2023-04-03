<template>
  <v-row justify="center" class="ma-0 bg-gradient lighten-5 py-16">
    <p-pattern style="opacity: 0.4" />

    <v-col cols="12" md="8" class="text-center">
      <div
        class="
          text-h5 text-capitalize
          white--text
          font-weight-bold
          text-sm-h3
          mb-2
        "
      >
        What customers
        <span class="accent--text mx-1"> say abouts</span>
        Us
      </div>
      <v-divider
        style="width: 100px; padding: 0.5px"
        class="accent mb-6 my-4 ma-auto"
      ></v-divider>
      <!-- <p
        class="
          text-subtitle-2 text--text text-sm-subtitle-1
          font-weight-light
          mb-2
        "
      >
        To start trading and making profit in our platform requires no
        <br class="d-none d-sm-block" />
        professional skills. In just three easy steps you are a millionaire.
      </p> -->
    </v-col>
    <v-col cols="12" md="10" class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-col v-for="(data, i) in clients" :key="i" cols="12" sm="6" class="">
          <v-card
            outlined
            style="border: 1px dashed #e90000"
            color="transparent"
            class="px-0"
          >
            <v-card-text class="d-flex align-center justify-space-between pr-0">
              <v-avatar
                :size="$vuetify.breakpoint.xsOnly ? 70 : 100"
                style="border: 3px solid #e90000"
                color="accent"
                class="mr-4"
              >
                <v-img :src="data && data.image"></v-img>
              </v-avatar>
              <div>
                <v-icon size="70" color="accent">
                  mdi-format-quote-open
                </v-icon>
                <div
                  class="
                    white--text
                    font-weight-light
                    text-subtitle-2 text-sm-subtitle-1
                  "
                >
                  {{ data && data.description }}
                </div>
                <div
                  class="
                    text-subtitle-1 text-sm-h6
                    white--text
                    font-weight-medium
                    my-1
                  "
                >
                  {{ data && data.name }}
                </div>
                <div class="text-subtitle-2 text-sm-subtitle-1 accent--text">
                  {{ data && data.occupation }}
                </div>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import pPattern from "../other/pPattern.vue";
export default {
  components: { pPattern },
  data: () => ({
    clients: [
      {
        delay: 500,
        image: "/people/pic1.jpeg",
        name: " Adele Lucy",
        occupation: " Courier",
        description:
          "For more than two decades I've been banking with Paragon Banchares Bank. To me the customer service is top notch you know.",
      },
      {
        delay: 600,
        image: "/people/pic5.jpeg",
        name: "John Smith",
        occupation: "Event Planner",
        description:
          "One thing very outstanding about Paragon Banchares Bank is the loan programm. For once I paid back a loan without being under pressure.",
      },
    ],
  }),
};
</script>

<style scoped>
</style>