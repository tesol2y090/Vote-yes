<template>
  <div class="box">
    <div class="text">
      ไม่ทราบว่า เป็นการให้ ส.ว. ชุดพิเศษเลือก นายกรัฐมนตรีได้
      <span class="text-green">33.73%</span>
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
  width: 51.5rem;
  height: 51.5rem;
  border: 1.5rem solid #fff;
}

.text {
  font-size: 6rem;
  font-weight: bold;
  line-height: 120%;
  width: 41.3rem;
  margin-left: 2.1rem;
  margin-top: 2rem;
  color: #000;
}

@media #{$mq-tablet} {
  .box {
    width: 36.5rem;
    height: 36.5rem;
  }
  .text {
    font-size: 5.2rem;
  }
}

@media #{$mq-mobile} {
  .box {
    width: 20.8rem;
    height: 20.8rem;
    border-width: 0.5rem;
    margin-top: 2.4rem;
  }

  .text {
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: 2.5rem;
    width: 18rem;
  }
}

</style>
