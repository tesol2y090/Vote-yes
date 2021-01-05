<template>
  <div class="page-container page-light-green page-height-80">
    <div class="title">
      <div class="text-top">สำหรับคนที่เห็นชอบกับ</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  font-size: 7.2rem;
  color: #000;
  width: 98.8rem;
  line-height: 120%;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.text-top {
  font-size: 7.2rem;
  color: #000;
  position: relative;
}
</style>
