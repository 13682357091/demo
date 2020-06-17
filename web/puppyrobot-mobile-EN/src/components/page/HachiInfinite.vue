<template>
  <div id="hachiinfinite">
    <main class="container">
        <section class="img_1">
            <div class="intr_wrap">
                <h1>Hachi Infinite M1</h1>
                <h3>Experience touch without a touchscreen</h3>
                <span class="video_btn" @click="PlayVideo()">Watch video</span>
            </div>
            <video v-show="videoPlay" src="./../../assets/video/hachi_m1/m1.mp4" id="fullVideo1" controls="controls" width="100%" poster="./../../assets/video/videoload-m1.jpg"></video>
        </section>
        <section class="img_2">
            <div class="intr_wrap">
                <h2>A World at Your Fingertips</h2>
                <p>An interactive touchscreen projector and standalone smart home entertainment system - incorporating unparalleled features such as voice control as part of a user‘s smart home ecosystem, touchscreen responsiveness on par with capacitive displays, a custom built-in OS and a powerful new Qualcomm chip.</p>
            </div>
            <div class="icon_wrap"></div>
        </section>
        <section class="banner1">
            <div class="intr_wrap">
                <p>Computers, projectors and smartphones are devices we’ve all used before. Now, it’s time for something new.</p>
            </div>
            <div class="banner-wrap">
                <m1banner :slideLists="showList" :swiperHeight="'230px'"></m1banner>
            </div>
        </section>
        <section class="video1">
            <div class="intr_wrap">
                <h2>Turn Life Into a Touchscreen</h2>
                <!--<p>Unlike projectors with basic touchscreen functionality, it utilizes a unique 10-point proprietary multitouch technology called AnyTouch that works on all surfaces and enables responsiveness on par with capacitive displays.</p>-->
            </div>
            <img src="./../../assets/images/hachiinfinite/btn.png" class="video_btn" v-show="btnVideoPlay" @click="vPlay">
            <video muted id="fullVideo" loop="loop" x5-playsinline="true" playsinline="true" webkit-playsinline="true" x-webkit-airplay="allow" preload="auto" x5-video-player-type="h5" x5-video-player-fullscreen="true" poster="./../../assets/video/videoload-m1-1.jpg" width="100%">
                <source src="./../../assets/video/hachi_m1/m1_1.mp4" type="video/mp4">
            </video>
            <!--<video muted autoplay="autoplay" loop="loop" id="fullVideo" x5-playsinline="true" playsinline="true" webkit-playsinline="true" x-webkit-airplay="allow" preload="auto" x5-video-player-type="h5" x5-video-player-fullscreen="true" poster="./../../assets/video/videoload-m1-1.jpg" width="100%">
                <source src="./../../assets/video/hachi_m1/m1_1.mp4" type="video/mp4">
            </video>-->
        </section>
        <section class="div_3_wrap">
            <div class="intr_wrap">
                <h2>Up to 100-inch Display</h2>
                <p>Combined with the 0.39: 1 projection ratio, Hachi Infinite can project a 100-inch screen at a distance of only 50cm. Auto-focus and auto-keystone correction technology ensures the accurate presentation of clear pictures.</p>
            </div>
            <div class="img_3"></div>
        </section>
        <section class="div_4_wrap">
            <div class="intr_wrap">
                <p>Delivering exceptional quality content with a 600 ANSI lumens HD display.</p>
            </div>
            <div class="img_4"></div>
        </section>
        <section class="img_5">
            <div class="intr_wrap box">
                <h3>Diffuse Reflection Imaging</h3>
                <p>Hachi Infinite adopts diffuse reflection imaging, which can minimize visual fatigue when watching a screen. This type of imaging is especially protective against eye strain in children and the elderly. Hachi Infinite also features built-in motion detection to avoid prevent users from looking directly at the light when moving the device.</p>
            </div>
        </section>
        <section class="img_6">
            <div class="intr_wrap">
                <h3>Qualcomm Snapdragon Processor</h3>
                <p>Powered by a Qualcomm Snapdragon SDA670 chip, built-in A75x2 and A55x6 architecture core processor, the utility frequency is up to 2.0GHz, and supporting up to 6GB RAM and 128GB storage.</p>
            </div>
        </section>
        <section class="div_7_wrap">
            <div class="intr_wrap">
                <h3>Powerful and Faster Android 9.0</h3>
                <p>Featuring built-in Android OS 9.0 and an all-new custom UI, Hachi Infinite allows users to enjoy every Android app ever made. Just download an app and enjoy touchscreen functionality on any flat surface.</p>
            </div>
            <div class="img_7"></div>
        </section>
        <section class="img_8">
            <div class="intr_wrap">
                <h2>Screen Sharing is Simple</h2>
                <p>Share your treasured moments or important presentations with others by pairing Hachi Infinite with your iOS or Android device using AirPlay and Miracast.</p>
            </div>
        </section>
        <section class="div_9_wrap">
            <div class="intr_wrap">
                <h3>Gaming Can Be Easy</h3>
                <p>Connect to your gaming consoles via Bluetooth 5.0 or the HDMI port, so you can enjoy playing with a bigger, crystal-clear screen.</p>
            </div>
            <div class="img_9"></div>
        </section>
        <section class="div_10_wrap">
            <div class="intr_wrap">
                <h2>Hachi Infinite M1</h2>
                <a href="https://store.puppyrobot.com/products/hachi-infinite" target="_blank" class="link">Pre-Order Now</a>
            </div>
            <div class="img_10"></div>
        </section>
    </main>
  </div>
</template>

<script>
import m1banner from './../common/m1banner';
export default {
    components: {
        m1banner
    },
    data() {
        return {
            videoPlay: false,
            btnVideoPlay: true,
            showList:[
                {            
                    id: 1,
                    img: require("./../../assets/images/hachiinfinite/scene1.jpg")
                },
                {            
                    id: 2,
                    img: require("./../../assets/images/hachiinfinite/scene2.jpg"),
                },
                {            
                    id: 3,
                    img: require("./../../assets/images/hachiinfinite/scene3.jpg")
                },
                 {            
                    id: 4,
                    img: require("./../../assets/images/hachiinfinite/scene4.jpg")
                },
                 {            
                    id: 5,
                    img: require("./../../assets/images/hachiinfinite/scene5.jpg")
                },
                 {            
                    id: 6,
                    img: require("./../../assets/images/hachiinfinite/scene6.jpg")
                }
            ]
        }
    },
    mounted() {
        let _this = this
        document.addEventListener("fullscreenchange", function () { 
            document.fullscreen? _this.videoPlay = true : _this.videoPlay = false;
        }); 
        
        document.addEventListener("mozfullscreenchange", function () { 
            document.mozFullScreen? _this.videoPlay = true: _this.videoPlay = false;
        }); 
        
        document.addEventListener("webkitfullscreenchange", function () { 
            document.webkitIsFullScreen? _this.videoPlay = true  : _this.videoPlay = false;
        }); 
        document.addEventListener("msfullscreenchange", function () { 
            document.msFullscreenElement? _this.videoPlay = true  : _this.videoPlay = false;
        });
    },
    methods: {
        PlayVideo: function(){
            var mVideo = document.querySelector("#fullVideo1");
            if (mVideo) {
                if (mVideo.requestFullscreen) {
                    mVideo.requestFullscreen();
                }
                else if (mVideo.msRequestFullscreen) {
                    mVideo.msRequestFullscreen();
                }
                else if (mVideo.mozRequestFullScreen) {
                    mVideo.mozRequestFullScreen();
                }
                else if (mVideo.webkitRequestFullScreen) {
                    mVideo.webkitRequestFullScreen();
                    /*
                        *Kept here for reference: keyboard support in full screen
                        * marioVideo.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    */
                }
                mVideo.play();
            }
        },
        vPlay: function() {
            document.querySelector("#fullVideo").play();
            this.btnVideoPlay = false;
        }
    },
    watch: {
        videoPlay: function(val) {
            if (!val) {
                document.querySelector("#fullVideo1").pause();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
// modify by 20200512
$headerHeight: 46px;
div,p,h1,h2,h3,section{margin:0;padding:0;}
h1,h2,h3{font-weight:normal;}
#hachiinfinite {
    width:100%;
    height:100%;
}
.imgBackCenter {
    background-size: 100% auto;
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    background-repeat: no-repeat;
    //background-position: center center;
    //width: 100%;
}
@for $i from 1 through 10 {
    .img_#{$i} {
        width:100%;
        background-image: url("./../../assets/images/hachiinfinite/div#{$i}.jpg");
        @extend .imgBackCenter;
    }
}
.intr_wrap {
    padding-top:30px;
    h1{font-size:24px;line-height:35px;}
    h2{font-size:20px;}
    h3{font-size:15px;}
    p{font-size:13px;line-height:20px;}
    width:92.4%;
    margin:0 auto;
    box-sizing:border-box;
}
.img_1 {
    height:528px;
    position:relative;
    .intr_wrap {
        padding-top:86px;
        text-align:left;
        width:72%;
        h1 {
            margin-top:7px;
        }
    }
    .video_btn {
        display:inline-block;
        font-size:12px;
        padding:12px 10px;
        background:#D8D8D8;
        margin-top:15px;
    }
}
#fullVideo1 {
    position:absolute;
    left:0;
    top:0;
}
.img_2 {
    height:660px;
    .intr_wrap {
        padding-top:35px;
        p{
            padding-top:10px;
            padding-bottom:20px;
        }
    }
}
.flex_between{
    display:-webkit-box;
    display:-webkit-flex; 
    display:-moz-box;  
    display:-ms-flexbox;
    display:flex;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    -o-justify-content: space-between;
    justify-content: space-between;
    flex-flow: row wrap;
    align-content: flex-start;
}
.icon_wrap {
    width:87.46%;
    min-height:172px;
    margin:0 auto;
    background-image: url("./../../assets/images/hachiinfinite/icon.png");
    @extend .imgBackCenter;
}
.video1 {
    height:211px;
    background-image: url("./../../assets/video/videoload-m1-1.jpg");
    @extend .imgBackCenter;
    width:100%;
    position:relative;
    .video_btn {
        position:relative;
        z-index:222;
        width:100px;
        height:100px;
        margin-top:20px;
    }
    .intr_wrap {
        color:#fff;
        width:90.13%;
        padding-top:35px;
        position:relative;
        z-index:222;
        p {
            padding-top:15px;
        }
    }
}
#fullVideo{
    position:absolute;
    top:0;
    left:0;
}
.div_3_wrap {
    .intr_wrap {
        h3 {
            padding:12px 0;
        }
        p {
            padding-top:10px;
            font-weight:500;
            padding-bottom:20px;
            font-size:14px;
            line-height:22px;
        }
    }
}
.img_3 {
    height:252px;
    width:92.4%;
}
.div_4_wrap {
    padding:30px 0;
    position:relative;
    background:#f3f3f3;
    .intr_wrap {
        padding:0;
        p {
           padding-bottom:20px;
           font-weight:500;
        }
    }
    &::after{
        content:"";
        display:block;
        width:92.4%;
        height:1px;
        margin:0 auto;
        background:#979797;
        margin-top:25px;
    }
}
.img_4 {
    height:231px;
    width:92.4%;
}
.img_5 {
    height:624px;
    .box {
        background:rgba(0,0,0,.2);
        color:#fff;
        padding:12px 6px;
        margin-top:24px;
        width:85.33%;
        box-sizing:border-box;
    }
    .intr_wrap {
        p {
            font-weight:400;
            padding-top:16px;
        }
    }
}
.banner1 {
    padding-bottom:30px;
    background:#F3F3F3;
    position:relative;
    .intr_wrap {
        p {
            padding:10px 4% 0 4%;
        }
    }
    .banner-wrap {
        width:88.4%;
        margin:0 auto;
        overflow:hidden;
    }
    &::after {
        content:"";
        display:block;
        width:88%;
        height:1px;
        background:#979797;
        margin:20px auto 0 auto;
    }
}
.img_6{
    .intr_wrap {
        color:#fff;
        width:83.73%;
        h3{
            padding:10px 0;
        }
        p{
            font-weight:400;
        }
    }
}
.img_6 {
    height:540px;
}
.div_7_wrap {
    padding:30px 0;
    background:#F3F3F3;
    .intr_wrap {
        width:83.73%;
        padding:0;
        p {
            padding-top:10px;
            padding-bottom:20px;
        }
    }
    &::after{
        content:"";
        display:block;
        width:92.4%;
        height:1px;
        margin:0 auto;
        background:#979797;
        margin-top:25px;
    }
}
.img_7 {
 height:212px;
 width:92.4%;
}
.img_8 {
    height:576px;
    .intr_wrap {
        width:80.26%;
        padding-top:35px;
        h2 {
            line-height:28px;
        }
        p {
            padding-top:10px;
        }
    }
}
.div_9_wrap {
    padding:30px 0;
    background:#F3F3F3;
    .intr_wrap {
        width:83.73%;
        p {
            padding-top:10px;
            padding-bottom:17px;
        }
    }
    &::after{
        content:"";
        display:block;
        width:92.4%;
        height:1px;
        margin:0 auto;
        background:#979797;
        margin-top:25px;
    }
}
.img_9{
    height:196px;
    width:92.4%;
}
.div_10_wrap  {
    background:#000;
    padding-top:16px;
    color:#fff;
}
.img_10 {
    height:230px;
}
.link{
    color:#2998FF;
    margin-top:10px;
    margin-bottom:14px;
    font-size:13px;
    display:block;
    text-decoration:none;
    &::after {
        content:"";
        width: 6px;
        height: 6px;
        border-top: 1px solid #2998FF;
        border-right: 1px solid #2998FF;
        transform: rotate(45deg);
        display:inline-block;
        margin-left:10px;
    }
}
</style>