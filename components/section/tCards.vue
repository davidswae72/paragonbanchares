<template>
  <v-row no-gutters justify="center" class="ma-0 mt-n10 pb-6">
    <v-col
      v-for="(item, i) in services"
      :key="i"
      :data-aos-delay="item.delay"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      cols="12"
      sm="6"
      md="3"
    >
      <v-card
        class="position:relative"
        min-height="270"
        style="border: 1px solid #6800ec"
        flat
        tile
      >
        <v-card-text
          class="pa-6 text-center py-10 d-flex flex-column align-center"
        >
          <v-btn x-large text fab depressed color="black lighten-4">
            <v-icon size="70" :color="item.color"> {{ item.icon }} </v-icon>
          </v-btn>
          <div class="dark--text d-flex flex-column my-4">
            <span class="text-h6 text-md-h5 my-2 font-weight-medium">
              {{ item.title }}
            </span>
            <span
              style="line-height: 1.5"
              class="dark--text font-weight-light text-sm-subtitle-2"
            >
              {{ item.description }}
            </span>
          </div>

          <div
            style="
              width: 100px;
              height: 4px;
              position: absolute;
              bottom: 0;
              margin: 0 auto;
            "
            class="accent mt-4 bg-gradient rounded-tl-lg rounded-tr-lg"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        delay: 500,
        icon: "mdi-piggy-bank-outline",
        title: "Transparency",
        color: "accent",
        description:
          "In every business transparency is a top priority. We are just that to start with",
      },
      {
        delay: 600,
        icon: "mdi-memory",
        title: "Fully Encrypted",
        color: "primary",
        description:
          "We use modern encryption tools to protect client data end-to-end. Remin protected",
      },
      {
        delay: 700,
        icon: "mdi-wallet-outline",
        title: "Instant Withdrawals",
        color: "accent",
        description:
          "Make deposits, recieve money and instanly withdraw to your local bank account",
      },
      {
        delay: 800,
        icon: "mdi-shield-lock-outline",
        title: "Safe and Secure",
        color: "primary",
        description:
          "Stay safe and fly banking with us. We are protected from DDos and data breaches",
      },
    ],
  }),
};
</script>

<style scoped>
</style>