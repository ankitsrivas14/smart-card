<template>
  <div class="portal-type__inner-container">
    <div class="cards-list">
      <div class="row">
        <div
          class="card"
          :style="{
            borderColor: templateType.borderColor,
            backgroundColor: templateType.backgroundColor,
          }"
        >
          Health Insurance
        </div>
        <div
          class="card"
          :style="{
            borderColor: templateType.borderColor,
            backgroundColor: templateType.backgroundColor,
          }"
        >
          CGHS Card
        </div>
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
