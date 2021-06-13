<template>
  <div class="hdfc_container">
    <div class="hdfc-bank-logo">
      <img
        src="@/assets/static/features/banks/gateways/hdfc.png"
        height="80px"
      />
    </div>
    <BankingOptions
      @mini-statement="handleMiniStatement"
      @withdrawl="handleWithdrawl"
      @change-pin="handleChangePin"
      @past-transactions="handlePastTransactions"
      @show-balance="handleShowBalance"
    />
  </div>
</template>
<script>
import BankingOptions from "./Helpers/BankingOptions.vue";
export default {
  components: {
    BankingOptions,
  },
  methods: {
    handleMiniStatement() {},
    handleWithdrawl() {},
    handleChangePin() {},
    handlePastTransactions() {},
    handleShowBalance() {},
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
