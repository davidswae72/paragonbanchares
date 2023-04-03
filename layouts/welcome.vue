<template>
  <v-app class="">
    <p-loading />
    <v-main class="main pb-16 openSans">
      <p-pattern />
      <v-slide-y-transition mode="out-in">
        <keep-alive>
          <nuxt />
        </keep-alive>
      </v-slide-y-transition>
      <p-alert />
    </v-main>
  </v-app>
</template>

<script>
import PAlert from "~/components/other/pAlert.vue";
import PLoading from "~/components/other/pLoading.vue";
import pPattern from "~/components/other/pPattern.vue";
export default {
  components: { pPattern, PAlert, PLoading },
  head() {
    return {
      title: "Login",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Karla:wght@200;300;500;700;800&family=Open+Sans:wght@300;400;600&display=swap",
        },
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
};
</script>

<style>
.bgpattern {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.karla {
  font-family: "Karla", sans-serif;
}
.openSans {
  font-family: "Open Sans", sans-serif;
}
.dmSans {
  font-family: "DM Sans", sans-serif;
}
.black {
  background: rgb(26, 0, 107);
  background: linear-gradient(
    51deg,
    rgba(26, 0, 107, 1) 29%,
    rgb(29, 2, 180) 90%
  );
}

.green {
  background: rgb(104, 186, 0);
  background: linear-gradient(
    51deg,
    rgba(104, 186, 0, 1) 29%,
    rgba(96, 222, 16, 1) 90%
  );
}

.orange {
  background: rgb(247, 141, 26);
  background: linear-gradient(
    51deg,
    rgba(247, 141, 26, 1) 29%,
    rgba(247, 185, 26, 1) 90%
  );
}

.purple {
  background: rgb(104, 0, 236);
  background: linear-gradient(
    51deg,
    rgb(50, 1, 116) 29%,
    rgba(104, 0, 236, 1) 90%
  );
}
</style>
