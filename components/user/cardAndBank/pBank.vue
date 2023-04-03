<template>
  <div class="cardHover ma-2">
    <!-- Default Styles with badge -->
    <v-badge
      v-if="defaultBank"
      bordered
      color="secondary"
      icon="mdi-check-all"
      offset-x="15"
      offset-y="15"
    >
      <p-icon-card
        style="min-width:310px; width:100%"
        rounded
        :icon="'mdi-bank'"
        :size="24"
        :styles="'pb-4 pt-8'"
        outline
        :icon-color="'secondary'"
        :title="accNumber"
        :description="name"
        class=" mb-0"
      />
    </v-badge>

    <!-- Other Styles with badge -->

    <p-icon-card
      v-else
      style="min-width:310px; width:100%"
      rounded
      :icon="'mdi-bank'"
      :size="24"
      :styles="'pb-4 pt-8'"
      outline
      :icon-color="'secondary'"
      :title="accNumber"
      :description="name"
      class=" mb-0"
    />

    <div>
      <v-btn text color="error" class="btnHover text-caption text-capitalize py-0 " @click="toggle(true)">
        Remove Bank
      </v-btn>
      <v-btn v-if="!defaultBank" text color="secondary" class="btnHover text-caption text-capitalize py-0 px-0">
        Set Default
      </v-btn>
    </div>

    <p-modal
      :color="'error'"
      :dialog="dialog"
      :toggle="toggle"
      :action="delBank"
      :loading="loading.bank"
      :title="'Delete Bank'"
      :description="`You are about to delete this Bank Account (${name} - ${accNumber}) from your account on BBMPCS.`"
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
    defaultBank: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    accNumber: {
      type: [String, Number],
      default: ''
    },
    id: {
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
    ...mapActions({ deleteBank: 'authentication/deleteBank' }),
    delBank () {
      this.deleteBank(this.id)
    },
    getBankImg (name) {
      return `/banks/${name}.png`
    },

    toggle (state) {
      this.dialog = state
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
