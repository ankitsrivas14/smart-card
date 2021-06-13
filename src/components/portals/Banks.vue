<template>
  <div class="portal-type__inner-container">
    <div v-if="!activeEvent" class="bank-start__container">
      <div class="banks__start">
        <span>Click here to proceed with Banking...</span>
        <button @click="showDialog = true">Proceed</button>
      </div>
    </div>
    <BankList v-else />
    <SCDialog
      v-if="isEntryAllowed && showDialog"
      :activeOption="activeOption"
      @close="handleCloseDialog"
      @event-started="handleEventStarted"
    />
  </div>
</template>

<script>
import SCDialog from "@/components/shared/SCDialog";
import BankList from "@/components/features/Banks/BankList";

import { mapGetters } from "vuex";
import portalsMixin from "./portalsMixin";

export default {
  mixins: [portalsMixin],
  data() {
    return {
      showDialog: false,
      activeEvent: null,
      activeOption: "banks",
    };
  },
  components: {
    SCDialog,
    BankList,
  },
  computed: {
    ...mapGetters(["isEntryAllowed"]),
  },
};
</script>

<style lang="scss">
.bank-start__container {
  display: grid;
  place-items: center;
  height: 400px;
  .banks__start {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: -100px;
    span {
      font-size: 20px;
      margin-bottom: 20px;
    }
    button {
      border: none;
      padding: 10px 20px;
      border-radius: 4px;
      background-color: rgb(38, 12, 184);
      color: #fff;
    }
  }
}
</style>
