<template>
  <v-container>
    <p-container :title="''">
      <v-data-table
        :search="search"
        loading-text="Loading... Please wait"
        :loading="loading.imsCode"
        :headers="headers"
        :items="imsCodes"
        class="mt-n6"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title class="text-subtitle-1 d-flex align-center text-uppercase">
              IMS Code
            </v-toolbar-title>
            <v-divider class="mx-4" inset vertical />
            <v-chip class="ml-1" color="secondary" label outlined>
              {{ imsCodes && imsCodes.length }}
            </v-chip>

            <v-spacer />
            <v-btn :loading="loading.generate" depressed color="primary" class="text-subtitle-2 font-weight-light mb-2" @click="generateCode">
              Generate Code
            </v-btn>
          </v-toolbar>
        </template>
        <template v-slot:item.used="{ item }">
          <v-chip small :color="getColor(item.used)" class="text-uppercase">
            {{ item.used ? 'Used' : 'Active' }}
          </v-chip>
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn
            color="accent"
            small
            depressed
            @click="copy(item.code)"
          >
            <v-icon small>
              mdi-content-copy
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </p-container>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pContainer from '~/components/other/pContainer.vue'
export default {
  components: { pContainer },
  layout: 'admin',
  data: () => ({
    search: '',
    headers: [
      {
        text: 'Code',
        align: 'start',
        sortable: false,
        value: 'code'
      },
      {
        text: 'Status',
        value: 'used'
      },
      {
        text: 'Action',
        value: 'action'
      }
    ]
  }),
  computed: {
    ...mapGetters({ loading: 'admin/getLoading', state: 'admin/getState' }),
    imsCodes () {
      const arr = []
      this.state('imsCodes').forEach((el) => {
        arr.push(el)
      })
      return arr
    }
  },
  methods: {
    ...mapActions({ generateCode: 'admin/generateCode', setAlert: 'controller/initAlert' }),
    getColor (type) {
      if (type) {
        return 'error'
      } else {
        return 'success'
      }
    },
    async copy (payload) {
      await navigator.clipboard.writeText(payload)
      // alert('Acc Number copied to clipboard')
      this.setAlert({
        is: true,
        type: 'accent',
        persistence: true,
        message: 'I.M.S Code coppied to clipboard'
      })
    }
  }

}
</script>

<style>

</style>
