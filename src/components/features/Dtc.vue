<template>
  <SCLayout :eventDetails="getModeData">
    <template slot="header-cta">
      <button class="primary-btn">Update Biometrics</button>
      <button class="secondary-btn">Update Biometrics</button>
    </template>
    <template slot="body">
      <b-table striped hover :items="items"></b-table>
    </template>
  </SCLayout>
</template>
<script>
import SCLayout from "@/components/shared/SCLayout";
export default {
  components: {
    SCLayout,
  },
  computed: {
    getModeData() {
      return {
        eventName: "Transport",
        modeName: "DTC Bus Transactions",
        icon: "bus",
      };
    },
  },
  data() {
    return {
      items: [
        {
          sr_no: 1,
          "date_&_time": "12 Dec, 2020 - 17:19",
          from: "Laxmi Nagar",
          to: "Jagat Puri",
          fare: "Rs. 15",
        },
        {
          sr_no: 2,
          "date_&_time": "25 Dec, 2020 - 15:51",
          from: "Jagat Puri",
          to: "Yamuna Vihar",
          fare: "Rs. 30",
        },
        {
          sr_no: 3,
          "date_&_time": "11 Jan, 2021 - 18:47",
          from: "Mandi House",
          to: "Govind Puri",
          fare: "Rs. 20",
        },
        {
          sr_no: 4,
          "date_&_time": "23 Jan, 2021 - 10:25",
          from: "Model Town",
          to: "Anand Parbat",
          fare: "Rs. 20",
        },
        {
          sr_no: 5,
          "date_&_time": "28 Mar, 2021 - 08:47",
          from: "New Delhi",
          to: "Barakhamba Rd.",
          fare: "Rs. 15",
        },
        {
          sr_no: 6,
          "date_&_time": "11 Apr, 2021 - 19:39",
          from: "Mangol Puri",
          to: "Delhi Gate",
          fare: "Rs. 30",
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
