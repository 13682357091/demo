<template>
    <div class="swiper-container" :style="{height:`${swiperHeight} !important`}" :mouseover="stop()" :mouseout="move()">
        <div class="pre_container">
            <img src="./../../assets/images/puppycube/pre.png">
        </div>
        <div class="swiper-wrapper">
            <transition-group tag="ul" name="image">
             <li class="swiper-slide" v-for="(slide, index) in slideLists" v-show="index===mark" :key='slide.id'>
                <div class="slideBackground" v-if="!slide.router && slide.img" :style="{backgroundColor:`${slide.backgroundColor}`, height:`${swiperHeight} !important`}" >
                    <div class="image_div" :style="{backgroundImage:`url(${slide.img})`, maxWidth: (slide.width?slide.width:'800px' + ` !important`), height:`${swiperHeight} !important`}" 
                    v-if="!slide.router && slide.img"></div>
                </div>
            </li>
            </transition-group>

            <!-- <div class="swiper-wrapper">
                <li class="swiper-slide" v-for="(slide, index) in slideLists" v-show="index===mark" :key='slide.id'>
                <div class="slideBackground" v-if="!slide.router && slide.img" :style="{backgroundColor:`${slide.backgroundColor}`, height:`${swiperHeight} !important`}" >
                    <div class="image_div" :style="{backgroundImage:`url(${slide.img})`, maxWidth: (slide.width?slide.width:'800px' + ` !important`), height:`${swiperHeight} !important`}" 
                    v-if="!slide.router && slide.img"></div>
                </div>
                </li>
            </div> -->
        </div>

        <div class="next_container">
            <img src="./../../assets/images/puppycube/next.png">
        </div>
        <div class="bullet">
            <span v-for="(item, index) in slideLists" :class="index===mark?'bullets active':'bullets'"
                 @click="change(index)" :key="index"></span>
        </div>

    </div>
</template>

<script>
    // import Swiper from 'swiper';
    // import 'swiper/dist/css/swiper.min.css';

    export default {
        name: 'Banner',
        props: ['slideLists', 'swiperHeight', 'isAutoplay', 'isMobileIndex'],
        data() {
            return {
                mark: 0,
            }
        },
        mounted() {
        },
        methods: {
            autoPlay () {
                this.mark++;
                if (this.mark === (this.slideLists && this.slideLists.length)) { //当遍历到最后一张图片置零
                    this.mark = 0
                }
            },
            play () {
                setInterval(this.autoPlay, 7000)
            },
            change (i) {
                this.mark = i
            },
            stop () {
                clearInterval(this.timer)
            },
            move () {
                this.timer = setInterval(this.autoPlay, 7000)
            }

        },

        created () {
            this.play()
        }

        
    }
</script>

<style scoped lang="scss">
    .swiper-container {
        width: 100%;
        z-index: 1;
        position: relative;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            float: left;
        }

    }

    .slideBackground {
        width: 100%;
        text-align: center;
        height: 100%;
        position: relative;

        img {
            width: 100%;
            display: block;
            margin: 0 auto;
            
        }

        .image_div {
            // background-repeat: no-repeat;
            // background-position:center center;  
            width:100%;
            height: 100%;
            background-size: cover;
            margin: 0 auto;
            float: left;
        }

        .imageTitle {
            height: 100px;
            .title {
                padding-top: 25px;
                font-weight: 300;
            }
            .slogan {
                font-size: 16pt;
                font-weight: 300;
            }
        }

        .imageFooter {
            .description {
                text-align: left;
                padding: 15px 15px 30px 25px;
                font-weight: 300;
                font-size: 11pt;
            }
        }

        .separateIamge {
            max-width: 1280px;
            width: 100%;
            height: 100%;
            position: absolute;
            margin: 0 auto;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            .video_class {
                height: 70%;
                position: absolute;
                max-height: 800px;
                left: 25%;
                z-index: 1;
                top: 130px;
            }
        }

        .separateIamge_mobile {
            max-width: 1280px;
            width: 100%;
            // height: 100%;
            // position: absolute;
            margin: 0 auto;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            display: table;
            .video_class {
                width: 100%;
                // position: absolute;
                max-height: 800px;
                left: 0px;
                z-index: 1;
                display: table-cell;
            }
        }

        .separateWord {
            max-width: 1010px;
            width: 100%;
            height: 100%;
            position: absolute;
            margin: auto;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            display: table;
            z-index: 2;
            .wordscontent {
                display: table-cell;
                height: 30%;
                .words {
                    margin-top: 330px;
                    width: 47.5%;
                    text-align: right;
                    color: white;
                    font-weight: 100;
                    .word_01 {
                        font-size: 18pt;
                    }
                    .word_02 {
                        font-size: 26pt;
                        margin-top: 5px;
                    }
                    .word_03 {
                        margin-top: 15px;
                    }

                }
            }

        }

        .separateWord_mobile {
            max-width: 1010px;
            width: 100%;
            height: 100%;
            position: absolute;
            margin: auto;
            top: 0px;
            bottom: 0px;
            left: 0px;
            right: 0px;
            display: table;
            z-index: 2;
            .wordscontent {
                display: table-cell;
                height: 100%;
                .words {
                    height: 100%;
                    width: 100%;
                    text-align: center;
                    color: white;
                    font-weight: 100;
                    .word_01 {
                        font-size: 5vmin;
                    }
                    .word_02 {
                        font-size: 6vmin;
                        margin-top: 15px;
                    }
                    .word_03 {
                        margin-top: 40px;
                        font-size: 3vmin;
                    }
                    .word_04 {
                        font-size: 3vmin;
                    }

                }
            }

        }

    }

    .my-bullet {
        background-color: red;
    }

    .image-enter-active {
    transform: translateX(0);
    transition: all 1.5s ease;
  }
  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1.5s ease;
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
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

  .bullet {
      position:absolute;
      top: 95%;
    //   z-index: 10;
      width:100%;
      height: 30px;
  }

.bullets {
    width: 15px;
    height: 10px;
    display: inline-block;
    border-radius: 5px;
    background: lightgray !important;
    background-color: lightgray !important;
    margin-left:1.5px;
    margin-right: 1.5px;
    opacity: .7;
    z-index: 10;
    cursor: pointer;
    }

  .active {
    background:  darkgray !important;
    background-color: darkgray !important;
    width: 30px;
  }

.pre_container {
    position: absolute;
    top: 40%;
    left: 0px;
    z-index: 100;
    background-color: red;
}

.next_container {
    position: absolute;
    top: 40%;
    left: 96.7%;
    z-index: 100;
    background-color: red;
}



</style>