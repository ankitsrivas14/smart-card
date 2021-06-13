<template>
  <div>
    <BankCards v-if="!activeBank" @active-bank="handleActivebank" />
    <hdfc v-if="activeBank === 'hdfc'" />
    <state v-if="activeBank === 'state'" />
    <icici v-if="activeBank === 'icici'" />
  </div>
</template>
<script>
import BankCards from "./BankCards";
import hdfc from "./Gateways/Hdfc";
import state from "./Gateways/Hdfc";
import icici from "./Gateways/Hdfc";
export default {
  data() {
    return {
      activeBank: null,
    };
  },
  components: {
    BankCards,
    hdfc,
    state,
    icici,
  },
  methods: {
    handleActivebank(active) {
      this.activeBank = active;
    },
  },
};
</script>
<style lang="scss"></style>
