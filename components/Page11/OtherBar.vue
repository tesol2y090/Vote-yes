<template>
  <div class="bar-container">
    <div class="other-text">อื่นๆ</div>
    <div class="slide-container">
      <div class="left-button" @click="handleClickNextBtn(-1)" />
      <div class="right-button" @click="handleClickNextBtn(1)" />
      {{ unknowData[currentDataIndex].message }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import datas from '~/assets/data/vote-yes-data.json'

export default Vue.extend({
  data() {
    return {
      currentDataIndex: 0,
      unknowData: datas,
    }
  },

  methods: {
    handleClickNextBtn(num: number) {
      if (this.currentDataIndex === 0 && num === -1) {
        this.currentDataIndex = this.unknowData.length - 1
      } else if (
        this.currentDataIndex === this.unknowData.length - 1 &&
        num === 1
      ) {
        this.currentDataIndex = 0
      } else {
        this.currentDataIndex = this.currentDataIndex + num
      }
    },
  },

  mounted(this: any) {
    this.unknowData = this.unknowData
      .map((data: any, index: number) => {
        return { message: data['unknow-reason'], key: index }
      })
      .filter((data: any) => data.message !== '')
  },
})
</script>

<style lang="scss" scoped>
.bar-container {
  width: 100vw;
  height: 10.5rem;
  background-color: rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.other-text {
  font-size: 3.5rem;
  font-weight: bold;
  left: 10.4rem;
  top: 50%;
  transform: translateY(-50%);
  color: #a9fbc0;
  position: absolute;
}

.slide-container {
  width: 64rem;
  font-size: 2rem;
  color: #fff;
  text-align: center;
  position: relative;
}

.left-button {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 1.5rem solid transparent;
  border-right: 3rem solid #a9fbc0;
  border-bottom: 1.5rem solid transparent;
  top: 50%;
  transform: translateY(-50%);
  left: -6rem;
  cursor: pointer;
}

.right-button {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 1.5rem solid transparent;
  border-left: 3rem solid #a9fbc0;
  border-bottom: 1.5rem solid transparent;
  top: 50%;
  transform: translateY(-50%);
  right: -6rem;
  cursor: pointer;
}

@media #{$mq-mobile} {
  .bar-container {
    height: 11rem;
    flex-direction: column;
  }

  .other-text {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    font-weight: normal;
    margin-top: 0.6rem;
  }

  .slide-container {
    margin-top: 2rem;
    font-size: 1rem;
    width: 26rem;
  }

  .left-button {
    border-top: 0.5rem solid transparent;
    border-right: 1rem solid #a9fbc0;
    border-bottom: 0.5rem solid transparent;
    left: -3rem;
  }

  .right-button {
    border-top: 0.5rem solid transparent;
    border-left: 1rem solid #a9fbc0;
    border-bottom: 0.5rem solid transparent;
    right: -3rem;
  }
}
</style>
