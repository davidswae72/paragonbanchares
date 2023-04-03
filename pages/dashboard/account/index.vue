<template>
  <v-container>
    <v-row justify="center" class="ma-0">
      <v-col cols="12" md="11" class="pa-0">
        <account :type="user && user.account.accType" :user="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import account from '~/components/account.vue'
export default {
  name: 'Account',
  components: { account },
  layout: 'dashboard',
  computed: {
    ...mapGetters({ user: 'authentication/getUser' })
  }

}
</script>

<style>

</style>
