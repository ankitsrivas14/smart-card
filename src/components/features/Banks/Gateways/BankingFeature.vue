<template>
  <div class="bank_container">
    <div class="bank-logo">
      <img :src="bankLogo" height="80px" />
    </div>
    <BankingOptions
      @mini-statement="handleButtonClick('miniStatement')"
      @withdrawl="handleButtonClick('withdrawl')"
      @change-pin="handleButtonClick('changePin')"
      @past-transactions="handleButtonClick('pastTransactions')"
      @show-balance="handleButtonClick('showBalance')"
    />
    <div class="sc-display-image">
      <img
        v-if="!isAnyActive"
        src="@/assets/static/features/banks/gateways/banking-portal.svg"
        width="600px"
      />
    </div>

    <Transactions
      v-if="options.miniStatement"
      listType="mini"
      :bankName="activeBank"
    />
    <Transactions
      v-if="options.pastTransactions"
      listType="full"
      :bankName="activeBank"
    />
    <div class="sc-display-text" v-if="options.withdrawl">
      <span>
        Further steps will be as per the banking software already installed at
        ATMs.<br />
        We added additional feature on top of existing technology to club all
        ATM cards into one Smart Card.
      </span>
    </div>
    <div class="sc-display-text" v-if="options.changePin">
      <span>
        Please contact your bank if you wish to change Banking PIN.
      </span>
    </div>
    <div class="sc-display-text" v-if="options.showBalance">
      <span class="sc-show-account-balance">
        Your account balance is
        <span class="sc-account-balance">Rs. {{ accountBalance }}</span>
      </span>
    </div>
  </div>
</template>
<script>
import BankingOptions from "./Helpers/BankingOptions.vue";
import Transactions from "@/components/portals/Transactions.vue";
export default {
  data() {
    return {
      options: {},
    };
  },
  props: {
    activeBank: {
      type: String,
    },
  },
  components: {
    BankingOptions,
    Transactions,
  },
  computed: {
    accountBalance() {
      return Math.floor(Math.random() * 23098) + 1;
    },
    bankLogo() {
      return require(`@/assets/static/features/banks/gateways/${this.activeBank}.png`);
    },
    isAnyActive() {
      let isActive = false;
      for (let key in this.options) {
        isActive = this.options[key] ? true : isActive;
        console.log("isActive", isActive);
        console.log(this.options);
      }
      return isActive;
    },
  },
  methods: {
    handleButtonClick(type) {
      this.resetAllOptions();
      this.options[type] = true;
    },
    resetAllOptions() {
      this.options = {
        miniStatement: false,
        withdrawl: false,
        changePin: false,
        pastTransactions: false,
        showBalance: false,
      };
    },
  },
  mounted() {
    this.resetAllOptions();
  },
};
</script>
<style lang="scss">
.bank_container {
  width: 100%;
  .bank-logo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .sc-display-image {
    display: flex;
    justify-content: center;
  }

  .sc-display-text {
    display: grid;
    place-items: center;
    height: 150px;
    .sc-show-account-balance {
      font-size: 24px;
      .sc-account-balance {
        font-weight: bold;
        color: #038803;
      }
    }
  }
}
</style>
