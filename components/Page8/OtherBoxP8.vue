<template>
  <div class="another-container">
    <div class="text">
      อื่นๆ
      <span class="text-green">11.75%</span>
    </div>
    <div class="detail-text">(คลิกเพื่อดูรายละเอียด)</div>
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
</style>
