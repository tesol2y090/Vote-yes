<template>
  <div class="page-container page-height-80">
    <div
      v-for="(data, index) in useData"
      v-bind:key="index"
      class="box-container"
    >
      <span
        class="span-text"
        v-for="(text, tIndex) in data"
        v-bind:key="tIndex"
      >
        {{ text }} <br />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import datas from '~/assets/data/raw-data.json'

export default Vue.extend({
  data() {
    return {
      sharBtn: require('~/assets/images/share-button.svg'),
      unKnowDatas: datas,
      useData: [] as any,
      limitRow: 7,
    }
  },

  mounted() {
    this.unKnowDatas = this.unKnowDatas
      .map((data: any, index: number) => {
        return { message: data['dont_know_data'], key: index }
      })
      .filter((data: any) => data.message !== '')
    let temp = []
    for (let i = 0; i < this.unKnowDatas.length; i++) {
      if (this.unKnowDatas[i].message.length > 70) continue
      temp.push(this.unKnowDatas[i].message)
      if (i % 7 === 0) {
        this.useData.push(temp)
        temp = []
      }
    }
    this.unKnowDatas = this.unKnowDatas.filter((box: any) => box.length === 7)
  },
})
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: transparent;
  padding: 4rem;
  height: auto;
}

.box-container {
  text-align: left;
  margin: 2.4rem 3.5rem;
}

.span-text {
  background-color: #20208e;
  line-height: 120%;
  text-align: left;
  font-size: 1.5rem;
  color: #fff;
}

@media #{$mq-mobile} {
  .page-container {
    padding: 0;
  }

  .span-text {
    padding-left: 1.2rem;
    line-height: 0%;
  }

  .box-container {
    font-size: 1.5rem;
    margin: 1rem 0rem;
  }

  .link {
    text-decoration: underline;
  }

  .share-btn {
    margin-top: 2rem;
  }
}
</style>
