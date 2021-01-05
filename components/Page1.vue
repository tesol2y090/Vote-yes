<template>
  <div class="page-container">
    <div class="title">
      จากคนเคยรับ <span class="font-green">แล้วคิดใหม่</span>
    </div>
    <img :src="ilawXElect" />
    <img class="triangle" :src="triangle" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      ilawXElect: require('~/assets/images/ilawxelect.svg'),
      triangle: require('~/assets/images/triangle.svg'),
    }
  },
})
</script>

<style lang="scss" scoped>
.page-container {
  position: relative;
  background-color: #f0efe9;
  width: 100vw;
  background-image: url('../assets/images/cross-sign.svg');
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 8rem);
}

.title {
  font-weight: bold;
  font-size: 9.6rem;
  color: #20208e;
  width: 54.4rem;
  text-align: center;
}

.font-green {
  color: #28b55f;
}

.triangle {
  margin-top: 8.4rem;
}
</style>
