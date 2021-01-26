<template>
  <div class="page-container page-height-80">
    <div class="title">
      จากผู้ตอบแบบสอบถาม <span class="text-green">1098</span> คน เมื่อปี 2559
      พวกเขาลงประชามติ กาช่อง เห็นชอบ กับ..
      <img class="underline" :src="underlineBlack" />
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
    }
  },
})
</script>

<style lang="scss" scoped>
.page-container {
  height: 50vh;
  overflow: hidden;
}

.title {
  position: relative;
  font-size: 7.2rem;
  color: #000;
  width: 98.8rem;
  line-height: 120%;
  font-weight: bold;
  text-align: center;
}

.underline {
  position: absolute;
  bottom: -9rem;
  left: 40rem;
}

@media #{$mq-mobile} {
  .title {
    font-size: 2.5rem;
    width: 23rem;
  }

  .underline {
    left: 4.2rem;
    bottom: -4rem;
  }
}
</style>
