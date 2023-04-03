<template>
  <div class="pa-2">
    <v-slide-y-transition class="py-0">
      <v-alert
        v-if="banner.is"
        :color="banner.type"
        prominent
        text
        border="left"
        class="ma-0"
      >
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex flex-column ">
            <span class="text-subtitle-1 font-weight-medium">{{ banner.title }}</span>
            <span class="text-subtitle-2 text3--text text-sm-subtitle-1 lead font-weight-light"> {{ banner.message }}</span>
          </div>
          <v-btn v-if="button.is" :to="button.link" fab text :color="banner.type">
            <v-icon v-if="(button.type).toLowerCase() === 'icon'" @click="close(false)">
              {{ button.icon }}
            </v-icon>
            <span v-if="(button.type).toLowerCase() === 'button'" :class="`${color}--text`">
              {{ button.text }}
            </span>
          </v-btn>
        </div>
      </v-alert>
    </v-slide-y-transition>
  </div>
</template>

<script>
export default {
  name: 'PBanner',
  props: {
    color: {
      type: String,
      default: 'error'
    },
    toggle: {
      type: Function,
      default (data, value) {
        data.is = value
        console.log(data, value)
      }
    },
    banner: {
      type: Object,
      default: () => ({
        is: true,
        type: 'error',
        title: 'Title',
        message: 'Message'
      })
    },

    button: {
      type: Object,
      default: () => ({
        is: true,
        type: 'icon',
        icon: 'mdi-close',
        link: '#',
        text: 'View'
      })
    }
  },

  data: () => ({
    one: true
  }),
  methods: {
    close (state) {
      this.toggle(this.banner, state)
      console.log(this.banner)
    }
  }

}
</script>

<style>

</style>
