<template>
  <div class="page-container page-height-80">
    <div class="left text-green">
      และนี่คือสิ่งที่<br />พวกเขาอยากบอก..<br />กับคนที่ยังไม่แน่ใจ/<br />ไม่อยากแก้รัฐธรรมนูญ
    </div>
    <div class="right">
      <div class="page-show">
        ระบอบประชาธิปไตยให้สิทธิและ เสียงของประชาชนเป็นผู้ตรวจ
        สอบและเลือกผู้นำประเทศ หาก รัฐธรรมนูญไม่เป็นที่ชอบธรรม
        ประชาชนย่อมมีสิทธิที่จะคัดค้าน และเป็นส่วนหนึ่งของการบูรณ
        รัฐธรรมนูญให้เหมาะสมกับ สถานการณ์ และยุคสมัย
        <div class="next-page-container">
          <div v-if="showText" class="next-page-text">
            กดเพื่อดูความเห็นถัดไป
          </div>
          <img
            @mouseenter="handleShowText"
            @mouseleave="handleHideText"
            :src="nextPageIcon"
            class="next-page-icon"
          />
        </div>
      </div>
      <div
        v-for="(data, key) in datas"
        v-bind:key="key"
        class="page-bg"
        :style="
          isDesktop
            ? `width: ${45.6 - 1.2 * data}rem; height: ${
                45.6 - 1.2 * data
              }rem; top: ${2.2 * data}rem; left: ${2.2 * data}rem;z-index: ${
                33 - data
              }`
            : `width: ${22.6 - 1.2 * data}rem; height: ${
                22.6 - 1.2 * data
              }rem; top: ${2.2 * data}rem; left: ${2.2 * data}rem;z-index: ${
                33 - data
              }`
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      nextPageIcon:
        window.innerWidth > 768
          ? require('~/assets/images/next-paper-icon.svg')
          : require('~/assets/images/next-paper-icon-mobile.svg'),
      datas: [...Array(30).keys()],
      showText: false,
      isDesktop: window.innerWidth > 768,
    }
  },
  methods: {
    handleShowText() {
      this.showText = true
    },
    handleHideText() {
      this.showText = false
    },
  },
})
</script>

<style lang="scss" scoped>
.page-container {
  overflow: hidden;
}

.left {
  width: 45.4rem;
  font-weight: bold;
  font-size: 4.8rem;
}

.right {
  position: relative;
  margin-left: 6rem;
}

.next-page-container {
  right: -0.3rem;
  bottom: -1.6rem;
  position: absolute;
}

.next-page-icon {
  cursor: pointer;
}

.next-page-text {
  position: absolute;
  font-size: 1.5rem;
  color: #fff;
  font-weight: normal;
  width: 14rem;
  left: -16rem;
  top: 1.2rem;
}

.page-show {
  width: 45.6rem;
  height: 45.6rem;
  background-color: #20208e;
  border: 0.3rem solid #f0efe9;
  padding: 3rem 3.8rem;
  font-size: 3rem;
  font-weight: normal;
  color: #fff;
  position: relative;
  z-index: 99;
}

.page-bg {
  background-color: #20208e;
  top: 1rem;
  left: 1rem;
  border: 0.3rem solid #f0efe9;
  position: absolute;
}

@media #{$mq-mobile} {
  .page-container {
    flex-direction: column;
    height: 113.6rem;
  }

  .left {
    font-size: 2.5rem;
    width: 23.6rem;
    text-align: center;
    height: 50%;
    display: flex;
    align-items: center;
  }

  .right {
    height: 50%;
    margin-left: 0;
  }

  .page-show {
    width: 22.6rem;
    height: 22.6rem;
    font-size: 1.5rem;
    padding: 1.6rem 0.8rem 1.6rem 1.8rem;
  }

  .next-page-icon {
    bottom: 1.4rem;
    right: 0;
    position: absolute;
  }

  .next-page-text {
    display: none;
  }
}
</style>
