<template>
  <div class="bar-container">
    <div class="other-text">อื่นๆ</div>
    <div class="slide-container">
      เรียน นิติศาสตร์ ภาคบัณฑิต และเรียนวิชา กฎหมายมหาชน กฎหมายรัฐธรรมนูญ
      ประกอบกับการฟังข่าวสาร ทำให้มีความเข้าใจเรื่องดังกล่าวมากขึ้น
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.bar-container {
  width: 100vw;
  height: 15rem;
  background-color: rgba(0, 0, 0, 0.25);
  margin-bottom: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.other-text {
  font-size: 3.5rem;
  font-weight: bold;
  left: 10.4rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a9fbc0;
  position: absolute;
}

.slide-container {
  width: 43rem;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 1.5rem solid transparent;
    border-right: 3rem solid #a9fbc0;
    border-bottom: 1.5rem solid transparent;
    top: 50%;
    transform: translateY(-50%);
    left: -6rem;
    cursor: pointer;
  }

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 1.5rem solid transparent;
    border-left: 3rem solid #a9fbc0;
    border-bottom: 1.5rem solid transparent;
    top: 50%;
    transform: translateY(-50%);
    right: -6rem;
    cursor: pointer;
  }
}
</style>
