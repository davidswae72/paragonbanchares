<template>
  <x-side-bar :loading="loading.edit" :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex text3--text flex-column">
        <span class="text-subtitle-1 d-flex align-center">
          {{ user && user.firstName }} {{ user && user.lastName }}
          <v-spacer />
          <v-chip small label outlined color="secondary" class="ml-2">{{
            user && user.account.accType
          }}</v-chip>
        </span>
      </div>
    </template>
    <v-form ref="form" v-model="valid" lazy-validation @submit.prevent="submit">
      <v-row no-gutters class="ma-0 p-2 pb-10">
        <v-col
          cols="12"
          class="d-flex mb-2 py-3 text-subtitle-2 font-weight-medium dark--text"
        >
          <div>
            <span class="">Acc Balance</span>
            <span
              >{{ user && user.symbol
              }}{{ user && user.account.accBalance | currency }}</span
            >
          </div>
          <v-spacer />
          <div>
            <span class="">Book Balance</span>
            <span>
              {{ user && user.symbol
              }}{{ user && user.account.bookBalance | currency }}</span
            >
          </div>
        </v-col>

        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="displayAccNumber"
            type="text"
            name="accNumber"
            outlined
            color="primary"
            label="Account Number"
            :rules="accNumberRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col cols="12" class="py-0 mb-n1">
          <v-select
            v-model="displayAccType"
            name="accType"
            color="primary"
            :items="[
              'Checking Account',
              'Savings Account',
              'Fixed Deposit Account',
              'Perium Paragon Banchares Bank',
            ]"
            outlined
            class="text-subtitle-2 font-weight-light rounded-md"
            :rules="[(v) => !!v || 'Account Type is required']"
            label="Account Type"
            required
          />
        </v-col>
        <v-col cols="12" class="py-0 mb-n1">
          <v-select
            v-model="displayAccStatus"
            name="accStatus"
            color="primary"
            :items="['Active', 'Inactive']"
            outlined
            class="text-subtitle-2 font-weight-light rounded-md"
            :rules="[(v) => !!v || 'Account Status is required']"
            label="Account Status"
            required
          />
        </v-col>
        <v-col cols="6" class="">
          <v-btn
            depressed
            small
            tile
            block
            color="success"
            class="text-subtitle-2 font-weight-light"
            @click="actions = 'Credit'"
          >
            Credit
          </v-btn>
        </v-col>
        <v-col cols="6" class="">
          <v-btn
            depressed
            small
            tile
            block
            color="error"
            class="text-subtitle-2 font-weight-light"
            @click="actions = 'Debit'"
          >
            Debit
          </v-btn>
        </v-col>
        <v-col cols="12" class="mt-4" />
        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="from"
            type="text"
            name="from"
            outlined
            color="primary"
            :label="`${actions} from`"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col
          v-if="(from && from.toLowerCase()) !== 'Paragon Banchares Bank'"
          cols="12"
          class="py-0 mb-n1"
        >
          <v-text-field
            v-model="bank"
            type="text"
            name="bank"
            outlined
            color="primary"
            label="Bank"
            class="text-subtitle-2 font-weight-light rounded-md"
          />
        </v-col>
        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="displayAccBalance"
            type="text"
            name="accBalance"
            outlined
            color="primary"
            :label="`Account Balance - ${user.symbol}`"
            loading
            :rules="accBalanceRules"
            class="text-subtitle-2 font-weight-light rounded-md"
          >
            <template v-slot:progress>
              <v-progress-linear
                :value="100"
                :color="getColor(actions)"
                absolute
                height="3"
              />
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" class="py-0 mb-n1">
          <v-text-field
            v-model="displayBookBalance"
            type="text"
            name="bookBalance"
            outlined
            color="primary"
            :label="`Book Balance ${user.symbol}`"
            :rules="bookBalanceRules"
            loading
            class="text-subtitle-2 font-weight-light rounded-md"
          >
            <template v-slot:progress>
              <v-progress-linear
                :value="100"
                :color="getColor(actions)"
                absolute
                height="3"
              />
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex text-subtitle-2 px-2">
          Advance Settings
          <v-spacer />
          <v-btn
            text
            icon
            :color="`${advance ? 'primary' : ''}`"
            @click="advance = !advance"
          >
            <v-icon small>
              {{ advance ? "mdi-arrow-down" : "mdi-arrow-up" }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
          v-if="advance"
          cols="6"
          class="d-flex align-cente justify-space-between"
        >
          <v-switch
            v-model="displayBlock"
            color="error"
            inset
            label="Block User"
            class="py-0 my-0"
          />
        </v-col>
        <v-col cols="12" class="py-2">
          <v-btn
            type="submit"
            depressed
            block
            :loading="loading.edit"
            color="primary"
            class="text-subtitle-2 font-weight-normal"
          >
            Update User
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </x-side-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import xSideBar from "../xSideBar.vue";
export default {
  components: { xSideBar },
  filters: {
    currency(val) {
      if (val) {
        val = parseFloat(val);
        return val.toLocaleString();
      } else {
      }
    },
  },
  props: ["drawer", "toggle", "user"],
  data: () => ({
    valid: true,
    show: false,
    advance: false,
    actions: "Credit",
    from: "Paragon Banchares Bank",
    bank: "",
    accBal: 0,
    bookBal: 0,
    accNumberRules: [(v) => !!v || "Account Number is required"],

    accBalanceRules: [(v) => !!v || "Account Balance is required"],

    bookBalanceRules: [(v) => !!v || "Book Balance is required"],
  }),
  computed: {
    ...mapGetters({ loading: "admin/getLoading" }),
    displayAccNumber: {
      get() {
        return this.user && this.user.account.accNumber;
      },
      set(val) {
        this.user.account.accNumber = val;
      },
    },
    displayAccStatus: {
      get() {
        return this.user && this.user.account.accStatus;
      },
      set(val) {
        this.user.account.accStatus = val;
      },
    },
    displayAccType: {
      get() {
        return this.user && this.user.account.accType;
      },
      set(val) {
        this.user.account.accType = val;
      },
    },
    displayAccBalance: {
      get() {
        let val = parseInt(this.accBal);
        val = val.toLocaleString();
        return val;
      },
      set(val) {
        val = val.split(",").join("");
        val = parseInt(val);
        this.accBal = val;
      },
    },
    displayBookBalance: {
      get() {
        let val = parseInt(this.bookBal);
        val = val.toLocaleString();
        return val;
      },
      set(val) {
        val = val.split(",").join("");
        val = parseInt(val);
        this.bookBal = val;
      },
    },
    displayBlock: {
      get() {
        return this.user && this.user.block;
      },
      set(val) {
        this.user.block = val;
      },
    },
  },
  methods: {
    ...mapActions({
      editUser: "admin/editUser",
      createTransaction: "admin/createTransaction",
    }),

    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        parseInt(this.user && this.user.account.accBalance);
        parseInt(this.user && this.user.account.bookBalance);

        if (this.accBal !== 0) {
          if (this.actions.toLowerCase() === "credit") {
            this.user.account.accBalance += this.accBal;
          } else if (this.actions.toLowerCase() === "debit") {
            console.log(this.user.account.accBalance, this.accBal);
            this.user.account.accBalance -= this.accBal;
          }
        }

        if (this.bookBal !== 0) {
          if (this.actions.toLowerCase() === "credit") {
            this.user.account.bookBalance += this.bookBal;
          } else if (this.actions.toLowerCase() === "debit") {
            this.user.account.bookBalance -= this.bookBal;
          }
        }

        this.user.actions = this.actions.toLowerCase();

        console.log(this.user);
        this.editUser(this.user);
        this.loadBalances();
        // this.clear()
      }
      this.checkIfDone();
    },

    loadBalances() {
      if (this.actions !== "" && this.accBal !== 0) {
        // Create trasaction
        const amount = parseInt(this.displayAccBalance.split(",").join(""));
        // const formated = amount.toLocaleString('en-US', {
        //   style: 'currency',
        //   code: 'US',
        //   currency: 'USD'
        // })

        let purpose, bank;
        if (!this.bank) {
          purpose = `${this.from}`;
          bank = this.from;
        } else {
          purpose = `${this.from} <br/> ${this.bank}`;
          bank = this.bank;
        }
        const payload = {
          amount,
          bank,
          type: this.actions.toLowerCase(),
          accBalance: parseInt(this.user && this.user.account.accBalance),
          transaction: "deposit",
          date: this.getDate("current"),
          purpose,
          update: false,
          paymentMethod: "Primes Gold",
          status: "success",
          userID: this.user.userID,
          transactionID: "",
        };
        // console.log(payload)
        this.createTransaction(payload);
      }
    },
    getColor(payload) {
      const color = {
        all: "",
        Credit: "success",
        Debit: "error",
      };
      return color[payload];
    },

    clear() {
      this.displayAccBalance = "";
      this.displayBookBalance = "";
      this.resetValidation();
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
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
    checkIfDone() {
      setInterval(() => {
        if (!this.loading.edit) {
          setTimeout(() => {
            this.clear();
            this.toggle(false);
            window.location.reload();
          }, 2000);
        }
      }, 1000);
    },
  },
};
</script>

<style>
</style>
