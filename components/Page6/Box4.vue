<template>
  <div class="box">
    <div class="text">
      ไม่มีทางเลือก กลัวจะได้ รัฐธรรมนูญ ที่แย่กว่านี้
      <span class="text-blue">4.74%</span>
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
  width: 23rem;
  height: 23rem;
  border: 1.5rem solid #fff;
}

.text {
  font-size: 3rem;
  font-weight: bold;
  line-height: 115%;
  width: 17rem;
  margin-left: 0.8rem;
  margin-top: 0.4rem;
  color: #000;
}

@media #{$mq-tablet} {
  .box {
    width: 12rem;
    height: 12rem;
  }
  .text {
    font-size: 2rem;
    width: 11rem;
  }
}

@media #{$mq-mobile} {
  .box {
    width: 7rem;
    height: 7rem;
    border-width: 0.5rem;
    position: relative;
  }
  .text {
    position: absolute;
    right: -13rem;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
    font-size: 1.2rem;
    width: 11.2rem;
  }
}
</style>
