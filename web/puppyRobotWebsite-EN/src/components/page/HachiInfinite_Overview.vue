
<template>
  <div id="intro">
    <div class="content">
        <div class="img_01 imgBackCenter">
            <section class="div_descrip">
                <h1>Hachi Infinite M1</h1>
                <p>Experience touch without a touchscreen</p>
                <span class="video_btn" @click="PlayVideo()">Watch video</span>
            </section>
            <video v-show="videoPlay" src="./../../assets/video/hachi_m1/m1.mp4" id="fullVideo1" controls="controls" width="100%" poster="./../../assets/video/videoload-m1.jpg"></video>
        </div>
        <div class="img_02 imgBackCenter">
            <section class="div_descrip">
                <h2>A World at Your Fingertips</h2>
                <p>An interactive touchscreen projector and standalone smart home entertainment system - incorporating unparalleled features such as voice control as part of a user‘s smart home ecosystem, touchscreen responsiveness on par with capacitive displays, a custom built-in OS and a powerful new Qualcomm chip.</p>
            </section>
            <div class="icon_wrap">
                <div>
                    <i class="icon1"></i>
                    <span>10-Point AnyTouch</span>
                </div>
                <div>
                    <i class="icon2"></i>
                    <span>Android 9.0</span>
                </div>
                <div>
                    <i class="icon3"></i>
                    <span>Cinema Screen with up to 100 inches</span>
                </div>
                <div>
                    <i class="icon4"></i>
                    <span>Qualcomm Snapdragon CPU</span>
                </div>
                <div>
                    <i class="icon5"></i>
                    <span>Easy to Carry and Built-in Battery</span>
                </div>
                <div>
                    <i class="icon6"></i>
                    <span>Premium Design</span>
                </div>
            </div>
        </div>
        <div class="div_carrousel imgBackCenter">
            <section class="div_descrip">
                <p>Computers, projectors and smartphones are devices we’ve all used before. Now, it’s time for something new.</p>
            </section>
            <div class="carrousel">
                <Carousel :slideLists="slideLists" :swiperHeight="'542px'"></Carousel>
            </div>
        </div>
        <div class="div_video imgBackCenter">
            <section class="div_descrip">
                <h2>Turn Life Into a Touchscreen</h2>
                <p>Unlike projectors with basic touchscreen functionality, it utilizes a unique 10-point proprietary multitouch technology called AnyTouch that works on all surfaces and enables responsiveness on par with capacitive displays.</p>
            </section>
            <video muted autoplay="autoplay" loop="loop" id="fullVideo" x5-playsinline="true" playsinline="true" webkit-playsinline="true" x-webkit-airplay="allow" preload="auto" x5-video-player-type="h5" x5-video-player-fullscreen="true" poster="./../../assets/video/videoload-m1-1.png" width="100%">
                <source src="./../../assets/video/hachi_m1/m1_1.mp4" type="video/mp4">
            </video>
            <!-- <video src="./../../assets/video/hachi_m1/m1_1.mp4" id="fullVideo" controls="controls" width="100%" poster="./../../assets/video/videoload-m1-1.png"></video> -->
        </div>
        <div class="img_03 imgBackCenter">
            <div class="flex_end">
                <section class="div_descrip">
                    <h2>Up to 100-inch Display</h2>
                    <p>Combined with the 0.39: 1 projection ratio, Hachi Infinite can project a 100-inch screen at a distance of only 50cm. Auto-focus and auto-keystone correction technology ensures the accurate presentation of clear pictures.</p>
                </section>
            </div>
        </div>
        <div class="img_04 imgBackCenter">
            <section class="div_descrip">
                <p>Delivering exceptional quality content with a 600 ANSI lumens HD display.</p>
            </section>
        </div>
        <div class="img_05 imgBackCenter">
            <div class="box">
                <section class="div_descrip">
                    <h2>Diffuse Reflection Imaging</h2>
                    <p>Hachi Infinite adopts diffuse reflection imaging, which can minimize visual fatigue when watching a screen. This type of imaging is especially protective against eye strain in children and the elderly. Hachi Infinite also features built-in motion detection to avoid prevent users from looking directly at the light when moving the device.</p>
                </section>
            </div>
        </div>
        <div class="img_06 imgBackCenter">
            <div class="flex_end">
                <section class="div_descrip">
                    <h2>Qualcomm<br/>Snapdragon Processor</h2>
                    <p>Powered by a Qualcomm Snapdragon SDA670 chip, built-in A75x2 and A55x6 architecture core processor, the utility frequency is up to 2.0GHz, and supporting up to 6GB RAM and 128GB storage.</p>
                </section>
            </div>
        </div>
        <div class="div_07">
            <section class="div_descrip">
                <h2>Powerful and Faster Android 9.0</h2>
                <p>Featuring built-in Android OS 9.0 and an all-new custom UI, Hachi Infinite allows users to enjoy every Android app ever made. Just download an app and enjoy touchscreen functionality on any flat surface.</p>
            </section>
            <div class="img_07 imgBackCenter"></div>
        </div>
        <div class="div_08">
            <section class="div_descrip">
                <h2>Screen Sharing is Simple</h2>
                <p>Share your treasured moments or important presentations with others by pairing Hachi Infinite with your iOS or Android device using AirPlay and Miracast.</p>
            </section>
            <div class="img_08 imgBackCenter"></div>
        </div>
        <div class="div_09">
            <section class="div_descrip">
                <h2>Gaming Can Be Easy</h2>
                <p>Connect to your gaming consoles via Bluetooth 5.0 or the HDMI port, so you can enjoy playing with a bigger, crystal-clear screen.</p>
            </section>
            <div class="img_09 imgBackCenter"></div>
        </div>
        <div class="div_10 imgBackCenter">
            <section class="div_descrip">
                <h2>Hachi Infinite M1</h2>
                <a href="https://store.puppyrobot.com/products/hachi-infinite" target="_blank" class="link">Pre-Order Now</a>
            </section>
            <div class="img_010 imgBackCenter"></div>
        </div>
    </div>
</div>
</template>
<script>
import Carousel from './../common/Carousel'
export default {
    name:"m1Overview",
    data() {
        return {
            videoPlay: false,
            slideLists: [
                {
                    id: 1,
                    img: require("./../../assets/images/hachiinfinite/carousel_01.jpg"),
                    width: '814px'
                },
                {
                    id: 2,
                    img: require("./../../assets/images/hachiinfinite/carousel_02.jpg"),
                    width: '814px'
                },
                {
                    id: 3,
                    img: require("./../../assets/images/hachiinfinite/carousel_03.jpg"),
                    width: '814px'
                },
                {
                    id: 4,
                    img: require("./../../assets/images/hachiinfinite/carousel_04.jpg"),
                    width: '814px',
                },
                {
                    id: 5,
                    img: require("./../../assets/images/hachiinfinite/carousel_05.jpg"),
                    width: '814px'
                },
                {
                    id: 6,
                    img: require("./../../assets/images/hachiinfinite/carousel_06.jpg"),
                    width: '814px'
                }
            ],
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
    destroyed() {
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
        }
    },
    components: {
        Carousel
    },
    watch: {
        videoPlay: function(val) {
            if (!val) {
                document.querySelector("#fullVideo1").pause();
            }
        }
    },
}
</script>

<style lang="scss" scoped>
// modify 20200506
div,p,h1,h2,section{margin:0;padding:0;}
h1,h2,h3{font-weight:normal;}

$contentWidth:1034px;
$maxWiddth:1600px;
#hachiinfinite {
    position: relative;
    &::after {
        content:"";
        clear:both;
        display:block;
    }
    &::before {
        content:"";
        clear:both;
        display:block;
    }
}
.carrousel {
    width: 100%;
    margin: 0 auto;
}
.content {
    padding-top:60px;
}
.commonStyle{
    max-width:$maxWiddth;
    margin:0 auto;
    overflow:hidden;
}

.commonContentStyle{
    max-width:$contentWidth;
    margin:0 auto;
    overflow:hidden;
}

.flex_end{
    display:-webkit-box;
    display:-webkit-flex; 
    display:-moz-box;  
    display:-ms-flexbox;
    display:flex;
    -webkit-justify-content: flex-end;
    -moz-justify-content: flex-end;
    -ms-justify-content: flex-end;
    -o-justify-content: flex-end;
    justify-content: flex-end;
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
}
.content{
    width: 100%;
    height:100%;
}

.imgBackCenter{
    background-size: cover;
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    background-repeat: no-repeat;
    background-position: center center;
    max-width: 1920px;
}
@for $i from 1 through 9 {
    .img_0#{$i} {
        background-image: url("./../../assets/images/hachiinfinite/div_#{$i}.jpg");
    }
}
@for $i from 1 through 6 {
    .icon#{$i} {
        background-image: url("./../../assets/images/hachiinfinite/icon#{$i}.png");
    }
}
.div_descrip{
    @extend .commonContentStyle;
    color: black;
    text-align: left;
    h1 {
        font-size:48px;
    }
    h2{
        font-size:42px;
        line-height:58px;
        font-weight:600;
    }
    p{
        font-size:24px;
        line-height:38px;
        margin-top:30px;
        font-weight:lighter;
    }
}
.img_01{
    height:890px;
    position:relative;
    .div_descrip{
        margin-top:80px;
        p {
            margin-top:14px;
            font-size:26px;
        }
    }
    .video_btn {
        display:inline-block;
        margin-top:36px;
        font-size:20px;
        background:#d8d8d8;
        padding:20px 16px;
        border-radius:10px;
        cursor:pointer;
    }
}
.img_02{
    height:1318px;
    .div_descrip{
        text-align:center;
        margin-top:70px;
    }
}
.icon_wrap {
    max-width:80%;
    margin:60px auto 0 auto;
    @extend .flex_between;
    i {
        display:block;
        width:96px;
        height:96px;
        @extend .imgBackCenter;
    }
    span {
        margin-top:32px;
        max-width:174px;
        font-size:18px;
        line-height:25px;
        display:block;
    }
}
.div_carrousel {
    padding:86px 0;
    .div_descrip {
        text-align: center;
        padding-bottom:80px;
        p {
            margin:0;
            font-size:30px;
            line-height:45px;
            font-weight:500;
            padding:0 28px;
        }
    }
}
.div_video{
    width:100%;
    background:#000;
    height:912px;
    position:relative;
    .div_descrip {
        color:#fff;
        padding-top:150px;
        position:relative;
        z-index:222;
        text-align:center;
    }
}
#fullVideo {
    position:absolute;
    left:0;
    top:0;
}
.img_03{
    height:1408px;
    .flex_end {
        max-width:75%;
        margin:0 auto;
    }
    .div_descrip {
        position:relative;
        color:#fff;
        padding-top:32%;
        margin:0;
        p {
            max-width:580px;
            letter-spacing:-.8px;
        }
    }
}
.img_04{
    height:1010px;
    position:relative;
    .div_descrip {
        position:absolute;
        bottom:120px;
        color:#fff;
        text-align:center;
        max-width:1080px;
        margin:0 auto;
        left:50%;
        transform:translateX(-50%);
        p {
            margin:0;
            font-size:36px;
            line-height:45px;
        }
    }
}
.img_05{
    height:1280px;
}
.box {
    max-width:70%;
    margin:54px auto 0 auto;
    @extend .flex_end;
    .div_descrip {
        max-width:760px;
        background:rgba(54,54,54,.5);
        margin:0;
        padding: 26px 36px;
        box-sizing:border-box;
        color:#fff;
    }
}
.img_06{
    height:992px;
    .flex_end {
        max-width:$maxWiddth;
        margin:0 auto;
    }
    .div_descrip {
        color:#fff;
        margin:300px 0 0 0;
        p {
            max-width:486px;
        }
    }
}
.img_07{
    height:1124px;
}
.div_07 .div_descrip,.div_08 .div_descrip,.div_09 .div_descrip {
    text-align:center;
    padding-top:86px;
}
.div_07 {
    width:100%;
    .div_descrip {
        max-width:1064px;
        p {
            margin-bottom:48px;
            letter-spacing:-0.8px;
        }
    }
}
.img_08{
    height:1280px;
}
.div_08 {
    width:100%;
    .div_descrip {
        max-width:1000px;
        p {
            margin-bottom:46px;
            letter-spacing:-0.8px;
        }
    }
}
.img_09{
    height:1080px;
}
.div_09 {
    width:100%;
    .div_descrip {
        max-width:1000px;
        p {
            padding:0 20px;
            margin-bottom:46px;
            letter-spacing:-0.8px;
        }
    }
}
.img_010{
    height:1130px;
    background: url("./../../assets/images/hachiinfinite/div_10.jpg") no-repeat bottom;
}
.div_10 {
    width:100%;
    background:#303030;
    .div_descrip {
        text-align:center;
        color:#fff;
        padding-top:90px;
    }
    .link{
        color:#2998FF;
        margin-top:12px;
        margin-bottom:34px;
        font-size:30px;
        display:block;
        text-decoration:none;
        font-weight:lighter;
        &::after {
            content:"";
            width: 10px;
            height: 10px;
            border-top: 1.5px solid #2998FF;
            border-right: 1.5px solid #2998FF;
            transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            display:inline-block;
            margin-left:20px;
        }
    }
}
#fullVideo1{
    position:absolute;
    top:0;
    left:0;
}
@media screen and (max-width: 1281px) {
    .img_01 .div_descrip{margin-left:40px;}
    .img_03 .div_descrip{margin-top:210px;}
    .img_06 .div_descrip{margin-right:40px;}
}
</style>