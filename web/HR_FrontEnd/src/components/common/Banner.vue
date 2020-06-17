<template>
    <div class="swiper-container" :style="{height:`${swiperHeight} !important`}">
        <div class="swiper-wrapper">
             <div class="swiper-slide" v-for="(slide, index) in slideLists" :key='index'>
                <!-- <router-link v-if="slide.router" :to="slide.router">
                    <div class="slideBackground" :style="{backgroundColor:`${slide.backgroundColor}`}">
                        <img :style="{maxWidth: (slide.maxWidth?slide.maxWidth:'750px' + ` !important`)}" :src="slide.img" />
                    </div>
                </router-link> -->
                <div class="slideBackground">
                    <img style="maxWidth: 750px; maxHeight: 250px;" :src="slide.src" />
                </div>
            </div>
        </div>
        <div class="swiper-pagination swiper-pagination-black"></div>
         <!-- <div class="swiper-button-prev swiper-button-black"></div> 
        <div class="swiper-button-next swiper-button-black"></div> 
        <div class="pagination"></div> -->
    </div>
</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    export default {
        name: 'Banner',
        props: ['slideLists', 'swiperHeight', 'isAutoplay', 'isMobileIndex'],
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                centeredSlides: true,
                speed: 3000,
                delay: 4000,
                autoplay: true,
                autoplay: {
                    disableOnInteraction: false,
                },
                loop: true,
                observer: true,
                observeParents: false,
                // pagination: '.swiper-pagination',
                // paginationClickable: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true,
                }
            });

        },
        methods: {
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                return flag;
            }
        }
    }
</script>

<style scoped lang="scss">
    .swiper-container {
        width: 100%;
        z-index: 1;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
        }

        .my-bullet {
            width: 8vw;
            height: 5px;
            display: inline-block;
            border-radius: 100%;
            background: #f45f45 !important;
            background-color: #f45f45 !important;
            opacity: .2;
            z-index: 10;
        }
    }

    .slideBackground {
        width: 98%;
        margin: 0 auto;
        // -webkit-border-radius: 15px;
        // -moz-border-radius: 15px;
        // border-radius: 15px;
        text-align: center;
        height: 100%;
        position: relative;

        img {
            width: 100%;
            display: block;
            margin: 0 auto;
            border-radius: 7px;
        }

        .image_div {
            background-repeat: no-repeat;
            background-position:center center;  
            width:100%;
            height: 100%;
            background-size: cover;
            margin: 0 auto;
        }

    .imageTitle {
        position: absolute;
        top: 0px;
        width: 100%;
        .title {
            width: 75%;
            margin: 0 auto;
            padding-top: 25px;
            font-size: 14pt;
            line-height: 50px;
            font-weight: 400;
            border-bottom: 1px solid #000000;
        }
        .slogan {
            font-size: 18pt;
            font-weight: 400;
            padding-top: 10px;
            width: 75%;
            margin: 0 auto;
        }
    }

    .description {
        width: 75%;
        margin: 0 auto;
        font-size: 12pt;
        padding: 20px 15px 20px 15px;
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

</style>

<style lang="scss">
.swiper-pagination-bullets {
    bottom: 3px !important;
}

</style>
