<template>
  <div class="page-container page-height-29 page-black">
    <div class="top">
      <div class="top-left">
        <img :src="electLogo" />
      </div>
      <div class="top-right">
        <a href="https://punchup.world/" target="_blank">
          <img :src="puLogo" />
        </a>
        <a href="https://www.boonmeelab.com/" target="_blank">
          <img :src="bmlLogo" />
        </a>
        <a href="https://ilaw.or.th/" target="_blank">
          <img :src="ilawLogo" />
        </a>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <div class="text">
          <a href="https://elect.in.th/visualization/" target="_blank">
            VISUALIZATION
          </a>
        </div>
        <div class="text">
          <a href="https://elect.in.th/tool/" target="_blank"> TOOL </a>
        </div>
        <div class="text">
          <a href="https://elect.in.th/article/" target="_blank">ARTICLE</a>
        </div>
        <div class="text">
          <a href="https://elect.in.th/infographic/" target="_blank"
            >INFOGRAPHIC</a
          >
        </div>
        <div class="text">
          <a href="https://elect.in.th/download-data/" target="_blank"
            >DOWNLOAD DATA</a
          >
        </div>
      </div>
      <div class="bottom-right">
        <div class="pair-container">
          <div class="header">ABOUT US</div>
          <div class="detail">
            <a href="https://elect.in.th/about/" target="_blank"
              >เราคือใคร.. ทำไมต้อง Elect?</a
            >
          </div>
        </div>
        <div class="pair-container">
          <div class="header">CONTRACT US</div>
          <div class="detail">
            <div class="detail">
              <a href="mailto:contact@elect.in.th" target="_blank">
                E-mail : contact@elect.in.th
              </a>
            </div>
          </div>
        </div>
        <div class="pair-container">
          <div class="header">FOLLOW US</div>
          <div class="detail">
            <a href="https://www.facebook.com/electinth" target="_blank">
              <img :src="fbLogo" />
            </a>
            <a href="https://twitter.com/electinth" target="_blank">
              <img :src="twitLogo" />
            </a>
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
      electLogo:
        window.innerWidth > 768
          ? require('~/assets/images/logo/elect-logo-white.svg')
          : require('~/assets/images/logo/elect-logo-white-mobile.svg'),
      puLogo:
        window.innerWidth > 768
          ? require('~/assets/images/logo/pu-logo-white.svg')
          : require('~/assets/images/logo/pu-logo-white-mobile.svg'),
      bmlLogo:
        window.innerWidth > 768
          ? require('~/assets/images/logo/bml-logo-white.svg')
          : require('~/assets/images/logo/bml-logo-white-mobile.svg'),
      ilawLogo:
        window.innerWidth > 768
          ? require('~/assets/images/logo/ilaw-logo.svg')
          : require('~/assets/images/logo/ilaw-logo-mobile.svg'),
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
      a {
        color: #fff;
        text-decoration: none;
        padding: 0.2rem 0.4rem;
        &:hover {
          color: #000;
          background-color: #fff;
        }
      }
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
      a {
        text-decoration: none;
        color: #fff;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@media #{$mq-mobile} {
  .page-container {
    padding: 4rem 3.5rem 3.5rem 3.5rem;
    align-items: flex-start;
    flex-direction: column;
  }

  .top {
    flex-direction: row;
    height: auto;
    align-items: flex-start;
    width: 100vw;
    &-left {
      flex: none;
      width: 50%;
    }

    &-right {
      width: 50%;
      > * {
        margin-right: 1rem;
      }
    }
  }

  .bottom {
    display: flex;
    width: 100vw;
    margin-top: 3.2rem;
    &-left {
      width: 50%;
      .text {
        text-align: left;
        font-size: 1.2rem;
        margin-bottom: 2rem;
      }
    }

    &-right {
      align-items: flex-start;
      .pair-container {
        align-items: flex-start;
        width: 14.8rem;
      }

      .header {
        font-size: 1rem;
      }

      .detail {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
