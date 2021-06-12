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
        modeName: "DMRC Transactions",
        icon: "bus",
      };
    },
  },
  data() {
    return {
      items: [
        {
          sr_no: 1,
          "date_&_time": "14 Dec, 2020 - 12:25",
          from: "Vaishali",
          to: "Anand Vihar",
          fare: "Rs. 35",
        },
        {
          sr_no: 2,
          "date_&_time": "19 Dec, 2020 - 14:23",
          from: "Shastri Nagar",
          to: "Kalkaji",
          fare: "Rs. 35",
        },
        {
          sr_no: 3,
          "date_&_time": "04 Jan, 2021 - 17:12",
          from: "Nehru Place",
          to: "Govind Puri",
          fare: "Rs. 35",
        },
        {
          sr_no: 4,
          "date_&_time": "24 Jan, 2021 - 08:19",
          from: "Moolchand",
          to: "New Delhi",
          fare: "Rs. 35",
        },
        {
          sr_no: 5,
          "date_&_time": "02 Mar, 2021 - 11:17",
          from: "Govind Puri",
          to: "Rajiv Chowk",
          fare: "Rs. 35",
        },
        {
          sr_no: 6,
          "date_&_time": "18 Mar, 2021 - 09:28",
          from: "Rajiv Chowk",
          to: "Govind Puri",
          fare: "Rs. 35",
        },
        {
          sr_no: 7,
          "date_&_time": "22 Mar, 2021 - 13:00",
          from: "Nirman Vihar",
          to: "Udyog Bhawn",
          fare: "Rs. 35",
        },
        {
          sr_no: 8,
          "date_&_time": "24 Apr, 2021 - 15:57",
          from: "Okhla NSIC",
          to: "Pitampura",
          fare: "Rs. 35",
        },
      ],
    };
  },
};
</script>
<style lang="scss"></style>
