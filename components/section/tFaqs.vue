<template>
  <v-row justify="center" class="white mx-0 py-6">
    <v-col cols="12" md="10">
      <div
        style="border: 1px solid #dddd; border-radius: 7px; overflow: hidden"
      >
        <v-expansion-panels accordion>
          <v-expansion-panel v-for="(item, i) in faq" :key="i" class="">
            <v-expansion-panel-header
              class="dark--text text-subtitle-1 text-sm-h5 font-weight-medium"
            >
              {{ item.name }}
            </v-expansion-panel-header>
            <v-expansion-panel-content
              class="
                dark--text
                grey
                lighten-5
                pt-3
                py-4
                px-4
                text-subtitle-2 text-md-subtitle-1
                font-weight-light
              "
              v-html="item.des"
            />
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    faq: [
      {
        name: "What is Paragon Banchares Bank?",
        des: "Paragon Banchares Bank is subsidiary of Belfius Bank & issuer of Debt instruments. We are a privately operates personal and business banking, including Internet Banking services based in the Belgium with operations all over the world and managed by security professionals with years of experiences in banking security and network protection. We also work closely with an Auditor who has more than a decade of experience evaluating the computer security at some of the largest banks in the Belgium. Moreover, our advisory board as well as our Supreme Governing Council assists with our decision making, planning and review process to ensure we offer you the most secure services possible.",
      },
      {
        name: "Is Paragon Banchares Bank an Investment Bank?",
        des: "Yes. Paragon Banchares Bank is an Investment Bank.",
      },
      {
        name: "How safe is Paragon Banchares Bank Internet Banking Services",
        des: "Paragon Banchares Bank is the safest among it's rivals. We designed Paragon Banchares Bank specifically to protect client's private information and funds. Unlike other Internet-based or online banks that simply add security features to their existing services or Internet sites, we designed our network frame and server from the ground up with strong security in mind.",
      },
      {
        name: "Are my personal data and funds secured?",
        des: "Yes they are. We use many methods to provide the most secure possible environment for your data and funds deposited with us. All of the information contained inside each online safe deposit account are encrypted - that is, encoded so that only the account holder(s) with a passcode to that specific account can view its balance. We use the same encryption technology (256 bit AES) that the military employs to protect top secret data.",
      },
      {
        name: "How Do I claim and transfer funds desposited on my behalf?",
        des: "Beneficiaries are expected to complete and an application form required for opening and online safe deposit account, where their capital funds/ contract/heritage fund as well as loan from creditors, shall be credited. Once the account is created, the account holder receives via email , a unique username and passcode needed to access their account online. And from the account balance, the account holder can make direct funds transfer to their other bank account domiciled anywhere in the world, using our access code. Usually fund transfer via our security server are completed within 6minutes; that is the destination bank account confirms the delivery of the funds transfer within 48 - 72 hours using our secure RTDD server.",
      },
      {
        name: "What is the RTDD?",
        des: "The RTGS is a RealTime Direct Deposit innovative services from Paragon Banchares Bank. This service allows account holders to transfer funds from their account to any other account anywhere in the world in real time settlement regardless of the amount being transfered. That is with the RealTime Direct Deposit. Account holders deposit funds from their account with Paragon Banchares Bank, to another account via a secure tunnel. Regardless of the amount being transferred, the funds transfer is completed within 6 minutes and can be confirmed by their recieving bank with the 48 - 72 hours.",
      },
      {
        name: "Is my account activated with the service?",
        des: "All deposit accounts has the RTDD active at default unless otherwise requested to be deactivated by account holder. There is a fee charged for disabling the RTDD from any account. Please contact us for details of the fees.",
      },
      {
        name: "What happens if I encounter error in any transaction process?",
        des: "You can only encounter an error in any transaction if you have entered an incorrect details into the RTDD interface during a transaction. However, in such cases, the transaction is cancelled and your funds returned to your account balance within a second and then you can start all over again.",
      },
      {
        name: "How secure are data entered into our server?",
        des: "Our server is encrypted with a 256 bit AES security (as used by the military to protect secret data). We also have a privacy policy which does not allow the sharing of any information with any third party. Personal access codes are not stored on our server and we do not keep records of any personal username or passcodes used on the RTDD interface.",
      },
      {
        name: "How does the RTDD work?",
        des: "The RTDD transfers funds from a RTDD active account to any other online bank account in real time. The RTDD server establishes a direct connection with the Destination Bank via a remote login and then deposit the funds in the destination account in real time. Ofcourse there are a lot of authentication process involved which also include entering an Authorization PIN and the Token Number, which will be provided by the Bank to the customer. Therefore the RTDD works better when the destination bank account is accessible online and login details are entered in order to establish a direct connection with the destination bank server to complete the transaction.",
      },

      {
        name: "How much does this service cost?",
        des: "This service is absolutely FREE of charge to all special accounts meant for beneficiary funds payout. Also each completed transaction are FREE.",
      },

      {
        name: "What happends after I have emptied my account balance into my prefered/other bank account?",
        des: "In such situation, an account holder is free to close his/her account at will. This applies ONLY to special accounts which are meant for the paying out of huge beneficiary funds running into Millions of Euro, Pounds or Dollars.",
      },
    ],
  }),
};
</script>

<style>
</style>
