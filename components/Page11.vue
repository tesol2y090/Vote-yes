<template>
  <div class="page-container page-blue page-height-128">
    <BarPercent width="93" text="เห็นการใช้อำนาจที่ไม่เป็นธรรมคุกคามประชาชน" />
    <BarPercent width="92" text="เห็นการเลือกตั้งปี 2562 ที่ไม่ปกติ" />
    <BarPercent width="91" text="เห็นการสั่งยุบพรรคการเมืองที่ไม่เป็นธรรม" />
    <BarPercent width="90" text="เห็นการบริหารประเทศที่ล้มเหลวของ คสช." />
    <BarPercent
      width="86"
      text="ติดตามข่าวสารได้ฟังข้อเท็จจริงและเหตุผลมากขึ้น"
    />
    <OtherBar />
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
.page-container {
  flex-direction: column;
  align-items: center;
}
</style>
