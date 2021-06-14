<template>
  <div class="hdfc_container">
    <div class="hdfc-bank-logo">
      <img
        src="@/assets/static/features/banks/gateways/hdfc.png"
        height="80px"
      />
    </div>
    <BankingOptions
      @mini-statement="handleButtonClick('miniStatement')"
      @withdrawl="handleButtonClick('withdrawl')"
      @change-pin="handleButtonClick('changePin')"
      @past-transactions="handleButtonClick('pastTransactions')"
      @show-balance="handleButtonClick('showBalance')"
    />

    <Transactions
      v-if="options.miniStatement"
      listType="mini"
      bankName="hdfc"
    />
    <Transactions
      v-if="options.pastTransactions"
      listType="full"
      bankName="hdfc"
    />
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
  components: {
    BankingOptions,
    Transactions,
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
.hdfc_container {
  width: 100%;
  .hdfc-bank-logo {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
}
</style>
