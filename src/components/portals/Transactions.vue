<template>
  <b-table
    class="sc-transactions"
    striped
    hover
    bordered
    outlined
    responsive
    :items="items"
    :fields="fields"
  >
    <template #cell(amount)="data">
      <b v-if="data.item.nature === 'Debit'" class="text-danger">
        Rs. {{ data.item.amount }}</b
      >
      <b v-else class="text-success">Rs. {{ data.item.amount }}</b>
    </template>
    <template #cell(balance)="data"> Rs. {{ data.item.balance }} </template>
  </b-table>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  props: {
    templateType: {
      type: Object,
    },
  },
  data() {
    return {
      fields: [
        { key: "sr_no", sortable: false },
        { key: "date", sortable: false },
        { key: "bank", sortable: false },
        { key: "type", sortable: false },
        { key: "transaction_id", sortable: false },
        { key: "nature", sortable: false },
        { key: "amount", sortable: false },
        { key: "balance", sortable: false },
      ],
      items: [],
    };
  },
  mounted() {
    this.generateTransactions();
  },
  methods: {
    generateBank() {
      let banks = ["HDFC Bank", "State Bank of India", "ICICI Bank"];
      return banks[Math.floor(Math.random() * 2)];
    },
    generateType() {
      let trans_type = ["Cash", "UPI", "Cheque", "NEFT/IMPS", "Debit Card"];
      return trans_type[Math.floor(Math.random() * 5)];
    },
    generateNature() {
      let nature = ["Credit", "Debit"];
      return nature[Math.floor(Math.random() * 2)];
    },
    generateAmount() {
      return Math.floor(Math.random() * 2000) + 101;
    },
    generateTransactions() {
      let data = [];
      for (let i = 0; i < 22; i++) {
        let bank = this.generateBank();
        let type = this.generateType();
        let nature = this.generateNature();
        let amount = this.generateAmount();
        let balance = 0;
        if (!i) {
          balance = 27368;
        } else {
          if (nature === "Credit") {
            balance = data[i - 1].balance + amount;
          } else {
            balance = data[i - 1].balance - amount;
          }
        }
        data.push({
          sr_no: i + 1,
          date: "14 Jul 2019",
          bank,
          type,
          nature,
          amount,
          balance,
          transaction_id: `#${uuid.v4().slice(0, 8)}`,
        });
      }
      this.items = [...data];
    },
  },
};
</script>

<style lang="scss">
.sc-transactions {
  tr {
    text-align: center !important;
    td {
      padding: 8px 20px !important;
    }
  }
}
</style>
