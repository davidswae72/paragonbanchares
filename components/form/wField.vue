<template>
  <div>
    <v-text-field
      v-if="type.toLowerCase() === 'text'"
      v-model="data"
      type="text"
      :name="name"
      :loading="loading"
      :dense="dense"
      :outlined="outlined"
      :color="color"
      :label="name"
      :required="required"
      :rules="rules.text"
      class="text-subtitle-2 font-weight-light rounded-md"
      :hint="hint"
    />
    <v-text-field
      v-if="type.toLowerCase() === 'email'"
      v-model="data"
      type="email"
      :name="password"
      :loading="loading"
      :dense="dense"
      :outlined="outlined"
      :clearable="clearable"
      :color="color"
      :label="name"
      :required="required"
      :rules="rules.email"
      class="text-subtitle-2 font-weight-light rounded-md"
      :hint="hint"
    />
    <v-text-field
      v-if="type.toLowerCase() === 'number'"
      v-model="data"
      type="number"
      :name="name"
      :loading="loading"
      :dense="dense"
      :outlined="outlined"
      :clearable="clearable"
      :color="color"
      :label="name"
      :required="required"
      :rules="rules.number"
      class="text-subtitle-2 font-weight-light rounded-md"
      :hint="hint"
    />
    <v-text-field
      v-if="type.toLowerCase() === 'password'"
      v-model="data"
      :type="show ? 'text' : 'password'"
      :name="name"
      :loading="loading"
      :dense="dense"
      :outlined="outlined"
      :clearable="clearable"
      :color="color"
      :label="name"
      :required="required"
      :rules="rules.password"
      class="text-subtitle-2 font-weight-light rounded-md"
      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
      :hint="hint"
      @click:append="show = !show"
    />
  </div>
</template>

<script>
export default {
  props: {
    model: [String, Number, Array, Object],
    name: String,
    type: {
      type: String,
      default: 'text'
    },
    color: {
      type: [String, Array, Object],
      default: 'primary'
    },
    label: String,
    required: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: true
    },
    dense: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    rules: {
      type: [Object],
      default: () => ({
        password: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be greater than 6 characters'
        ],
        email: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ]
      })
    },
    hint: String
  },
  data: () => ({
    show: false

  }),

  computed: {
    data: {
      get () {
        return this.model
      },
      set (val) {
        this.model = val
      }
    }
  },

  methods: {
    update (model) {
      this.$emit('update', model)
    }
  }

}
</script>

<style>

</style>
