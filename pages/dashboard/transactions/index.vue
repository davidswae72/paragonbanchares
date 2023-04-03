<template>
  <v-container>
    <v-row justify="center" class="ma-0">
      <v-col cols="12" md="11" class="pa-0">
        <x-transaction />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import xTransaction from '~/components/other/xTransaction.vue'
export default {
  name: 'Transactions',
  components: { xTransaction },
  layout: 'dashboard',
  data: () => ({}),
  computed: {},
  methods: {}

}
</script>

<style>

</style>
