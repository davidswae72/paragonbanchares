<template>
  <v-container>
    <v-row
      v-if="verificationStatus !== 'approved'"
      no-gutters
      justify="center"
      class="ma-0"
    >
      <v-col cols="12" class="px-1">
        <v-alert v-if="verificationStatus == null" dense tile type="error">
          <div class="d-flex align-center">
            You can't apply for a loan until your account is verified
            <v-spacer></v-spacer>
            <v-btn
              large
              depressed
              color="white"
              @click="toggleVerify(true)"
              class="text-subtitle-2 error--text text-capitalize"
            >
              Verify Now
            </v-btn>
          </div>
        </v-alert>
        <v-alert
          v-if="verificationStatus == 'pending'"
          dense
          tile
          type="warning"
        >
          Account is under verification, check back later
        </v-alert>
      </v-col>
    </v-row>
    <v-row justify="center" class="ma-0">
      <v-col cols="12" md="11" class="pa-0">
        <p-container tile :title="'LOAN APPLICATION'">
          <v-row class="ma-0">
            <v-col v-if="!show" cols="12" sm="6" md="4" class="pa-1">
              <v-btn
                depressed
                :disabled="verificationStatus !== 'approved'"
                block
                color="primary"
                class="text-subtitle-2 font-weight-normal mx-1"
                @click="show = !show"
              >
                Apply For Loan
              </v-btn>
            </v-col>
            <v-col v-if="show" cols="12" class="pa-0">
              <v-card flat>
                <v-card-title
                  class="text-subtitle-2 py-0 font-weight-medium text-uppercase"
                >
                  Application Form
                  <v-chip
                    small
                    outlined
                    label
                    color="primary"
                    class="ml-2 d-none d-sm-block"
                  >
                    FORM
                  </v-chip>
                  <v-spacer />
                  <v-btn
                    depressed
                    outlined
                    small
                    color="primary"
                    class="text-subtitle-2 font-weight-normal mx-1"
                    @click="show = false"
                  >
                    <v-icon size="20" :left="$vuetify.breakpoint.smAndUp">
                      mdi-arrow-left
                    </v-icon>
                    <span class="d-none d-sm-block text-body-2">Go Back</span>
                  </v-btn>
                </v-card-title>
              </v-card>
              <v-card-text>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  @submit.prevent="submit"
                >
                  <v-row class="ma-0" no-gutters>
                    <v-col cols="12" class="d-flex mb-2 text-subtitle-2">
                      Loan Details
                      <v-spacer />
                      <v-btn
                        text
                        icon
                        :color="`${accordian.loan ? 'primary' : ''}`"
                        @click="accordian.loan = !accordian.loan"
                      >
                        <v-icon small>
                          {{
                            accordian.loan ? "mdi-arrow-down" : "mdi-arrow-up"
                          }}
                        </v-icon>
                      </v-btn>
                    </v-col>
                    <v-col
                      v-if="accordian.loan"
                      cols="12"
                      sm="6"
                      class="py-0 mb-n1 pr-sm-1"
                    >
                      <v-text-field
                        v-model="xAmount"
                        type="text"
                        name="amount"
                        dense
                        outlined
                        color="primary"
                        label="Desired Amount"
                        :rules="loan.amountRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>

                    <v-col
                      v-if="accordian.loan"
                      cols="12"
                      sm="6"
                      class="py-0 mb-n1 pr-sm-1"
                    >
                      <v-text-field
                        v-model="xAmount2"
                        type="text"
                        name="monthlyPayment"
                        dense
                        outlined
                        color="primary"
                        label="Monthly Payment"
                        :rules="loan.monthlyPaymentRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>

                    <v-col cols="12" class="d-flex mb-2 text-subtitle-2">
                      Personal Details
                      <v-spacer />
                      <v-btn
                        text
                        icon
                        :color="`${accordian.personal ? 'primary' : ''}`"
                        @click="accordian.personal = !accordian.personal"
                      >
                        <v-icon small>
                          {{
                            accordian.personal
                              ? "mdi-arrow-down"
                              : "mdi-arrow-up"
                          }}
                        </v-icon>
                      </v-btn>
                    </v-col>
                    <v-col
                      v-if="accordian.personal"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 pr-sm-1"
                    >
                      <v-text-field
                        v-model="personal.firstName"
                        type="text"
                        name="firstName"
                        dense
                        outlined
                        color="primary"
                        label="First Name"
                        :rules="personal.firstNameRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.personal"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-text-field
                        v-model="personal.lastName"
                        type="text"
                        name="lastName"
                        dense
                        outlined
                        color="primary"
                        label="Last Name"
                        :rules="personal.lastNameRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.personal"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-text-field
                        v-model="personal.email"
                        type="text"
                        name="email"
                        dense
                        outlined
                        color="primary"
                        label="email"
                        :rules="personal.emailRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>

                    <v-col
                      v-if="accordian.personal"
                      cols="12"
                      sm="4"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-menu
                        ref="menu"
                        v-model="personal.menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        min-width="290px"
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-text-field
                            v-model="personal.dob"
                            :rules="[(v) => !!v || 'Date of Birth is required']"
                            outlined
                            class="text-subtitle-2 font-weight-light rounded-md"
                            dense
                            label="Date of Birth"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="personal.dob"
                          color="primary"
                          scrollable
                        >
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
                            @click="personal.menu = false"
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
                            @click="$refs.menu.save(personal.date)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-col
                      v-if="accordian.personal"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-autocomplete
                        v-model="personal.country"
                        :items="personal.countries"
                        item-text="name"
                        dense
                        outlined
                        class="text-subtitle-2 font-weight-light rounded-md"
                        color="primary"
                        label="Nationality"
                        required
                        :rules="[(v) => !!v || 'Nationality is required']"
                      />
                    </v-col>

                    <v-col cols="12" class="py-0 mb-n1 px-sm-1">
                      <v-btn
                        depressed
                        type="submit"
                        color="primary"
                        :loading="loading.loan"
                        class="text-subtitle-2 font-weight-normal mx-1"
                      >
                        Proceed
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-col>
          </v-row>
        </p-container>
        <x-transaction
          v-if="!show"
          :filter="false"
          :title="'Loan Applications'"
          class="mt-4"
          :type="'loan'"
        />
      </v-col>
    </v-row>
    <VerifyAccount :drawer="drawer" :toggle="toggleVerify" />
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pContainer from "~/components/other/pContainer.vue";
import XTransaction from "~/components/other/xTransaction.vue";
import VerifyAccount from "~/components/other/verifyAccount.vue";
export default {
  name: "Loan",
  components: { pContainer, XTransaction, VerifyAccount },
  layout: "dashboard",
  data: () => ({
    accordian: {
      loan: true,
      personal: true,
    },
    show: false,

    valid: true,
    drawer: false,
    loan: {
      amount: "",
      amountRules: [(v) => !!v || "Amount is required"],
      monthlyPayment: "",
      monthlyPaymentRules: [(v) => !!v || "Monthly Payment is required"],
    },
    personal: {
      firstName: "",
      firstNameRules: [(v) => !!v || "First Name is required"],
      lastName: "",
      lastNameRules: [(v) => !!v || "Last Name is required"],
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      phoneNumber: "",
      phoneNumberRules: [(v) => !!v || "Phone Number is required"],
      menu: false,
      dob: "",
      date: new Date().toISOString().substr(0, 10),
      country: null,
      countries: [
        { name: "Afghanistan", code: "AF" },
        { name: "Åland Islands", code: "AX" },
        { name: "Albania", code: "AL" },
        { name: "Algeria", code: "DZ" },
        { name: "American Samoa", code: "AS" },
        { name: "AndorrA", code: "AD" },
        { name: "Angola", code: "AO" },
        { name: "Anguilla", code: "AI" },
        { name: "Antarctica", code: "AQ" },
        { name: "Antigua and Barbuda", code: "AG" },
        { name: "Argentina", code: "AR" },
        { name: "Armenia", code: "AM" },
        { name: "Aruba", code: "AW" },
        { name: "Australia", code: "AU" },
        { name: "Austria", code: "AT" },
        { name: "Azerbaijan", code: "AZ" },
        { name: "Bahamas", code: "BS" },
        { name: "Bahrain", code: "BH" },
        { name: "Bangladesh", code: "BD" },
        { name: "Barbados", code: "BB" },
        { name: "Belarus", code: "BY" },
        { name: "Belgium", code: "BE" },
        { name: "Belize", code: "BZ" },
        { name: "Benin", code: "BJ" },
        { name: "Bermuda", code: "BM" },
        { name: "Bhutan", code: "BT" },
        { name: "Bolivia", code: "BO" },
        { name: "Bosnia and Herzegovina", code: "BA" },
        { name: "Botswana", code: "BW" },
        { name: "Bouvet Island", code: "BV" },
        { name: "Brazil", code: "BR" },
        { name: "British Indian Ocean Territory", code: "IO" },
        { name: "Brunei Darussalam", code: "BN" },
        { name: "Bulgaria", code: "BG" },
        { name: "Burkina Faso", code: "BF" },
        { name: "Burundi", code: "BI" },
        { name: "Cambodia", code: "KH" },
        { name: "Cameroon", code: "CM" },
        { name: "Canada", code: "CA" },
        { name: "Cape Verde", code: "CV" },
        { name: "Cayman Islands", code: "KY" },
        { name: "Central African Republic", code: "CF" },
        { name: "Chad", code: "TD" },
        { name: "Chile", code: "CL" },
        { name: "China", code: "CN" },
        { name: "Christmas Island", code: "CX" },
        { name: "Cocos (Keeling) Islands", code: "CC" },
        { name: "Colombia", code: "CO" },
        { name: "Comoros", code: "KM" },
        { name: "Congo", code: "CG" },
        { name: "Congo, The Democratic Republic of the", code: "CD" },
        { name: "Cook Islands", code: "CK" },
        { name: "Costa Rica", code: "CR" },
        { name: "Cote D'Ivoire", code: "CI" },
        { name: "Croatia", code: "HR" },
        { name: "Cuba", code: "CU" },
        { name: "Cyprus", code: "CY" },
        { name: "Czech Republic", code: "CZ" },
        { name: "Denmark", code: "DK" },
        { name: "Djibouti", code: "DJ" },
        { name: "Dominica", code: "DM" },
        { name: "Dominican Republic", code: "DO" },
        { name: "Ecuador", code: "EC" },
        { name: "Egypt", code: "EG" },
        { name: "El Salvador", code: "SV" },
        { name: "Equatorial Guinea", code: "GQ" },
        { name: "Eritrea", code: "ER" },
        { name: "Estonia", code: "EE" },
        { name: "Ethiopia", code: "ET" },
        { name: "Falkland Islands (Malvinas)", code: "FK" },
        { name: "Faroe Islands", code: "FO" },
        { name: "Fiji", code: "FJ" },
        { name: "Finland", code: "FI" },
        { name: "France", code: "FR" },
        { name: "French Guiana", code: "GF" },
        { name: "French Polynesia", code: "PF" },
        { name: "French Southern Territories", code: "TF" },
        { name: "Gabon", code: "GA" },
        { name: "Gambia", code: "GM" },
        { name: "Georgia", code: "GE" },
        { name: "Germany", code: "DE" },
        { name: "Ghana", code: "GH" },
        { name: "Gibraltar", code: "GI" },
        { name: "Greece", code: "GR" },
        { name: "Greenland", code: "GL" },
        { name: "Grenada", code: "GD" },
        { name: "Guadeloupe", code: "GP" },
        { name: "Guam", code: "GU" },
        { name: "Guatemala", code: "GT" },
        { name: "Guernsey", code: "GG" },
        { name: "Guinea", code: "GN" },
        { name: "Guinea-Bissau", code: "GW" },
        { name: "Guyana", code: "GY" },
        { name: "Haiti", code: "HT" },
        { name: "Heard Island and Mcdonald Islands", code: "HM" },
        { name: "Holy See (Vatican City State)", code: "VA" },
        { name: "Honduras", code: "HN" },
        { name: "Hong Kong", code: "HK" },
        { name: "Hungary", code: "HU" },
        { name: "Iceland", code: "IS" },
        { name: "India", code: "IN" },
        { name: "Indonesia", code: "ID" },
        { name: "Iran, Islamic Republic Of", code: "IR" },
        { name: "Iraq", code: "IQ" },
        { name: "Ireland", code: "IE" },
        { name: "Isle of Man", code: "IM" },
        { name: "Israel", code: "IL" },
        { name: "Italy", code: "IT" },
        { name: "Jamaica", code: "JM" },
        { name: "Japan", code: "JP" },
        { name: "Jersey", code: "JE" },
        { name: "Jordan", code: "JO" },
        { name: "Kazakhstan", code: "KZ" },
        { name: "Kenya", code: "KE" },
        { name: "Kiribati", code: "KI" },
        { name: "Korea, Democratic People'S Republic of", code: "KP" },
        { name: "Korea, Republic of", code: "KR" },
        { name: "Kuwait", code: "KW" },
        { name: "Kyrgyzstan", code: "KG" },
        { name: "Lao People'S Democratic Republic", code: "LA" },
        { name: "Latvia", code: "LV" },
        { name: "Lebanon", code: "LB" },
        { name: "Lesotho", code: "LS" },
        { name: "Liberia", code: "LR" },
        { name: "Libyan Arab Jamahiriya", code: "LY" },
        { name: "Liechtenstein", code: "LI" },
        { name: "Lithuania", code: "LT" },
        { name: "Luxembourg", code: "LU" },
        { name: "Macao", code: "MO" },
        { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
        { name: "Madagascar", code: "MG" },
        { name: "Malawi", code: "MW" },
        { name: "Malaysia", code: "MY" },
        { name: "Maldives", code: "MV" },
        { name: "Mali", code: "ML" },
        { name: "Malta", code: "MT" },
        { name: "Marshall Islands", code: "MH" },
        { name: "Martinique", code: "MQ" },
        { name: "Mauritania", code: "MR" },
        { name: "Mauritius", code: "MU" },
        { name: "Mayotte", code: "YT" },
        { name: "Mexico", code: "MX" },
        { name: "Micronesia, Federated States of", code: "FM" },
        { name: "Moldova, Republic of", code: "MD" },
        { name: "Monaco", code: "MC" },
        { name: "Mongolia", code: "MN" },
        { name: "Montserrat", code: "MS" },
        { name: "Morocco", code: "MA" },
        { name: "Mozambique", code: "MZ" },
        { name: "Myanmar", code: "MM" },
        { name: "Namibia", code: "NA" },
        { name: "Nauru", code: "NR" },
        { name: "Nepal", code: "NP" },
        { name: "Netherlands", code: "NL" },
        { name: "Netherlands Antilles", code: "AN" },
        { name: "New Caledonia", code: "NC" },
        { name: "New Zealand", code: "NZ" },
        { name: "Nicaragua", code: "NI" },
        { name: "Niger", code: "NE" },
        { name: "Nigeria", code: "NG" },
        { name: "Niue", code: "NU" },
        { name: "Norfolk Island", code: "NF" },
        { name: "Northern Mariana Islands", code: "MP" },
        { name: "Norway", code: "NO" },
        { name: "Oman", code: "OM" },
        { name: "Pakistan", code: "PK" },
        { name: "Palau", code: "PW" },
        { name: "Palestinian Territory, Occupied", code: "PS" },
        { name: "Panama", code: "PA" },
        { name: "Papua New Guinea", code: "PG" },
        { name: "Paraguay", code: "PY" },
        { name: "Peru", code: "PE" },
        { name: "Philippines", code: "PH" },
        { name: "Pitcairn", code: "PN" },
        { name: "Poland", code: "PL" },
        { name: "Portugal", code: "PT" },
        { name: "Puerto Rico", code: "PR" },
        { name: "Qatar", code: "QA" },
        { name: "Reunion", code: "RE" },
        { name: "Romania", code: "RO" },
        { name: "Russian Federation", code: "RU" },
        { name: "RWANDA", code: "RW" },
        { name: "Saint Helena", code: "SH" },
        { name: "Saint Kitts and Nevis", code: "KN" },
        { name: "Saint Lucia", code: "LC" },
        { name: "Saint Pierre and Miquelon", code: "PM" },
        { name: "Saint Vincent and the Grenadines", code: "VC" },
        { name: "Samoa", code: "WS" },
        { name: "San Marino", code: "SM" },
        { name: "Sao Tome and Principe", code: "ST" },
        { name: "Saudi Arabia", code: "SA" },
        { name: "Senegal", code: "SN" },
        { name: "Serbia and Montenegro", code: "CS" },
        { name: "Seychelles", code: "SC" },
        { name: "Sierra Leone", code: "SL" },
        { name: "Singapore", code: "SG" },
        { name: "Slovakia", code: "SK" },
        { name: "Slovenia", code: "SI" },
        { name: "Somalia", code: "SO" },
        { name: "South Africa", code: "ZA" },
        { name: "South Georgia and the South Sandwich Islands", code: "GS" },
        { name: "Spain", code: "ES" },
        { name: "Sri Lanka", code: "LK" },
        { name: "Sudan", code: "SD" },
        { name: "Suriname", code: "SR" },
        { name: "Svalbard and Jan Mayen", code: "SJ" },
        { name: "Swaziland", code: "SZ" },
        { name: "Sweden", code: "SE" },
        { name: "Switzerland", code: "CH" },
        { name: "Syrian Arab Republic", code: "SY" },
        { name: "Taiwan, Province of China", code: "TW" },
        { name: "Tajikistan", code: "TJ" },
        { name: "Tanzania, United Republic of", code: "TZ" },
        { name: "Thailand", code: "TH" },
        { name: "Timor-Leste", code: "TL" },
        { name: "Togo", code: "TG" },
        { name: "Tokelau", code: "TK" },
        { name: "Tonga", code: "TO" },
        { name: "Trinidad and Tobago", code: "TT" },
        { name: "Tunisia", code: "TN" },
        { name: "Turkey", code: "TR" },
        { name: "Turkmenistan", code: "TM" },
        { name: "Turks and Caicos Islands", code: "TC" },
        { name: "Tuvalu", code: "TV" },
        { name: "Uganda", code: "UG" },
        { name: "Ukraine", code: "UA" },
        { name: "United Arab Emirates", code: "AE" },
        { name: "United Kingdom", code: "GB" },
        { name: "United States", code: "US" },
        { name: "United States Minor Outlying Islands", code: "UM" },
        { name: "Uruguay", code: "UY" },
        { name: "Uzbekistan", code: "UZ" },
        { name: "Vanuatu", code: "VU" },
        { name: "Venezuela", code: "VE" },
        { name: "Viet Nam", code: "VN" },
        { name: "Virgin Islands, British", code: "VG" },
        { name: "Virgin Islands, U.S.", code: "VI" },
        { name: "Wallis and Futuna", code: "WF" },
        { name: "Western Sahara", code: "EH" },
        { name: "Yemen", code: "YE" },
        { name: "Zambia", code: "ZM" },
        { name: "Zimbabwe", code: "ZW" },
      ],
    },
  }),
  computed: {
    ...mapGetters({
      loading: "controller/getLoading",
      state: "authentication/getState",
      user: "authentication/getUser",
    }),
    verificationStatus() {
      const verification = this.state("verification");
      return verification.status;
    },
    xAmount: {
      get() {
        let val = parseInt(this.loan.amount);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return `${this.user.symbol}${val}`;
        }
      },
      set(val) {
        // check if the first Character is ₦ and remove it
        const firstChar = val.charAt(0);
        if (firstChar === this.user.symbol) {
          val = val.substring(1);
        }

        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.loan.amount = val;
        }
      },
    },
    xAmount2: {
      get() {
        let val = parseInt(this.loan.monthlyPayment);
        val = val.toLocaleString();
        if (val === "NaN") {
          return "";
        } else {
          return `${this.user.symbol}${val}`;
        }
      },
      set(val) {
        // check if the first Character is ₦ and remove it
        const firstChar = val.charAt(0);
        if (firstChar === this.user.symbol) {
          val = val.substring(1);
        }

        // Convert the value to a number
        if (val !== null) {
          val = val.split(",").join("");
          val = parseInt(val);
          this.loan.monthlyPayment = val;
        }
      },
    },
  },
  mounted() {
    console.log(this.user);
  },
  methods: {
    ...mapActions({ loanForm: "controller/loanForm" }),
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const amount = parseInt(this.xAmount.split(",").join("").slice(1));
        const amount2 = parseInt(this.xAmount2.split(",").join("").slice(1));
        const payload = {
          amount,
          monthlyPayment: amount2,
          firstName: this.personal.firstName,
          lastName: this.personal.lastName,
          email: this.personal.email,
          dob: this.personal.dob,
          country: this.personal.country,
          date: this.getDate("current"),
          status: "pending",
          type: "loan",
        };
        console.log(payload);
        this.loanForm(payload);
        this.clear();
      }
    },

    clear() {
      this.loan.amount = "";
      this.loan.monthlyPayment = "";
      this.personal.firstName = "";
      this.personal.lastName = "";
      this.personal.email = "";
      this.personal.phoneNumber = "";
      this.personal.menu = false;
      this.personal.dob = "";
      this.personal.country = null;
      this.resetValidation();
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },
    toggleVerify(state) {
      this.drawer = state;
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
