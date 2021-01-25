<template>
  <div class="page-slide page-container page-light-green page-height-80">
    <div style="position: absolute; top:0;left0">
      <div class="box-container-display">
        <!-- <div class="box" /> -->
      </div>
    </div>
    <div v-show="text94" class="text-94 fade-in-text">
      เป็นที่น่าสนใจว่า<br />
      <label>94%</label><br />
      ของผู้ตอบแบบสอบถาม<br />
      บอกว่าก่อนวันทำประชามติ<br />
      ได้รับข้อมูลไม่เพียงพอสำหรับการตัดสินใจ
    </div>
    <!-- <div class="text-display">
      และนี่คือข้อมูลที่พวกเขา<br />ไม่รู้มาก่อนวันทำประชามติ
    </div>
    <div class="text-display">
      <label>88%</label><br />
      ไม่รู้ว่าส.ว. ชุดแรก 250 คนจะมาจาก<br />
      กระบวนการคัดเลือกของ คสช. และเลือกนายกฯ ได้
    </div>
    <div class="text-display">
      <label>85%</label><br />
      การจะแก้ไขรัฐธรรมนูญได้ ต้องใช้เสียงส.ว.<br />
      อย่างน้อย 84 คน และพรรคฝ่ายค้าน 20%
    </div>
    <div class="text-display">
      <label>79%</label><br />
      คสช. ยังอยู่จนหลังเลือกตั้ง และการกระทำ<br />
      การออกคำสั้งใดๆ ก็ไม่มีความผิด
    </div>
    <div class="text-display">
      <label>75%</label><br />
      คสช. มีอำนาจแต่งตั้งคณะกรรมการ<br />
      ขึ้นมาจัดทำแผนยุทธศาสตร์ชาติ มีอายุ 20 ปี
    </div>
    <div class="text-display">
      <label>72%</label><br />
      กกต. ที่ดูแลการเลือกตั้ง มาจากการ<br />
      เห็นชอบของสภานิติบัญญัติแห่งชาติ (สนช.)
    </div>
    <div class="text-display">
      <label>69%</label><br />
      กว่าจะมีการเลือกตั้งก็<br />
      เป็นเวลาอีก 2 ปี 8 เดือน
    </div>
    <div class="text-display">
      <label>56%</label><br />
      ระบบเลือกตั้งจะใช้บัตรในเดียว<br />
      เลือกทั้งคนทั้งพรรค
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      text94: false,
      swiperOption: {
        direction: 'vertical',
        slidesToShow: 1,
        mousewheel: true,
        simulateTouch: false,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        navigation: {
          nextEl: '.swiper-btn-next',
          prevEl: '.swiper-btn-prev',
        },
      },
    }
  },
  methods: {
    addBoxToPage() {
      const allBox =
        Math.ceil(window.innerWidth / 20) * Math.ceil(window.innerHeight / 20)
      for (let i = 0; i < allBox; i++) {
        const box = document.createElement('div')
        box.style.width = '2rem'
        box.style.height = '2rem'
        // box.style.backgroundColor = '#A9FBC0'
        box.classList.add('box')
        document
          .getElementsByClassName('box-container-display')[0]
          .appendChild(box)
      }
    },

    addChangeTextColor() {
      const page = document.getElementsByClassName('page-slide')[0]
      const pageTop = page.getBoundingClientRect().top
      const text94 = document.getElementsByClassName('text-94')[0]
      text94.classList.add('fade-in-text')
      this.text94 = true
    },

    handleChangeBackground() {
      const watingTime = 3
      const allBox = Array.from(document.querySelectorAll('.box'))
      const shuffleBox = this.shuffle(allBox)
      shuffleBox.forEach((data, i) => {
        data.classList.add('bg-to-blue')
      })
    },

    shuffle(array: any) {
      const copy = []
      let n = array.length
      let i
      while (n) {
        i = Math.floor(Math.random() * array.length)
        if (i in array) {
          copy.push(array[i])
          delete array[i]
          n--
        }
      }
      return copy
    },

    runAnimation() {
      window.addEventListener('scroll', () => {
        const page = document.getElementsByClassName('page-slide')[0]
        const pageTop = page.getBoundingClientRect().top
        if (pageTop === 0) {
          this.handleChangeBackground()
          this.addChangeTextColor()
        } else {
          this.text94 = false
        }
      })
    },
  },

  mounted() {
    this.addBoxToPage()
    this.runAnimation()
  },
})
</script>

<style lang="scss" scoped>
.page-slide {
  position: sticky;
  top: 0;
  flex-wrap: wrap;
  height: 200vh;
  overflow: hidden;
}

.box-container-display {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}

.bg-to-blue {
  width: 2rem;
  height: 2rem;
  background-color: #20208e;
  // animation: changeColor 0.01s ease;
  // @keyframes changeColor {
  //   0% {
  //     background-color: #a9fbc0;
  //   }
  //   100% {
  //     background-color: #20208e;
  //   }
  // }
}

.box {
  width: 2rem;
  height: 2rem;
}

.text-show-container {
  position: relative;
}

.fade-in-text {
  position: fixed;
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 120%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 99rem;
  color: #fff;
  label {
    line-height: 120%;
    font-size: 14.4rem;
  }
  animation: fadeIn 0.6s ease;
  @keyframes fadeIn {
    0% {
      opacity: 0;
      color: #a9fbc0;
    }
    100% {
      opacity: 1;
      color: #fff;
    }
  }
}

.text-display {
  font-size: 4.8rem;
  font-weight: bold;
  line-height: 120%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 99rem;
  label {
    line-height: 120%;
    font-size: 14.4rem;
  }
}

@media #{$mq-mobile} {
  .text-top {
    font-size: 2.5rem;
    width: 26.9rem;
  }
}
</style>
