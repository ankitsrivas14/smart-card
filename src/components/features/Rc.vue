<template>
  <SCLayout eventType="Transport">
    <template slot="header-cta">
      <button class="primary-btn">Update Biometrics</button>
      <button class="secondary-btn">Update Biometrics</button>
    </template>
    <template slot="body">
      <img
        class="layout-main-image"
        :src="require('@/assets/static/features/rc.jpeg')"
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
};
</script>
<style lang="scss"></style>
