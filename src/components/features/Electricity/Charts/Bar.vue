<script>
import { Bar } from "vue-chartjs";
export default {
  mixins: [Bar],
  data() {
    return {
      chartdata: {
        labels: [
          "June 20",
          "July 20",
          "August 20",
          "September 20",
          "October 20",
          "November 20",
          "December 20",
          "January 21",
          "February 21",
          "March 21",
          "April 21",
          "May 21",
        ],
        datasets: [
          {
            label: "Consumption",
            backgroundColor: "#f87979",
            data: [40, 20, 50, 23, 45, 59, 23, 56, 12, 79, 78, 34],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },

  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
<style lang="scss">
.chartjs-render-monitor {
  width: 80% !important;
  height: 300px !important;
}
</style>
