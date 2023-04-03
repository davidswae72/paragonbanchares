<template>
  <v-card tile flat :class="type === 1 ? 'onHover' : 'onHover2'">
    <v-card-text
      :class="dark ? 'bg-gradient white--text' : 'white'"
      class="d-flex flex-column align-center pb-4 pt-8 relative"
    >
      <v-icon :color="dark ? 'white' : 'accent'" size="50" v-text="data.image">
      </v-icon>
      <span
        v-if="data && data.number"
        class="grey--text text--lighten-5 text-h1 font-weight-black absolute"
      >
        {{ data && data.number }}
      </span>
      <div
        :class="dark ? 'light--text' : 'dark--text'"
        class="
          text-capitalize
          my-3
          text-subtitle-1
          font-weight-medium
          text-sm-h5 text-center
        "
        v-text="data && data.title"
      ></div>
      <p
        :class="dark ? 'light--text' : 'dark--text'"
        style="line-height: 1.5"
        class="text-subtitle-2 text-center font-weight-light"
        v-text="data && data.description"
      ></p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    type: {
      type: [String, Number],
      default: 1,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({
        image: "",
        title: "",
        description: "",
        number: null,
      }),
    },
  },
};
</script>

<style scoped>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
  top: 10px;
  right: 10px;
}
.onHover,
.onHover2 {
  transition: all 0.5s ease-in-out;
}

.onHover:hover {
  border: 4px solid #1a71f5;
  /* transform: scale(2); */
}
.onHover2:hover {
  /* border: 4px solid #1a71f5; */
  transform: scale(1.13);
}
</style>