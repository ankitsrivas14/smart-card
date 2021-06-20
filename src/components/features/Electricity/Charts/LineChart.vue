<script>
import { Line } from "vue-chartjs";
export default {
  mixins: [Line],
  data() {
    return {
      datacollection: null,
    };
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Data One",
            data: [778, 1122, 1190, 1121, 918, 994],
          },
        ],
      };
    },
  },
  mounted() {
    this.fillData();
    this.renderChart(this.datacollection);
  },
};
</script>
<style lang="scss">
.line-chart {
  .chartjs-render-monitor {
    width: 90% !important;
    height: 275px !important;
  }
}
</style>
