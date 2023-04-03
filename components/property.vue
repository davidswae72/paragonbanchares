<template>
  <v-row v-if="show" no-gutters class="ma-0">
    <v-col cols="12">
      <v-card outlined tile>
        <v-card-text class="d-flex text-subtitle-1 text-uppercase">
          <span>Properties</span>
          <v-spacer />
          <v-btn depressed class="primary text-subtitle-2 font-weight-regular">
            <v-icon :left="$vuetify.breakpoint.mdAndUp">
              mdi-plus
            </v-icon>
            <span class="d-none d-md-flex">Add New </span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      cols="12"
      class="d-flex flex-wrap"
    >
      <v-card
        v-for="(property, i) in properties"
        :key="i"
        flat
        class="pa-0 transparent"
        @click="toggle(property, false)"
      >
        <p-dotted-card
          :nofitication="property.nofitication"
          :min-width="$vuetify.breakpoint.xsOnly ? 100 : 150"
          :min-height="$vuetify.breakpoint.xsOnly ? 100 : 150"
        >
          <v-icon class="mx-auto" size="60">
            {{ property.icon }}
          </v-icon>
        </p-dotted-card>
      </v-card>
    </v-col>
  </v-row>

  <view-property v-else :property="property" :toggle="toggle" />
</template>

<script>
import ViewProperty from './viewProperty.vue'

import PDottedCard from '~/components/other/pDottedCard.vue'
export default {
  components: { PDottedCard, ViewProperty },

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

  data: () => ({
    show: true,
    property: null
  }),

  computed: {
    properties () {
      return [
        {
          name: 'Facebook',
          icon: 'mdi-facebook',
          nofitication: 2,
          link: 'https://eselli.com/social-facebook:'
        },
        {
          name: 'Twitter',
          icon: 'mdi-twitter',
          nofitication: 0,
          link: 'https://eselli.com/social-twitter:'
        },
        {
          name: 'Google',
          icon: 'mdi-gmail',
          nofitication: 5,
          link: 'https://eselli.com/social-gmail:'
        },
        {
          name: 'Instagram',
          icon: 'mdi-instagram',
          nofitication: 5,
          link: 'https://eselli.com/social-gmail:'
        }

      ]
    }
  },
  methods: {

    toggle (property, state) {
      this.property = property
      this.show = state
      console.log(this.property)
    }

  }
}
</script>

<style>

</style>
