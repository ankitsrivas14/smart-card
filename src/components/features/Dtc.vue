<template>
  <SCLayout eventType="User Identification">
    <template slot="header-cta">
      <button class="primary-btn">Update Biometrics</button>
      <button class="secondary-btn">Update Biometrics</button>
    </template>
    <template slot="body">
      <img
        class="layout-main-image"
        :src="require('@/assets/static/features/aadhar.jpg')"
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
