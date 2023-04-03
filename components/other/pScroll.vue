<template>
  <v-card
    tile
    color="transparent"
    width="100%"
    height="100%"
    flat
    class=""
  >
    <v-card-text v-dragscroll.x="true" class="px-1 card-container py-1  d-flex justify-start  align-center">
      <slot />
    </v-card-text>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>
.card-container {
  overflow-x: auto;
  overflow-y: hidden;

}
.card-container::-webkit-scrollbar {
   width: 12px;
}

@media only screen and (max-width: 600px) {

}
</style>
