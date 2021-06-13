<template>
  <div>
    <div v-if="this.template !== 'agent'">
      <div class="sc-transaction__filter-container">
        <div class="filter-parent">
          <button
            @click="filterEnabled('banks')"
            :class="['filter__btn', { 'filter__btn-active': filterType.banks }]"
          >
            Banks
          </button>
          <button
            @click="filterEnabled('type')"
            :class="['filter__btn', { 'filter__btn-active': filterType.type }]"
          >
            Type
          </button>
          <button
            @click="filterEnabled('nature')"
            :class="[
              'filter__btn',
              { 'filter__btn-active': filterType.nature },
            ]"
          >
            Nature
          </button>
          <button
            v-if="showResetButton"
            @click="filterEnabled()"
            class="filter__btn filter__danger"
          >
            Reset
          </button>
        </div>
        <div class="filter-child">
          <!-- Banks -->
          <div class="child-type__banks" v-if="filterType.banks">
            <button
              @click="applyFilter('bank', 'hdfc')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.bank.hdfc },
              ]"
            >
              HDFC Bank
            </button>
            <button
              @click="applyFilter('bank', 'state')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.bank.state },
              ]"
            >
              State Bank of India
            </button>
            <button
              @click="applyFilter('bank', 'icici')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.bank.icici },
              ]"
            >
              ICICI Bank
            </button>
          </div>

          <!-- Type -->
          <div class="child-type__banks" v-if="filterType.type">
            <button
              @click="applyFilter('type', 'cash')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.type.cash },
              ]"
            >
              Cash
            </button>
            <button
              @click="applyFilter('type', 'debit')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.type.debit },
              ]"
            >
              Debit Card
            </button>
            <button
              @click="applyFilter('type', 'cheque')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.type.cheque },
              ]"
            >
              Cheque
            </button>
            <button
              @click="applyFilter('type', 'upi')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.type.upi },
              ]"
            >
              UPI
            </button>
          </div>

          <!-- Nature -->
          <div class="child-type__banks" v-if="filterType.nature">
            <button
              @click="applyFilter('nature', 'credit')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.nature.credit },
              ]"
            >
              Credit
            </button>
            <button
              @click="applyFilter('nature', 'debit')"
              :class="[
                'filter__btn',
                { 'filter__btn-active': filter.nature.debit },
              ]"
            >
              Debit
            </button>
          </div>
        </div>
      </div>
      <b-table
        class="sc-transactions"
        striped
        hover
        bordered
        outlined
        responsive
        :items="itemsToList"
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
    </div>
    <div v-else>
      This mode is only Available to Users.
    </div>
  </div>
</template>

<script>
import { uuid } from "vue-uuid";
import { mapGetters } from "vuex";
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
      itemsToList: [],
      filterType: {
        banks: false,
        type: false,
        nature: false,
      },
      filter: {},
    };
  },
  mounted() {
    this.generateTransactions();
    this.resetAllFilters();
    this.itemsToList = [...this.items];
  },
  computed: {
    ...mapGetters(["template"]),
    showResetButton() {
      let anyFilterApplied = false;
      for (const parentFilter in this.filter) {
        for (const childFilter in this.filter[parentFilter]) {
          if (this.filter[parentFilter][childFilter]) {
            anyFilterApplied = true;
          }
        }
      }
      return anyFilterApplied;
    },
  },
  methods: {
    resetAllFilters() {
      this.filter = {
        bank: {
          hdfc: false,
          state: false,
          icici: false,
        },
        type: {
          cash: false,
          debitCard: false,
          cheque: false,
          upi: false,
        },
        nature: {
          credit: false,
          debit: false,
        },
      };
    },
    applyFilter(parent, child) {
      this.resetAllFilters();
      if (parent && child) {
        this.filter[parent][child] = true;
        this.itemsToList = this.items.filter((it) =>
          it[parent].toLowerCase().includes(child.toLowerCase())
        );
      } else {
        return this.items;
      }
    },
    filterEnabled(option) {
      if (option) {
        this.filterEnabled();
        this.filterType[option] = true;
      } else {
        this.filterType = {
          banks: false,
          type: false,
          nature: false,
        };
        this.resetAllFilters();
        this.itemsToList = [...this.items];
      }
    },
    generateBank() {
      let banks = ["HDFC Bank", "State Bank of India", "ICICI Bank"];
      return banks[Math.floor(Math.random() * 3)];
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
      for (let i = 0; i < Math.floor(Math.random() * 28) + 12; i++) {
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
.sc-transaction__filter-container {
  margin-bottom: 16px;
  .filter__btn {
    border: none;
    padding: 8px 15px;
    margin-right: 10px;
    border-radius: 4px;
    &:hover {
      background-color: #e2e2e2;
    }
  }
  .filter__danger {
    color: #dd0000;
    margin-left: 15px;
  }
  .filter__btn-active {
    border: 2px solid #ffd858;
  }
}
.filter-parent {
  margin-bottom: 16px;
  .filter-parent__btn {
    border: none;
    padding: 8px 15px;
    margin-right: 10px;
    border-radius: 4px;
    opacity: 1;
    transition: all 0.2s linear;
  }
}
.sc-transactions {
  tr {
    text-align: center !important;
    td {
      padding: 8px 20px !important;
    }
  }
}
</style>
