<template>
  <div class="box">
    <div class="text">
      พอใจในเนื้อหาของ ร่างรัฐธรรมนูญ
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
}

.text {
  font-size: 2rem;
  font-weight: bold;
  line-height: 120%;
  width: 17.4rem;
  color: #000;
  z-index: 9;
}

@media #{$mq-tablet} {
  .box {
    width: 7.6rem;
    height: 7.6rem;
  }
  .text {
    font-size: 2rem;
    width: 16rem;
  }
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
    right: -19rem;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
    font-size: 1.2rem;
    width: 16.9rem;
  }
}
</style>
