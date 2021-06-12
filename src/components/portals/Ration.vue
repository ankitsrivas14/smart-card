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
import ration from "@/components/features/Ration";

import { mapGetters } from "vuex";
import portalsMixin from "./portalsMixin";

export default {
  mixins: [portalsMixin],
  data() {
    return {
      overlay: {
        health: false,
        cghs: false,
      },
      options: [
        {
          id: "ration",
          name: "Ration Card",
          image: "ration.png",
        },
      ],
      showDialog: false,
      activeEvent: null,
      activeOption: null,
    };
  },
  components: {
    SCDialog,
    ration,
  },
  computed: {
    ...mapGetters(["isEntryAllowed"]),
  },
};
</script>

<style lang="scss"></style>
