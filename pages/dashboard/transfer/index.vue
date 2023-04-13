<template>
  <v-container>
    <v-row justify="center" class="ma-0">
      <v-col cols="12" md="11" class="pa-0">
        <p-container tile :title="'FUND TRANSFER'">
          <v-row class="ma-0">
            <v-col v-if="!show" cols="12" sm="6" md="4" class="pa-1">
              <v-btn
                depressed
                block
                color="primary"
                class="text-subtitle-2 font-weight-normal mx-1"
                @click="show = !show"
              >
                International Transfer
              </v-btn>
            </v-col>
            <v-col v-if="!show" cols="12" sm="6" md="4" class="pa-1">
              <v-btn
                depressed
                block
                color="primary"
                class="text-subtitle-2 font-weight-normal mx-1"
                @click="domestic"
              >
                Domestic Transfer
              </v-btn>
            </v-col>
            <v-col v-if="show" cols="12" class="pa-0">
              <v-card flat>
                <v-card-title
                  class="text-subtitle-2 py-0 font-weight-medium text-uppercase"
                >
                  International Transfer
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
                  <v-row v-if="!next" class="ma-0" no-gutters>
                    <v-col cols="12" class="d-flex mb-2 text-subtitle-2">
                      Sender's Details
                      <v-spacer />
                      <v-btn
                        text
                        icon
                        :color="`${accordian.sender ? 'primary' : ''}`"
                        @click="accordian.sender = !accordian.sender"
                      >
                        <v-icon small>
                          {{
                            accordian.sender ? "mdi-arrow-down" : "mdi-arrow-up"
                          }}
                        </v-icon>
                      </v-btn>
                    </v-col>
                    <v-col
                      v-if="accordian.sender"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 pr-sm-1"
                    >
                      <v-text-field
                        v-model="sender.accNumber"
                        type="text"
                        name="accNumber"
                        dense
                        outlined
                        color="primary"
                        label="Account Number"
                        :rules="sender.accNumberRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.sender"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 pr-sm-1"
                    >
                      <v-text-field
                        v-model="sender.username"
                        type="text"
                        name="username"
                        dense
                        outlined
                        color="primary"
                        label="Account Username"
                        :rules="sender.usernameRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.sender"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 pr-sm-1"
                    >
                      <v-text-field
                        v-model="sender.remotePin"
                        type="text"
                        name="remotePin"
                        dense
                        outlined
                        color="primary"
                        label="Remote Pin"
                        :rules="sender.remotePinRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col cols="12" class="d-flex mb-2 text-subtitle-2">
                      Beneficiary's Details
                      <v-spacer />
                      <v-btn
                        text
                        icon
                        :color="`${accordian.beneficiary ? 'primary' : ''}`"
                        @click="accordian.beneficiary = !accordian.beneficiary"
                      >
                        <v-icon small>
                          {{
                            accordian.beneficiary
                              ? "mdi-arrow-down"
                              : "mdi-arrow-up"
                          }}
                        </v-icon>
                      </v-btn>
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 pr-sm-1"
                    >
                      <v-text-field
                        v-model="beneficiary.firstName"
                        type="text"
                        name="firstName"
                        dense
                        outlined
                        color="primary"
                        label="First Name"
                        :rules="beneficiary.firstNameRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-text-field
                        v-model="beneficiary.lastName"
                        type="text"
                        name="lastName"
                        dense
                        outlined
                        color="primary"
                        label="Last Name"
                        :rules="beneficiary.lastNameRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-text-field
                        v-model="beneficiary.bank"
                        type="text"
                        name="bank"
                        dense
                        outlined
                        color="primary"
                        label="Bank"
                        :rules="beneficiary.bankRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 pr-sm-1"
                    >
                      <v-text-field
                        v-model="beneficiary.swiftCode"
                        type="text"
                        name="swiftcode"
                        dense
                        outlined
                        color="primary"
                        label="Bank Swift Code"
                        :rules="beneficiary.swiftCodeRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-text-field
                        v-model="beneficiary.accNumber"
                        type="text"
                        name="accNumber"
                        dense
                        outlined
                        color="primary"
                        label="Account Number"
                        :rules="beneficiary.accNumberRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      sm="6"
                      md="4"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-autocomplete
                        v-model="beneficiary.country"
                        :items="beneficiary.countries"
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
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      sm="6"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-text-field
                        v-model="beneficiary.zipCode"
                        type="text"
                        name="zipcode"
                        dense
                        outlined
                        color="primary"
                        label="Zip Code"
                        :rules="beneficiary.zipCodeRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      sm="6"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-text-field
                        v-model="xAmount"
                        type="text"
                        name="amount"
                        dense
                        outlined
                        color="primary"
                        label="Amount"
                        :rules="beneficiary.amountRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-textarea
                        v-model="beneficiary.address"
                        name="address"
                        type="text"
                        dense
                        rows="2"
                        outlined
                        class="text-subtitle-2 font-weight-light rounded-md"
                        color="primary"
                        label="Address"
                        required
                        :rules="beneficiary.addressRules"
                      />
                    </v-col>
                    <v-col
                      v-if="accordian.beneficiary"
                      cols="12"
                      class="py-0 mb-n1 px-sm-1"
                    >
                      <v-textarea
                        v-model="beneficiary.purpose"
                        name="purpose"
                        type="text"
                        dense
                        rows="2"
                        outlined
                        class="text-subtitle-2 font-weight-light rounded-md"
                        color="primary"
                        label="Purpose of Transfer"
                        required
                        :rules="beneficiary.purposeRules"
                      />
                    </v-col>
                    <v-col cols="12" class="py-0 mb-n1 px-sm-1">
                      <v-btn
                        depressed
                        color="primary"
                        :loading="loading.transfer"
                        class="text-subtitle-2 font-weight-normal mx-1"
                        @click="goNext"
                      >
                        Next
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-row v-else class="ma-0">
                    <v-col cols="12" class="px-0">
                      Contact support
                      <v-btn
                        color="accent"
                        text
                        href="mailto:support@paragonbancharesbk.online"
                        class="px-0 text-lowercase"
                      >
                        support@paragonbancharesbk.online
                      </v-btn>
                      to get an <strong>I.M.S Code</strong>
                    </v-col>
                    <v-col cols="12" class="py-0 mb-n1 px-sm-1">
                      <v-text-field
                        v-model="imsCode"
                        type="text"
                        name="imsCode"
                        dense
                        outlined
                        color="primary"
                        label="I.M.S Code"
                        :rules="imsCodeRules"
                        class="text-subtitle-2 font-weight-light rounded-md"
                      />
                    </v-col>
                    <v-col cols="12" class="py-0 mb-n1 px-sm-1">
                      <v-btn
                        depressed
                        type="submit"
                        color="primary"
                        :loading="loading.transfer"
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
          :title="'Recent Transfers'"
          class="mt-4"
          :type="'transfer'"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import pContainer from "~/components/other/pContainer.vue";
import XTransaction from "~/components/other/xTransaction.vue";
export default {
  name: "FundTransfer",
  components: { pContainer, XTransaction },
  layout: "dashboard",
  data: () => ({
    show: false,
    valid: true,
    next: false,
    accordian: {
      sender: true,
      beneficiary: true,
    },
    imsCode: "",
    imsCodeRules: [(v) => !!v || "I.M.S Code is required"],
    sender: {
      accNumber: "",
      accNumberRules: [(v) => !!v || "Account Number is required"],
      username: "",
      usernameRules: [(v) => !!v || "Username is required"],
      remotePin: "",
      remotePinRules: [(v) => !!v || "Remote Pin is required"],
    },
    beneficiary: {
      firstName: "",
      firstNameRules: [(v) => !!v || "First Name is required"],
      lastName: "",
      lastNameRules: [(v) => !!v || "Last Name is required"],
      bank: "",
      bankRules: [(v) => !!v || "Bank is required"],
      swiftCode: "",
      swiftCodeRules: [(v) => !!v || "Swift Code is required"],
      accNumber: "",
      accNumberRules: [(v) => !!v || "Account Number is required"],
      zipCode: "",
      zipCodeRules: [(v) => !!v || "Zip Code is required"],
      amount: "",
      amountRules: [(v) => !!v || "Amount is required"],
      address: "",
      addressRules: [(v) => !!v || "Address is required"],
      purpose: "",
      purposeRules: [(v) => !!v || "Purpose of Transfer is required"],
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

  created() {
    this.$store.dispatch("admin/initIMSCode");
  },
  computed: {
    ...mapGetters({
      user: "authentication/getUser",
      loading: "controller/getLoading",
      state: "admin/getState",
    }),
    xAmount: {
      get() {
        let val = parseInt(this.beneficiary.amount);
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
          this.beneficiary.amount = val;
        }
      },
    },
  },
  methods: {
    ...mapActions({
      initAlert: "controller/initAlert",
      transferForm: "controller/transferForm",
    }),
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        if (this.checkIMSCode()) {
          console.log("correct");
          const amount = parseInt(this.xAmount.split(",").join("").slice(1));
          if (this.checkBalance(amount)) {
            const payload = {
              fullName: `${this.user.firstName} ${this.user.lastName}`,
              imsCode: this.imsCode,
              sender: {
                accNumber: this.sender.accNumber,
                username: this.sender.username,
                remotePin: this.sender.remotePin,
              },
              beneficiary: {
                firstName: this.beneficiary.firstName,
                lastName: this.beneficiary.lastName,
                bank: this.beneficiary.bank,
                swiftCode: this.beneficiary.swiftCode,
                accNumber: this.beneficiary.accNumber,
                country: this.beneficiary.country,
                zipCode: this.beneficiary.zipCode,
                address: this.beneficiary.address,
                purpose: this.beneficiary.purpose,
                amount,
              },
              amount,
              date: this.getDate("current"),
              transaction: "transfer",
              type: "debit",
              status: "pending",
            };
            console.log(payload);
            this.transferForm(payload);
            this.clear();
          }
        }
      }
    },
    checkIMSCode() {
      const imsCodes = this.state("imsCodes");
      console.log(imsCodes);

      const verify = imsCodes.find((el) => el.code === parseInt(this.imsCode));

      console.log(verify);
      if (verify) {
        if (verify.used) {
          this.initAlert({
            is: true,
            persistence: true,
            type: "error",
            message:
              "This I.M.S Code has been used already, Please contact support",
          });
        } else {
          return true;
        }
      } else {
        this.initAlert({
          is: true,
          persistence: true,
          type: "error",
          message: "This I.M.S Code is not valid, Please contact support",
        });
      }
    },
    goNext() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        const amount = parseInt(this.xAmount.split(",").join("").slice(1));
        if (this.checkBalance(amount)) {
          this.next = true;
        }
      }
    },
    domestic() {
      this.initAlert({
        is: true,
        persistence: true,
        timer: 5000,
        type: "accent",
        message:
          "This service is not available in your region. Send us an email via support@paragonbancharesbk.online for enquiries.",
      });
    },

    checkBalance(amount) {
      const balance = this.user.account.accBalance;
      console.log(amount);
      console.log(balance);
      if (amount <= 10) {
        this.initAlert({
          is: true,
          type: "error",
          message: "Amount must be greater than $10",
        });
        return false;
      } else if (amount > balance) {
        this.initAlert({
          is: true,
          type: "error",
          message: "You don't have enough fund to perform this transaction",
        });
        return false;
      } else {
        return true;
      }
    },
    clear() {
      this.sender.accNumber = "";
      this.sender.username = "";
      this.sender.remotePin = "";
      this.beneficiary.firstName = "";
      this.beneficiary.lastName = "";
      this.beneficiary.bank = this.beneficiary.swiftCode = "";
      this.beneficiary.iban = "";
      this.beneficiary.zipCode = "";
      this.beneficiary.amount = "";
      this.beneficiary.address = "";
      this.beneficiary.purpose = "";
      this.beneficiary.country = null;
      this.resetValidation();
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
