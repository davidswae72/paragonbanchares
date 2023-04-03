<template>
  <v-app v-if="user" class="grey lighten-3">
    <div>
      <v-app-bar fixed flat app elevation outlined color="white">
        <v-app-bar-nav-icon
          class="dark--text"
          @click.stop="(mini = !mini), (drawer = true)"
        />
        <v-toolbar-items flat color="transparent white--text">
          <v-btn tile="" color="" class="font-weight-regular" text exact>
            {{ activePage }}
          </v-btn>
        </v-toolbar-items>
        <v-spacer />

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" icon fab v-on="on">
              <v-icon> fas fa-user-circle </v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item dense to="/dashboard/home" @click="switchPage('Home')">
              <v-list-item-icon>
                <v-icon size="20" class="px-1"> mdi-home-variant </v-icon>
              </v-list-item-icon>
              <v-list-item-title class="dark--text"
                >Dashboard</v-list-item-title
              >
            </v-list-item>
            <v-list-item
              dense
              to="/admin/account"
              @click="switchPage('Settings')"
            >
              <v-list-item-icon>
                <v-icon size="20" class="px-1"> mdi-account </v-icon>
              </v-list-item-icon>
              <v-list-item-title class="dark--text">Account</v-list-item-title>
            </v-list-item>

            <v-divider />
            <v-list-item dense @click="logout">
              <v-list-item-icon>
                <v-icon color="error" size="20" class="px-1">
                  fas fa-sign-out-alt
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title class="error--text">Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      app
      dark
      src="/bg/pattern.png"
      width="220"
      mobile-breakpoint="700"
      class="dark"
    >
      <v-list-item class="px-2 white">
        <v-list-item-avatar v-if="mini" large class="ml-n1">
          <v-img src="/logo/goldi.svg" />
        </v-list-item-avatar>

        <v-list-item-title v-else class="pa-2">
          <v-img src="/logo/gold2.svg" />
        </v-list-item-title>

        <v-btn icon color="primary" @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider />
      <v-list nav>
        <v-list-item
          v-for="link in sideLinks"
          :key="link.name"
          :to="link.route"
          exact
          link
          active-class=""
          @click="switchPage(link.name)"
        >
          <v-list-item-icon>
            <v-icon>
              {{ link.icon }}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ link.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list class="font-weight-medium">
        <v-list-item class="" @click="logout">
          <v-list-item-icon>
            <v-icon color="error"> fas fa-sign-out-alt </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="error--text"> Logout </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-3 main pb-16">
      <v-card v-if="$nuxt.isOffline" tile flat dark color="secondary">
        <v-card-text class="py-1">
          <v-icon color="white" size="36" left>
            mdi-wifi-strength-alert-outline
          </v-icon>
          Unable to verify your Internet connection
        </v-card-text>
      </v-card>
      <p-alert />

      <v-slide-y-transition mode="out-in">
        <keep-alive>
          <nuxt />
        </keep-alive>
      </v-slide-y-transition>
    </v-main>

    <v-footer fixed class="pa-0">
      <v-bottom-navigation
        dark
        background-color="primary ml-6"
        shift
        class="d-block d-sm-none d-flex justity-space-around ml-n1"
      >
        <v-btn
          v-for="link in sideLinks"
          :key="link.name"
          @click="goto(link.name, link.route)"
        >
          <span>{{ link.name }}</span>
          <v-icon>
            {{ link.icon }}
          </v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import pAlert from "~/components/other/pAlert.vue";
export default {
  components: { pAlert },
  data: () => ({
    tab: null,
    messages: 2,
    drawer: true,
    mini: true,
    permanent: true,

    sideLinks: [
      { name: "Home", route: "/admin", icon: "mdi-home-variant " },
      {
        name: "Account",
        route: "/admin/account",
        icon: "mdi-account-tie",
      },
      {
        name: "Users",
        route: "/admin/users",
        icon: "mdi-account-group ",
      },
      {
        name: "Transfer Request",
        route: "/admin/transfers",
        icon: "mdi-currency-usd",
      },
      {
        name: "Loan Request",
        route: "/admin/loans",
        icon: "mdi-cash-check",
      },
      {
        name: "IMS Code",
        route: "/admin/ims",
        icon: "mdi-ballot",
      },
    ],
  }),

  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css",
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      user: "authentication/getUser",
      activePage: "controller/getActivePage",
    }),
  },
  created() {
    this.$store.dispatch("authentication/handleAuth");
    // this.$store.dispatch('controller/initApp')
    if (this.$vuetify.breakpoint.xsOnly) {
      this.drawer = false;
    }
  },
  methods: {
    ...mapMutations({
      setActivePage: "controller/setActivePage",
      setAlert: "authentication/setAlert",
    }),
    switchPage(page) {
      this.setActivePage(page);
    },
    goto(page, to) {
      this.$router.push(to);
      this.setActivePage(page);
    },
    logout() {
      this.$store.dispatch("authentication/logoutUser");
    },
  },
};
</script>

<style scoped>
.logo.v-btn:before {
  background-color: transparent;
}

@media only screen and (max-width: 600px) {
  .main {
    padding-left: 0;
  }
}
</style>
