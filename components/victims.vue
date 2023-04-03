<template>
  <v-card min-width="250" tile outlined class="ma-2">
    <v-card-text class="pa-0">
      <v-row no-gutters class="ma-0">
        <v-col cols="12" class="grey lighten-3 font-weight-bold pa-2 d-flex  py-1">
          <v-avatar size="40">
            <v-img src="/logo/default.png" />
          </v-avatar>
          <div class="d-flex flex-column ml-2">
            <span>
              <strong>IP:</strong> 493923804242092
            </span>
            <span>22nd June, 2021. 6:20PM</span>
          </div>
        </v-col>
        <v-divider class="mx-1" />
        <v-col cols="12" class="d-flex justify-space-between pa-2">
          <span class="text-body-2">
            Username
          </span>
          <span class="text-subtitle-2">johndoe</span>
        </v-col>
        <v-divider class="mx-1" />
        <v-col cols="12" class="d-flex justify-space-between pa-2">
          <span class="text-body-2">
            Password
          </span>
          <span class="text-subtitle-2">6576879</span>
        </v-col>
        <v-divider class="mx-1" />
        <v-col v-if="type === 'bank'" cols="12" class="d-flex justify-space-between pa-2">
          <span class="text-body-2">
            Card No
          </span>
          <span class="text-subtitle-2">25364656454674</span>
        </v-col>
        <v-divider v-if="type === 'bank'" class="mx-1" />
        <v-col v-if="type === 'bank'" cols="12" class="d-flex justify-space-between pa-2">
          <span class="text-body-2">
            Expiry Date
          </span>
          <span class="text-subtitle-2">01/25</span>
        </v-col>
        <v-divider v-if="type === 'bank'" class="mx-1" />
        <v-col v-if="type === 'bank'" cols="12" class="d-flex justify-space-between pa-2">
          <span class="text-body-2">
            CVV
          </span>
          <span class="text-subtitle-2">353</span>
        </v-col>
        <v-divider v-if="type === 'bank'" class="mx-1" />
        <v-col v-if="type === 'bank'" cols="12" class="d-flex justify-space-between pa-2">
          <span class="text-body-2">
            Pin
          </span>
          <span class="text-subtitle-2">8255</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'social'
    },
    logo: {
      type: String,
      default: ''
    },
    ip: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    },
    cardNo: {
      type: String,
      default: ''
    },
    ExpiryDate: {
      type: String,
      default: ''
    },
    cvv: {
      type: String,
      default: ''
    },
    pin: {
      type: String,
      default: ''
    }
  }

}
</script>

<style>

</style>
