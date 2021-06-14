<template>
  <div class="bank__btn-list">
    <button @click="$emit('mini-statement')">Mini Statement</button>
    <button @click="$emit('withdrawl')">Withdrawl</button>
    <button @click="$emit('change-pin')">Change PIN</button>
    <button @click="$emit('past-transactions')">Past Transactions</button>
    <button @click="$emit('show-balance')">Show Balance</button>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.bank__btn-list {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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
