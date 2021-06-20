<template>
  <div class="bank__btn-list">
    <button @click="$emit('past-bills')">Past Bills</button>
    <button @click="$emit('current-bills')">Current Bill</button>
    <button @click="$emit('contact-provider')">Contact Provider</button>
    <button class="major-button" @click="$emit('recharge')">
      Recharge
    </button>
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
  .major-button {
    background-color: #007700;
    color: #f6f7fb;
    &:hover {
      background-color: #028802;
    }
  }
}
</style>
