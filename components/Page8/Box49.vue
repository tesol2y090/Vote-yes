<template>
  <div class="box">
    <div class="text">
      ไม่เข้าใจ/<br />ไม่ได้ใส่ใจ<br />ลงเหมือนกัน ทั้งสองช่อง
      <span class="text-green">49.1%</span>
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
  width: 61rem;
  height: 61rem;
  border: 1.5rem solid #fff;
}

.text {
  font-size: 8rem;
  font-weight: bold;
  line-height: 120%;
  width: 44rem;
  margin-left: 2.7rem;
  margin-top: 2.1rem;
  color: #000;
}

@media #{$mq-tablet} {
  .box {
    width: 46rem;
    height: 46rem;
  }
  .text {
    font-size: 7.2rem;
  }
}

@media #{$mq-mobile} {
  .box {
    width: 25rem;
    height: 25rem;
    border-width: 0.5rem;
  }

  .text {
    margin-top: 1rem;
    margin-left: 1.4rem;
    font-size: 3rem;
    width: 14rem;
  }
}
</style>
