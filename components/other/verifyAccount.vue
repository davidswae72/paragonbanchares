<template>
  <p-side-bar :loading="loading.profile" :drawer="drawer" :toggle="toggle">
    <template v-slot:header>
      <div class="d-flex text3--text flex-column">
        <span class="text-h6 d-flex align-center"> Verify Account </span>
      </div>
    </template>
    <v-row class="ma-0">
      <v-col
        v-if="!show"
        cols="12"
        :class="verified ? 'success' : 'accent'"
        class="d-flex rounded pa-2 mb-4 white--text"
      >
        {{ verified ? "Account Verified" : "Account Not Verified" }}
        <v-spacer />
        <v-icon color="white" left size="20"> mdi-account-clock </v-icon>
      </v-col>
      <v-col v-if="show" cols="12" class="py-0 d-flex align-center">
        <span
          class="text-subtitle-1 text3--text font-weight-medium text-capitalize"
        >
          Identity Verification
        </span>

        <v-spacer />
        <v-btn
          small
          text
          color="primary"
          class="text-capitalize text-subtitle-2"
          @click="back"
        >
          <v-icon small left> mdi-arrow-left </v-icon>
          Go back
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-if="!show" no-gutters class="ma-0 p-2">
      <v-col cols="12" class="my-2">
        <p-icon-card
          :icon-color="'primary'"
          outline
          icon="mdi-file-document"
          title="Identity Verification"
          :action="action"
        />
      </v-col>
    </v-row>
    <v-row v-else class="ma-0">
      <v-col cols="12">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
          @submit.prevent="submit"
        >
          <v-row v-if="status === null" class="ma-0">
            <v-col cols="12" class="pb-0">
              <v-select
                v-model="document"
                dense
                color="secondary"
                :items="['Passport', 'Driver\'s License', 'ID Card']"
                outlined
                class="text-subtitle-2 font-weight-light rounded-md"
                :rules="[(v) => !!v || 'This field is required']"
                label="Document"
                required
              />
            </v-col>
            <v-col cols="12" class="">
              <div class="text-subtitle-2 info--text">
                Make sure the document shows your photo, full name, date of
                birth and date of issue.
              </div>
            </v-col>
            <v-col v-if="document" cols="12" class="pb-0">
              <v-file-input
                v-model="file1"
                type="file"
                outlined
                dense
                accept="image/*"
                :label="`Upload ${document} Front `"
                :rules="[(v) => !!v || `${document} is required`]"
                class="text-subtitle-2 mx-1 font-weight-light rounded-md"
                @change="onFileChange"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="secondary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
            <v-col v-if="showImage" cols="12" class="py-0">
              <v-sheet height="120" outlined class="position rounded">
                <v-img height="100%" cover :src="showImage" />
                <div />
              </v-sheet>
            </v-col>
            <v-col v-if="document" cols="12" class="pb-0">
              <v-file-input
                v-model="file2"
                type="file"
                outlined
                dense
                accept="image/*"
                :label="`Upload ${document} Back `"
                :rules="[(v) => !!v || `${document} is required`]"
                class="text-subtitle-2 mx-1 font-weight-light rounded-md"
                @change="onFileChange2"
              >
                <template v-slot:selection="{ text }">
                  <v-chip small label color="secondary">
                    {{ text }}
                  </v-chip>
                </template>
              </v-file-input>
            </v-col>
            <v-col v-if="showImage2" cols="12" class="py-0">
              <v-sheet height="120" outlined class="position rounded">
                <v-img height="100%" cover :src="showImage2" />
                <div />
              </v-sheet>
            </v-col>
            <v-col cols="12" class="py-2 mb-4">
              <v-btn
                type="submit"
                depressed
                block
                :loading="loading.verify"
                color="secondary"
                class="text-subtitle-2 font-weight-light text-capitalize"
              >
                Submit Document
              </v-btn>
            </v-col>
          </v-row>
          <v-row v-if="status === true" class="ma-0">
            <v-col cols="12" class="py-0 text-center">
              <v-icon size="100" color="success" class="mx-auto">
                mdi-text-box-check
              </v-icon>
            </v-col>
            <v-col cols="12" class="text-subtitle-1 text-center">
              Verified
            </v-col>
          </v-row>
          <v-row v-if="status === 'Progress'" class="ma-0">
            <v-col cols="12" class="py-0 text-center">
              <v-icon color="warning" size="100" class="mx-auto">
                mdi-text-box-search
              </v-icon>
            </v-col>
            <v-col cols="12" class="text-subtitle-1 text-center">
              Verification in Progress
            </v-col>
          </v-row>
          <v-row v-if="status === false" class="ma-0">
            <v-col cols="12" class="py-0 text-center">
              <v-icon size="100" color="error" class="mx-auto">
                mdi-text-box-remove
              </v-icon>
            </v-col>
            <v-col cols="12" class="text-subtitle-1 text-center">
              Verification Failed
            </v-col>
            <v-col cols="12" class="pa-0">
              <v-divider />
            </v-col>
            <v-col cols="12" class="text-subtitle-2 text-center">
              <div class="text-caption">Reason</div>
              <div class="font-weight-bold error--text">
                {{ message }}
              </div>
            </v-col>
            <v-col v-if="document !== ''" cols="12" class="py-2 mb-4">
              <v-btn
                type="submit"
                depressed
                block
                :loading="loading2.verify"
                color="secondary"
                class="text-subtitle-2 font-weight-light text-capitalize"
                @click="tryAgain"
              >
                Try again
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </p-side-bar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PIconCard from "./pIconCard.vue";
import PSideBar from "./pSideBar.vue";

export default {
  name: "VerifyAccount",
  components: { PSideBar, PIconCard },
  filters: {
    currency(val) {
      if (val) {
        val = parseFloat(val);
        return val.toLocaleString("en-US", {
          style: "currency",
          code: "US",
          currency: "USD",
        });
      } else {
      }
    },
  },

  props: {
    drawer: Object,
    toggle: Function,
  },

  data: () => ({
    show: false,
    valid: true,
    document: "",
    file1: null,
    file2: null,
    showImage: "",
    showImage2: "",
  }),
  computed: {
    ...mapGetters({
      loading: "authentication/getLoading",
      loading2: "controller/getLoading",
      user: "authentication/getUser",
      state: "authentication/getState",
    }),
    verified() {
      let verified = false;
      return verified;
    },
    status() {
      const verification = this.state("verification");
      const status = verification && verification.status;
      console.log(status);
      return null;
    },
    message() {
      const verification = this.state("verification");
      return verification && verification.identity.message;
    },
  },
  methods: {
    ...mapActions({
      updateProfile: "authentication/updateProfile",
      uploadDocument: "controller/uploadDocument",
    }),
    tryAgain() {
      this.updateStatus("identity");
    },
    onFileChange() {
      if (this.file1) {
        const file = this.file1;
        this.showImage = URL.createObjectURL(file);
      } else {
        this.showImage = null;
      }
    },
    onFileChange2() {
      if (this.file1) {
        const file = this.file2;
        this.showImage2 = URL.createObjectURL(file);
      } else {
        this.showImage2 = null;
      }
    },
    submit() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        // const payload = {
        //   field: "identity",
        //   type: this.document,
        //   front: this.file1,
        //   back: this.file2,
        //   status: "Progress",
        // };
        // console.log(payload);
        // this.verifyFunc(payload);

        const payload = {
          name: "front",
          type: this.document,
          photo: this.file1,
          user: this.user,
        };
        const payload2 = {
          name: "back",
          type: this.document,
          photo: this.file2,
          user: this.user,
        };

        console.log(payload);
        console.log(payload2);

        this.uploadDocument(payload);
        this.uploadDocument(payload2);
      }

      this.checkIfDone();
    },

    action() {
      this.show = true;
    },

    back() {
      this.show = false;
      this.title = "";
    },

    checkIfDone() {
      let executed = false;
      setInterval(() => {
        if (!executed && !this.loading.verify) {
          setTimeout(() => {
            this.toggle(false, {});
          }, 2000);
          executed = true;
        }
      }, 1000);
    },
  },
};
</script>

<style>
</style>
