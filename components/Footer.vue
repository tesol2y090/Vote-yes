<template>
  <div class="page-container page-height-29 page-black">
    <div class="top">
      <div class="top-left">
        <img :src="electLogo" />
      </div>
      <div class="top-right">
        <img :src="puLogo" />
        <img :src="bmlLogo" />
        <img :src="ilawLogo" />
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <div class="text">VISUALIZATION</div>
        <div class="text">TOOL</div>
        <div class="text">ARTICLE</div>
        <div class="text">INFOGRAPHIC</div>
        <div class="text">DOWNLOAD DATA</div>
      </div>
      <div class="bottom-right">
        <div class="pair-container">
          <div class="header">ABOUT US</div>
          <div class="detail">เราคือใคร.. ทำไมต้อง Elect?</div>
        </div>
        <div class="pair-container">
          <div class="header">CONTRACT US</div>
          <div class="detail">E-mail : contact@elect.in.th</div>
        </div>
        <div class="pair-container">
          <div class="header">FOLLOW US</div>
          <div class="detail">
            <img :src="fbLogo" />
            <img :src="twitLogo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      electLogo: require('~/assets/images/logo/elect-logo-white.svg'),
      puLogo: require('~/assets/images/logo/pu-logo-white.svg'),
      bmlLogo: require('~/assets/images/logo/bml-logo-white.svg'),
      ilawLogo: require('~/assets/images/logo/ilaw-logo.svg'),
      fbLogo: require('~/assets/images/logo/facebook-white.svg'),
      twitLogo: require('~/assets/images/logo/twitter-white.svg'),
    }
  },
})
</script>

<style lang="scss" scoped>
.page-container {
  padding: 5rem 5rem 4.5rem 3.5rem;
}

.top {
  display: flex;
  flex-direction: column;
  width: 33.33%;
  height: 100%;

  &-left {
    flex: 1;
  }

  &-right {
    display: flex;
    align-items: center;
    > * {
      margin-right: 3rem;
    }
  }
}

.bottom {
  display: flex;
  width: 66.66%;
  &-left {
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    .text {
      text-align: center;
      font-family: 'Kondolar';
      font-size: 1.6rem;
      font-weight: normal;
      color: #fff;
      margin-bottom: 1.8rem;
    }
  }

  &-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;

    .pair-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 1.6rem;
      align-items: flex-start;
      width: 14.8rem;
    }

    .header {
      font-family: 'Anuphan';
      font-weight: bold;
      font-size: 1.4rem;
      color: #fff;
    }

    .detail {
      font-family: 'Kondolar';
      font-size: 1rem;
      margin-top: 1rem;
      font-weight: normal;
      color: #fff;
    }
  }
}
</style>
