<template>
  <div class="another-container">
    <div class="click-container">
      <div class="text">
        อื่นๆ
        <span class="text-blue">3.64%</span>
      </div>
      <div class="detail-text">(คลิกเพื่อดูรายละเอียด)</div>
    </div>
    <div class="box-container">
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
      <div class="box" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.another-container {
  margin-top: 1.7rem;
  display: flex;
  flex-direction: column;
}

.text {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 120%;
  width: 7.8rem;
  color: #000;
  z-index: 9;
}

.detail-text {
  font-size: 1.5rem;
  color: #000;
}

.box-container {
  display: flex;
  margin-top: 1.3rem;
  width: 36rem;
  flex-wrap: wrap;
}

.box {
  border: 0.3rem solid #fff;
  width: 3rem;
  height: 3rem;
  position: relative;
  cursor: pointer;
  margin: 0 0.5rem 0.5rem 0;
  &:before {
    position: absolute;
    left: 1rem;
    top: -0.5rem;
    content: ' ';
    height: 3.5rem;
    width: 0.3rem;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    left: 1rem;
    top: -0.6rem;
    content: ' ';
    height: 3.5rem;
    width: 0.3rem;
    background-color: #fff;
    transform: rotate(-45deg);
  }
}

@media #{$mq-mobile} {
  .another-container {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .text {
    font-size: 1.2rem;
    width: 4.3rem;
  }

  .detail-text {
    font-size: 1rem;
  }

  .box-container {
    width: 12.4rem;
    margin-top: 0;
  }

  .box {
    width: 0.93rem;
    height: 0.93rem;
    border-width: 0.1rem;
    margin: 0 0.3rem 0.3rem 0;
    &:before {
      width: 0.1rem;
      height: 1.1rem;
      left: 0.3rem;
      top: -0.2rem;
    }

    &:after {
      width: 0.1rem;
      height: 1.1rem;
      left: 0.3rem;
      top: -0.2rem;
    }
  }
}
</style>
