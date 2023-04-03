<template>
  <v-row no-gutters style class="pheader purple mt-n16">
    <v-col cols="12" class="pa-0">
      <v-card
        :height="height"
        class="relative"
        :dark="dark"
        flat
        tile
        :color="color"
      >
        <p-pattern />
        <v-card-text style="height: 100%" :class="styles">
          <v-img
            v-if="pcard"
            class="ttubCard"
            contain
            width="330"
            height="280"
            src="/bg/ttubCard.png"
          />
          <slot />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import pPattern from "./pPattern.vue";
export default {
  name: "PHeader",
  components: { pPattern },
  props: {
    styles: [String, Array, Object],
    color: {
      type: String,
      default: "",
    },
    border: {
      type: String,
      default: "secondary",
    },
    height: {
      type: [String, Number],
      default: "300",
    },
    dark: {
      type: Boolean,
      default: true,
    },
    pcard: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.pheader {
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
}

.black {
  background: rgb(0, 0, 50);
  background: linear-gradient(51deg, rgb(14, 1, 87) 29%, rgb(1, 40, 146) 90%);
}

.black {
  background: rgb(43, 43, 43);
  background: linear-gradient(51deg, rgb(36, 36, 36) 29%, rgb(87, 87, 87) 90%);
}

.green {
  background: rgb(15, 194, 54);
  background: linear-gradient(51deg, rgb(5, 133, 37) 29%, rgb(3, 211, 48) 90%);
}

.orange {
  background: rgb(247, 141, 26);
  background: linear-gradient(
    51deg,
    rgba(247, 141, 26, 1) 29%,
    rgba(247, 185, 26, 1) 90%
  );
}
.purple {
  background: rgb(104, 0, 236);
  background: linear-gradient(
    51deg,
    rgb(50, 1, 116) 29%,
    rgba(104, 0, 236, 1) 90%
  );
}

.ttubCard {
  position: absolute;
  bottom: -10rem;
  right: -6rem;
}

@media only screen and (max-width: 600px) {
  .ttubCard {
    bottom: -13rem;
    right: -13rem;
  }
}
</style>
