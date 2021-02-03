<template>
  <div class="page-container page-height-80">
    <div class="box-container">
      หากคุณคือคนหนึ่งที่ เคยรับแล้วคิดใหม่ ยังร่วมให้ความเห็นได้
      เพื่อไม่ให้เสียงของคุณ ถูกเอาไปอ้างในการไม่แก้ไขรัฐธรรมนูญอีกต่อไป
      <div class="share-btn">
        <img :src="shareLeft" height="30" />
        <img
          :src="fbBtn"
          v-sharer
          data-sharer="facebook"
          :data-url="base_url"
          height="30"
          style="cursor: pointer"
        />
        <img
          :src="twBtn"
          v-sharer
          data-sharer="twitter"
          :data-url="base_url"
          height="30"
          style="cursor: pointer"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import VueSharer from 'vue-sharer'

export default Vue.extend({
  directives: {
    sharer: VueSharer,
  },

  data() {
    return {
      base_url: 'https://elect.in.th/once-we-voted-yes/',
      sharBtn: require('~/assets/images/share-button.svg'),
      shareLeft: require('~/assets/images/logo/share-btn-left.svg'),
      fbBtn: require('~/assets/images/logo/fb-btn.svg'),
      twBtn: require('~/assets/images/logo/twitter-btn.svg'),
    }
  },
})
</script>

<style lang="scss" scoped>
.page-container {
  display: none;
}

@media #{$mq-mobile} {
  .page-container {
    display: flex;
  }

  .share-btn {
    display: flex;
    margin: 0 auto;
  }

  .box-container {
    font-size: 1.5rem;
    width: 27.2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  .link {
    text-decoration: underline;
  }

  .share-btn {
    margin-top: 2rem;
  }
}
</style>
