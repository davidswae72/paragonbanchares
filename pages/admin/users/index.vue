<template>
  <v-container fluid class="pa-0">
    <v-row justify="center" no-gutters class="ma-0">
      <v-col v-if="!view" cols="12">
        <v-data-table
          :search="search"
          loading-text="Loading... Please wait"
          :loading="loading.users"
          :headers="headers"
          :items="allUsers"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title class="text-subtitle-1 d-flex align-center">
                USERS
              </v-toolbar-title>
              <v-divider class="mx-4" inset vertical />
              <v-chip class="ml-1" color="secondary" label outlined>
                {{ allUsers.length }}
              </v-chip>

              <v-spacer />
              <v-text-field
                v-model="search"
                prepend-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              />
              <!-- <v-spacer></v-spacer>
                        <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Investment</v-btn> -->
            </v-toolbar>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn
              color="secondary"
              outlined
              small
              @click="openView( true, item)"
            >
              view
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
      <v-col v-else cols="12">
        <view-user :user="user" :toggle="openView" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import viewUser from '~/components/viewUser.vue'

export default {
  name: 'Users',
  components: { viewUser },
  layout: 'admin',
  filters: {
    currency (val) {
      if (val) {
        val = parseInt(val)
        return val.toLocaleString('en-US', {
          style: 'currency',
          code: 'US',
          currency: 'USD'
        })
      } else {
      }
    }
  },
  data: () => ({
    drawer: false,
    view: false,
    user: '',
    search: '',
    headers: [
      {
        text: 'First Name',
        align: 'start',
        sortable: false,
        value: 'firstName'
      },
      {
        text: 'Last Name',
        value: 'lastName'
      },

      {
        text: 'Email',
        value: 'email'
      },
      {
        text: 'Account Balance',
        value: 'accBalance'
      },
      {
        text: 'Join Date',
        value: 'joinDate'
      },

      {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }
    ]
  }),
  computed: {
    ...mapGetters({ state: 'admin/getState', loading: 'admin/getLoading' }),
    allUsers () {
      const users = [...this.state('users')]

      return users
    }
  },
  methods: {
    toggleDrawer (state) {
      this.drawer = state
    },
    openView (state, user) {
      this.user = user
      this.view = state
      console.log(user)
    }
  }
}
</script>

<style>

</style>
