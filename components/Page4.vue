<template>
  <div class="page-container page-height-128">
    <div class="main">
      <div class="not-remember">จำไม่ได้ ไม่แน่ใจ <strong> 46.63%</strong></div>
      <div class="polity">
        <span class="text-blue">ร่างรัฐธรรมนูญ</span><br /><strong
          >23.13%</strong
        >
      </div>
      <div class="polity-question">
        <span class="text-blue">ร่างรัฐธรรมนูญ</span> +
        <span class="text-green">คำถามพ่วง</span> 28.69%
      </div>
      <div class="question">
        <span class="text-green">คำถามพ่วง</span> 1.55%
      </div>
      <img class="img-box" :src="box" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      box:
        window.innerWidth > 1024
          ? require('~/assets/images/box-page4-dt.svg')
          : window.innerWidth > 768
          ? require('~/assets/images/box-page4-tl.svg')
          : require('~/assets/images/box-page4-mobile.svg'),
    }
  },
})
</script>

<style lang="scss" scoped>
.main {
  position: relative;
}

.not-remember {
  font-size: 4.8rem;
  color: #000;
  line-height: 120%;
  position: absolute;
  width: 16.8rem;
  right: -19.2rem;
}

.polity {
  font-size: 4.8rem;
  color: #000;
  line-height: 120%;
  position: absolute;
  top: -11.6rem;
  left: 0;
}

.polity-question {
  font-size: 4.8rem;
  font-weight: bold;
  color: #000;
  line-height: 120%;
  position: absolute;
  width: 32rem;
  bottom: -18.5rem;
  left: 3rem;
  z-index: 5;
}

.question {
  font-size: 4.8rem;
  font-weight: bold;
  color: #000;
  line-height: 120%;
  position: absolute;
  width: 22rem;
  left: -24rem;
  top: 32rem;
}

@media #{$mq-mobile} {
  .not-remember {
    font-size: 1.4rem;
    right: -9.6rem;
    bottom: 8.5rem;
    transform: rotate(-90deg);
  }

  .polity {
    font-size: 1.4rem;
    top: -2rem;
    left: 0;
    transform: translateY(-50%);
    width: 11rem;
  }

  .polity-question {
    font-size: 1.4rem;
    bottom: -8rem;
    left: 1.2rem;
    transform: translateY(-50%);
    width: 10rem;
  }

  .question {
    font-size: 1.4rem;
    top: 9.2rem;
    left: -12rem;
    transform: rotate(-90deg);
  }
}
</style>
