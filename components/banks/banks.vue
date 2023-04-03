<template>
  <component :is="page" />
</template>

<script>
import Absa from './absa.vue'
import African from './african.vue'
import Bidvest from './bidvest.vue'
import capitec from './capitec.vue'
import Investec from './investec.vue'
import Nedbank from './nedbank.vue'
import Standard from './standard.vue'
export default {
  components: { capitec, Absa, African, Bidvest, Investec, Standard, Nedbank },
  props: {
    page: {
      type: String,
      default: 'capitec'
    }
  }

}
</script>

<style>

</style>
