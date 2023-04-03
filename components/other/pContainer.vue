<template>
  <v-card
    :tile="tile"
    :max-height="maxHeight"
    width="100%"
    :flat="!border"
    :outlined="border"
    :class="!tile ? 'rounded-md' : ''"
  >
    <v-progress-linear
      v-if="loading"
      :color="loadingColor"
      indeterminate
    />
    <v-card-title :class="small ? 'pa-2' : ''" class="text-subtitle-2   d-flex font-weight-light text-uppercase">
      <span>{{ title }}</span>
      <v-spacer />
      <slot name="header" />
    </v-card-title>
    <v-divider v-if="divider" />
    <v-card-text :class="styles">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PContnainer',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    divider: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    small: {
      type: Boolean,
      default: false
    },
    tile: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    loadingColor: {
      type: String,
      default: 'primary'
    },
    styles: [String, Array, Object],
    maxHeight: [String, Number],
    maxWidth: [String, Number]
  }

}
</script>

<style>

</style>
