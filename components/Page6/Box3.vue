<template>
  <div class="box">
    <div class="text">
      เชื่อว่า รัฐธรรมนูญ จะช่วย ปราบโกง
      <span class="text-blue">3.73%</span>
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
  width: 20.6rem;
  height: 20.6rem;
  border: 1.5rem solid #fff;
  margin-left: 6rem;
}

.text {
  font-size: 3rem;
  font-weight: bold;
  line-height: 115%;
  width: 14rem;
  margin-left: 0.8rem;
  margin-top: 0.3rem;
  color: #000;
}

@media #{$mq-tablet} {
  .box {
    width: 11rem;
    height: 11rem;
  }
  .text {
    font-size: 2rem;
    width: 12rem;
  }
}

@media #{$mq-mobile} {
  .box {
    width: 6rem;
    height: 6rem;
    border-width: 0.5rem;
    position: relative;
    margin-left: 0;
    margin-top: 2rem;
  }

  .text {
    position: absolute;
    right: -11rem;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
    font-size: 1.2rem;
    width: 9.3rem;
  }
}
</style>
