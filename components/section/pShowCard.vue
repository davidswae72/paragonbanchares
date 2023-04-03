<template>
  <v-card flat rounded="lg" height="100%" width="100%">
    <v-img
      :src="src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="100%"
    >
      <v-card-text>
        <v-chip
          v-if="chip"
          style="opacity: 0.91"
          large
          label
          class="
            rounded-lg
            text3
            white--text
            font-weight-medium
            text-subtitle-1
            px-4
          "
        >
          {{ name }}
        </v-chip>
      </v-card-text>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "/logo/lilcube.png",
    },
    name: {
      type: String,
      default: "",
    },
    chip: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>
</style>
