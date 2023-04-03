<template>
  <v-card flat tile class="transparent">
    <v-card-text class="d-flex flex-column justify-center align-center">
      <div
        :class="dark ? 'white--text' : 'accent--text '"
        class="text-h4 text-md-h3 font-weight-bold"
      >
        {{ number }}
      </div>
      <div
        :class="dark ? 'color' : 'dark--text'"
        style="line-height: 1.5"
        class="
          ml-2
          text-capitalize
          font-weight-light
          text-center text-subtitle-2 text-sm-subtitle-1
        "
      >
        {{ text }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    number: [Number, String],
    text: String,
    dark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.color {
  color: #ffffffa8;
}
</style>
