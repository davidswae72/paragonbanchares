<template>
  <v-list-item class="ml-n4 ml-sm-0 light--text">
    <v-list-item-avatar style="border:2px solid #ffff" size="55" @click="to('/dashboard/account')">
      <v-img :src="'/logo/default.png'" />
    </v-list-item-avatar>

    <v-list-item-content class="">
      <v-list-item-title class=" text-md-h5 font-weight-bold text-capitalize" @click="to('/dashboard/account')">
        {{ user && user.firstName }} {{ user && user.lastName }}
      </v-list-item-title>
      <v-list-item-subtitle>
        <span v-if="activePage.toLowerCase() === 'account'">
          {{ user && user.email }}
        </span>
        <span v-else>Hello, wash your hands 👋</span>
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'PProfile',

  computed: {
    ...mapGetters({ user: 'authentication/getUser', activePage: 'controller/getActivePage' })
  },
  methods: {
    to (href) {
      this.$router.push(href)
    }
  }

}
</script>

<style>

</style>
