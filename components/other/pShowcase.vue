<template>
  <VueSlickCarousel v-bind="slideSettings">
    <v-card
      v-for="(ad, i) in ads"
      :key="i"
      flat
      min-width="300"
      max-width="400"
      color="transparent"
      style="border-radius:1rem"
      :to="ad.to"
      class="mr-4"
      @click="ad.action"
    >
      <v-img
        max-height="100"
        min-width="300"
        max-width="400"
        contain
        :src="ad.image"
        :alt="ad.name"
        class="ma-0"
      />
    </v-card>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'PShowcase',
  components: { VueSlickCarousel },
  computed: {
    slideSettings () {
      return {
        arrows: false,
        autoplay: true,
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: this.$vuetify.breakpoint.xsOnly ? 1 : 2,
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
