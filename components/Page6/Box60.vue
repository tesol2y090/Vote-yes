<template>
  <div class="box">
    <div class="text">
      ต้องการให้ มีเลือกตั้ง โดยเร็วที่สุด <span class="text-blue">60.2%</span>
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
  width: 75rem;
  height: 75rem;
  border: 1.5rem solid #fff;
}

.text {
  font-size: 8rem;
  font-weight: bold;
  line-height: 120%;
  width: 38rem;
  margin-left: 4.6rem;
  margin-top: 3.2rem;
  color: #000;
}

@media #{$mq-tablet} {
  .box {
    width: 60rem;
    height: 60rem;
  }
}

@media #{$mq-mobile} {
  .box {
    width: 25rem;
    height: 25rem;
    border-width: 0.5rem;
  }

  .text {
    margin-top: 0.7rem;
    margin-left: 1.5rem;
    font-size: 3rem;
    width: 14rem;
  }
}


</style>
