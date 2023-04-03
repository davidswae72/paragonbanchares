<template>
  <v-container fluid class="pa-0 overflow">
    <v-row justify="center" no-gutters class="ma-0">
      <v-col cols="11" class="mt-2">
        <v-card tile dark flat color="" class="bg-gradient px-0">
          <p-pattern />
          <v-card-text class="text-center pt-4">
            <v-row justify="center" class="ma-0">
              <v-col cols="8" class="text-left pa-0 px-sm-2">
                <div class="mt-n2">
                  <span class="text-subtitle-2 white--text"
                    >Available Balance</span
                  >
                  <v-btn icon small fab color="white" @click="show = !show">
                    <v-icon small>
                      {{ show ? "mdi-eye-outline" : "mdi-eye-off-outline" }}
                    </v-icon>
                  </v-btn>
                </div>
                <div v-if="show" class="mt-n2">
                  <div
                    v-if="user && user.account.accBalance !== 0"
                    class="
                      mt-2
                      text-h6 text-sm-h4
                      font-weight-bold
                      white--text
                      mt-n1
                      my-sm-1
                    "
                  >
                    {{ user && user.symbol
                    }}{{ user && user.account.accBalance | currency }}
                  </div>
                  <div
                    v-else
                    class="
                      text-h6 text-sm-h4
                      font-weight-bold
                      white--text
                      mt-n1
                      my-sm-1
                      mt-2
                    "
                  >
                    {{ user && user.symbol }}0.00
                  </div>
                </div>
                <div
                  v-else
                  class="
                    text-h6 text-sm-h4
                    font-weight-bold
                    white--text
                    mt-n1
                    my-sm-1
                  "
                >
                  {{ user && user.symbol }}******
                </div>
                <div class="mt-5 white--text">
                  <span class="text-subtitle-2 d-block">Book Balance</span>
                  <div v-if="show" class="mt-n2">
                    <span
                      v-if="user && user.account.bookBalance !== 0"
                      class="white--text d-block text-h6 font-weight-bold"
                    >
                      {{ user && user.symbol
                      }}{{ user && user.account.bookBalance | currency }}</span
                    >
                    <span v-else class="d-block text-h6 font-weight-bold">
                      {{ user && user.symbol }}0.00</span
                    >
                  </div>
                  <div v-else class="d-block text-h6 font-weight-bold">
                    {{ user && user.symbol }}******
                  </div>
                </div>
              </v-col>
              <v-col cols="4" class="text-right px-0 px-sm-2 mt-n4">
                <v-spacer />
                <div>
                  <span class="text-subtitle-2 white--text">Status</span>
                </div>
                <div class="mt-2">
                  <v-chip
                    small
                    label
                    :color="
                      user && user.account.accStatus
                        ? 'success--text'
                        : 'accent--text'
                    "
                    class="white font-weight-medium text-caption text-uppercase"
                  >
                    {{ user && user.account.accStatus ? "Active" : "Inactive" }}
                  </v-chip>
                </div>
              </v-col>
              <v-col cols="12" class="pa-0 my-1 mt-4">
                <v-divider dark />
              </v-col>
              <v-col cols="7" class="text-left px-0 px-sm-2">
                <div>
                  <span class="text-subtitle-2 white--text"
                    >Account Number</span
                  >
                  <v-btn
                    class="ml-n2"
                    icon
                    small
                    fab
                    color="white"
                    @click="copy(user && user.account.accNumber)"
                  >
                    <v-icon small> mdi-content-copy </v-icon>
                  </v-btn>
                </div>
                <div class="text-subtitle-2 white--text font-weight-bold">
                  {{ user && user.account.accNumber }}
                </div>
              </v-col>
              <v-col cols="5" class="text-right px-0 px-sm-2">
                <v-spacer />
                <div>
                  <span class="text-subtitle-2 white--text">Type</span>
                </div>
                <div class="">
                  <span
                    style="line-height: 0.5px"
                    class="text-subtitle-2 white--text font-weight-bold"
                    >{{ user && user.account.accType }}</span
                  >
                </div>
              </v-col>
            </v-row>
            <v-btn
              depressed
              color="white dark--text"
              class="
                text-body-2
                font-weight-normal
                mt-2
                mr-sm-1
                mx-1
                text-capitalize
              "
              to="/dashboard/deposit"
            >
              <v-icon
                class="d-none d-sm-block"
                size="20"
                :left="$vuetify.breakpoint.smAndUp"
                color="primary"
              >
                mdi-cash-multiple
              </v-icon>
              Fund Account
            </v-btn>

            <v-btn
              depressed
              color="white dark--text"
              class="text-body-2 font-weight-normal mt-2 mx-1 text-capitalize"
              to="/dashboard/transactions"
            >
              <v-icon
                class="d-none d-sm-block"
                size="20"
                :left="$vuetify.breakpoint.smAndUp"
                color="primary"
              >
                mdi-chart-box
              </v-icon>
              Transaction <span class="hidden-xs-only">History</span>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="11">
        <v-row justify="center" class="ma-0">
          <!-- <v-col cols="12" class="d-flex align-center pb-0">
            <span class="text2--text text-h6 font-weight-medium">Hello, <span>Whyte Peter</span></span>
            <v-spacer />
            <v-btn
              depressed
              color="secondary"
              class="text-subtitle-2 font-weight-normal "
              to="/dashboard/deposit"
            >
              <v-icon size="20" left>
                mdi-cash-multiple
              </v-icon>
              Deposit
            </v-btn>
          </v-col> -->
        </v-row>

        <v-row justify="center" class="ma-0">
          <v-col cols="12" class="px-0">
            <x-transaction tile :title="'Transaction History'" />
          </v-col>
          <!-- <v-col cols="12" md="6">
            <v-card outlined>
              <v-card-title class="text-subtitle-1 font-weight-medium">
                Account Information
              </v-card-title>
              <v-card-text class="text2--text ">
                <v-row>
                  <v-col cols="12" class="">
                    Last Access:
                    <v-btn color="primary" small outlined class="mx-2">
                      <v-icon class="mr-2" small>
                        mdi-buffer
                      </v-icon>
                      {{ user && user.lastLogin }}
                    </v-btn>
                  </v-col>
                  <v-col cols="12" class="">
                    Login IP Address:
                    <v-btn color="primary" small outlined class="mx-2">
                      <v-icon class="mr-2" small>
                        mdi-map-marker
                      </v-icon>
                      {{ ip }}
                    </v-btn>
                  </v-col>
                  <v-col cols="12" class="textWhite--text ">
                    Device Browser:
                    <v-btn color="primary" small outlined class="mx-2">
                      <v-icon class="mr-2" small>
                        mdi-web
                      </v-icon>
                      {{ browser }}
                    </v-btn>
                  </v-col>
                  <v-col cols="12">
                    <v-card dark flat class="primary bgacc">
                      <v-card-title class="d-flex flex-column align-start pb-1">
                        <div style="width:100%" class="d-flex  text-subtitle-2 transparent">
                          <span>Account Type</span>
                          <v-spacer />
                          <v-chip label small color="accent">
                            CURRENT
                          </v-chip>
                        </div>
                        <div style="width:100%" class="d-flex mt-2 text-subtitle-2 transparent">
                          <span>Account Status</span>
                          <v-spacer />
                          <v-chip label small color="success">
                            ACTIVE
                          </v-chip>
                        </div>
                      </v-card-title>
                      <v-card-text class="textDark--text text-caption" />
                    </v-card>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col> -->
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PPattern from "~/components/other/pPattern.vue";
import XTransaction from "~/components/other/xTransaction.vue";

export default {
  name: "Dashboard",
  components: { PPattern, XTransaction },
  layout: "dashboard",
  filters: {
    currency(val) {
      if (val) {
        val = parseInt(val);
        return val.toLocaleString();
      } else {
      }
    },
  },
  data: () => ({
    ip: "",
    browser: "",
    show: true,
  }),
  computed: {
    ...mapGetters({ user: "authentication/getUser" }),
  },
  created() {
    // get ip
    this.getIp();
    this.getBrowser();
  },

  methods: {
    ...mapActions({ initAlert: "controller/initAlert" }),
    getIp() {
      fetch("https://api.ipify.org?format=json")
        .then((x) => x.json())
        .then(({ ip }) => {
          this.ip = ip;
        });
    },
    async copy(payload) {
      await navigator.clipboard.writeText(payload);
      this.initAlert({
        is: true,
        type: "info",
        message: "Account Number Copied to clipboard",
      });
    },
    getBrowser() {
      try {
        if (
          (navigator.userAgent.indexOf("Opera") ||
            navigator.userAgent.indexOf("OPR")) !== -1
        ) {
          this.browser = "Opera";
        } else if (navigator.userAgent.includes("Chrome")) {
          this.browser = "Chrome";
        } else if (navigator.userAgent.includes("Safari")) {
          this.browser = "Safari";
        } else if (navigator.userAgent.includes("Firefox")) {
          this.browser = "Firefox";
        } else if (
          navigator.userAgent.includes("MSIE") ||
          !!document.documentMode === true
        ) {
          this.browser = "IE";
        } else {
          this.browser = "unknown";
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.bgacc {
  background: rgb(0, 11, 83);
  background: linear-gradient(36deg, rgb(0, 9, 70) 14%, rgb(0, 18, 133) 87%);
}

.overflow {
  width: 100vw;
  overflow: hidden;
}
</style>
