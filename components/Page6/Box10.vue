<template>
  <div class="box">
    <div class="text">
      ไม่แน่ใจในเหตุผล ลงคะแนนไปตามคำบอกกล่าว
      <span class="text-blue">10.2%</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.box {
  background-image: url('../../assets/images/page6/cross-sign.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 32rem;
  height: 32rem;
  margin-top: 3rem;
  border: 1.5rem solid #fff;
}

.text {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 120%;
  width: 26rem;
  margin-left: 1.7rem;
  margin-top: 1.8rem;
  color: #000;
}

@media #{$mq-tablet} {
  .box {
    width: 17rem;
    height: 17rem;
  }
}

@media #{$mq-mobile} {
  .box {
    width: 10.2rem;
    height: 10.2rem;
    border-width: 0.5rem;
    margin-top: 0;
    margin-left: 2rem;
  }
  .text {
    margin-top: 0.5rem;
    margin-left: 0.8rem;
    font-size: 1.5rem;
    width: 9.6rem;
  }
}
</style>
