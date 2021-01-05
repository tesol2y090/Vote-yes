<template>
  <div class="nav-container">
    <div class="left-container">
      <img :src="electLogo" class="elect-logo" />
    </div>
    <div class="right-container">
      <img :src="fbLogo" />
      <img :src="twitLogo" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      electLogo:
        window.innerWidth > 768
          ? require('~/assets/images/logo.svg')
          : require('~/assets/images/elect-logo-mobile.svg'),
      fbLogo: require('~/assets/images/facebook.svg'),
      twitLogo: require('~/assets/images/twitter.svg'),
    }
  },
})
</script>

<style lang="scss" scoped>
.nav-container {
  position: relative;
  width: 100vw;
  height: 8rem;
  padding: 0 3.6rem 0 2.1rem;
  display: flex;
  align-items: center;
}

.left-container {
  justify-content: flex-start;
  flex: 1;
}

.right-container {
  right: 0;
}

@media #{$mq-mobile} {
  .nav-container {
    padding: 1.7rem 1.5rem 1.5rem 1.5rem;
    height: 5rem;
  }

  .elect-logo {
    width: 8rem;
    height: 1.5rem;
  }
}
</style>
