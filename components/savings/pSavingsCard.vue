<template>
  <p-dotted-card :max-width="300" :styles="'flex-column '" :action="action">
    <div style="width:100%" class="d-flex align-center text-subtitle-1">
      <v-icon :color="color" size="50" left>
        {{ icon }}
      </v-icon>
      <v-spacer />
      <v-chip v-if="label" :color="color" class="font-weight-bold" label>
        2
      </v-chip>
    </div>
    <div style="width:100%">
      <div :class="`${color}--text`" class="text-h6 font-weight-bold my-2">
        {{ title }}
      </div>
      <div class="text-body-2 tex2--text">
        {{ description }}
      </div>
      <v-fade-transition>
        <div v-if="showBal" class="my-2">
          <div v-if="amount > 0">
            <span class="text-h5 text2--text font-weight-bold " @click="showBal = false">{{ amount | currency }}</span>
          </div>
          <div v-else>
            <span @click="showBal = false"> ₦0</span><span class="my-2 font-weight-bold text-h5 text2--text" @click="showBal = false">.00</span>
          </div>
        </div>
        <div v-else class="mb-n2 mt-2 text-h5 text2--text font-weight-bold " @click="showBal = true">
          ******
        </div>
      </v-fade-transition>
    </div>
  </p-dotted-card>
</template>

<script>
import pDottedCard from '../other/pDottedCard.vue'
export default {
  components: { pDottedCard },
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
    color: {
      type: [String, Array, Object],
      default: 'secondary'
    },
    icon: {
      type: [String, Array, Object],
      default: ''
    },
    label: {
      type: [String, Number],
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    amount: {
      type: [String, Number],
      default: 0
    },
    action: Function
  },
  data: () => ({
    showBal: true
  })
}
</script>

<style>

</style>
