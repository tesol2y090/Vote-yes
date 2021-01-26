<template>
  <div class="page-container page-height-80">
    <div class="box-container">
      หากคุณคือคนหนึ่งที่ เคยรับแล้วคิดใหม่ ยังร่วมให้ความเห็นได้
      เพื่อไม่ให้เสียงของคุณ ถูกเอาไปอ้างในการไม่แก้ไขรัฐธรรมนูญอีกต่อไป
      <span class="link text-green">Link ไป Survey</span>
      <img
        v-sharer
        data-sharer="facebook"
        :data-url="base_url"
        :src="sharBtn"
        class="share-btn"
      />
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
      base_url: 'https://cocky-lamarr-eae715.netlify.app/',
      sharBtn: require('~/assets/images/share-button.svg'),
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
