<template>
  <img
    :src="require('@/assets/static/features/qr.png')"
    width="900px"
    alt="QR Code"
  />
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
