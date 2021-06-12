<template>
  <div class="portal-type__inner-container">
    <div class="cards-list">
      <div class="row">
        <img :src="require('@/assets/static/features/qr.svg')" width="900px" alt="QR Code" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    templateType: {
      type: Object,
    },
  },
};
</script>

<style lang="scss"></style>
