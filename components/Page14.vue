<template>
  <div class="page-container page-height-80">
    <div class="left text-green">
      <div class="left-text">
        และนี่คือสิ่งที่<br />พวกเขาอยากบอก..<br />กับคนที่ยังไม่แน่ใจ/<br />ไม่อยากแก้รัฐธรรมนูญ
      </div>
      <div class="share-con">
        หากคุณคือคนหนึ่งที่ เคยรับแล้วคิดใหม่<br />
        ยังร่วมให้ความเห็นได้ เพื่อไม่ให้เสียงของคุณ<br />
        ถูกเอาไปอ้างในการไม่แก้ไขรัฐธรรมนูญอีกต่อไป <br />
        <a
          href="https://docs.google.com/spreadsheets/d/1-pwNEdhKbi5XBIKkobV11UX8VlsuMY0UM6QgVPZQqUY/edit#gid=1369942988"
          target="_blank"
          style="text-decoration: underline; color: #28b55f"
          >Link ไป Survey</a
        >
        <img
          v-sharer
          data-sharer="facebook"
          :data-url="base_url"
          :src="shareBtn"
          width="140"
          style="margin-top: 2rem; cursor: pointer"
        />
      </div>
    </div>
    <div class="right">
      <div class="page-show">
        {{ tellData[currentDataIndex].message }}
        <div class="next-page-container">
          <div v-if="showText" class="next-page-text">
            กดเพื่อดูความเห็นถัดไป
          </div>
          <img
            @mouseenter="handleShowText"
            @click="handleClickNextBtn"
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
// @ts-ignore
import datas from '~/assets/data/vote-yes-data.json'
// @ts-ignore
import VueSharer from 'vue-sharer'

export default Vue.extend({
  directives: {
    sharer: VueSharer,
  },

  data() {
    return {
      base_url: 'https://cocky-lamarr-eae715.netlify.app/',
      nextPageIcon:
        window.innerWidth > 768
          ? require('~/assets/images/next-paper-icon.svg')
          : require('~/assets/images/next-paper-icon-mobile.svg'),
      datas: [...Array(30).keys()],
      shareBtn: require('~/assets/images/share-btn.svg'),
      showText: false,
      isDesktop: window.innerWidth > 768,
      tellData: datas,
      currentDataIndex: 0,
    }
  },

  methods: {
    handleShowText() {
      this.showText = true
    },

    handleHideText() {
      this.showText = false
    },

    subString(word: string, limit: number) {
      return word.length > limit ? word.substring(0, limit) : word
    },

    handleClickNextBtn() {
      if (this.currentDataIndex === this.tellData.length - 1) {
        this.currentDataIndex = 0
      } else {
        this.currentDataIndex = this.currentDataIndex + 1
      }
    },
  },

  mounted(this: any) {
    this.tellData = this.tellData
      .map((data: any, index: number) => {
        return { message: this.subString(data['tell'], 235), key: index }
      })
      .filter((data: any) => data.message !== '')
  },
})
</script>

<style lang="scss" scoped>
.page-container {
  overflow: hidden;
}

.left {
  width: 45.4rem;
  overflow-y: scroll;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.left::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.left-text {
  font-weight: bold;
  font-size: 4.8rem;
  margin-top: 25rem;
}

.share-con {
  display: flex;
  flex-direction: column;
  margin-top: 40rem;
  font-size: 2rem;
  color: #000;
  line-height: 27px;
  margin-bottom: 40rem;
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
    width: 23.6rem;
    text-align: center;
    height: 50%;
    display: flex;
    align-items: center;
  }

  .left-text {
    font-size: 2.5rem;
    margin-top: 0;
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

  .share-con {
    display: none;
  }
}
</style>
