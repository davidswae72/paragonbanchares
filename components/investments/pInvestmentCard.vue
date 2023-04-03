<template>
  <v-card style="overflow:hidden" flat min-width="300" max-width="300" class=" rounded-lg relative ma-2">
    <v-card-text class="pInvestmentCard">
      <div style="z-index:2" class="parent">
        <v-tooltip color="text3" max-width="160" bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar
              style="border:1px solid #dddd"
              size="30"
              class=""
              v-bind="attrs"
              v-on="on"
            >
              <img :src="parent" alt="bbmpcs.ng">
            </v-avatar>
          </template>
          <span class="font-weight-light">From Brass & Books MPCS LTD.</span>
        </v-tooltip>
      </div>

      <v-avatar style="border:1px solid #dddd; z-index:2" tile size="90" class="rounded-lg ">
        <img :src="logo" :alt="name">
      </v-avatar>
      <div class="mt-3">
        <div class="">
          <span class="d-block text-subtitle-1 text-sm-h6 text3--text font-weight-bold text-uppercase">
            Growth Fund
          </span>
          <span class="d-block mt-n1 text-caption grey--text text-lighten-1 font-weight-bold text-uppercase">
            Brass & Books MPCS LTD
          </span>
        </div>
        <div class="mt-2 d-flex justify-space-between">
          <div>
            <div class="text3--text font-weight-bold text-subtitle-1 text-sm-h6">
              {{ 1500000 | currency }}
            </div>
            <v-chip small outlined>
              Minimum
            </v-chip>
          </div>
          <div class="text-right">
            <div class="success--text font-weight-bold text-h6 text-sm-h5">
              46%
            </div>
            <span class="text-body-2 font-weight-medium mt-n2">
              12 Months
            </span>
          </div>
        </div>
        <div class="mt-4">
          <v-btn
            text
            style="z-index:3"
            color="secondary"
            class="text-subtitle-1 font-weight-light rounded-lg text-capitalize"
            @click="action"
          >
            View Details
            <v-icon right>
              mdi-arrow-right
            </v-icon>
          </v-btn>
        </div>
      </div>
      <p-pattern style="z-index:0" />
    </v-card-text>
  </v-card>
</template>

<script>
import pPattern from '../other/pPattern.vue'
export default {
  name: 'PInvestmentCard',
  components: { pPattern },
  filters: {
    currency (val) {
      if (val) {
        val = parseFloat(val)
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
    parent: {
      type: String,
      default: '/logo/brass&books.png'
    },
    logo: {
      type: String,
      default: '/logo/brass&books.png'
    },
    name: {
      type: String,
      default: '/logo/brass&books.png'
    },
    from: {
      type: String,
      default: ''
    },
    amount: {
      type: [String, Number],
      default: 0
    },
    interest: {
      type: [String, Number],
      default: ''
    },
    duration: {
      type: [String, Number],
      default: ''
    },
    action: {
      type: Function,
      default: () => {
        alert('action clicked')
      }
    }
  },

  methods: {
  }

}
</script>

<style>

.parent{
  position:absolute;
  top:.5rem;
  right:.5rem
}

.pInvestmentCard {
  position:relative;
  border: 2px dotted rgba(204, 200, 223, 0.867);
  transition: all .3s ease-in-out;
  z-index:2
}
.pInvestmentCard:hover{
  border: 1px solid #6800EC;
}
</style>
