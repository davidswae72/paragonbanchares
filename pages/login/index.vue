<template>
  <v-container>
    <v-row justify="center" class="py-16">
      <v-col cols="12" class="text-center">
        <xlogin />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import xlogin from '~/components/xlogin.vue'
export default {
  components: { xlogin },
  layout: 'welcome',
  created () {
    // this.$router.push('/dashboard/home')
  }
}
</script>

<style></style>
