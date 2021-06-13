<template>
  <div class="portal-container">
    <div class="portal-type__container">
      <div class="portal-type__sidebar">
        <Sidebar />
      </div>
      <div class="portal-type__main-container">
        <UserId v-if="type === 'user-id'" :templateType="templateType" />
        <Transport v-if="type === 'transport'" :templateType="templateType" />
        <Health v-if="type === 'health'" :templateType="templateType" />
        <Ration v-if="type === 'ration'" :templateType="templateType" />
        <Banks v-if="type === 'banks'" :templateType="templateType" />
        <QrCode v-if="type === 'qrcode'" :templateType="templateType" />
        <Transactions
          v-if="type === 'transactions'"
          :templateType="templateType"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import UserId from "../components/portals/UserId.vue";
import Transport from "../components/portals/Transport.vue";
import Health from "../components/portals/Health.vue";
import Ration from "../components/portals/Ration.vue";
import Banks from "../components/portals/Banks.vue";
import QrCode from "../components/portals/QrCode.vue";
import Transactions from "../components/portals/Transactions.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    Sidebar,
    UserId,
    Transport,
    Health,
    Ration,
    Banks,
    QrCode,
    Transactions,
  },
  data() {
    return {
      type: null,
    };
  },
  computed: {
    templateType() {
      if (this.template === "agent") {
        return {
          borderColor: "#5aaaff",
          backgroundColor: "#bedeff",
        };
      }
      return {
        borderColor: "#ffd858",
        backgroundColor: "#ffefbb",
      };
    },
    ...mapGetters(["template"]),
  },
  mounted() {
    this.type = this.$route.params.type;
  },
  watch: {
    "$route.params.type"(val) {
      this.type = val;
    },
  },
  beforeRouteEnter(to, from, next) {
    let userType = localStorage.getItem("card-userType");
    if (!userType) {
      next(false);
    } else {
      next();
    }
  },
};
</script>

<style lang="scss">
.portal-container {
  .portal-type__container {
    display: flex;
    .portal-type__main-container {
      margin-left: 75px;
      margin-top: 10px;
    }
  }
}
.cards-list {
  .row {
    display: flex;
    margin-bottom: 30px;
    .card {
      width: 400px;
      height: 250px;
      background-color: #ffefbb;
      border: 15px solid #ffd858;
      border-radius: 25px;
      margin-right: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      cursor: pointer;
      img {
        width: 350px;
        height: 200px;
      }
      .card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        width: 370px;
        height: 220px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          color: #fff;
          font-size: 42px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
