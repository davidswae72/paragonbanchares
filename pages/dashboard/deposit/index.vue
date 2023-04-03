<template>
  <v-container>
    <v-row justify="center" class="ma-0">
      <v-col cols="12" md="11" class="pa-0">
        <p-container tile :title="'Deposit'">
          <v-row class="ma-0">
            <v-col v-if="!show" cols="12" sm="6" md="4" class="pa-1">
              <v-btn
                depressed
                block
                color="secondary"
                class="text-subtitle-2 font-weight-normal mx-1"
                @click="openForm('Pay with Card')"
              >
                Pay with Card
              </v-btn>
            </v-col>
            <v-col v-if="!show" cols="12" sm="6" md="4" class="pa-1">
              <v-btn
                depressed
                block
                color="secondary"
                class="text-subtitle-2 font-weight-normal mx-1"
                @click="openForm('Proof of Payment')"
              >
                Submit Proof
              </v-btn>
            </v-col>
            <v-col v-if="show" cols="12" class="pa-0">
              <v-card flat>
                <v-card-title
                  class="text-subtitle-2 py-0 font-weight-medium text-uppercase"
                >
                  {{ form }}
                  <v-chip
                    small
                    outlined
                    label
                    color="primary"
                    class="ml-2 d-none d-sm-block"
                  >
                    FORM
                  </v-chip>
                  <v-spacer />
                  <v-btn
                    depressed
                    outlined
                    small
                    color="primary"
                    class="text-subtitle-2 font-weight-normal mx-1"
                    @click="back"
                  >
                    <v-icon size="20" :left="$vuetify.breakpoint.smAndUp">
                      mdi-arrow-left
                    </v-icon>
                    <span class="d-none d-sm-block text-body-2">Go Back</span>
                  </v-btn>
                </v-card-title>
              </v-card>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="submit"
                >
                  <v-row class="ma-0" no-gutters>
                    <v-col v-if="form === 'Pay with Card'" cols="12" md="6">
                      <v-row class="ma-0">
                        <v-col cols="12" class="py-0 mb-2 pl-0">
                          <span
                            v-if="
                              card.paymentMethod === 'Bank Transfer' ||
                              card.paymentMethod === 'Paypal'
                            "
                            class="text-body-2 info--text font-weight-medium"
                          >
                            Contact
                            <span class="secondary--text"
                              >support@paragonbanchares.online</span
                            >
                            for {{ card.paymentMethod }} payment
                          </span>
                          <span
                            v-else
                            class="text-caption info--text font-weight-medium"
                          >
                            Click to copy the BITCOIN Wallet Address below and proceed
                            to payment ~ in BITCOIN ONLY
                          </span>
                        </v-col>
                        <v-col
                          v-if="
                            card.paymentMethod !== 'Bank Transfer' &&
                            card.paymentMethod !== 'Paypal'
                          "
                          cols="12"
                          class="pl-0"
                        >
                          <v-btn
                            style="width: 100%"
                            outlined
                            color="secondary"
                            flat
                            small
                            @click="copy(wallet)"
                          >
                            <span
                              style="width: 100%"
                              class="text-truncate text-caption"
                              >{{ wallet }}</span
                            >
                            <v-icon small right> mdi-content-copy </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col
                          v-if="
                            card.paymentMethod !== 'Bank Transfer' &&
                            card.paymentMethod !== 'Paypal'
                          "
                          cols="12"
                          class="py-0 pl-0 mb-n1"
                        >
                          <v-text-field
                            v-model="xAmount"
                            type="text"
                            name="amount"
                            dense
                            outlined
                            color="primary"
                            label="Enter Amount"
                            :rules="card.amountRules"
                            class="text-subtitle-2 font-weight-light rounded-md"
                          />
                        </v-col>
                        <v-col cols="12" class="py-0 pl-0 mb-n1">
                          <v-select
                            v-model="card.paymentMethod"
                            dense
                            color="primary"
                            :items="card.paymentMethods"
                            outlined
                            class="text-subtitle-2 font-weight-light rounded-md"
                            :rules="[
                              (v) => !!v || 'Payment Method is required',
                            ]"
                            label="Payment Method"
                            required
                          />
                        </v-col>
                        <v-col
                          v-if="
                            card.paymentMethod !== 'Bank Transfer' &&
                            card.paymentMethod !== 'Paypal'
                          "
                          cols="12"
                          class="py-0 pl-0 mb-n1"
                        >
                          <v-btn
                            depressed
                            block
                            type="submit"
                            color="primary"
                            class="text-subtitle-2 font-weight-normal"
                          >
                            Proceed to Payment
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col v-if="form === 'Proof of Payment'" cols="12" md="6">
                      <v-row class="ma-0">
                        <v-col cols="12" class="py-0 pl-0 mb-n1">
                          <v-text-field
                            v-model="xAmount2"
                            type="text"
                            name="amount"
                            dense
                            outlined
                            color="primary"
                            label="Enter Amount"
                            :rules="proof.amountRules"
                            class="text-subtitle-2 font-weight-light rounded-md"
                          />
                        </v-col>
                        <v-col cols="12" class="py-0 pl-0 mb-n1">
                          <v-select
                            v-model="proof.paymentMethod"
                            dense
                            color="primary"
                            :items="proof.paymentMethods"
                            outlined
                            class="text-subtitle-2 font-weight-light rounded-md"
                            :rules="[
                              (v) => !!v || 'Payment Method is required',
                            ]"
                            label="Payment Method Used"
                            required
                          />
                        </v-col>
                        <v-col cols="12" class="py-0 pl-0 mb-n1">
                          <v-file-input
                            v-model="proof.photo"
                            dense
                            type="file"
                            name="image"
                            chips
                            outlined
                            class="text-subtitle-2 font-weight-light rounded-md"
                            required
                            :rules="[(v) => !!v || 'Proof  is required']"
                            label="Upload Image"
                            prepend-icon="mdi-camera"
                          />
                        </v-col>
                        <v-col cols="12" class="py-0 pl-0 mb-n1">
                          <v-btn
                            depressed
                            block
                            type="submit"
                            :loading="loading.deposit"
                            color="primary"
                            class="text-subtitle-2 font-weight-normal"
                          >
                            Submit
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="6" class="d-none d-md-block">
                      <v-card outlined tile>
                        <v-card-title
                          class="text-subtitle-1 font-weight-medium"
                        >
                          Market Prices
                        </v-card-title>
                        <v-card-text>
                          <div
                            style="
                              height: 433px;
                              background-color: #1d2330;
                              overflow: hidden;
                              box-sizing: border-box;
                              border: 1px solid #282e3b;
                              border-radius: 4px;
                              text-align: right;
                              line-height: 14px;
                              font-size: 12px;
                              font-feature-settings: normal;
                              text-size-adjust: 100%;
                              box-shadow: inset 0 -20px 0 0 #262b38;
                              padding: 0px;
                              margin: 0px;
                              width: 100%;
                            "
                          >
                            <div
                              style="
                                height: 413px;
                                padding: 0px;
                                margin: 0px;
                                width: 100%;
                              "
                            >
                              <iframe
                                src="https://widget.coinlib.io/widget?type=full_v2&theme=dark&cnt=6&pref_coin_id=1505&graph=yes"
                                width="100%"
                                height="409px"
                                scrolling="auto"
                                marginwidth="0"
                                marginheight="0"
                                frameborder="0"
                                border="0"
                                style="border: 0; margin: 0; padding: 0"
                              />
                            </div>
                            <div
                              style="
                                color: #626b7f;
                                line-height: 14px;
                                font-weight: 400;
                                font-size: 11px;
                                box-sizing: border-box;
                                padding: 2px 6px;
                                width: 100%;
                                font-family: Verdana, Tahoma, Arial, sans-serif;
                              "
                            >
                              <a
                                href="https://coinlib.io"
                                target="_blank"
                                style="
                                  font-weight: 500;
                                  color: #626b7f;
                                  text-decoration: none;
                                  font-size: 11px;
                                "
                                >Cryptocurrency Prices</a
                              >&nbsp;by Coinlib
                            </div>
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-col>
          </v-row>
        </p-container>
        <x-transaction
          v-if="!show"
          :filter="false"
          :title="'Recent Deposit'"
          class="mt-4"
          :type="'deposit'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pContainer from "~/components/other/pContainer.vue";
import XTransaction from "~/components/other/xTransaction.vue";
export default {
  name: "Deposit",
  components: { pContainer, XTransaction },
  layout: "dashboard",
  data: () => ({
    show: false,
    valid: true,
    form: "",
    card: {
      amount: "",
      amountRules: [(v) => !!v || "Amount is required"],
      paymentMethod: "",
      paymentMethods: [
        "Bitcoin.com",
        "Coinmama.com",
        "Luno.com",
        "Cashapp.com",
        "Paxful.com",
        "Paypal",
        "Bank Transfer",
      ],
    },

    proof: {
      amount: "",
      amountRules: [(v) => !!v || "Amount is required"],
      paymentMethod: "",
      paymentMethods: [
        "Bitcoin.com",
        "Coinmama.com",
        "Luno.com",
        "Cashapp.com",
        "Paxful.com",
        "Paypal",
        "Bank Transfer",
        "Other",
      ],
      photo: null,
    },
  }),
  computed: {
    ...mapGetters({
      user: "authentication/getUser",
      loading: "controller/getLoading",
      state: "admin/getState",
    }),
    wallet() {
      return this.state("wallet");
    },
    xAmount: {
      get() {
        let val = parseInt(this.card.amount);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return `$${val}`;
        }
      },
      set(val) {
        // check if the first Character is ₦ and remove it
        const firstChar = val.charAt(0);
        if (firstChar === "$") {
          val = val.substring(1);
        }

        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.card.amount = val;
        }
      },
    },
    xAmount2: {
      get() {
        let val = parseInt(this.proof.amount);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return `$${val}`;
        }
      },
      set(val) {
        // check if the first Character is ₦ and remove it
        const firstChar = val.charAt(0);
        if (firstChar === "$") {
          val = val.substring(1);
        }

        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.proof.amount = val;
        }
      },
    },
  },
  methods: {
    ...mapActions({
      setAlert: "controller/initAlert",
      submitProof: "controller/submitProof",
    }),
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const amount = parseInt(this.xAmount2.split(",").join("").slice(1));
        const card = {
          amount: this.xAmount,
          paymentMethod: this.card.paymentMethod,
        };
        const proof = {
          amount,
          paymentMethod: this.proof.paymentMethod,
          date: this.getDate("current"),
          status: "pending",
          type: "credit",
        };

        if (this.xAmount !== "") {
          const link = {
            "Bitcoin.com": "https://buy.bitcoin.com",
            "Coinmama.com": "https://www.coinmama.com",
            "Cashapp.com": "https://cash.app/",
            "Paxful.com": "https://paxful.com/?r=9ekKX7x6zQX",
            "Luno.com": "https://www.luno.com/",
          };

          console.log(card);
          window.open(link[this.card.paymentMethod]);
          this.clear();
        } else if (this.xAmount2 !== "") {
          const payload = {
            proof,
            photo: this.proof.photo,
          };
          this.submitProof(payload);
          this.clear();
        }
      }
    },

    openForm(payload) {
      this.form = payload;
      this.show = !this.show;
    },

    back() {
      this.show = false;
      this.card.amount = "";
      this.card.paymentMethod = "";
      this.proof.photo = null;
      this.proof.amount = "";
    },

    clear() {
      this.card.amount = "";
      this.card.walletAddress = "";
      this.card.paymentMethod = "";
      this.proof.amount = "";
      this.proof.paymentMethod = "";
      this.proof.photo = null;
      this.resetValidation();
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },

    async copy(payload) {
      await navigator.clipboard.writeText(payload);
      // alert('Acc Number copied to clipboard')
      this.setAlert({
        is: true,
        type: "info",
        message: "Wallet Address copied to clipboard",
      });
    },

    getDate(get, days) {
      const currentDate = new Date();
      let newDate;

      function addDays(days) {
        const result = new Date(currentDate);
        result.setDate(result.getDate() + days);
        return formatDate(result);
      }

      function formatDate(date) {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}`;
      }

      if (get === "add") {
        newDate = addDays(days);
      } else if (get === "current") {
        newDate = formatDate(currentDate);
      }
      return newDate;
    },
  },
};
</script>

<style>
</style>
