<template>
  <SCLayout :eventDetails="getModeData">
    <template slot="body">
      No data available.
    </template>
  </SCLayout>
</template>
<script>
import SCLayout from "@/components/shared/SCLayout";
export default {
  components: {
    SCLayout,
  },
  computed: {
    getModeData() {
      return {
        eventName: "Ration",
        modeName: "Ration Card",
        icon: "bread-slice",
      };
    },
  },
};
</script>
<style lang="scss"></style>
