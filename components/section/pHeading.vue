<template>
  <div class="d-flex flex-column align-center">
    <div class="my-4 text-center">
      <div
        class="
          text-capitalise
          text3--text
          font-weight-bold
          text3--text
          text-h5 text-sm-h3
        "
      >
        <slot name="title" />
      </div>
    </div>
    <v-divider
      style="width: 50px; padding: 1px"
      class="secondary mb-6 mt-2"
    ></v-divider>
    <div
      class="
        tex1--text
        text--lighten-2
        font-weight-light
        text-subtitle-2 text-sm-subtitle-1 text-center
      "
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>

</template>

<script>
export default {};
</script>

<style>
</style>