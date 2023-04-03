<template>
  <v-dialog
    v-model="modal"
    persistent
    max-width="800"
    max-height="800"
  >
    <v-card
      max-width="800"
      max-height="800"
      class="rounded-lg"
    >
      <v-btn
        depressed
        class="my-4 "
        color="primary"
        fab
        small
        absolute
        right
        @click="toggle(false, '')"
      >
        <v-icon size="20">
          mdi-close
        </v-icon>
      </v-btn>
      <v-card-text class="pa-0">
        <v-img contain :src="image" class="rounded-lg" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },

    modal: {
      type: Boolean,
      default: false
    },
    toggle: {
      type: Function
    }
  },
  data: () => ({
    size: 70
  }),

  methods: {

  }

}
</script>

<style>

</style>
