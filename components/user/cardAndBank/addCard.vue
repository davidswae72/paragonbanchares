<template>
  <v-row class="ma-0">
    <v-col cols="12" class="px-0 text3--text text-h6">
      {{ !newCard ? 'Manage Cards' : 'Add New Card' }}
    </v-col>
    <v-col v-if="!newCard" cols="12" class="pa-0">
      <p-scroll>
        <p-card
          v-for="(card,i) in cards"
          :id="card.cardId"
          :key="i"
          :default-card="cards.length === 1"
          :card-no="card.last4"
          :bank="card.bank"
        />
      </p-scroll>
    </v-col>
    <v-col v-if="!newCard" cols="12" :class="!cards.length === 0 ? 'mt-n10' : 'mt-n4'">
      <p-icon-card :action="()=>{newCard = true}" center outline :icon="'mdi-plus'" :title="'New Card'" />
    </v-col>
    <v-col v-if="newCard" cols="12" class="pa-0">
      <card-form />
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import PCard from './pCard.vue'
import CardForm from './cardForm.vue'
import pIconCard from '~/components/other/pIconCard.vue'
import PScroll from '~/components/other/pScroll.vue'

export default {
  components: { pIconCard, PScroll, PCard, CardForm },
  props: ['sideBarToggle'],
  data: () => ({

    newCard: false

  }),
  computed: {
    ...mapGetters({ loading: 'authentication/getLoading', user: 'authentication/getUser' }),
    cards () {
      const arr = this.user && this.user.Cards
      console.log(arr)
      return arr
    }
  },
  methods: {

  }

}
</script>

<style>

</style>
