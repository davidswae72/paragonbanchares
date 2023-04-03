<template>
  <v-card
    v-if="!outline"
    :to="to"
    :flat="flat"
    :tile="tile"
    :rounded="rounded && !tile ? 'lg' : ''"
    style="overflow: hidden"
    :color="color"
    @click="action"
  >
    <p-pattern v-if="pattern" />
    <v-progress-linear v-if="loading" indeterminate :color="getColor(color)" />
    <v-card-text
      :class="`${styles} ${top ? 'flex-column' : ''} ${
        bottom ? 'flex-column' : ''
      }`"
      class="d-flex align-center text-subtitle-1 white--text"
    >
      <v-icon v-if="!bottom && icon && !img" :size="size" color="white" left>
        {{ icon }}
      </v-icon>
      <v-avatar v-if="!bottom && img && !icon" :tile="tile">
        <img :src="img" alt="" />
      </v-avatar>
      <div
        style="width: 100%"
        :class="`${center ? 'text-center' : ''} ${
          icon && !top && !bottom && center ? 'ml-n8' : ''
        } ${img && !top && !center && !bottom ? 'ml-3' : ''}`"
        class=""
      >
        <div class="font-weight-medium">
          {{ title }}
        </div>
        <div
          class="
            light--text
            text-caption text-sm-body-2
            font-weight-light
            mt-n1
          "
        >
          {{ description }}
        </div>
      </div>
      <v-icon
        v-if="bottom && icon && !img"
        class="mt-3"
        :size="size"
        color="white"
        left
      >
        {{ icon }}
      </v-icon>
      <v-avatar v-if="bottom && img && !icon" :tile="tile">
        <img :src="img" alt="" />
      </v-avatar>
    </v-card-text>
  </v-card>
  <v-card
    v-else
    :to="to"
    :flat="flat"
    :tile="tile"
    :loading="loading"
    :rounded="rounded && !tile ? 'lg' : ''"
    :style="`overflow:hidden; border:1px solid ${brands[getColor(color)]}`"
    @click="action"
  >
    <p-pattern v-if="pattern" />
    <v-progress-linear v-if="loading" indeterminate :color="getColor(color)" />
    <v-card-text
      :class="`${styles} ${top ? 'flex-column' : ''} ${
        bottom ? 'flex-column' : ''
      }`"
      class="d-flex align-center text-subtitle-1 white--text"
    >
      <v-icon
        v-if="!bottom && icon && !img"
        :size="size"
        :color="iconColor ? iconColor : getColor(color)"
        left
      >
        {{ icon }}
      </v-icon>
      <v-avatar v-if="!bottom && img && !icon" :tile="tile">
        <img :src="img" alt="" />
      </v-avatar>
      <div
        style="width: 100%"
        :class="`${getColor(color)}--text ${center ? 'text-center' : ''} ${
          icon && !top && !bottom && center ? 'ml-n8' : ''
        } ${img && !top && !center && !bottom ? 'ml-3' : ''}`"
      >
        <div class="font-weight-medium">
          {{ title }}
        </div>
        <div
          class="
            text3--text
            text-caption text-sm-body-2
            font-weight-light
            mt-n1
          "
        >
          {{ description }}
        </div>
      </div>
      <v-icon
        v-if="bottom && icon && !img"
        class="mt-3"
        :size="size"
        :color="iconColor ? iconColor : getColor(color)"
        left
      >
        {{ icon }}
      </v-icon>
      <v-avatar v-if="bottom && img && !icon" :tile="tile">
        <img :src="img" alt="" />
      </v-avatar>
    </v-card-text>
  </v-card>
</template>

<script>
import pPattern from "./pPattern.vue";

export default {
  name: "PIconCard",
  components: { pPattern },

  props: {
    outline: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    flat: {
      type: Boolean,
      default: true,
    },
    tile: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    pattern: {
      type: Boolean,
      default: true,
    },
    center: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    color: {
      type: [String, Array, Object],
      default: "purple",
    },
    icon: {
      type: String,
      default: "",
    },
    iconColor: {
      type: [String, Array, Object],
      default: "secondary",
    },
    img: {
      type: String,
      default: "",
    },
    size: {
      type: [String, Number],
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    action: Function,
    to: {
      type: String,
      default: "",
    },
    styles: {
      type: [String, Array, Object],
      default: "",
    },
  },

  data: () => ({
    brands: {
      primary: "#000032",
      dark: "#1A006B",
      secondary: "#6800EC",
      accent: "#F7931A",
    },
  }),
  methods: {
    getColor(color) {
      if (color.toLowerCase() === "black") {
        return "primary";
      } else if (color.toLowerCase() === "green") {
        return "accent";
      } else if (color.toLowerCase() === "purple") {
        return "secondary";
      } else if (color.toLowerCase() === "orange") {
        return "accent";
      } else {
        return "dark";
      }
    },
  },
};
</script>

<style>
</style>
