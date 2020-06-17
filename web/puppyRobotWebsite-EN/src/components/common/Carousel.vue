<template>
  <div id="slider" @mouseover="stop" @mouseleave="play">
    <ul class="container" :style="containerStyle">
      <li :style="`width:${(slideLists[slideLists.length - 1]).width};height:${swiperHeight}`">
        <img :src="slideLists[slideLists.length - 1].img" alt="">
      </li>
      <li v-for="(item, index) in slideLists" :key="index" :style="`width:${item.width};height:${swiperHeight}`">
        <img :src="item.img" alt="">
      </li>
      <!-- <li v-for="(item, index) in slideLists" :style="`width:${item.width}`">
        <img :src="item.img" alt="" :style="`width:${item.width}`">
      </li> -->
      <li :style="`width:${slideLists[0].width};height:${swiperHeight}`">
        <img :src="slideLists[0].img" alt="">
      </li>
    </ul>
    <div class="direction">
        <img src="./../../assets/images/puppycube/pre.png" class="prev" @click="move((parseInt(slideLists[0].width) + 90), 1, speed)">
        <img src="./../../assets/images/puppycube/next.png" class="next" @click="move((parseInt(slideLists[0].width) + 90), -1, speed)">
    </div>
    <!-- <ul class="dots">
      <li v-for="(dot, i) in sliders" :key="i" 
      :class="{dotted: i === (currentIndex-1)}"
      @click = jump(i+1)
      >
      </li>
    </ul> -->
  </div>
</template>
 
<script>
export default {
  name: 'slider',
  props: {
    initialSpeed: {
      type: Number,
      default: 30
    },
    initialInterval: {
      type: Number,
      default: 3
    },
    slideLists: {
      type: Array
    },
    swiperHeight: {
      type: String
    }
  },
  data () {
    return {
      currentIndex:1,
      distance:0,
      transitionEnd: true,
      speed: this.initialSpeed,
      preDisplay: false,
      nextDisplay: true
    }
  },
  computed:{
    containerStyle() {
      return {
        transform:`translate3d(${this.distance}px, 0, 0)`
      }
    },
    interval() {
      return this.initialInterval * 1000
    }
  },
  mounted() {
    // this.distance = -(window.document.body.offsetWidth - 1920) / 2;
    this.slideLists[0].width?this.distance = -parseInt(this.slideLists[0].width) - 45:this.distance = -845;
    document.querySelector('.container').style.width = (parseInt(this.slideLists[0].width) + 90) * (this.slideLists.length+3) + 'px';
    document.querySelector('.container').style.transform=`translate3d(${-this.distance}px, ${0}, ${0})`;
    document.querySelector('#slider').style.height = this.swiperHeight;
    this.init()
  },
  methods:{
    init() {
      this.play()
      window.onblur = function() { this.stop() }.bind(this)
      window.onfocus = function() { this.play() }.bind(this)
    },
    move(offset, direction, speed) {
      if (!this.transitionEnd) return
      this.transitionEnd = false
      let w = this.slideLists[0].width?parseInt(this.slideLists[0].width) + 90:890;
      direction === -1 ? this.currentIndex += offset/w : this.currentIndex -= offset/w
      if (this.currentIndex > 5) this.currentIndex = 1
      if (this.currentIndex < 1) this.currentIndex = 5
 
      const destination = this.distance + offset * direction
      this.animate(destination, direction, speed)
    },
    animate(des, direc, speed) {
      this.nextDisplay = true;
      this.preDisplay = true;
      if (this.temp) { 
        window.clearInterval(this.temp)
        this.temp = null 
      }
      this.temp = window.setInterval(() => {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
          this.distance += speed * direc
        } else {
          this.transitionEnd = true
          window.clearInterval(this.temp)
          this.distance = des
          let totalWidth = this.slideLists[0].width?(parseInt(this.slideLists[0].width) + 90) * this.slideLists.length:5340;
          let halfWidth = this.slideLists[0].width?parseInt(this.slideLists[0].width) + 90:490;
          if (des < -totalWidth) {
              this.distance = -halfWidth;
            // this.nextDisplay = false;
          }
          
          if (des > -halfWidth) {
              this.distance = -(totalWidth - halfWidth - 90);
            // this.preDisplay = false;
          }
        }
      }, 20)
    },
    jump(index) {
      const direction = index - this.currentIndex >= 0 ? -1 : 1
      let w = this.slideLists[0].width?parseInt(this.slideLists[0].width) + 90:890;
      const offset = Math.abs(index - this.currentIndex) * w
      const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) * this.speed 
      this.move(offset, direction, jumpSpeed)
    },
    play() {
      let w = this.slideLists[0].width?parseInt(this.slideLists[0].width) + 90:890;
      if (this.timer) {
        window.clearInterval(this.timer)
        this.timer = null
      }
      this.timer = window.setInterval(() => {
        this.move(w, -1, this.speed)
      }, this.interval)
    },
    stop() {
      window.clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style lang="scss" scoped>

#slider {
  width: 100%;
  position: relative;
  overflow:hidden;
}
.container {
    width: 100%;
    position:relative;
    li {
        width: 800px;
        height: 602px;
        margin-left: 45px;
        margin-right: 45px;
        display: inline-block;
        img {
          width:100%;
          height:100%;
        }

    }
}

.direction {
  img {
    position: absolute;
    top: 36%;
    cursor: pointer;
  }
  img.prev {
    left:0;
  }
  img.next {
    right:0;
  }
}

ul {
    list-style-type:none;
    margin-block-start: 0em;
    margin-block-end: 0em;
    padding-inline-start:0px;
}


</style>
