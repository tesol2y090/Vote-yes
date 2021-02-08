<template>
  <div class="box">
    <div class="text">
      ต้องการให้ประเทศสงบ ไม่วุ่นวาย
      <span class="text-blue">15.21%</span>
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
  width: 38.6rem;
  height: 38.6rem;
  border: 1.5rem solid #fff;
}

.text {
  font-size: 6rem;
  font-weight: bold;
  line-height: 120%;
  width: 30rem;
  margin-left: 1.4rem;
  margin-top: 1.6rem;
  color: #000;
}

@media #{$mq-tablet} {
  .box {
    width: 23.5rem;
    height: 23.5rem;
  }
  .text {
    font-size: 4.2rem;
    width: 25rem;
  }
}

@media #{$mq-mobile} {
  .box {
    width: 12.5rem;
    height: 12.5rem;
    border-width: 0.5rem;
  }
  .text {
    margin-top: 0.5rem;
    margin-left: 0.8rem;
    font-size: 2rem;
    width: 10.6rem;
  }
}
</style>
