<template>
  <v-container fluid class="transparent pa-0">
    <v-app-bar height="80" app flat color="white" class="">
      <v-toolbar-title>
        <v-btn
          height="80"
          text
          x-large
          to="/"
          class="text-upptercase font-weight-bold ml-n4"
        >
          <v-img max-width="200" src="/logo/gold2.svg" contain/>
        </v-btn>
      </v-toolbar-title>

      <v-spacer />
      <v-toolbar-items flat class="hidden-sm-and-down" color="transparent">
        <v-btn
          tile
          active-class=" font-weight-medium accent--text"
          class="
            primary--text
            text-h6 text-uppercase
            home-active
            font-weight-medium
            text-caption
          "
          text
          to="/"
          exact
        >
          Home
        </v-btn>

        <v-menu open-on-hover offset-y bottom tile>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              tile
              active-class=" font-weight-medium accent--text"
              class="
                primary--text
                text-h6 text-uppercase
                home-active
                font-weight-medium
                text-caption
              "
              text
              exact
              v-on="on"
            >
              Personal Banking
              <v-icon color="accent" size="20">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list tile>
            <v-list-item
              dense
              to="/personal-banking/credit-card"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Credit Card</v-list-item-title
              >
            </v-list-item>

            <v-list-item
              dense
              to="/personal-banking/current-account"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Current Account</v-list-item-title
              >
            </v-list-item>

            <v-list-item
              dense
              to="/personal-banking/savings-account"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Savings Account</v-list-item-title
              >
            </v-list-item>

            <v-list-item
              dense
              to="/personal-banking/personal-loans"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Personal Loans</v-list-item-title
              >
            </v-list-item>

            <v-list-item
              dense
              to="/personal-banking/mortgages"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Mortgages</v-list-item-title
              >
            </v-list-item>

            <v-list-item
              dense
              to="/personal-banking/personal-insurance"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Personal Insurance</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
        <!-- <v-menu open-on-hover offset-y bottom tile>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              tile
              active-class=" font-weight-medium accent--text"
              class="
                primary--text
                text-h6 text-uppercase
                home-active
                font-weight-medium
                text-caption
              "
              text
              exact
              v-on="on"
            >
              Business Banking
              <v-icon color="accent" size="20">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-row class="ma-0">
            <v-col cols="4" class="pa-0">
              <v-list outlined tile>
                <v-list-item
                  dense
                  to="/business-banking/bank-card"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Bank Cards</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  dense
                  to="/business-banking/deposit"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Deposit</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  dense
                  to="/business-banking/foreign-drafts"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Foreign Drafts</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-col>
            <v-col cols="4" class="pa-0"
              ><v-list outlined tile>
                <v-list-item
                  dense
                  to="/business-banking/interest-checking"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Interest Checking</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  dense
                  to="/business-banking/electronic-banking"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Electronic Banking</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  dense
                  to="/business-banking/investment-benefit"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Investment/Benefit Care Taking</v-list-item-title
                  >
                </v-list-item>
              </v-list></v-col
            >
            <v-col cols="4" class="pa-0"
              ><v-list outlined tile>
                <v-list-item
                  dense
                  to="/business-banking/money-market-account"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Money Market Account</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  dense
                  to="/business-banking/small-business-checking"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Small Business Checking</v-list-item-title
                  >
                </v-list-item>

                <v-list-item
                  dense
                  to="/business-banking/business-cash-management"
                  class="px-6 primary--text"
                >
                  <v-list-item-title class="text-subtitle-2"
                    >Business Cash Management</v-list-item-title
                  >
                </v-list-item>
              </v-list></v-col
            >
          </v-row>
        </v-menu> -->
        <v-menu open-on-hover offset-y bottom tile>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              tile
              active-class=" font-weight-medium accent--text"
              class="
                primary--text
                text-h6 text-uppercase
                home-active
                font-weight-medium
                text-caption
              "
              text
              exact
              v-on="on"
            >
              Private Banking
              <v-icon color="accent" size="20">mdi-chevron-down</v-icon>
            </v-btn>
          </template>

          <v-list tile>
            <v-list-item
              dense
              to="/private-banking/banking-services"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Banking Services</v-list-item-title
              >
            </v-list-item>

            <v-list-item
              dense
              to="/private-banking/insurance"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Insurance</v-list-item-title
              >
            </v-list-item>

            <v-list-item
              dense
              to="/private-banking/offshore-migrants"
              class="px-6 primary--text"
            >
              <v-list-item-title class="text-subtitle-2"
                >Offshorte & Migrants</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          tile
          active-class=" font-weight-medium accent--text"
          class="
            primary--text
            text-h6 text-uppercase
            home-active
            font-weight-medium
            text-caption
          "
          text
          to="/careers"
          exact
        >
          Careers
        </v-btn>
        <v-btn
          tile
          active-class=" font-weight-medium accent--text"
          class="
            primary--text
            text-h6 text-uppercase
            home-active
            font-weight-medium
            text-caption
          "
          text
          to="/faqs"
          exact
        >
          FAQs
        </v-btn>
        <v-btn
          tile
          active-class=" font-weight-medium accent--text"
          class="
            primary--text
            text-h6 text-uppercase
            home-active
            font-weight-medium
            text-caption
          "
          text
          to="/contact"
          exact
        >
          Contact
        </v-btn>
      </v-toolbar-items>

      <v-btn
        dark
        depressed
        color="white"
        class="text-capitalize font-weight-regular"
      >
        <v-google-translate class="primary--text" />
      </v-btn>
      <v-app-bar-nav-icon
        large
        class="accent--text d-md-none"
        @click="drawer = true"
      />
      <v-btn
        to="/login"
        icon
        depressed
        color="white primary--text"
        class="text-capitalize d-md-none font-weight-regular"
      >
        <v-icon size="30" color="primary"> mdi-login-variant </v-icon>
      </v-btn>

      <v-btn
        to="/register"
        large
        depressed
        tile
        class="
          bg-gradient
          hidden-sm-and-down
          white--text
          text-subtitle-2
          ma-0
          px-8
        "
      >
        Open Account
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      style="opacity: 0.9; z-index: 99"
      fixed
      temporary
      class="bg-gradient"
      light
      right
    >
      <v-list dark color="white--text" nav>
        <v-list-group-item
          active-class="primary--text text-darken-4 text--accent-4"
        >
          <v-list-item to="/" dark exact>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group-item>
        <v-list-group
          active-class="primary--text"
          v-for="item in navLinks"
          :key="item.name"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            :to="child.route"
            v-for="child in item.links"
            :key="child.name"
            dense
          >
            <v-list-item-content>
              <v-list-item-title
                class="text-subtitle-2"
                v-text="child.name"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-group-item
          active-class="primary--text text-darken-4 text--accent-4"
        >
          <v-list-item to="/careers" dark exact>
            <v-list-item-content>
              <v-list-item-title>Careers</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group-item>
        <v-list-group-item
          active-class="primary--text text-darken-4 text--accent-4"
        >
          <v-list-item to="/faqs" dark exact>
            <v-list-item-content>
              <v-list-item-title>FAQs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group-item>
        <v-list-group-item
          active-class="primary--text text-darken-4 text--accent-4"
        >
          <v-list-item to="/contact" dark exact>
            <v-list-item-content>
              <v-list-item-title>Contact</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group-item>

        <v-list-item-icon>
          <v-spacer />
          <v-btn
            to="/login"
            tile
            depressed
            color="white"
            outlined
            class="text-capitalize mr-2"
          >
            Sign In
          </v-btn>
          <v-btn
            to="/register"
            tile
            depressed
            color="white"
            outlined
            class="text-capitalize"
          >
            Sign Up
          </v-btn>
        </v-list-item-icon>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    navLinks: [
      // {
      //   name: "Home",
      //   route: "/",
      //   links: [],
      // },
      {
        name: "Personal Banking",
        links: [
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
      },
      // {
      //   name: "Business Banking",
      //   links: [
      //     {
      //       name: "Bank Cards",
      //       route: "/business-banking/bank-cards",
      //     },
      //     {
      //       name: "Deposit",
      //       route: "/business-banking/deposit",
      //     },
      //     {
      //       name: "Foreign Drafts",
      //       route: "/business-banking/foreign-drafts",
      //     },
      //     {
      //       name: "Interest Checking",
      //       route: "/business-banking/interest-checking",
      //     },
      //     {
      //       name: "Electronic Banking",
      //       route: "/business-banking/electronic-banking",
      //     },
      //     {
      //       name: "Money Market Account",
      //       route: "/business-banking/money-market-account",
      //     },
      //     {
      //       name: "Small Business Checking",
      //       route: "/business-banking/small-business-checking",
      //     },
      //     {
      //       name: "Business Cash Management",
      //       route: "/business-banking/business-cash-management",
      //     },
      //     {
      //       name: "Currency Risk Management",
      //       route: "/business-banking/currency Risk Management",
      //     },
      //   ],
      // },
      {
        name: "Private Banking",
        links: [
          {
            name: "Banking Service",
            route: "/private-banking/banking-services",
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
      },
      // {
      //   name: "Careers",
      //   route: "/careers",
      // },
      // {
      //   name: "FAQs",
      //   route: "/faqs",
      // },
      // {
      //   name: "Contact",
      //   route: "/contact",
      // },
    ],
  }),
};
</script>

<style>
.v-btn:before {
  background-color: transparent;
}
.home-active {
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid white;
}
.home-active:hover {
  color: #e90000;
  border-bottom-color: #e90000;
}
</style>
