<template>
  <div class="page-container page-light-green page-height-128">
    <div class="box-container">
      <div class="box-top">
        <div class="box-top-left"><Box49 /></div>
        <div class="box-top-right"><Box33 /></div>
      </div>
      <div class="box-bottom">
        <div class="box-bottom-left"><Box5 /></div>
        <div class="box-bottom-right">
          <OtherBoxP8 />
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
    width: 61.3rem;
    flex-wrap: wrap;
    margin-right: 5rem;
  }

  &-right {
    display: flex;
    flex-direction: column;
  }
}

@media #{$mq-tablet} {
.box-bottom {
  display: flex;
  margin-top: 5rem;
  &-left {
    display: flex;
    width: 46.5rem;
    flex-wrap: wrap;
  }

  &-right {
    display: flex;
    flex-direction: column;
  }
}
}

@media #{$mq-mobile} {
  .box-top {
    flex-direction: column;
    &-left {
      flex-direction: column;
      margin-right: 0;
    }
  }

  .box-bottom {
    margin-top: 0;
    flex-direction: column;
    &-left {
      flex-direction: column;
      margin-right: 0;
      width: auto;
    }
  }
}
</style>
