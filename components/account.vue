<template>
  <div>
    <v-row
      v-if="user && user.role == 'user'"
      no-gutters
      justify="center"
      class="ma-0"
    >
      <v-col cols="12" class="px-1">
        <v-alert v-if="verificationStatus == null" dense tile type="error">
          <div class="d-flex align-center">
            Account is not verified
            <v-spacer></v-spacer>
            <v-btn
              large
              depressed
              color="white"
              @click="toggleVerify(true)"
              class="text-subtitle-2 error--text text-capitalize"
            >
              Verify Now
            </v-btn>
          </div>
        </v-alert>
        <v-alert
          v-if="verificationStatus == 'pending'"
          dense
          tile
          type="warning"
        >
          Account is under verification, check back later
        </v-alert>
        <v-alert
          v-if="verificationStatus == 'approved'"
          dense
          tile
          type="success"
        >
          Account verified
        </v-alert>
      </v-col>
    </v-row>
    <p-container
      :max-height="$vuetify.breakpoint.smAndUp ? 420 : ''"
      tile
      :title="'Account Info'"
    >
      <template v-slot:header>
        <v-chip label small color="accent" class="text-uppercase">
          {{ user && user.account.accType }}
        </v-chip>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon v-on="on">
              <v-icon> mdi-dots-vertical </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-if="user && user.role === 'admin'"
              dense
              @click="toggleWallet(true)"
            >
              <v-list-item-icon>
                <v-icon size="20" class="px-1"> mdi-wallet </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Update Address</v-list-item-title>
            </v-list-item>
            <v-list-item dense @click="toggleSecurity(true)">
              <v-list-item-icon>
                <v-icon size="20" class="px-1"> mdi-account-lock </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Security</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <v-row class="ma-0" justify="space-around">
        <v-col cols="12" sm="4" class="d-flex align-center justify-center">
          <v-avatar
            v-if="user"
            tile
            width="100%"
            height="100%"
            size="140"
            class="rounded pa-sm-4 grey lighten-3"
          >
            <img
              :src="user && user.photoURL"
              :alt="`${user && user.firstName} ${user && user.lastName}`"
            />
          </v-avatar>
          <v-progress-circular v-else indeterminate color="primary" />
        </v-col>
        <v-col cols="12" sm="6">
          <div
            v-if="user && user.role === 'admin'"
            class="d-flex align-center text-subtitle-2"
          >
            <span class="font-weight-medium d-none d-sm-block"> Wallet </span>
            <v-spacer />
            <v-chip small label color="primary" class="font-weight-light">
              {{ wallet }}
            </v-chip>
          </div>
          <v-divider class="my-1" />
          <div class="d-flex text-subtitle-2">
            <span class="font-weight-medium"> Account Holder </span>
            <v-spacer />
            <span class="font-weight-bold dark--text"> First Finance </span>
          </div>
          <v-divider class="my-1" />

          <div class="d-flex text-subtitle-2">
            <span class="font-weight-medium"> Account Name </span>
            <v-spacer />
            <span class="font-weight-bold dark--text">
              {{ user && user.firstName }} {{ user && user.lastName }}
            </span>
          </div>
          <v-divider class="my-1" />
          <div class="d-flex text-subtitle-2">
            <span class="font-weight-medium"> Account Number </span>
            <v-spacer />
            <span class="font-weight-bold dark--text">
              {{ user && user.account.accNumber }}
            </span>
          </div>
          <v-divider class="mt-3 text1" />
          <v-divider class="text1" />
          <v-divider class="mb-3 text1" />
          <div class="d-flex text-subtitle-2">
            <span class="font-weight-medium"> Phone Number </span>
            <v-spacer />
            <span class="font-weight-bold text2--text">
              {{ user && user.phoneNumber }}
            </span>
          </div>
          <v-divider class="my-1" />
          <div class="d-flex text-subtitle-2">
            <span class="font-weight-medium"> Email </span>
            <v-spacer />
            <span class="font-weight-bold text2--text">
              {{ user && user.email }}
            </span>
          </div>
          <v-divider class="my-1" />
          <div class="d-flex text-subtitle-2">
            <span class="font-weight-medium"> Nationality </span>
            <v-spacer />
            <span class="font-weight-bold text2--text">
              {{ user && user.country }}
            </span>
          </div>
          <v-divider class="my-1" />
          <div class="d-flex text-subtitle-2">
            <span class="font-weight-medium"> Current City </span>
            <v-spacer />
            <span class="font-weight-bold text2--text">
              {{ user && user.state }}
            </span>
          </div>
          <v-divider class="my-1" />
          <div class="d-flex text-subtitle-2">
            <span class="font-weight-medium"> Address </span>
            <v-spacer />
            <span class="font-weight-bold text2--text">
              {{ user && user.address }}
            </span>
          </div>
          <v-divider class="my-1" />
        </v-col>
      </v-row>
    </p-container>
    <p-container v-if="verify" tile :title="'Verification'">
      <v-row class="ma-0">
        <v-col cols="12" class="px-0 d-flex align-center">
          Document:
          <strong class="ml-2">{{
            verificationDocument && verificationDocument.type
          }}</strong>
          <v-spacer></v-spacer>
          <v-chip
            label
            small
            :color="
              getColor(verificationDocument && verificationDocument.status)
            "
          >
            {{ verificationDocument && verificationDocument.status }}
          </v-chip>
        </v-col>
        <v-col cols="12" md="6">
          <v-card height="250" tile outlined>
            <v-img
              max-width="100%"
              height="250"
              :src="verificationDocument && verificationDocument.front"
              contain
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card height="250" tile outlined>
            <v-img
              max-width="100%"
              height="250"
              :src="verificationDocument && verificationDocument.back"
              contain
            ></v-img>
          </v-card>
        </v-col>
        <v-col
          v-if="verificationDocument.status !== 'approved'"
          cols="12"
          class="d-flex align-center justify-center"
        >
          <v-btn
            depressed
            :loading="loading2.verify"
            color="error"
            @click="action('decline')"
            class="text-subtitle-2 text-capitalize px-8 mx-1"
          >
            Decline
          </v-btn>
          <v-btn
            :loading="loading2.verify"
            depressed
            color="success"
            @click="action('approved')"
            class="text-subtitle-2 text-capitalize px-8 mx-1"
          >
            Approve
          </v-btn>
        </v-col>
      </v-row>
    </p-container>
    <security :user="user" :drawer="drawer.security" :toggle="toggleSecurity" />
    <wallet-address :drawer="drawer.wallet" :toggle="toggleWallet" />
    <VerifyAccount
      :user="user"
      :drawer="drawer.verify"
      :toggle="toggleVerify"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import pContainer from "./other/pContainer.vue";
import Security from "./security.vue";
import WalletAddress from "./walletAddress.vue";
import VerifyAccount from "./other/verifyAccount.vue";
export default {
  components: { pContainer, Security, WalletAddress, VerifyAccount },
  props: {
    type: {
      type: String,
      default: "ACTIVE",
    },
    verify: {
      type: Boolean,
      default: false,
    },
    user: Object,
  },
  data: () => ({
    valid: true,
    drawer: {
      security: false,
      wallet: false,
      verify: false,
    },
  }),
  computed: {
    ...mapGetters({
      user2: "authentication/getUser",
      loading: "authentication/getLoading",
      loading2: "admin/getLoading",
      state: "admin/getState",
      state2: "authentication/getState",
    }),
    verificationDocument() {
      const arr = this.state("verifications");
      let verification = arr.find((el) => {
        return el.userID === this.user.userID;
      });

      console.log(arr);
      console.log(verification);

      return verification;
    },
    verificationStatus() {
      const verification = this.state2("verification");

      return verification.status;
    },
    wallet() {
      return this.state("wallet");
    },
  },
  methods: {
    ...mapActions({ verifyFunction: "admin/verifyFunction" }),
    action(type) {
      let payload;
      if (type == "decline") {
        payload = {
          statu: null,
          back: "",
          front: "",
          userID: this.verificationDocument.userID,
        };
      } else if (type == "approved") {
        payload = this.verificationDocument;
        payload.status = "approved";
      }

      payload.user = this.user;

      this.verifyFunction(payload);
    },
    getColor(status) {
      const color = {
        pending: "warning",
        approved: "success",
        null: "fail",
      };

      return color[status];
    },
    toggleSecurity(state) {
      this.drawer.security = state;
    },
    toggleWallet(state) {
      this.drawer.wallet = state;
    },
    toggleVerify(state) {
      this.drawer.verify = state;
    },
  },
};
</script>

<style>
</style>
