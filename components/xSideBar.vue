<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    right
    width="400"
    :bottom="$vuetify.breakpoint.xsOnly"
    temporary
    :permanent="drawer"
  >
    <v-progress-linear
      v-if="loading"
      indeterminate
      color="secondary"
    />
    <v-card flat class="py-4">
      <v-card-title class="text-h6 font-weight-medium text3--text d-flex align-start">
        <slot name="header" />
        <v-spacer />
        <v-icon color="primary" right @click="toggle(false)">
          mdi-close
        </v-icon>
      </v-card-title>
      <v-divider :class="color" />
      <v-card-text>
        <slot />
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'PSideBar',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    drawer: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    toggle: Function
  },
  data: () => ({

  }),
  computed: {
    ...mapGetters({ sideBar: 'controller/getSideBar' })
  },
  methods: {
    ...mapMutations({ setState: 'controller/setState' })

  }
}
</script>

<style>

</style>
