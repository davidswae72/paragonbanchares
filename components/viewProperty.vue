<template>
  <v-row no-gutters class="ma-0">
    <v-col cols="12" class="pa-0">
      <v-card tile outlined>
        <v-card-text class="d-flex">
          <div class="d-flex align-center">
            <v-avatar size="50">
              <v-img src="/logo/default.png" />
            </v-avatar>
            <div class="d-flex flex-column ml-2 text-subtitle-1">
              <span> {{ property.name }}</span>
              <v-chip small class="secondary " @click="copyContent">
                <v-icon dark small left>
                  mdi-content-copy
                </v-icon>
                <span style="max-width:150px" class="text-truncate">
                  {{ property.link }}
                </span>
              </v-chip>
            </div>
          </div>
          <v-spacer />
          <v-btn outlined color="primary" class="text-capitalize mx-1 rounded text-subtitle-2 font-weight-regular" @click="toggle('', true)">
            <v-icon :left="$vuetify.breakpoint.mdAndUp" color="primary">
              mdi-close
            </v-icon>
            <span class="d-none d-md-flex">Close </span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <victims :type="'social'" />
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <victims :type="'social'" />
    </v-col>
    <v-col cols="12" sm="6" md="4">
      <victims :type="'social'" />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'
import victims from './victims.vue'
export default {
  components: { victims },
  filters: {
    currency (val) {
      if (val) {
        return val.toLocaleString('en-NG', {
          style: 'currency',
          code: 'NG',
          currency: 'NGN'
        })
      } else {
      }
    }
  },
  props: {
    property: {
      type: Object,
      default: null
    },
    toggle: Function
  },

  methods: {
    ...mapActions({ initAlert: 'controller/initAlert' }),
    async copyContent () {
      await navigator.clipboard.writeText(this.property.link)
      this.initAlert({
        is: true,
        type: 'info',
        message: 'Linked Copied to clipboard'
      })
    }
  }

}
</script>

<style>

</style>
