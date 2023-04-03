<template>
  <v-row
    justify="center"
    align="center"
    class="white py-6 py-md-16 px-4 secondary--text ma-0"
  >
    <v-col
      data-aos="fade-right"
      data-aos-delay="700"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      cols="12"
      md="6"
    >
      <v-card tile flat class="transparent px-md-6">
        <v-card-title class="text-h5 font-weight-bold text-sm-h3 mb-sm-4">
          <div class="text-center dark--text text-sm-left">
            Flexible and
            <span class="accent--text mx-1"> Quick Business </span> Loans For
            You
          </div>
        </v-card-title>
        <v-card-text
          class="
            text-subtitle-2 text-sm-subtitle-1
            font-weight-light
            text-center text-sm-left
            dark--text
          "
        >
          <p class="mb-6">
            A competitive interest rate, favourable loan conditions and expert
            advice if you need it. Our loans give you peace of mind. All you
            need to do to apply for a loan is go online.
          </p>

          <v-btn
            to="/register"
            x-large
            depressed
            tile
            class="bg-gradient white--text text-subtitle-2 ma-0 px-10"
          >
            Get Started
          </v-btn>
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
        style="position: relative"
      >
        <v-card-text>
          <v-img
            :height="$vuetify.breakpoint.xsOnly ? 300 : 500"
            src="/bg/4.png"
            contain
            class="
              rounded-xl
              animate__animated animate__pulse animate__slower animate__infinite
            "
          />
          <v-img
            :height="$vuetify.breakpoint.xsOnly ? 100 : 200"
            src="/bg/5.png"
            contain
            class="
              rounded-xl
              leftImage
              animate__animated animate__pulse animate__slower animate__infinite
            "
          />
          <v-img
            :height="$vuetify.breakpoint.xsOnly ? 100 : 200"
            src="/bg/6.png"
            contain
            class="
              rounded-xl
              rightImage
              animate__animated animate__pulse animate__slower animate__infinite
            "
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {};
</script>

<style scope>
.leftImage {
  position: absolute;
  bottom: 0;
  left: -4rem;
}

.rightImage {
  position: absolute;
  top: 0;
  right: -4rem;
}
</style>