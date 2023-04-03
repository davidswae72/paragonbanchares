<template>
  <v-dialog
    v-model="dialog"
    max-width="400"
    :persistent="persistent"
  >
    <v-card class="rounded-lg pb-4">
      <v-progress-linear v-if="loading" indeterminate :color="color" />
      <v-card-title :class="`${color}--text`" class="text-h6   pt-6">
        {{ title }}
      </v-card-title>

      <v-card-text>
        <span v-html="description" />
      </v-card-text>

      <v-card-actions v-if="button.is">
        <v-spacer />

        <v-btn
          color="grey"
          text
          class="text-subtitle-2 font-weight-light px-4"
          @click="toggle(false)"
        >
          cancle
        </v-btn>

        <v-btn
          :color="color"
          depressed
          :loading="loading"
          class="text-subtitle-2 font-weight-light px-4"
          @click="action"
        >
          {{ button.name }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {

  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'secondary'
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    persistent: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    action: Function,
    button: {
      type: [Boolean, Array, Object],
      default: () => ({
        is: true,
        name: 'Confirm'
      })
    },
    toggle: Function
  }

}
</script>

<style>

</style>
