<template>
  <div>
    <div class="row">
      <div class="bank-card_container" :style="{ backgroundColor: '#989789' }">
        <img
          :src="require('@/assets/static/features/banks/hdfc.png')"
          width="60px"
          height="60px"
        />
        <div class="bank-card__user-name">
          {{ name }}
        </div>
        <div class="bank-card__card-type">
          <img
            :src="require('@/assets/static/features/banks/mastercard.png')"
            width="80px"
            height="60px"
          />
        </div>
      </div>
      <div class="bank-card_container" :style="{ backgroundColor: '#ad5678' }">
        <img
          :src="require('@/assets/static/features/banks/sbi.png')"
          width="110px"
          height="60px"
        />
        <div class="bank-card__user-name">
          {{ name }}
        </div>
        <div class="bank-card__card-type">
          <img
            class="bank-card__card-type-visa"
            :src="require('@/assets/static/features/banks/visa.png')"
            width="80px"
            height="35px"
          />
        </div>
      </div>
      <div class="bank-card_container" :style="{ backgroundColor: '#119985' }">
        <img
          :src="require('@/assets/static/features/banks/icici.png')"
          width="150px"
          height="60px"
        />
        <div class="bank-card__user-name">
          {{ name }}
        </div>
        <div class="bank-card__card-type">
          <img
            :src="require('@/assets/static/features/banks/mastercard.png')"
            width="80px"
            height="60px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>
<style lang="scss">
.bank-card_container {
  width: 400px !important;
  height: 250px;
  margin: 0 25px 25px 0;
  border-radius: 12px;
  padding: 20px;
  cursor: pointer;
  .bank-card__user-name {
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    margin-top: 50px;
  }
  .bank-card__card-type {
    margin-top: 15px;
    float: right;
  }
  .bank-card__card-type-visa {
    margin-top: 15px;
  }
}
</style>
