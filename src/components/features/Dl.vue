<template>
  <SCLayout :eventDetails="getModeData">
    <template slot="header-cta">
      <button class="primary-btn">Update Biometrics</button>
      <button class="secondary-btn">Update Biometrics</button>
    </template>
    <template slot="body">
      <img
        class="layout-main-image"
        :src="require('@/assets/static/features/dl.jpg')"
        width="400px"
        height="250px"
      />
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
        eventName: "Transport",
        modeName: "Driving Licence",
        icon: "bus",
      };
    },
  },
};
</script>
<style lang="scss"></style>
