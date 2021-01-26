<template>
  <div class="bar-container">
    <div class="bar-green" :style="`width: ${width}%`">
      <div class="percent">{{ width }}%</div>
      <div class="detail">{{ text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    width: String,
    text: String,
  },
  data() {
    return {}
  },
})
</script>

<style lang="scss" scoped>
.bar-container {
  width: 100vw;
  height: 10.5rem;
  background-color: rgba(0, 0, 0, 0.25);
  margin-bottom: 2rem;
}

.bar-green {
  height: 100%;
  background-color: #28b55f;
  display: flex;
  align-items: center;
  padding-left: 9.8rem;
}

.percent {
  font-weight: 300;
  font-size: 9.5rem;
  color: #a9fbc0;
  margin-right: 4.4rem;
}

.detail {
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
}

@media #{$mq-mobile} {
  .bar-container {
    height: 5rem;
  }

  .bar-green {
    padding-left: 1.5rem;
  }

  .percent {
    font-size: 4.5rem;
  }

  .detail {
    font-size: 1.2rem;
  }
}
</style>
