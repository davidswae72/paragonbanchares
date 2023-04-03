<template>
  <VueSlickCarousel v-if="$vuetify.breakpoint.xsOnly" v-bind="slideSettings">
    <p-investment-card />
    <p-investment-card />
    <p-investment-card />
  </VueSlickCarousel>
  <p-scroll v-else>
    <p-investment-card />
    <p-investment-card />
    <p-investment-card />
  </p-scroll>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import PScroll from '../other/pScroll.vue'
import PInvestmentCard from './pInvestmentCard.vue'
export default {
  name: 'PShowcase',
  components: { VueSlickCarousel, PInvestmentCard, PScroll },
  computed: {
    slideSettings () {
      return {
        arrows: false,
        autoplay: true,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: this.$vuetify.breakpoint.xsOnly ? 1 : 3,
        slidesToScroll: 1
      }
    },
    ads () {
      return [
        {
          name: 'Invest in Growth Fund',
          image: '/ads/growthfund.png',
          action: () => {
            this.initAlert({
              is: true,
              type: 'info',
              message: 'Invest in Growth Fund'
            })
          },
          to: ''
        },
        {
          name: 'Make Savings a habit',
          image: '/ads/savings.png',
          action: () => {
            this.initAlert({
              is: true,
              type: 'info',
              message: 'Make Savings a habit'
            })
          },
          to: ''
        },
        {
          name: 'Invest in Palm Oil',
          image: '/ads/oyel250.png',
          action: () => {
            this.initAlert({
              is: true,
              type: 'info',
              message: 'Invest in Palm Oil'
            })
          },
          to: ''
        },
        {
          name: 'Invest in Palm Oil',
          image: '/ads/oyel500.png',
          action: () => {
            this.initAlert({
              is: true,
              type: 'info',
              message: 'Invest in Palm Oil'
            })
          },
          to: ''
        },
        {
          name: 'Refer & Earn ₦500',
          image: '/ads/refer.png',
          action: () => {
            this.initAlert({
              is: true,
              type: 'info',
              message: 'Refer & Earn ₦500'
            })
          },
          to: ''
        }
      ]
    }
  }

}
</script>

<style>

</style>
