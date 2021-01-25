<template>
  <div class="another-container">
    <div class="click-container">
      <div class="text">
        อื่นๆ
        <span class="text-green">11.75%</span>
      </div>
      <div class="detail-text">(คลิกเพื่อดูรายละเอียด)</div>
    </div>
    <div class="box-container">
      <div
        v-for="(data, index) in quesDatas"
        v-bind:key="index"
        :class="{
          box: true,
          'card-selected': selectedBoxIndex === data.key,
        }"
        @click="handleClickBox(data, data.key)"
      />
      <div
        class="show-detail-text hidden"
        :style="`top: ${top}rem; left: ${left}rem`"
      >
        {{ this.selectedData.message }}
      </div>
    </div>
    <div class="show-detail-text-mobile hidden">
      {{ this.selectedData.message }}
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
      quesDatas: datas,
      selectedBoxIndex: -1,
      selectedData: '',
      top: 1.5,
      left: 1.5,
    }
  },

  mounted(this: any) {
    this.quesDatas = this.quesDatas
      .map((data: any, index: number) => {
        return { message: data['case-question'], key: index }
      })
      .filter((data: any) => data.message !== '')
  },

  methods: {
    handleClickBox(data: string, index: number) {
      const boxDetail = document.querySelectorAll('.show-detail-text')[1]
      // Hidding Box
      if (this.selectedBoxIndex === index) {
        this.selectedBoxIndex = -1
        boxDetail.classList.remove('visible')
        boxDetail.classList.add('hidden')
        return
      }
      boxDetail.classList.add('visible')
      boxDetail.classList.remove('hidden')
      this.top = 2.25 + Math.floor(index / 8) * 5.5
      this.left = 2.25 + Math.floor(index % 8) * 5.5
      this.selectedBoxIndex = index
      this.selectedData = data
    },
  },
})
</script>

<style lang="scss" scoped>
.another-container {
  margin-top: 1.7rem;
  display: flex;
  flex-direction: column;
}

.show-detail-text {
  position: absolute;
  width: 20rem;
  padding: 0.8rem;
  background-color: #a9fbc0;
  border: 0.2rem solid #ffffff;
  font-size: 1.5rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.text {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 120%;
  color: #000;
  z-index: 9;
}

.detail-text {
  font-size: 1.5rem;
  color: #000;
}

.box-container {
  position: relative;
  display: flex;
  margin-top: 1.3rem;
  width: 44rem;
  flex-wrap: wrap;
}

.show-detail-text-mobile {
  display: none;
}

.box {
  border: 0.4rem solid #fff;
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  cursor: pointer;
  margin: 0 1rem 1rem 0;
  &:before {
    position: absolute;
    left: 1.5rem;
    top: -0.8rem;
    content: ' ';
    height: 5.6rem;
    width: 0.4rem;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    left: 1.5rem;
    top: -1rem;
    content: ' ';
    height: 5.6rem;
    width: 0.4rem;
    background-color: #fff;
    transform: rotate(-45deg);
  }
}

.card-selected {
  border-color: #28b55f;
  &::before,
  &::after {
    background-color: #28b55f;
  }
}

@media #{$mq-mobile} {
  .another-container {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .click-container {
    width: 5rem;
    margin-left: 0.5rem;
  }

  .text {
    font-size: 1.2rem;
  }

  .detail-text {
    font-size: 1rem;
  }

  .box-container {
    width: 20rem;
    margin-top: 0;
  }

  .box {
    width: 2rem;
    height: 2rem;
    border-width: 0.2rem;
    margin: 0 0.5rem 0.5rem 0;
    &:before {
      width: 0.2rem;
      height: 2.5rem;
      left: 0.7rem;
      top: -0.4rem;
    }

    &:after {
      width: 0.2rem;
      height: 2.5rem;
      left: 0.7rem;
      top: -0.4rem;
    }
  }
  .show-detail-text-mobile {
    display: block;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: calc(100rem - 10rem);
    width: 26rem;
    padding: 0.8rem;
    border: 0.2rem solid #ffffff;
    background: #a9fbc0;
  }

  .show-detail-text {
    display: none;
  }
}
</style>
