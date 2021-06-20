<template>
  <div class="electricity-container">
    <div class="charts-container">
      <Bar class="bar-chart" />
      <LineChart class="line-chart" />
    </div>
    <div class="electricity-btns">
      <ElectricityOptions
        @past-bills="handleButtonClick('pastBills')"
        @current-bills="handleButtonClick('currentBill')"
        @live-usage="handleButtonClick('liveUsage')"
        @contact-provider="handleButtonClick('contactProvider')"
        @recharge="handleButtonClick('recharge')"
      />
    </div>
    <div class="electricity-options__container">
      <div v-if="options.currentBill" class="options__current-bill">
        <span
          >Latest generated bill has been sent to your registered email id.<br />
          <b>{{ email }}</b>
        </span>
      </div>
      <div v-if="options.contactProvider" class="options__contact">
        <span>
          <b>Electricity Provider:</b> BSES Yamuna<br /><br />
          <b>Helpline:</b> 011-39999808<br /><br />
          <b>Emergency:</b> 011-41999808<br /><br />
          <b>Address:</b> For BSES Yamuna Power Ltd.<br />
          Key Consumer Cell, Sub-station<br />
          No.15, 9th Avenue, I.P. Extension, <br />
          Patparganj, Delhi-110092, India<br />
          011-39997005
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import Bar from "@/components/features/Electricity/Charts/Bar";
import LineChart from "@/components/features/Electricity/Charts/LineChart";
import ElectricityOptions from "@/components/features/Electricity/ElectricityOptions";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      options: null,
    };
  },
  components: {
    Bar,
    LineChart,
    ElectricityOptions,
  },
  computed: {
    ...mapGetters(["email"]),
  },
  methods: {
    handleButtonClick(btnType) {
      this.resetOptions();
      this.options[btnType] = true;
    },
    resetOptions() {
      this.options = {
        pastBills: false,
        currentBill: false,
        liveUsage: false,
        contactProvider: false,
        recharge: false,
      };
    },
  },
  mounted() {
    this.resetOptions();
  },
};
</script>
<style lang="scss">
.electricity-container {
  .charts-container {
    display: flex;
    margin-bottom: 20px;
    .bar-chart {
      width: 90%;
    }
  }
  .electricity-options__container {
    .options__current-bill {
      display: grid;
      place-items: center;
      height: 100px;
      text-align: center;
    }
    .options__contact {
      text-align: left;
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }
  }
}
</style>
