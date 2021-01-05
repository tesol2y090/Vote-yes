<template>
  <div class="page-container page-light-green page-height-80">
    <div class="title">
      <div class="text-top">
        สำหรับคนที่เห็นชอบกับ
        <img class="underline" :src="underlineBlack" />
      </div>
      <div class="text-mid polity-hover">
        คำถามพ่วง
        <div class="arrow-container">
          <img :src="arrow" />
          <div class="arrow-text">Link ไปคำถามพ่วง</div>
        </div>
      </div>
      <div class="text-top">เป็นเพราะ..</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      underlineBlack:
        window.innerWidth > 768
          ? require('~/assets/images/underline-black.svg')
          : require('~/assets/images/underline-black-mobile.svg'),
      arrow: require('~/assets/images/arrow.svg'),
    }
  },
})
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  font-size: 7.2rem;
  color: #000;
  width: 98.8rem;
  line-height: 120%;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-top {
  font-size: 7.2rem;
  color: #000;
  position: relative;
}

.text-mid {
  font-size: 7.2rem;
  color: #fff;
  padding: 1.3rem 0.8rem;
  width: 36.8rem;
  margin: 3rem 0;
  background-color: #28b55f;
  position: relative;
  .arrow-container {
    position: absolute;
    top: 0;
    right: -10.4rem;
    display: none;
    .arrow-text {
      position: absolute;
      top: 4.4rem;
      width: 20rem;
      color: #000;
      font-size: 2rem;
      font-weight: normal;
      transform: rotate(-16.28deg);
    }
  }
  &:hover {
    > .arrow-container {
      display: block;
    }
  }
}

.polity-hover {
  cursor: pointer;
  z-index: 9;
  &:hover {
    background-color: #000;
    color: #fff;
  }
}

.underline {
  position: absolute;
  bottom: -9rem;
  left: 33rem;
}

@media #{$mq-mobile} {
  .text-top {
    font-size: 2.5rem;
    line-height: 125%;
  }

  .text-mid {
    font-size: 2.5rem;
    width: 17.8rem;
    padding: 0.5rem;
    margin: 1rem 0;
    line-height: 125%;
  }

  .underline {
    top: 0;
    left: 11.4rem;
  }
}
</style>
