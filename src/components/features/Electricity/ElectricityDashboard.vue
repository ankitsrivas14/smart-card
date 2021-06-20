<template>
  <div class="electricity-container">
    <div class="charts-container">
      <Bar class="bar-chart" />
      <LineChart class="line-chart" />
    </div>
  </div>
</template>
<script>
import Bar from "@/components/features/Electricity/Charts/Bar";
import LineChart from "@/components/features/Electricity/Charts/LineChart";
export default {
  components: {
    Bar,
    LineChart,
  },
};
</script>
<style lang="scss">
.electricity-container {
  .charts-container {
    display: flex;
    .bar-chart {
      // width: 80%;
    }
  }
}
</style>
