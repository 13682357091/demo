<template>
    <div class="swiper-container">
        <transition-group tag="ul" name="slider" class="slider" :style="`height:${swiperHeight}`">
            <li v-for="(list,index) in slideLists" :key="list.id" v-show="index==curIndex">
                <img :src="list.img" title="">
            </li>
        </transition-group>
        <div class="list-bullet">
            <span v-for="(ele,index) in slideLists" :class="{'curBullet':index==curIndex}" @click="curIndex=index"></span>
        </div>
    </div>
</template>

<script>
    let timer = null
    export default {
        name: 'm1banner',
        props: ['slideLists', 'swiperHeight'],
        data(){
            return{
                curIndex:0
            }
        },
        mounted() {
            this.play()
        },
        methods: {
            autoPlay () {
                this.curIndex++;
                if (this.curIndex === (this.slideLists && this.slideLists.length)) { //当遍历到最后一张图片置零
                    this.curIndex = 0
                }
            },
            play () {
                timer = setInterval(this.autoPlay, 5000)
            },
            change (i) {
                this.curIndex = i
            },
            stop () {
                clearInterval(timer)
            }
        },
        beforeDestroy() {
            clearInterval(timer)
        }
    }
</script>

<style scoped lang="scss">
*{margin:0;padding:0;}
ul{list-style-type:none;}
.slider{
    overflow:hidden;
    padding-bottom:20px;
    li {
        height:100%;
    }
    img {
        height:100%;
    }
}
.slider-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
}
.slider-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
}
.slider-enter {
    transform: translateX(100%);
}
.slider-leave {
    transform: translateX(0);
}
.swiper-container {
    position:relative;
    width:100%;
    overflow:hidden;
    margin-top:15px;
    // padding:15px 0 20px 0;
    img {
        width:100%;
        height:100%;
    }
}
ul {
    margin: 0px !important;
    padding: 0px !important;
    -webkit-margin-before: 0px !important;
    -webkit-margin-after: 0px !important;
}

li {
    list-style-type: none;
    margin: 0px;
    position:absolute;
}
.list-bullet {
    position:absolute;
    bottom:2px;
    left:50%;
    transform:translateX(-50%);
    span {
        display:inline-block;
        width:9px;
        height:9px;
        border-radius:50%;
        background:rgba(0,0,0,.1);
        margin-right:10px;
    }
    span.curBullet {
        width:36px;
        border-radius:6px;
    }
}
</style>