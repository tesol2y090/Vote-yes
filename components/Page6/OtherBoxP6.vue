<template>
  <div class="another-container">
    <div class="click-container">
      <div class="text">
        อื่นๆ
        <span class="text-blue">3.64%</span>
      </div>
      <div class="detail-text">(คลิกเพื่อดูรายละเอียด)</div>
    </div>
    <div class="box-container">
      <div
        v-for="(data, index) in poliDatas"
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
    <div v-if="isOpen" class="show-detail-text-mobile hidden">
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
      poliDatas: datas,
      selectedBoxIndex: -1,
      selectedData: '',
      isOpen: false,
      top: 1.5,
      left: 1.5,
    }
  },

  methods: {
    handleClickBox(data: string, index: number) {
      if (index === this.selectedBoxIndex) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
      const boxDetail = document.querySelectorAll('.show-detail-text')[0]
      const boxDetailMobile = document.querySelectorAll(
        '.show-detail-text-mobile'
      )[0]
      // Hidding Box
      if (this.selectedBoxIndex === index) {
        this.selectedBoxIndex = -1
        boxDetail.classList.remove('visible')
        boxDetail.classList.add('hidden')
        return
      }
      boxDetail.classList.add('visible')
      boxDetail.classList.remove('hidden')
      this.top = 1.5 + Math.floor(index / 10) * 3.5
      this.left = 1.5 + Math.floor(index % 10) * 3.5
      this.selectedBoxIndex = index
      this.selectedData = data
    },
  },

  mounted(this: any) {
    this.poliDatas = this.poliDatas
      .map((data: any, index: number) => {
        return { message: data['cause-polity'], key: index }
      })
      .filter((data: any) => data.message !== '')
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
  background-color: #cde4ed;
  border: 0.2rem solid #ffffff;
  font-size: 1.5rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
}

.text {
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 120%;
  width: 7.8rem;
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
  width: 36rem;
  flex-wrap: wrap;
}

.box {
  border: 0.3rem solid #fff;
  width: 3rem;
  height: 3rem;
  position: relative;
  cursor: pointer;
  margin: 0 0.5rem 0.5rem 0;
  &:before {
    position: absolute;
    left: 1rem;
    top: -0.5rem;
    content: ' ';
    height: 3.5rem;
    width: 0.3rem;
    background-color: #fff;
    transform: rotate(45deg);
  }
  &:after {
    position: absolute;
    left: 1rem;
    top: -0.6rem;
    content: ' ';
    height: 3.5rem;
    width: 0.3rem;
    background-color: #fff;
    transform: rotate(-45deg);
  }
}

.show-detail-text-mobile {
  display: none;
}

.card-selected {
  border-color: #2d6ed3;
  &::before,
  &::after {
    background-color: #2d6ed3;
  }
}

@media #{$mq-mobile} {
  .another-container {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }

  .show-detail-text {
    display: none;
  }

  .text {
    font-size: 1.2rem;
    width: 4.3rem;
  }

  .detail-text {
    font-size: 1rem;
  }

  .box-container {
    width: 12.4rem;
    margin-top: 0;
    margin-right: 1rem;
  }

  .box {
    width: 0.93rem;
    height: 0.93rem;
    border-width: 0.1rem;
    margin: 0 0.3rem 0.3rem 0;
    &:before {
      width: 0.1rem;
      height: 1.1rem;
      left: 0.3rem;
      top: -0.2rem;
    }

    &:after {
      width: 0.1rem;
      height: 1.1rem;
      left: 0.3rem;
      top: -0.2rem;
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
    background: #cde4ed;
  }
}
</style>
