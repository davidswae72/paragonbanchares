<template>
  <v-card
    flat
    class="mx-1 mx-sm-2 my-2 cardHover rounded-lg"
    :to="to"
    :max-height="maxHeight"
    :min-height="minHeight"
    :max-width="maxWidth"
    :min-width="minWidth"
    :disabled="disabled"
    @click="action"
  >
    <v-badge
      v-if="nofitication"
      :content="nofitication"
      :value="nofitication"
      color="accent"
      overlap
      class="index"
    >
      <v-card-text :style="`max-height:${maxHeight}px; min-height:${minHeight}px; max-width:${maxWidth}px; min-width:${minWidth}px `" :class="`${styles} `" class="dottedCardHover d-flex align-center rounded-lg  dottedCard">
        <slot />
      </v-card-text>
    </v-badge>

    <v-card-text v-else :style="`max-height:${maxHeight}px; min-height:${minHeight}px; max-width:${maxWidth}px; min-width:${minWidth}px `" :class="`${styles} `" class="dottedCardHover d-flex align-center rounded-lg  dottedCard">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {

  props: {

    color: {
      type: String,
      default: ''
    },
    maxWidth: {
      type: [String, Number],
      default: ''
    },
    minWidth: {
      type: [String, Number],
      default: '100'
    },
    maxHeight: {
      type: [String, Number],
      default: ''
    },
    minHeight: {
      type: [String, Number],
      default: ''
    },

    to: {
      type: String,
      default: ''
    },
    hover: {
      type: Boolean,
      default: true
    },
    nofitication: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    styles: {
      type: [String, Array, Object],
      default: ''
    },
    action: Function
  },
  data: () => ({
    colors: {
      primary: '#2B2B2B',
      dark: '#1A006B',
      secondary: '#F17A0B',
      accent: '#0A52DE',

      error: '#EB5757',
      success: '#0FC236'
    }
  })

}
</script>

<style>

.dottedCard {
  position:relative;
  border: 2px dotted rgba(204, 200, 223, 0.867);
  transition: all .3s ease-in-out;
  z-index:2
}
.dottedCardHover:hover, .dottedCardHover:focus{
  border: 1.5px solid #F17A0B;
}

.dottedCardHover .icon{
  color: #555A68;
}
.dottedCard:hover .icon{
  color: #F17A0B;
}

.index {
  z-index:4
}
</style>
