<template>
  <div>
    <div class="text-h6 text-sm-h5 mb-2 primary--text">Quick Links</div>
    <div class="">
      <v-btn
        v-for="link in quickLinks"
        :key="link.name"
        text
        exact
        block
        active-class="accent--text font-weight-bold"
        :to="link.route"
        class="text-subtilte-2 text-sm-subtitle-1 text-capitalize justify-start"
      >
        <v-icon left x-small color="accent">mdi-checkbox-blank-circle</v-icon>
        {{ link.name }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      type: String,
      default: "personal",
    },
  },
  computed: {
    quickLinks() {
      const links = {
        personal: [
          {
            name: "Credit Cards",
            route: "/personal-banking/credit-card",
          },
          {
            name: "Current Accounts",
            route: "/personal-banking/current-account",
          },
          {
            name: "Savings Account",
            route: "/personal-banking/savings-account",
          },
          {
            name: "Personal Loan",
            route: "/personal-banking/personal-loan",
          },
          {
            name: "Mortgages",
            route: "/personal-banking/mortgages",
          },
          {
            name: "Personal Insurance",
            route: "/personal-banking/personal-insurance",
          },
        ],

        business: [
          {
            name: "Bank Cards",
            route: "/business-banking/bank-cards",
          },
          {
            name: "Deposit",
            route: "/business-banking/deposit",
          },
          {
            name: "Foreign Drafts",
            route: "/business-banking/foreign-drafts",
          },
          {
            name: "Interest Checking",
            route: "/business-banking/interest-checking",
          },
          {
            name: "Electronic Banking",
            route: "/business-banking/electronic-banking",
          },
          {
            name: "Money Market Account",
            route: "/business-banking/money-market-account",
          },
          {
            name: "Small Business Checking",
            route: "/business-banking/small-business-checking",
          },
          {
            name: "Business Cash Management",
            route: "/business-banking/business-cash-management",
          },
          {
            name: "Currency Risk Management",
            route: "/business-banking/currency Risk Management",
          },
        ],

        private: [
          {
            name: "Banking Service",
            route: "/private-banking/banking-service",
          },
          {
            name: "Insurance",
            route: "/private-banking/insurance",
          },
          {
            name: "Offshore & Migrants",
            route: "/private-banking/offshore-migrants",
          },
        ],
      };

      return links[this.page];
    },
  },
};
</script>

<style>
</style>