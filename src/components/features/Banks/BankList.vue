<template>
  <div>
    <BankCards v-if="!activeBank" @active-bank="handleActivebank" />
    <BankingFeature v-else :activeBank="activeBank" />
  </div>
</template>
<script>
import BankCards from "./BankCards";
import BankingFeature from "./Gateways/BankingFeature";
export default {
  data() {
    return {
      activeBank: null,
    };
  },
  components: {
    BankCards,
    BankingFeature,
  },
  methods: {
    handleActivebank(active) {
      this.activeBank = active;
    },
  },
};
</script>
<style lang="scss"></style>
