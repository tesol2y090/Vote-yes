<template>
  <div class="page-container page-light-blue page-height-128">
    <div class="box-container">
      <div class="box-top">
        <div class="box-top-left">
          <Box60 />
        </div>
        <div class="box-top-right">
          <Box15 />
          <Box10 />
        </div>
      </div>
      <div class="box-bottom">
        <div class="box-bottom-left">
          <Box4 />
          <Box3 />
          <Box1 />
          <Box04First />
          <Box04Second />
        </div>
        <div class="box-bottom-right">
          <OtherBoxP6 />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.box-container {
  display: flex;
  flex-direction: column;
}

.box-top {
  display: flex;
  &-left {
    display: flex;
    margin-right: 5rem;
  }
  &-right {
    display: flex;
    flex-direction: column;
  }
}

.box-bottom {
  display: flex;
  margin-top: 5rem;
  &-left {
    display: flex;
    width: 75rem;
    flex-wrap: wrap;
    margin-right: 5rem;
  }

  &-right {
    display: flex;
    flex-direction: column;
  }
}
</style>
