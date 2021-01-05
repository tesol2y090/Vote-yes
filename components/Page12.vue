<template>
  <div class="page-container page-height-80">
    <div class="title text-green">
      และพวกเขา<br />ได้มีส่วนร่วม<br />ในกิจกรรมเหล่านี้
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
  width: 51.2rem;
  line-height: 120%;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media #{$mq-mobile} {
  .title {
    font-size: 2.5rem;
    width: 17.8rem;
  }
}
</style>
