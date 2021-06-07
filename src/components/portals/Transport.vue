<template>
  <div class="portal-type__inner-container">
    <div class="cards-list">
      <div class="row">
        <div
          @mouseenter="vehicle = true"
          @mouseleave="vehicle = false"
          class="card"
          :style="{
            borderColor: templateType.borderColor,
            backgroundColor: templateType.backgroundColor,
          }"
        >
          <img
            :src="require('@/assets/static/portals/vehicle.jpg')"
            alt="Vehicle Insurance"
          />
          <div class="card-overlay" v-if="vehicle"><span>Insurance</span></div>
        </div>
        <div
          @mouseenter="dl = true"
          @mouseleave="dl = false"
          class="card"
          :style="{
            borderColor: templateType.borderColor,
            backgroundColor: templateType.backgroundColor,
          }"
        >
          <img
            :src="require('@/assets/static/portals/dl.jpg')"
            alt="Driving Licence"
          />
          <div class="card-overlay" v-if="dl"><span>Driving Licence</span></div>
        </div>
      </div>
      <div class="row">
        <div
          @mouseenter="rc = true"
          @mouseleave="rc = false"
          class="card"
          :style="{
            borderColor: templateType.borderColor,
            backgroundColor: templateType.backgroundColor,
          }"
        >
          <img
            :src="require('@/assets/static/portals/rc.png')"
            alt="Registration Certificate"
          />
          <div class="card-overlay" v-if="rc"><span>RC</span></div>
        </div>
        <div
          @mouseenter="dmrc = true"
          @mouseleave="dmrc = false"
          class="card"
          :style="{
            borderColor: templateType.borderColor,
            backgroundColor: templateType.backgroundColor,
          }"
        >
          <img
            :src="require('@/assets/static/portals/dmrc.jpg')"
            alt="Metro Cards"
          />
          <div class="card-overlay" v-if="dmrc"><span>Metro Cards</span></div>
        </div>
      </div>
      <div class="row">
        <div
          @mouseenter="dtc = true"
          @mouseleave="dtc = false"
          class="card"
          :style="{
            borderColor: templateType.borderColor,
            backgroundColor: templateType.backgroundColor,
          }"
        >
          <img
            :src="require('@/assets/static/portals/dtc.jpg')"
            alt="DTC Cards"
          />
          <div class="card-overlay" v-if="dtc"><span>DTC Cards</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicle: false,
      dl: false,
      rc: false,
      dmrc: false,
      dtc: false,
    };
  },
  props: {
    templateType: {
      type: Object,
    },
  },
};
</script>

<style lang="scss"></style>
