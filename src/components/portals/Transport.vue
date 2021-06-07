<template>
  <div class="portal-type__inner-container">
    <div class="cards-list" v-if="!activeEvent">
      <div v-for="(option, index) in options" :key="option + index">
        <div class="row">
          <div
            @click="handleOptionClick(option.id)"
            class="card"
            :style="{
              borderColor: templateType.borderColor,
              backgroundColor: templateType.backgroundColor,
            }"
            @mouseenter="overlay[option.id] = true"
            @mouseleave="overlay[option.id] = false"
          >
            <img
              :src="require(`@/assets/static/portals/${option.image}`)"
              :alt="option.name"
            />
            <div class="card-overlay" v-if="overlay[option.id]">
              <span>{{ option.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="active-event__container" v-else>
      <button @click="handleBack" class="back-btn">Go Back</button>
      <component :is="activeEvent" />
    </div>
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
import vehicle from "@/components/features/Vehicle";
import registration from "@/components/features/Rc";
import dtc from "@/components/features/Dtc";
import dmrc from "@/components/features/Dmrc";
import driving from "@/components/features/Dl";

import { mapGetters } from "vuex";
import portalsMixin from "./portalsMixin";
export default {
  mixins: [portalsMixin],
  data() {
    return {
      overlay: {
        vehicle: false,
        driving: false,
        registration: false,
        dmrc: false,
        dtc: false,
      },
      options: [
        {
          id: "vehicle",
          name: "Insurance",
          image: "vehicle.jpg",
        },
        {
          id: "driving",
          name: "Driving Licence",
          image: "dl.jpeg",
        },
        {
          id: "registration",
          name: "RC",
          image: "rc.png",
        },
        {
          id: "dmrc",
          name: "Metro Cards",
          image: "dmrc.jpg",
        },
        {
          id: "dtc",
          name: "DTC Cards",
          image: "dtc.jpg",
        },
      ],
      showDialog: false,
      activeEvent: null,
      activeOption: null,
    };
  },
  components: {
    SCDialog,
    vehicle,
    driving,
    registration,
    dmrc,
    dtc,
  },
  computed: {
    ...mapGetters(["isEntryAllowed"]),
  },
};
</script>

<style lang="scss"></style>
