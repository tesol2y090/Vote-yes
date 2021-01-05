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
      <img :src="box" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      box: require('~/assets/images/box-page4-dt.svg'),
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
  left: -19.2rem;
}

.polity {
  font-size: 4.8rem;
  color: #000;
  line-height: 120%;
  position: absolute;
  top: -11.6rem;
  right: 3rem;
}

.polity-question {
  font-size: 4.8rem;
  font-weight: bold;
  color: #000;
  line-height: 120%;
  position: absolute;
  width: 32rem;
  bottom: -18.5rem;
  right: 0;
  z-index: 5;
}

.question {
  font-size: 4.8rem;
  font-weight: bold;
  color: #000;
  line-height: 120%;
  position: absolute;
  width: 22rem;
  right: -24rem;
  top: 32rem;
}
</style>
