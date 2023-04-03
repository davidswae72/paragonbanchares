<template>
  <v-card flat color="transparent ">
    <v-card-text class="">
      <v-row no-gutters>
        <v-col cols="12" class="my-2 ">
          <div class="d-flex flex-column text-center mb-1">
            <div class="mb-2 text-subtitle-1 text-sm-h6 light--text font-weight-medium d-flex align-center justify-center">
              <v-icon left>
                {{ icon }}
              </v-icon>
              <span>{{ name }}</span>
            </div>
            <div class="text-h4 white--text font-weight-bold">
              <v-fade-transition>
                <div v-if="showBal">
                  <div v-if="amount > 0">
                    <span class="" @click="showBal = false">{{ amount | currency }}</span>
                  </div>
                  <div v-else>
                    <span @click="showBal = false"> ₦0</span><span class="text-h5 light--text" @click="showBal = false">.00</span>
                  </div>
                </div>
                <div v-else class="mb-n2" @click="showBal = true">
                  ******
                </div>
              </v-fade-transition>
            </div>
          </div>
        </v-col>
        <v-col v-if="buttons.length" class="text-center my-3 d-flex align-center justify-center">
          <div>
            <v-btn
              v-for="(button, i) in buttons"
              :key="i"
              :to="button.link"
              depressed
              :fab="$vuetify.breakpoint.xsOnly"
              :color="`white ${button.color ? button.color : 'secondary'}--text text--darken-4`"
              class="text-subtitle-2 font-weight-normal mb-1 mx-2"
              @click="button.action"
            >
              <v-icon :color="button.color ? button.color : 'secondary'" size="24" :left="$vuetify.breakpoint.smAndUp" class="">
                {{ button.icon }}
              </v-icon>
              <span class="d-none d-sm-block ">{{ button.name }}</span>
            </v-btn>
            <!-- <span class="d-block d-sm-none text-caption ">Fund Wallet</span> -->
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PWallet',
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
    name: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    amount: {
      type: [Number, String],
      default: 0
    },
    buttons: {
      type: [Array],
      default: () => ([

      ])
    }
  },
  data: () => ({
    showBal: true
  })

}
</script>

<style>

</style>
