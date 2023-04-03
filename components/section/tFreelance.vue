<template>
  <v-row
    justify="center"
    align="center"
    class="bg-gradient py-6 py-md-16 px-4 secondary--text ma-0"
  >
    <v-col
      data-aos="fade-right"
      data-aos-delay="700"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      cols="12"
      md="6"
    >
      <v-card dark tile flat class="transparent px-md-6">
        <v-card-title class="text-h5 font-weight-bold text-sm-h3 mb-sm-4">
          <div class="text-center text-sm-left">
            Freelancers,
            <span class="accent--text mx-1"> entrepreneurs, </span> and sole
            traders
          </div>
        </v-card-title>
        <v-card-text
          class="
            text-subtitle-2 text-sm-subtitle-1
            font-weight-light
            text-center text-sm-left
            white--text
          "
        >
          <p class="mb-6">
            Do more than just bank. Access your account from multiple platforms,
            transfer, request for quick loans and more.
          </p>

          <v-row
            class="d-flex white--text justify-content-between align-center"
          >
            <v-col
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              cols="12"
              sm="6"
              class="d-flex align-center py-2"
            >
              <v-btn
                rounded-md
                depressed
                block
                class="
                  d-flex
                  justify-start
                  align-center
                  white
                  accent--text
                  text--darken-2 text-subtitle-2
                  font-weight-light
                  text-capitalize
                "
              >
                <v-icon small left color="primary" class="px-2">
                  mdi-check
                </v-icon>
                Wire transfer
              </v-btn>
            </v-col>
            <v-col
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              cols="12"
              sm="6"
              class="d-flex align-center py-2"
            >
              <v-btn
                rounded-md
                depressed
                block
                class="
                  d-flex
                  justify-start
                  align-center
                  white
                  accent--text
                  text--darken-2 text-subtitle-2
                  font-weight-light
                  text-capitalize
                "
              >
                <v-icon small left color="primary" class="px-2">
                  mdi-check
                </v-icon>
                Full data privary compliance
              </v-btn>
            </v-col>
            <v-col
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              cols="12"
              sm="6"
              class="d-flex align-center py-2"
            >
              <v-btn
                rounded-md
                depressed
                block
                class="
                  d-flex
                  justify-start
                  align-center
                  white
                  accent--text
                  text--darken-2 text-subtitle-2
                  font-weight-light
                  text-capitalize
                "
              >
                <v-icon small left color="primary" class="px-2">
                  mdi-check
                </v-icon>
                100% transparent
              </v-btn>
            </v-col>
            <v-col
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              cols="12"
              sm="6"
              class="d-flex align-center py-2"
            >
              <v-btn
                rounded-md
                depressed
                block
                class="
                  d-flex
                  justify-start
                  align-center
                  white
                  accent--text
                  text--darken-2 text-subtitle-2
                  font-weight-light
                  text-capitalize
                "
              >
                <v-icon small left color="primary" class="px-2">
                  mdi-check
                </v-icon>
                Commitment Free
              </v-btn>
            </v-col>
            <v-col
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              cols="12"
              sm="6"
              class="d-flex align-center py-2"
            >
              <v-btn
                rounded-md
                depressed
                block
                class="
                  d-flex
                  justify-start
                  align-center
                  white
                  accent--text
                  text--darken-2 text-subtitle-2
                  font-weight-light
                  text-capitalize
                "
              >
                <v-icon small left color="primary" class="px-2">
                  mdi-check
                </v-icon>
                Real-time spending overview
              </v-btn>
            </v-col>
            <v-col
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
              cols="12"
              sm="6"
              class="d-flex align-center py-2"
            >
              <v-btn
                rounded-md
                depressed
                block
                class="
                  d-flex
                  justify-start
                  align-center
                  white
                  accent--text
                  text--darken-2 text-subtitle-2
                  font-weight-light
                  text-capitalize
                "
              >
                <v-icon small left color="primary" class="px-2">
                  mdi-check
                </v-icon>
                Debit Master card included
              </v-btn>
            </v-col>
          </v-row>
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
        dark
        tile
        flat
        :max-height="$vuetify.breakpoint.xsOnly ? 300 : 500"
        class="transparent rounded-xl"
      >
        <v-card-text>
          <v-img
            :height="$vuetify.breakpoint.xsOnly ? 300 : 500"
            src="/bg/1.png"
            contain
            class="rounded-xl"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style>
</style>