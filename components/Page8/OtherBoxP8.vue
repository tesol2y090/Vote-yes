<template>
  <div class="another-container">
    <div class="click-container">
      <div class="text">
        อื่นๆ
        <span class="text-green">11.75%</span>
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
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 120%;
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
  width: 44rem;
  flex-wrap: wrap;
}

.box {
  border: 0.4rem solid #fff;
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  cursor: pointer;
  margin: 0 1rem 1rem 0;
  &:before {
    position: absolute;
    left: 1.5rem;
    top: -0.8rem;
    content: ' ';
    height: 5.6rem;
    width: 0.4rem;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    left: 1.5rem;
    top: -1rem;
    content: ' ';
    height: 5.6rem;
    width: 0.4rem;
    background-color: #fff;
    transform: rotate(-45deg);
  }
}

@media #{$mq-mobile} {
  .another-container {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .click-container {
    width: 5rem;
    margin-left: 0.5rem;
  }

  .text {
    font-size: 1.2rem;
  }

  .detail-text {
    font-size: 1rem;
  }

  .box-container {
    width: 20rem;
    margin-top: 0;
  }

  .box {
    width: 2rem;
    height: 2rem;
    border-width: 0.2rem;
    margin: 0 0.5rem 0.5rem 0;
    &:before {
      width: 0.2rem;
      height: 2.5rem;
      left: 0.7rem;
      top: -0.4rem;
    }

    &:after {
      width: 0.2rem;
      height: 2.5rem;
      left: 0.7rem;
      top: -0.4rem;
    }
  }
}
</style>
