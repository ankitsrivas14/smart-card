<template>
  <div class="bank__btn-list">
    <button>Mini Statement</button>
    <button>Withdrawl</button>
    <button>Change PIN</button>
    <button>Past Transactions</button>
    <button>Show Balance</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.bank__btn-list {
  display: flex;
  justify-content: center;
  button {
    border: none;
    padding: 10px 18px;
    margin-right: 12px;
    border-radius: 4px;
    &:hover {
      background-color: #e2e2e2;
    }
  }
}
</style>
