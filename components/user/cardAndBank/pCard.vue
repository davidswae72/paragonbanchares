<template>
  <div class="cardHover ma-2 mb-4">
    <!-- Default Styles with badge -->
    <v-badge
      v-if="defaultCard"
      bordered
      color="secondary"
      icon="mdi-check-all"
      offset-x="15"
      offset-y="15"
    >
      <p-icon-card
        style="min-width:310px; width:100%"
        rounded
        :icon="'mdi-credit-card'"
        :size="24"
        :styles="'pb-4 pt-8'"
        outline
        :icon-color="'secondary'"
        :title="`*** **** ${cardNo}`"
        :description="bank"
        class=" mb-0"
      />
    </v-badge>

    <!-- Other Styles with badge -->

    <p-icon-card
      v-else
      style="min-width:310px; width:100%"
      rounded
      :icon="'mdi-credit-card'"
      :size="24"
      :styles="'pb-4 pt-8'"
      outline
      :icon-color="'secondary'"
      :title="`*** **** ${cardNo}`"
      :description="bank"
      class=" mb-0"
    />

    <div>
      <v-btn text color="error" class="btnHover text-caption text-capitalize py-0 " @click="toggle(true)">
        Remove Card
      </v-btn>
      <v-btn v-if="!defaultCard" text color="secondary" class="btnHover text-caption text-capitalize py-0 px-0">
        Set Default
      </v-btn>
    </div>

    <p-modal
      :color="'error'"
      :dialog="dialog"
      :toggle="toggle"
      :action="delCard"
      :loading="loading.card"
      :title="'Delete Card'"
      :description="`You are about to delete this card (•••• •••• •••• ${cardNo}) from your account on BBMPCS.`"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import pIconCard from '~/components/other/pIconCard.vue'
import PModal from '~/components/other/pModal.vue'
export default {
  components: { pIconCard, PModal },
  props: {
    defaultCard: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ''
    },
    cardNo: {
      type: String,
      default: ''
    },
    bank: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    dialog: false
  }),

  computed: {
    ...mapGetters({ loading: 'authentication/getLoading' })
  },
  methods: {
    ...mapActions({ deleteCard: 'authentication/deleteCard' }),
    delCard () {
      this.deleteCard(this.id)
    },
    getBankImg (name) {
      return `/banks/${name}.png`
    },

    toggle (state) {
      this.dialog = state
    },

    checkIfDone () {
      setInterval(() => {
        if (this.loading.card) {
          setTimeout(() => {
            if (this.loading.card) {
              this.toggle(true)
            }
          }, 2000)
        }
      }, 1000)
    }
  }

}
</script>

<style>
.btnHover {
    visibility: hidden;
}
.cardHover:hover .btnHover {
    visibility: visible
}
</style>
