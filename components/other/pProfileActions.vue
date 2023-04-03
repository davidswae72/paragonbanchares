<template>
  <p-dotted-card :action="action" :to="to" :hover="hover" :styles="styles">
    <v-icon left :color="color" class="icon">
      {{ icon }}
    </v-icon>
    <div class="text-body-1 text2--text font-weight-medium ml-2">
      {{ title }}
    </div>
    <v-spacer />
    <v-icon right :color="color" class="icon">
      {{ iconRight }}
    </v-icon>
  </p-dotted-card>
</template>

<script>
import pDottedCard from './pDottedCard.vue'
export default {
  components: { pDottedCard },
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: 'mdi-chevron-right'
    },
    to: {
      type: String,
      default: ''
    },
    hover: {
      type: Boolean,
      default: true
    },
    styles: {
      type: [String, Array, Object],
      default: ''
    },
    action: Function
  },
  data: () => ({

  })

}
</script>

<style>

</style>
