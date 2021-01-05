<template>
  <div class="box">
    <div class="text">
      ต้องการให้ พล.อ. ประยุทธ์เป็นนายกรัฐมนตรีต่อ
      <span class="text-blue">0.46%</span>
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
  width: 9.2rem;
  height: 9.2rem;
  border: 1.5rem solid #fff;
  margin-top: 6rem;
  margin-left: 19.7rem;
}

.text {
  font-size: 2rem;
  font-weight: bold;
  line-height: 120%;
  width: 15.7rem;
  color: #000;
  z-index: 9;
}

@media #{$mq-mobile} {
  .box {
    width: 2.8rem;
    height: 2.8rem;
    border-width: 0.5rem;
    position: relative;
    margin-left: 0;
    margin-top: 2rem;
  }

  .text {
    position: absolute;
    right: -14.7rem;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
    font-size: 1.2rem;
    width: 12.6rem;
  }
}
</style>
