<template>
  <div class="box">
    <div class="text">
      เชื่อมั่นในการปฏิรูปประเทศของ คสช.
      <span class="text-blue">1.37%</span>
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
  width: 13.8rem;
  height: 13.8rem;
  border: 1.5rem solid #fff;
  margin-left: 6rem;
}

.text {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 115%;
  width: 22.6rem;
  margin-left: 0.5rem;
  margin-top: 0.2rem;
  color: #000;
  z-index: 9;
}

@media #{$mq-mobile} {
  .box {
    width: 4.5rem;
    height: 4.5rem;
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
