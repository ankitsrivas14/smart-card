<template>
  <div class="sc-layout__container">
    <div class="sc-layout__header">
      <div class="sc-layout__inner-container">
        <div class="sc-layout__header-text">
          <div class="header-text__rows">
            <span class="header-text__key">Name: </span>
            <span class="header-text__value">{{ name }} </span>
          </div>
          <div class="header-text__rows">
            <span class="header-text__key">Tag ID: </span>
            <span class="header-text__value">{{ getTagId }}</span>
          </div>
          <div class="header-text__rows">
            <span class="header-text__key">Mode: </span>
            <span class="header-text__value">{{ eventDetails.eventName }}</span>
          </div>
        </div>
        <div class="sc-layout__header-cta">
          <slot name="header-cta"></slot>
        </div>
      </div>
    </div>
    <div class="sc-layout__body">
      <span class="sc-layout__header-text-heading"
        ><font-awesome-icon :icon="eventDetails.icon" /><span>{{
          eventDetails.modeName
        }}</span></span
      >
      <slot name="body"></slot>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: {
    eventDetails: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["name", "getTagId"]),
  },
};
</script>
<style lang="scss">
.sc-layout__container {
  width: 900px;
  .sc-layout__header {
    background-color: #faf4e0;
    padding: 20px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
    .sc-layout__inner-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .sc-layout__header-text {
      .header-text__rows {
        .header-text__value {
          font-weight: 500;
        }
      }
    }
  }
  .sc-layout__body {
    background-color: #faf4e0;
    padding: 20px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .sc-layout__header-text-heading {
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 10px;
      span {
        margin-left: 8px;
      }
    }
  }
}
</style>
