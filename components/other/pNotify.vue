<template>
  <v-card flat width="400" class="rounded-lg px-md-4 py-2">
    <v-card-text>
      <v-row no-gutters class="text-center">
        <v-col cols="12" class="py-2">
          <v-icon :color="type" size="104">
            {{ icon }}
          </v-icon>
        </v-col>
        <v-col cols="12" class="d-flex flex-column py-1">
          <span class="mb-1 text-subtitle-1 font-weight-bold">{{ title }}</span>
          <span class="mb-1">{{ subtitle }}</span>
        </v-col>
        <v-col cols="12" class="py-2">
          <v-btn
            v-if="button.is"
            :to="button.to"
            type="submit"
            depressed
            block
            :color="type"
            class="text-subtitle-2 font-weight-normal "
            @click="button.action"
          >
            {{ button.text }}
          </v-btn>
        </v-col>
      </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Notify',
  props: {
    type: {
      type: String,
      default: 'secondary'
    },
    title: {
      type: String,
      default: 'Successful'
    },
    subtitle: {
      type: String,
      default: 'The process was successful'
    },
    icon: {
      type: String,
      default: 'mdi-checkbox-marked-circle-outline'
    },
    button: {
      type: Object,
      default: () => ({
        is: false,
        to: '',
        text: '',
        action: () => {
          alert('Clicked')
        }
      })
    }
  },
  methods: {

  }

}
</script>

<style>

</style>
