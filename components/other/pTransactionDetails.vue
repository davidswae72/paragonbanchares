<template>
  <div>
    <v-dialog
      v-model="modal"
      persistent
      width="500"
      :fullscreen="$vuetify.breakpoint.xsOnly"
    >
      <v-card :tile="$vuetify.breakpoint.xsOnly" class="py-2 rounded-sm-lg">
        <v-card-title class="text3--text font-weight-regular text-h6 py-4">
          Transaction
          <!-- <v-chip outlined label small color="accent" class="mx-2">
            {{ transaction && transaction.status }}
          </v-chip> -->
          <v-spacer />
          <v-icon color="text3" @click="close()"> mdi-close </v-icon>
        </v-card-title>
        <v-divider :class="getColor(transaction && transaction.status)" />
        <v-card-text class="text1--text">
          <v-row no-gutters class="py-2">
            <v-col cols="4" class="py-1"> Reference </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ transaction && transaction.transactionID }}
            </v-col>
          </v-row>
          <v-divider />
          <v-row no-gutters class="py-2">
            <v-col cols="4" class="py-1"> Amount </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ user && user.symbol }}
              {{ transaction && transaction.amount | currency }}
            </v-col>
          </v-row>
          <v-divider
            v-if="transaction && transaction.transaction === 'transfer'"
          />
          <v-row
            v-if="transaction && transaction.transaction === 'transfer'"
            no-gutters
            class="py-2"
          >
            <v-col cols="4" class="py-1"> Previous Balance </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ user && user.symbol }}
              {{ transaction && transaction.balance | currency }}
            </v-col>
          </v-row>
          <v-divider />
          <v-row no-gutters class="py-2">
            <v-col cols="4" class="py-1"> Type </v-col>
            <v-col
              cols="8"
              class="py-1 text-right text-subtitle-2 text-capitalize"
            >
              <v-chip
                label
                small
                :color="getColor(transaction && transaction.type)"
                class=""
              >
                {{ transaction && transaction.type }}
              </v-chip>
            </v-col>
          </v-row>
          <v-divider
            v-if="transaction && transaction.transaction === 'transfer'"
          />
          <v-row
            v-if="transaction && transaction.transaction === 'transfer'"
            no-gutters
            class="py-2"
          >
            <v-col cols="4" class="py-1"> Beneficiary </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ transaction && transaction.beneficiary.firstName
              }}{{ transaction && transaction.beneficiary.lastName }}
            </v-col>
          </v-row>
          <v-divider
            v-if="transaction && transaction.transaction === 'transfer'"
          />
          <v-row
            v-if="transaction && transaction.transaction === 'transfer'"
            no-gutters
            class="py-2"
          >
            <v-col cols="4" class="py-1"> Bank </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ transaction && transaction.beneficiary.bank }}
            </v-col>
          </v-row>
          <v-divider
            v-if="transaction && transaction.transaction === 'transfer'"
          />
          <v-row
            v-if="transaction && transaction.transaction === 'transfer'"
            no-gutters
            class="py-2"
          >
            <v-col cols="4" class="py-1"> Account Number </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ transaction && transaction.beneficiary.accNumber }}
            </v-col>
          </v-row>
          <v-divider
            v-if="transaction && transaction.transaction === 'deposit'"
          />
          <v-row
            v-if="transaction && transaction.transaction === 'deposit'"
            no-gutters
            class="py-2"
          >
            <v-col cols="4" class="py-1"> Bank </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ transaction && transaction.bank }}
            </v-col>
          </v-row>
          <v-divider
            v-if="
              transaction &&
              transaction.transaction === 'transfer' &&
              transaction &&
              transaction.imsCode
            "
          />
          <v-row
            v-if="
              transaction &&
              transaction.transaction === 'transfer' &&
              transaction &&
              transaction.imsCode
            "
            no-gutters
            class="py-2"
          >
            <v-col cols="4" class="py-1"> I.M.S Code </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ transaction && transaction.imsCode }}
            </v-col>
          </v-row>
          <v-divider />
          <v-row no-gutters class="py-2">
            <v-col cols="4" class="py-1"> Date </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ transaction && transaction.date }}
            </v-col>
          </v-row>
          <v-divider />
          <v-row
            v-if="transaction && transaction.message"
            no-gutters
            class="py-2"
          >
            <v-col cols="4" class="py-1"> Message </v-col>
            <v-col cols="8" class="py-1 text-right text-subtitle-2">
              {{ transaction && transaction.message }}
            </v-col>
          </v-row>
          <v-divider />
          <v-row no-gutters class="py-2">
            <v-col cols="4" class="py-1"> Description </v-col>
            <v-col
              cols="8"
              class="py-1 text-right text-subtitle-2"
              v-html="transaction && transaction.purpose"
            />
          </v-row>
          <!-- <v-divider /> -->
          <v-row no-gutters class="mt-4 d-block d-md-none">
            <v-col cols="12" class="d-flex">
              <v-spacer />
              <v-btn
                depressed
                color="accent"
                class="text-subtitle-2 font-weight-normal"
                @click="close()"
              >
                Okay
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TransactionDetails",
  filters: {
    currency(val) {
      if (val) {
        val = parseInt(val);
        return val.toLocaleString();
      } else {
      }
    },
  },
  props: {
    modal: {
      type: Boolean,
      default: false,
    },
    toggle: Function,
    transaction: {
      type: Object,
      default: () => ({
        id: "nill",
        reference: "nill",
        response: "nill",
        type: "nill",
        status: "nill",
        shortDescription: "nill",
        longDescription: "nill",
        amount: "nill",
        balance: "nill",
        date: "nill",
      }),
    },
  },
  data: () => ({}),
  computed: {
    ...mapGetters({ user: "authentication/getUser" }),
  },
  methods: {
    getColor(type) {
      if (type && type.toLowerCase() === "fail") {
        return "error";
      } else if (type && type.toLowerCase() === "success") {
        return "success";
      } else if (type && type.toLowerCase() === "pending") {
        return "secondary";
      } else {
        return "primary";
      }
    },
    close() {
      this.toggle(null, false);
    },
  },
};
</script>

<style>
</style>
