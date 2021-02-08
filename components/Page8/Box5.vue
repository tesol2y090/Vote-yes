<template>
  <div class="box">
    <div class="text">
      เห็นด้วยกับการให้ ส.ว. ชุด พิเศษเลือกนายกรัฐมนตรีได้<br />
      <span class="text-green">5.42%</span>
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
  width: 22.4rem;
  height: 22.4rem;
  border: 1.5rem solid #fff;
}

.text {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 120%;
  width: 42rem;
  margin-left: 1.3rem;
  margin-top: 0.8rem;
  color: #000;
}

@media #{$mq-tablet} {
  .box {
    width: 15rem;
    height: 15rem;
  }
  .text {
    font-size: 2.4rem;
    width: 20rem;
  }
}

@media #{$mq-mobile} {
  .box {
    width: 8.4rem;
    height: 8.4rem;
    border-width: 0.5rem;
    position: relative;
    margin-top: 2.4rem;
  }
  .text {
    position: absolute;
    right: -15rem;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
    font-size: 1.5rem;
    width: 13.8rem;
  }
}

</style>
