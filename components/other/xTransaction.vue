<template>
  <p-container
    :type="type"
    :loading="loading"
    :title="title"
    :tile="tile"
    :styles="'px-0'"
  >
    <template v-slot:header>
      <div v-if="filter">
        <v-btn
          depressed
          small
          :text="type === 'all' ? false : true"
          class=""
          :color="type === 'all' ? 'primary' : 'grey'"
          @click="type = 'all'"
        >
          All
        </v-btn>
        <v-btn
          depressed
          small
          :text="type === 'credit' ? false : true"
          class=""
          :color="type === 'credit' ? 'success' : 'grey'"
          @click="type = 'credit'"
        >
          Credit
        </v-btn>
        <v-btn
          depressed
          small
          :text="type === 'debit' ? false : true"
          class=""
          :color="type === 'debit' ? 'error' : 'grey'"
          @click="type = 'debit'"
        >
          Debit
        </v-btn>
        <v-btn
          depressed
          small
          :text="type === 'loan' ? false : true"
          class=""
          :color="type === 'loan' ? 'info' : 'grey'"
          @click="type = 'loan'"
        >
          Loan
        </v-btn>
      </div>
    </template>
    <div style="max-height: 600px; overflow: auto">
      <v-slide-x-transition group>
        <template v-for="(trans, i) in transactions">
          <v-card
            :key="trans.transactionID"
            class="py-0"
            flat
            tile
            :color="background(i)"
            @click="toggleTransaction(trans, true)"
          >
            <v-card-text class="px-2">
              <v-row no-gutters class="ma-0">
                <v-col cols="9" class="pa-0 d-flex align-center">
                  <v-icon :color="getColor(trans.status)" class="mr-2 mx-md-2">
                    mdi-circle-slice-8
                  </v-icon>
                  <div style="width: 100%" class="d-flex flex-column">
                    <span
                      class="
                        text-subtitle-2 text-md-subtitle-1
                        font-weight-medium
                        text3--text
                      "
                      v-html="trans.purpose"
                    />
                    <span
                      class="text-caption text-sm-subtitle-2 font-weight-light"
                      >{{ trans.date }}</span
                    >
                  </div>
                </v-col>
                <v-col
                  cols="3"
                  class="pa-0 d-flex align-center justify-end pr-md-2"
                >
                  <div
                    :class="`${getColor(
                      trans.type &&
                        trans.type.toLowerCase() !== 'debit' &&
                        trans.type &&
                        trans.type.toLowerCase() !== 'transfer'
                        ? trans.status
                        : trans.type
                    )}--text`"
                    class="
                      text-subtitle-2 text-right text-md-subtitle-1
                      font-weight-medium
                      secondary--text
                    "
                  >
                    <!-- <v-chip
                      x-small
                      outlined
                      label
                      :color="getColor(trans.status)"
                      class="mb-n1 text-right text-lowercase"
                    >
                      {{ trans.status }}
                    </v-chip> -->
                    <div>
                      <span>{{
                        (trans.type && trans.type.toLowerCase() === "credit") ||
                        (trans.type &&
                          trans.type.toLowerCase() === "deposit") ||
                        (trans.type && trans.type.toLowerCase() === "loan")
                          ? "+"
                          : "-"
                      }}</span
                      >{{ user && user.symbol }} {{ trans.amount | currency }}
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </template>
      </v-slide-x-transition>
      <v-card v-if="!transactions.length" flat>
        <v-card-text class="text-center">
          <v-icon size="50" color="grey lighten-1"> fas fa-folder-open </v-icon>
          <div class="my-2">No Transaction yet</div>
        </v-card-text>
      </v-card>
    </div>
    <p-transaction-details
      :transaction="transaction"
      :modal="transactionModal"
      :toggle="toggleTransaction"
    />
  </p-container>
</template>

<script>
import { mapGetters } from "vuex";
import pContainer from "./pContainer.vue";
import PTransactionDetails from "./pTransactionDetails.vue";
export default {
  components: { pContainer, PTransactionDetails },
  filters: {
    currency(val) {
      if (val) {
        val = parseFloat(val);
        return val.toLocaleString();
      } else {
      }
    },
  },
  props: {
    type: {
      type: String,
      default: "all",
    },
    title: {
      type: String,
      default: "Transactions",
    },
    tile: {
      type: Boolean,
      default: true,
    },
    filter: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    loading: false,
    transactionModal: false,
    transaction: null,
  }),
  computed: {
    ...mapGetters({
      user: "authentication/getUser",
      allTransactions: "controller/getState",
    }),
    transactions() {
      const arr = [];

      this.allTransactions("transactions").forEach((el) => {
        if (this.type.toLowerCase() !== "all") {
          if (this.type.toLowerCase() === el.type) {
            arr.push(el);
          }
        } else {
          arr.push(el);
        }
      });
      console.log(arr);
      return arr;
    },
  },
  methods: {
    background(i) {
      if (i % 2 === 1) {
        return "#f8f8f8";
      } else {
        return "";
      }
    },

    getColor(type) {
      if (
        (type && type.toLowerCase() === "fail") ||
        (type && type.toLowerCase() === "transfer") ||
        (type && type.toLowerCase() === "loan") ||
        (type && type.toLowerCase() === "debit")
      ) {
        return "error";
      } else if (
        (type && type.toLowerCase() === "success") ||
        (type && type.toLowerCase() === "credit")
      ) {
        return "success";
      } else if (type && type.toLowerCase() === "pending") {
        return "warning";
      } else {
        return type;
      }
    },

    getDate(payload) {
      const date = new Date(payload);
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
      }, ${date.getFullYear()}; ${new Date(payload).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`;
    },

    toggleTransaction(transaction, state) {
      this.transaction = transaction;
      this.transactionModal = state;
      console.log(state);
      console.log(transaction);
    },
  },
};
</script>

<style>
</style>
