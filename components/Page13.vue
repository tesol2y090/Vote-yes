<template>
  <div class="page-container page-height-200">
    <div class="box-top">
      <div class="box-top-left">
        <div class="box83">
          <div class="box83-text">
            แสดงออกต่อสาธารณะต่อคนรอบตัวว่าคิดใหม่ได้แล้ว<br />
            <span class="text-green"> 83% </span>
          </div>
        </div>
      </div>
      <div class="box-top-right">
        <div class="box53">
          <div class="box53-text">
            เข้าร่วมชุมนุมเพื่อเรียกร้องให้แก้ไขรัฐธรรมนูญ<br />
            <span class="text-green"> 53% </span>
          </div>
        </div>
      </div>
    </div>
    <div class="box-bottom">
      <div class="box-bottom-left">
        <div class="box38">
          <div class="box38-text">
            เป็นหนึ่งใน100,732 ที่เข้าชื่อเสนอ แก้ไขรัฐธรรมนูญ<br />
            <span class="text-green"> 38% </span>
          </div>
        </div>
      </div>
      <div class="box-bottom-right">
        <div class="other-box">
          <div class="arrow-left" @click="handleClickNextBtn(-1)" />
          <div class="arrow-right" @click="handleClickNextBtn(1)" />
          <div class="other-text text-green">อื่นๆ</div>
          <div class="text-box">
            {{ activityDatas[currentDataIndex].message }}
          </div>
        </div>
      </div>
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
      currentDataIndex: 0,
      activityDatas: datas,
    }
  },

  methods: {
    handleClickNextBtn(num: number) {
      if (this.currentDataIndex === 0 && num === -1) {
        this.currentDataIndex = this.activityDatas.length - 1
      } else if (
        this.currentDataIndex === this.activityDatas.length - 1 &&
        num === 1
      ) {
        this.currentDataIndex = 0
      } else {
        this.currentDataIndex = this.currentDataIndex + num
      }
    },
  },

  mounted(this: any) {
    this.activityDatas = this.activityDatas
      .map((data: any, index: number) => {
        return { message: data['activity'], key: index }
      })
      .filter((data: any) => data.message !== '')
  },
})
</script>

<style lang="scss" scoped>
.page-container {
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
  }
}

.box-bottom {
  display: flex;
  &-left {
    margin-top: -16.9rem;
    width: 61.6rem;
    display: flex;
    justify-content: flex-end;
    margin-right: 5rem;
  }

  &-right {
    display: flex;
    width: 49rem;
    margin-top: 13rem;
  }
}

.box83 {
  width: 61.6rem;
  height: 61.6rem;
  background-color: #20208e;
  padding-top: 2.9rem;
  padding-left: 4.9rem;
  &-text {
    color: #fff;
    font-size: 8rem;
    font-weight: bold;
    line-height: 120%;
    width: 45rem;
  }
}

.box53 {
  width: 49rem;
  height: 49rem;
  background-color: #20208e;
  padding-top: 4.2rem;
  padding-left: 3.3rem;
  margin-top: 49.2rem;
  &-text {
    color: #fff;
    font-size: 6rem;
    font-weight: bold;
    line-height: 120%;
    width: 42.6rem;
  }
}

.box38 {
  width: 41.8rem;
  height: 41.8rem;
  background-color: #20208e;
  padding-top: 2.4rem;
  padding-left: 3.8rem;
  &-text {
    color: #fff;
    font-size: 4.8rem;
    font-weight: bold;
    line-height: 120%;
    width: 34rem;
  }
}

.other-box {
  width: 40rem;
  height: 40rem;
  border: 0.3rem solid #20208e;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
}

.other-text {
  font-size: 3.5rem;
  font-weight: bold;
  position: absolute;
  top: 4rem;
}

.text-box {
  width: 26.8rem;
  color: #20208e;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
}

.arrow-left {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 1.5rem solid transparent;
  border-right: 3rem solid #28b55f;
  border-bottom: 1.5rem solid transparent;
  top: 50%;
  transform: translateY(-50%);
  left: 1.6rem;
  cursor: pointer;
}

.arrow-right {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 1.5rem solid transparent;
  border-left: 3rem solid #28b55f;
  border-bottom: 1.5rem solid transparent;
  top: 50%;
  transform: translateY(-50%);
  right: 1.6rem;
  cursor: pointer;
}

@media #{$mq-tablet} {
.box83 {
  width: 50rem;
  height: 50rem;
  background-color: #20208e;
  padding-top: 2.9rem;
  padding-left: 4.9rem;
  &-text {
    color: #fff;
    font-size: 7.2rem;
    font-weight: bold;
    line-height: 120%;
    width: 45rem;
  }
}

.box53 {
  width: 39rem;
  height: 39rem;
  background-color: #20208e;
  padding-top: 4.2rem;
  padding-left: 3.3rem;
  margin-top: 49.2rem;
  &-text {
    color: #fff;
    font-size: 4.8rem;
    font-weight: bold;
    line-height: 120%;
    width: 38.6rem;
  }
}

.box38 {
  width: 31.8rem;
  height: 31.8rem;
  background-color: #20208e;
  padding-top: 2.4rem;
  padding-left: 3.8rem;
  &-text {
    color: #fff;
    font-size: 3.6rem;
    font-weight: bold;
    line-height: 120%;
    width: 26rem;
  }
}

.other-box {
  width: 39rem;
  height: 39rem;
  border: 0.3rem solid #20208e;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
}
}



@media #{$mq-mobile} {
  .box-top {
    flex-direction: column;
    &-left {
      margin-right: 0rem;
    }
    &-right {
      flex-direction: column;
    }
  }

  .box-bottom {
    display: flex;
    flex-direction: column;
    &-left {
      margin-top: 0rem;
      display: flex;
      justify-content: flex-start;
      margin-right: 0;
      width: auto;
    }

    &-right {
      display: flex;
      width: auto;
      margin-top: 0rem;
    }
  }

  .box83 {
    width: 26rem;
    height: 26rem;
    padding-top: 1.1rem;
    padding-left: 1.6rem;
    &-text {
      font-size: 3rem;
      width: 16.9rem;
      line-height: 120%;
    }
  }

  .box53 {
    margin-top: 3rem;
    width: 20.8rem;
    height: 20.8rem;
    padding-top: 1.1rem;
    padding-left: 1.6rem;
    &-text {
      font-size: 2.5rem;
      width: 17.8rem;
      line-height: 120%;
    }
  }

  .box38 {
    margin-top: 3rem;
    width: 17.6rem;
    height: 17.6rem;
    padding-top: 1.2rem;
    padding-left: 1.2rem;
    &-text {
      font-size: 2rem;
      width: 13.8rem;
      line-height: 120%;
    }
  }

  .other-box {
    margin-top: 2rem;
    padding-top: 1rem;
    width: 26rem;
    height: 14.6rem;
  }

  .other-text {
    font-size: 2rem;
    top: 1rem;
  }

  .text-box {
    width: 18rem;
    font-size: 1rem;
  }

  .arrow-left {
    border-top: 0.5rem solid transparent;
    border-right: 1rem solid #28b55f;
    border-bottom: 0.5rem solid transparent;
  }

  .arrow-right {
    border-top: 0.5rem solid transparent;
    border-left: 1rem solid #28b55f;
    border-bottom: 0.5rem solid transparent;
  }
}
</style>
