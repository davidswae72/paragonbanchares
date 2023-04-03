<template>
  <v-form ref="form" v-model="valid" lazy-validation class="pb-2">
    <v-row no-gutters class="py-4">
      <v-col cols="12" md="6" class="py-0">
        <v-text-field
          v-model="firstName"
          name="firstName"
          type="text"
          dense
          outlined
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          color="primary"
          label="First Name"
          required
          :rules="firstNameRules"
        />
      </v-col>
      <v-col cols="12" md="6" class="py-0">
        <v-text-field
          v-model="lastName"
          name="lastName"
          type="text"
          dense
          outlined
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          color="primary"
          label="Last Names"
          required
          :rules="lastNameRules"
        />
      </v-col>

      <v-col cols="12" md="6" class="py-0">
        <v-text-field
          v-model="email"
          name="email"
          type="text"
          dense
          outlined
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          color="primary"
          label="Email"
          required
          :rules="emailRules"
        />
      </v-col>

      <v-col cols="12" md="6" class="py-0">
        <v-text-field
          v-model="phoneNumber"
          name="phoneNumber"
          type="number"
          dense
          outlined
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          color="primary"
          label="PhoneNumber"
          required
        />
      </v-col>
      <v-col cols="6" class="py-0">
        <v-select
          v-model="gender"
          dense
          color="primary"
          :items="genders"
          outlined
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          :rules="[(v) => !!v || 'Gender is required']"
          label="Gender"
          required
        />
      </v-col>

      <v-col cols="6" class="py-0">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dob"
              :rules="[(v) => !!v || 'Date of Birth is required']"
              outlined
              class="text-subtitle-2 mx-1 font-weight-light rounded-0"
              dense
              label="Date of Birth"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker v-model="dob" color="primary" scrollable>
            <v-spacer />
            <v-btn
              text
              class="
                text-capitalize
                mx-1
                rounded
                text-subtitle-2
                font-weight-regular
              "
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              depressed
              text
              class="
                text-capitalize
                mx-1
                rounded
                text-subtitle-2
                font-weight-regular
              "
              color="primary"
              @click="$refs.menu.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="6" class="py-0">
        <v-text-field
          v-model="password"
          :type="show ? 'text' : 'password'"
          name="password"
          dense
          outlined
          color="primary"
          label="Password"
          required
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          :rules="passwordRules"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          hint="Password must be 8 characters long and contain atleast one lowercase, uppercase, number and special character"
          @click:append="show = !show"
        />
      </v-col>
      <v-col cols="6" class="py-0">
        <v-text-field
          v-model="confirmPassword"
          :type="show1 ? 'text' : 'password'"
          name="confirmPassword"
          dense
          outlined
          color="primary"
          label="Confirm Password"
          required
          class="text-subtitle-2 mx-1 font-weight-light rounded-0"
          :rules="[confirmPasswordRules, passwordConfirmationRule]"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show1 = !show1"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-file-input
          v-model="photo"
          dense
          type="file"
          name="image"
          chips
          outlined
          class="text-subtitle-2 font-weight-light rounded-0"
          required
          :rules="[(v) => !!v || 'Passport is required']"
          label="Upload Passport"
          prepend-icon="mdi-camera"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <v-btn
          depressed
          tile
          class="
            bg-gradient
            white--text
            text-capitalize
            mx-1
            text-subtitle-2
            font-weight-regular
          "
          @click="next"
        >
          Continue
        </v-btn>
        <v-btn
          class="text-capitalize mx-1 text-subtitle-2 font-weight-regular"
          text
          @click="switchStep(1)"
        >
          Back
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PersonalDetails",
  props: ["switchStep", "step"],
  data: () => ({
    valid: true,
    show: false,
    show1: false,
    photo: null,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    firstName: "",
    firstNameRules: [(v) => !!v || "First Name is required"],
    lastName: "",
    lastNameRules: [(v) => !!v || "Last Name is required"],
    phoneNumber: "",
    phoneNumberRules: [(v) => !!v || "Phone Number is required"],
    menu: false,
    dob: "",
    date: new Date().toISOString().substr(0, 10),
    gender: null,
    genders: ["Male", "Female"],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
    ],
    confirmPassword: "",
    confirmPasswordRules: [(v) => !!v || "Password is required"],
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
  methods: {
    ...mapMutations({ setData: "authentication/setData" }),
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const searchText = queryText.toLowerCase();
      return textOne.includes(searchText);
    },

    next() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const personal = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email.trim(),
          phoneNumber: this.phoneNumber,
          password: this.password,
          photo: this.photo,
          dob: this.dob,
          gender: this.gender,
          date: this.getDate("current"),
        };
        this.setData({ type: "personal", value: personal });
        this.switchStep(2);
        // console.log(this.step)
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    getDate(get, days) {
      const currentDate = new Date();
      let newDate;

      function addDays(days) {
        const result = new Date(currentDate);
        result.setDate(result.getDate() + days);
        return formatDate(result);
      }

      function formatDate(date) {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${date.getDate()} ${
          months[date.getMonth()]
        }, ${date.getFullYear()}`;
      }

      if (get === "add") {
        newDate = addDays(days);
      } else if (get === "current") {
        newDate = formatDate(currentDate);
      }
      return newDate;
    },
  },
};
</script>

<style>
</style>
