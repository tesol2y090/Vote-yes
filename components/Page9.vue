<template>
  <div class="page-slide page-container page-light-green page-height-80">
    <div style="position: absolute; top:0;left0">
      <div class="box-container-display"></div>
    </div>
    <div v-if="show.text94" class="text-94 fade-in-text94">
      <span>เป็นที่น่าสนใจว่า</span><br />
      <label>94%</label><br />
      <span>ของผู้ตอบแบบสอบถาม</span><br />
      <span>บอกว่าก่อนวันทำประชามติ</span><br />
      <span>ได้รับข้อมูลไม่เพียงพอสำหรับการตัดสินใจ</span>
    </div>
    <div v-if="show.textKnow" class="text-know fade-in-text">
      <span>และนี่คือข้อมูลที่พวกเขา</span><br />
      <span>ไม่รู้มาก่อนวันทำประชามติ</span>
    </div>
    <div v-if="show.text88" class="fade-in-text">
      <label>88%</label><br />
      <span>ไม่รู้ว่าส.ว. ชุดแรก 250 คนจะมาจาก</span><br />
      <span>กระบวนการคัดเลือกของ คสช. และเลือกนายกฯ ได้</span>
    </div>
    <div v-if="show.text85" class="fade-in-text">
      <label>85%</label><br />
      <span>การจะแก้ไขรัฐธรรมนูญได้ ต้องใช้เสียงส.ว.</span><br />
      <span>อย่างน้อย 84 คน และพรรคฝ่ายค้าน 20%</span>
    </div>
    <div v-if="show.text79" class="fade-in-text">
      <label>79%</label><br />
      <span>คสช. ยังอยู่จนหลังเลือกตั้ง และการกระทำ</span><br />
      <span>การออกคำสั้งใดๆ ก็ไม่มีความผิด</span>
    </div>
    <div v-if="show.text75" class="fade-in-text">
      <label>75%</label><br />
      <span>คสช. มีอำนาจแต่งตั้งคณะกรรมการ</span><br />
      <span>ขึ้นมาจัดทำแผนยุทธศาสตร์ชาติ มีอายุ 20 ปี</span>
    </div>
    <div v-if="show.text72" class="fade-in-text">
      <label>72%</label><br />
      <span>กกต. ที่ดูแลการเลือกตั้ง มาจากการ</span><br />
      <span>เห็นชอบของสภานิติบัญญัติแห่งชาติ (สนช.)</span>
    </div>
    <div v-if="show.text69" class="fade-in-text">
      <label>69%</label><br />
      <span>กว่าจะมีการเลือกตั้งก็</span><br />
      <span>เป็นเวลาอีก 2 ปี 8 เดือน</span>
    </div>
    <div v-if="show.text56" class="fade-in-text">
      <label>56%</label><br />
      <span>ระบบเลือกตั้งจะใช้บัตรในเดียว</span><br />
      <span>เลือกทั้งคนทั้งพรรค</span>
    </div>
    <div v-if="show.textother" class="text-know fade-in-text">
      <span>อื่นๆ</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      show: {
        text94: false,
        textKnow: false,
        text88: false,
        text85: false,
        text79: false,
        text75: false,
        text72: false,
        text69: false,
        text56: false,
        textother: false,
      },
      play: {
        text94: false,
        textKnow: false,
        text88: false,
        text85: false,
        text79: false,
        text75: false,
        text72: false,
        text69: false,
        text56: false,
        textother: false,
      },
      pageTop: 0,
      background: {
        firstPlay: false,
      },
      isDesktop: window.innerWidth > 768,
    }
  },
  methods: {
    addBoxToPage() {
      const widthOfBox: number = this.isDesktop ? 20 : 10
      const allBox =
        Math.ceil(window.innerWidth / widthOfBox) *
        Math.ceil(window.innerHeight / widthOfBox)
      for (let i = 0; i < allBox; i++) {
        const box = document.createElement('div')
        box.style.width = this.isDesktop ? '2rem' : '1rem'
        box.style.height = this.isDesktop ? '2rem' : '1rem'
        // box.style.backgroundColor = '#A9FBC0'
        box.classList.add('box-fade')
        document
          .getElementsByClassName('box-container-display')[0]
          .appendChild(box)
      }
    },

    handleChangeBackground100(bluePercent: number) {
      const watingTime = 1.5
      const allBox = Array.from(document.querySelectorAll('.box-fade'))
      const shuffleBox = this.shuffle(allBox)
      const allBoxLength = allBox.length
      const blueBoxLength = Math.floor((bluePercent / 100) * allBoxLength)
      const blueBox: any = shuffleBox.slice(0, blueBoxLength)
      const greenBox: any = shuffleBox.slice(blueBoxLength)
      blueBox.forEach((data: any, i: number) => {
        setTimeout(() => {
          data.style.backgroundColor = '#20208E'
        }, i * watingTime)
      })
      greenBox.forEach((data: any, i: number) => {
        setTimeout(() => {
          data.style.backgroundColor = '#28B55F'
        }, i * watingTime)
      })
    },

    handleChangeBackground(bluePercent: number) {
      let blueBox: any = []
      let greenBox: any = []
      const widthOfBox: number = this.isDesktop ? 20 : 10
      const totalBoxWidth = Math.ceil(window.innerWidth / widthOfBox)
      const totalBoxHeight = Math.ceil(window.innerHeight / widthOfBox)
      const allBox = Array.from(document.querySelectorAll('.box-fade'))
      const allBoxLength = allBox.length
      const WAITINGTIME = 1.5
      const NODE = 20
      const DENSITYPERNODE = Math.floor(
        (((100 - bluePercent) / 100) * allBoxLength) / NODE
      )
      const allBox2dArray = this.create2dArray(allBox, totalBoxWidth)
      const startPoint = []
      const heightSide = Math.ceil(
        (totalBoxHeight / (totalBoxHeight + totalBoxWidth)) * NODE
      )
      const widthSide = NODE - heightSide
      const distBtwHeight = Math.floor(totalBoxHeight / (heightSide / 2))
      const distBtwWidth = Math.floor(totalBoxWidth / (widthSide / 2))
      let counterRow = 1
      //Create random node den = DENSITYPERNODE
      for (let i = 0; i < NODE; i++) {
        let row = 0
        let column = 0
        if (i < Math.ceil(heightSide / 2)) {
          row =
            counterRow * distBtwHeight >= totalBoxHeight
              ? totalBoxHeight - 1
              : counterRow * distBtwHeight
          column = this.isDesktop
            ? this.randomBtw(0, Math.floor(totalBoxWidth / 3))
            : this.randomBtw(0, Math.floor(totalBoxWidth / 4))
          startPoint.push([row, column])
          counterRow += 1
          if (i === Math.floor(heightSide / 2) - 1) counterRow = 0
        } else if (i < Math.floor(heightSide / 2) + Math.floor(widthSide / 2)) {
          column =
            counterRow * distBtwWidth >= totalBoxWidth
              ? totalBoxWidth - 1
              : counterRow * distBtwWidth
          row = this.isDesktop
            ? this.randomBtw(
                totalBoxHeight - Math.floor(totalBoxHeight / 3),
                totalBoxHeight - 1
              )
            : this.randomBtw(
                totalBoxHeight - Math.floor(totalBoxHeight / 4),
                totalBoxHeight - 1
              )
          startPoint.push([row, column])
          counterRow += 1
          if (i === Math.floor(heightSide / 2) + Math.floor(widthSide / 2) - 1)
            counterRow = 0
        } else if (
          i <
          Math.floor(heightSide / 2) + 2 * Math.floor(widthSide / 2)
        ) {
          row =
            counterRow * distBtwHeight >= totalBoxHeight
              ? totalBoxHeight - 1
              : counterRow * distBtwHeight
          column = this.isDesktop
            ? this.randomBtw(
                totalBoxWidth - Math.floor(totalBoxWidth / 3),
                totalBoxWidth - 1
              )
            : this.randomBtw(
                totalBoxWidth - Math.floor(totalBoxWidth / 5),
                totalBoxWidth - 1
              )
          startPoint.push([row, column])
          counterRow += 1
          if (
            i ===
            Math.floor(heightSide / 2) + 2 * Math.floor(widthSide / 2) - 1
          )
            counterRow = 0
        } else {
          column =
            counterRow * distBtwWidth >= totalBoxWidth
              ? totalBoxWidth - 1
              : counterRow * distBtwWidth
          row = this.isDesktop
            ? this.randomBtw(0, Math.floor(totalBoxHeight / 3))
            : this.randomBtw(0, Math.floor(totalBoxHeight / 4))
          startPoint.push([row, column])
          counterRow += 1
          if (i === Math.floor(heightSide / 2) + Math.floor(widthSide / 2) - 1)
            counterRow = 0
        }
      }

      //Random green box per Node
      startPoint.forEach((point) => {
        let newRow = [point[0]]
        let newCol = [point[1]]
        for (let i = 0; i <= DENSITYPERNODE; i++) {
          const randomAxis = this.randomBtw(0, 1) // 0 for Row ,1 for column
          if (randomAxis === 0) {
            //Row
            let randomNumRow = this.randomBtw1()
            let newRowPos = newRow[i] + randomNumRow
            if (newRowPos <= 0) {
              newRowPos = Math.max(...newRow) + 1
            } else if (newRowPos >= totalBoxHeight) {
              newRowPos = Math.min(...newRow) - 1
            }
            //Column
            let randomNumCol = this.randomBtw(-1, 1)
            let newColPos = newCol[i] + randomNumCol
            if (newColPos <= 0) {
              newColPos = Math.max(...newCol) + 1
            } else if (newColPos > totalBoxWidth) {
              newColPos = Math.min(...newCol) - 1
            }
            newRow.push(newRowPos)
            newCol.push(newColPos)
          } else {
            //Column
            let randomNumCol = this.randomBtw1()
            let newColPos = newCol[i] + randomNumCol
            if (newColPos <= 0) {
              newColPos = Math.max(...newCol) + 1
            } else if (newColPos > totalBoxWidth) {
              newColPos = Math.min(...newCol) - 1
            }
            //Row
            let randomNumRow = this.randomBtw(-1, 1)
            let newRowPos = newRow[i] + randomNumRow
            if (newRowPos <= 0) {
              newRowPos = Math.max(...newRow) + 1
            } else if (newRowPos >= totalBoxHeight) {
              newRowPos = Math.min(...newRow) - 1
            }
            newRow.push(newRowPos)
            newCol.push(newColPos)
          }
        }
        for (let i = 0; i < newRow.length; i++) {
          startPoint.push([newRow[i], newCol[i]])
        }
      })

      //Add point to green arraylist
      startPoint.forEach((point) => {
        greenBox.push(allBox2dArray[point[0]][point[1]])
      })

      //Delete greenBox position in init array
      startPoint.forEach((point) => {
        allBox2dArray[point[0]].splice(point[1], 1)
      })

      //Add point to blue box
      for (let i = 0; i < allBox2dArray.length; i++) {
        for (let j = 0; j < allBox2dArray[i].length; j++) {
          blueBox.push(allBox2dArray[i][j])
        }
      }

      //Shuffle array
      blueBox = this.shuffle(blueBox)
      greenBox = this.shuffle(greenBox)
      greenBox = greenBox.filter((data: any) => data)
      blueBox.forEach((data: any, i: number) => {
        setTimeout(() => {
          data.style.backgroundColor = '#20208E'
        }, i * WAITINGTIME)
      })
      greenBox.forEach((data: any, i: number) => {
        setTimeout(() => {
          data.style.backgroundColor = '#28B55F'
        }, i * WAITINGTIME)
      })
      //  console.log(`height box length = ${totalBoxHeight}`)
      // console.log(`width box length = ${totalBoxWidth}`)
      // console.log(`height side = ${heightSide}`)
      // console.log(`width side = ${widthSide}`)
      // console.log(`dist between height = ${distBtwHeight}`)
      // console.log(`dist between width = ${distBtwWidth}`)
      // console.log(DENSITYPERNODE)
    },

    randomBtw(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },

    randomBtw1() {
      return Math.random() > 0.5 ? -1 : 1
    },

    create2dArray(initArray: Array<any>, limitRow: number) {
      const newArray = []
      let tempArray: any = []
      for (let i = 0; i < initArray.length; i++) {
        tempArray.push(initArray[i])
        if (tempArray.length === limitRow) {
          newArray.push(tempArray)
          tempArray = []
        }
      }
      return newArray
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
        if (window.pageYOffset > this.pageTop && !this.play.text94) {
          if (!this.background.firstPlay && !this.play.text94) {
            this.handleChangeBackground(94)
            this.show.text94 = true
            this.play.text94 = true
            this.background.firstPlay = true
            setTimeout(() => {
              const page: any = document.querySelectorAll('.page-slide')[0]
              page.style.backgroundColor = '#28B55F'
            }, 3500)
          }
        } else if (
          window.pageYOffset > this.pageTop + 500 &&
          !this.play.textKnow &&
          !this.play.textKnow
        ) {
          this.show.textKnow = true
          this.play.textKnow = true
          this.show.text94 = false
        } else if (
          window.pageYOffset > this.pageTop + 1000 &&
          !this.play.text88 &&
          !this.play.text88
        ) {
          this.show.text88 = true
          this.play.text88 = true
          this.show.textKnow = false
          this.handleChangeBackground(88)
        } else if (
          window.pageYOffset > this.pageTop + 1500 &&
          !this.play.text85 &&
          !this.play.text85
        ) {
          this.show.text85 = true
          this.play.text85 = true
          this.show.text88 = false
          this.handleChangeBackground(85)
        } else if (
          window.pageYOffset > this.pageTop + 2000 &&
          !this.play.text79 &&
          !this.play.text79
        ) {
          this.show.text79 = true
          this.play.text79 = true
          this.show.text85 = false
          this.handleChangeBackground(79)
        } else if (
          window.pageYOffset > this.pageTop + 2500 &&
          !this.play.text75 &&
          !this.play.text75
        ) {
          this.show.text75 = true
          this.play.text75 = true
          this.show.text79 = false
          this.handleChangeBackground(75)
        } else if (
          window.pageYOffset > this.pageTop + 3000 &&
          !this.play.text72 &&
          !this.play.text72
        ) {
          this.show.text72 = true
          this.play.text72 = true
          this.show.text75 = false
          this.handleChangeBackground(72)
        } else if (
          window.pageYOffset > this.pageTop + 3500 &&
          !this.play.text69 &&
          !this.play.text69
        ) {
          this.show.text69 = true
          this.play.text69 = true
          this.show.text72 = false
          this.handleChangeBackground(69)
        } else if (
          window.pageYOffset > this.pageTop + 4000 &&
          !this.play.text56 &&
          !this.play.text56
        ) {
          this.show.text56 = true
          this.play.text56 = true
          this.show.text69 = false
          this.handleChangeBackground(56)
        } else if (
          window.pageYOffset > this.pageTop + 4500 &&
          !this.play.textother &&
          !this.play.textother
        ) {
          this.show.textother = true
          this.play.textother = true
          this.show.text56 = false
          this.handleChangeBackground100(0)
        } else if (window.pageYOffset < this.pageTop) {
          this.show.text94 = false
          this.show.textKnow = false
          this.show.text88 = false
          this.show.text85 = false
          this.show.text79 = false
          this.show.text75 = false
          this.show.text72 = false
          this.show.text69 = false
          this.show.text56 = false
          this.show.textother = false
        }
      })
    },
  },

  mounted() {
    this.addBoxToPage()
    this.runAnimation()
    const page = document.getElementsByClassName('page-slide')[0]
    this.pageTop = page.getBoundingClientRect().y
  },
})
</script>

<style lang="scss" scoped>
.page-slide {
  position: sticky;
  top: 0;
  flex-wrap: wrap;
  height: 700vh;
  overflow: hidden;
}

.box-container-display {
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
}

.box {
  width: 2rem;
  height: 2rem;
}

.text-show-container {
  position: relative;
}

.fade-in-text94 {
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
    // background-color: #20208e;
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

.text-know {
  font-size: 7.2rem;
}

@media #{$mq-mobile} {
  .text-top {
    font-size: 2.5rem;
    width: 26.9rem;
  }

  .fade-in-text,
  .fade-in-text94 {
    font-size: 2.5rem;
    width: 26.9rem;
    label {
      font-size: 7.2rem;
    }
    span {
      font-size: 2.5rem;
      width: 27.2rem;
    }
  }

  .text-know {
    font-size: 2.5rem;
  }
}
</style>
