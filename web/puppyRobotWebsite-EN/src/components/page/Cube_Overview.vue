<template>
    <div id="cube_overview">
        <div class="designImg">
            <div class="div_image_common div_01">
                <div class="img_descrip word_position_01">
                    <div class="descrip_slogan">Puppy Cube</div>
                    <div class="descrip_content">Standalone ultra short-throw projector that can turn <br/>any flat surface into a touchscreen</div>
                </div>
            </div>
        </div>

        <div class="video_container">
            <div class="box">
                <div class="backvideo_container">
                <video src="http://source-en.hachismart.com/video/autoplay.mp4" id="bgvideo" autoplay loop width="100%" muted="true" poster="./../../assets/video/video_load.png">
                </video>
                </div>
                <!-- <div class="divMp4Front">
                </div>  -->
                <div class="divMp4Words">
                    <div class="video_btn2" @click="PlayVideo()">
                        <img class="imgPlay" src="./../../assets/video/play_btn.png">
                        <!-- <br/> -->
                        <div class="span_b">Watch Video</div>   
                    </div> 
                </div>
            </div>
        </div>
        <video v-show="videoPlay" src="http://source-en.hachismart.com/video/playafterclick.mp4" id="fullVideo" controls="controls" width="100%" poster="./../../assets/video/videoload-cube.jpg">
        </video>
        <!-- <div style="width:0px;height:0px;">
            <iframe src="https://www.youtube.com/embed/QrprV4ty164" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>
        </div> -->
        <div class="designImg">
            <div class="div_image_common div_02">
            </div>
        </div>

        <div class="designImg">
            <div class="div_image_common div_03">
            </div>
        </div>

        <div class="designImg">
            <div class="div_image_common div_04">
                <div class="word_position_04">
                    <div class="descrip_slogan_com">The World At Your Fingertips</div>
                    <div class="descrip_conetent_com">Projectors with basic touch functionality have been around for a while. Projectors <br/>with multitouch technology as responsive as capacitive displays have not. <br/>The technology that drives puppy cube is called AnyTouch.</div>
                </div>
            </div>
        </div>

        <div class="div_05">
            <div class="word_position_05">
                <div class="descrip_slogan_com">Enjoy Unlimited Possibilities</div>
                <div class="descrip_conetent_com">Puppy cube runs on a custom version of Android OS, and is <br/>compatible with almost every Android app ever made</div>
            </div>
            <div class="img_cube">
                <img src="./../../assets/images/puppycube/cube.png">
            </div>
            <div class="cube_screen">
                <div class="screen_side">
                    <div :class="currDisplayImgIndex==0?'div_highLight':''">
                        <img @click="changeDisplayImg(0)" src="./../../assets/images/puppycube/index.png">
                    </div>
                    <div :class="currDisplayImgIndex==1?'div_highLight':''">
                    <img @click="changeDisplayImg(1)" src="./../../assets/images/puppycube/word.png">
                    </div>
                    <div :class="currDisplayImgIndex==2?'div_highLight':''">                    
                    <img @click="changeDisplayImg(2)" src="./../../assets/images/puppycube/Twitter.png">
                    </div>
                    <div :class="currDisplayImgIndex==3?'div_highLight':''">
                    <img @click="changeDisplayImg(3)" src="./../../assets/images/puppycube/Candy_Crush.png">
                    </div>
                </div>
                <div class="screen_mid">
                    <img v-show="currDisplayImgIndex==0" src="./../../assets/images/puppycube/Screen_index.jpg">
                    <img v-show="currDisplayImgIndex==1" src="./../../assets/images/puppycube/Screen_word.jpg">
                    <img v-show="currDisplayImgIndex==2" src="./../../assets/images/puppycube/Screen_Twitter.jpg">
                    <img v-show="currDisplayImgIndex==3" src="./../../assets/images/puppycube/Screen_Candy_Crush.jpg">
                    <img v-show="currDisplayImgIndex==4" src="./../../assets/images/puppycube/Screen_Facebook.jpg">
                    <img v-show="currDisplayImgIndex==5" src="./../../assets/images/puppycube/Screen_Firefox.jpg">
                    <img v-show="currDisplayImgIndex==6" src="./../../assets/images/puppycube/Screen_Instagram.jpg">
                    <img v-show="currDisplayImgIndex==7" src="./../../assets/images/puppycube/Screen_Netflix.jpg">
                </div>
                <div class="screen_side">
                    <div :class="currDisplayImgIndex==4?'div_highLight':''">
                    <img @click="changeDisplayImg(4)" src="./../../assets/images/puppycube/Facebook.png">
                    </div>
                    <div :class="currDisplayImgIndex==5?'div_highLight':''">
                    <img @click="changeDisplayImg(5)" src="./../../assets/images/puppycube/Firefox.png">
                    </div>
                    <div :class="currDisplayImgIndex==6?'div_highLight':''">
                    <img @click="changeDisplayImg(6)" src="./../../assets/images/puppycube/Instagram.png">
                    </div>
                    <div :class="currDisplayImgIndex==7?'div_highLight':''">
                    <img @click="changeDisplayImg(7)" src="./../../assets/images/puppycube/Netflix.png">
                    </div>
                </div>
            </div>
        </div>

        <div class="designImg">
            <div class="div_image_common div_06">
                <div class="word_position_04">
                    <div class="descrip_slogan_com" style="font-size: 48px !important;">A Small Cube That Will Dwarf Your TV</div>
                    <div class="descrip_conetent_com">Project up to 100 inches of 4K quality content as short as only 20 inches from a wall. <br/>Puppy cube has both autofocus and automatic keystone correction, <br/>making the setup process quick and easy.</div>
                </div>
                <div class="word_p_06">
                    <div style="margin-left:75px;">FFO Optical patents</div>
                    <div style="margin-left:45px;">Autofocus</div>
                    <div style="margin-left:32px;">0.39:1 Projection Ratio</div>
                    <div style="margin-left:8px;">23 Inches to 100 Inches</div>
                    <div style="margin-left:8px;">Auto-off Eye Protection</div>
                    <div style="margin-left:8px;">Automatic Keystone Correction</div>
                </div>
            </div>
        </div>
        <div class="designImg">
            <div class="div_image_common div_07">
                <div class="word_position_07">
                    <div class="descrip_slogan_com">Protable Projector <br/>with Wireless Screen Sharing</div>
                    <div class="descrip_conetent_com">A Portable Projector with Wireless Screen Sharing. It's got AirPlay, Bluetooth, <br/>DLNA, Miracast and an HDMI port. Cast your phone, share your screen, stream<br/>from your computer.</div>
                </div>
            </div>
        </div>

        <div class="designImg">
            <div class="div_image_common div_08">
                <div class="word_position_08">
                    <div class="d_img_container">
                        <img v-show="cubeDisplayD==0" class="img_front" src="./../../assets/images/puppycube/front.png">
                        <img v-show="cubeDisplayD==1" class="img_side" src="./../../assets/images/puppycube/side.png">
                        <img v-show="cubeDisplayD==2" class="img_overhead" src="./../../assets/images/puppycube/overhead.png">
                    </div>
                    <div class="word_08">
                        <div class="word_08_absolute">
                            <div class="descrip_slogan_com">Simple and Sleek Design</div>
                            <div class="descrip_conetent_com">Simplicity has been one of Puppy Cube's key design elements. <br/>The Space Gray color gives it a sleek look, and the curved <br/>edges makes it comfortable to touch and carry around.</div>
                            <div class="btn_container">
                                <div :class="cubeDisplayD==0?'d_btn d_btn_selected':'d_btn'" @click="changeCubeDisplayDirection(0)">Front</div>
                                <div :class="cubeDisplayD==1?'d_btn d_btn_selected':'d_btn'" @click="changeCubeDisplayDirection(1)">Side</div>
                                <div :class="cubeDisplayD==2?'d_btn d_btn_selected':'d_btn'" @click="changeCubeDisplayDirection(2)">Overhead</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="designImg">
            <div class="div_image_common div_09">
                <div class="word_position_09">
                    <div class="descrip_slogan_com">Mini in Size, Huge in Sounds</div>
                    <div class="descrip_conetent_com">Intense solos, cinematic soundscapes, or any of your favorite music can <br/>start playing with the touch of a button. Puppy Cube's built-in <br/>dual 5W speakers will take care of the rest.</div>
                </div>
            </div>
        </div>

        <div class="designImg">
            <div class="div_image_common div_10">
                <div class="word_position_10">
                    <div class="descrip_slogan_10">An All-in-One Video Conferencing Box</div>
                    <div class="descrip_conetent_10">With its 5 MP camera module and bi-directional microphone array, Puppy Cube can <br/>provide a clear image and crisp sound for video conferences and more</div>
                </div>
            </div>
        </div>

        <div class="carrousel_container">
            <div class="carrousel">
                <Carousel :slideLists="slideLists" :swiperHeight="'602px'"></Carousel>
            </div>
        </div>

    </div>
</template>

<script>
import Carousel from './../common/Carousel'
export default {
    data() {
        return {
            videoPlay: false,
            currDisplayImgIndex: 0,
            cubeDisplayD: 0,
            initialInterval: 3,
            slideLists: [
                {
                    id: 1,
                    img: require("./../../assets/images/puppycube/carousel_01.jpg"),
                    backgroundColor: "#ffffff",
                    width: '800px',
                },
                {
                    id: 2,
                    img: require("./../../assets/images/puppycube/carousel_02.jpg"),
                    backgroundColor: "#ffffff",
                    width: '800px',
                },
                {
                    id: 3,
                    img: require("./../../assets/images/puppycube/carousel_03.jpg"),
                    backgroundColor: "#ffffff",
                    width: '800px',
                },
                {
                    id: 4,
                    img: require("./../../assets/images/puppycube/carousel_04.jpg"),
                    backgroundColor: "#ffffff",
                    width: '800px',
                },
                {
                    id: 5,
                    img: require("./../../assets/images/puppycube/carousel_05.jpg"),
                    backgroundColor: "#ffffff",
                    width: '800px',
                },
                {
                    id: 6,
                    img: require("./../../assets/images/puppycube/carousel_06.jpg"),
                    backgroundColor: "#ffffff",
                    width: '800px',
                }
                
            ],
        }
     },
     components: {
         Carousel,
     },
     computed:{
        interval() {
        return this.initialInterval * 1000
        }
    },
     mounted() {

        let _this = this;
        document.addEventListener('fullscreenchange', function () {
          if (document.fullscreenElement) {
            _this.videoPlay = true;
          } else {
            _this.stopVideo();
          }
        }, false);
        document.addEventListener('msfullscreenchange', function () {
          if (document.msFullscreenElement) {
            _this.videoPlay = true;
          } else {

            _this.stopVideo();
          }
        }, false);
        document.addEventListener('mozfullscreenchange', function () {
          if (document.mozFullScreen) {
            _this.videoPlay = true;
          } else {
            _this.stopVideo();
          }
        }, false);
        document.addEventListener('webkitfullscreenchange', function () {
          if (document.webkitIsFullScreen) {
            _this.videoPlay = true;
          } else {
            _this.stopVideo();
          }
        }, false);

        //app screen timer
        this.play();
     },

     methods: {

        PlayVideo: function(){
            //  this.videoPlay = true;
            // var doc = document.querySelector('iframe').contentWindow.document.body;
            // var playbtn = doc.querySelector(".ytp-large-play-button .ytp-button");
            // console.log("playbtn:" + playbtn);
            // if(playbtn) {
            //     playbtn.click();
            // }
            setTimeout( function(){
                var mVideo = document.querySelector("#fullVideo");
                console.log(mVideo);
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
            //add your code
            }, 2 * 1000 );

        },
        stopVideo: function(){
            this.videoPlay = false;
            var mVideo = document.querySelector("#fullVideo");
            mVideo.pause();
        },

        changeDisplayImg: function (index){
            this.currDisplayImgIndex = index;
        },

        changeCubeDisplayDirection: function(dIndex){
            this.cubeDisplayD = dIndex;
        },

        play() {
            if (this.timer) {
                window.clearInterval(this.timer)
                this.timer = null
            }
            this.timer = window.setInterval(() => {
                this.changeDisplayImg(this.currDisplayImgIndex + 1 > 7?0:this.currDisplayImgIndex + 1);
                this.changeCubeDisplayDirection(this.cubeDisplayD + 1>2?0:this.cubeDisplayD + 1);
            }, this.interval)
        },

    }
}
</script>



<style lang="scss" scoped>
    .designImg {
        text-align: center;
        img {
            display: block;  
            margin: 0 auto;
        }
    }

    .div_image_common {
        // min-width: 1280px;
        // max-width: 1280px;
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
    }

    .div_01 {
        background-image: url('./../../assets/images/puppycube/div_01.jpg');
        height:799px;
        max-width:1920px;
        color: black;
    }

    .img_descrip {
        width: 1010px;
        height: 300px;
        margin: 0 auto;
        text-align: left;
        .descrip_title {
            font-size: 20px;
        }

        .descrip_slogan {
            font-size: 55px;
            font-family: "Microsoft YaHei";
            font-weight: bold;
        }

        .descrip_content {
            font-size: 22px;
            font-family: "Microsoft YaHei";
            font-weight: lighter;
            margin-top: 20px;
        }
    }

    .word_position_01 {
        margin-top: 267px;
        margin-left: 51.7%;
    }   

    .backvideo_container {
        max-width: 1920px;
        margin: 0 auto;
    }

    .box {
        position: relative;
    }

    
    .divmp4 {
        width: 100%;
        text-align: center;
        background-color: black;
    }

    .divVideoPlayer {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        background-color: black;
        text-align: center;
        z-index: 9999;
    }

    .videoSelect {
        width: 15vw;
        height: 20vh;
        background-color: red;
        position: absolute;
        opacity: 0.8;
        
    }

    .divMp4Words {
        position: absolute;
        top: 46%;
        width: 100%;
        text-align: center;
        vertical-align: middle;
        color: white;
        display: table;
        left: 0px;
    }

    .span_b {
        font-size: 20px;
        font-family: "Microsoft YaHei";
        margin-top: -12px;
    }

    .video_btn2 {
        cursor: pointer;
        width: 130px;
        margin: 0 auto;
    }

    .video_btn2:hover{
        img {
            transform: scale(1.1);  
        }
    }

    #bgvideo {
        display: block;
    }

    .div_02 {
        background-image: url('./../../assets/images/puppycube/div_02.jpg');
        height:626px;
        max-width:1920px;
        color: black;
    }

    .div_03 {
        background-image: url('./../../assets/images/puppycube/div_03.jpg');
        height:480px;
        max-width:1920px;
        color: black;
    }

    .div_04 {
        background-image: url('./../../assets/images/puppycube/div_04.jpg');
        height:921px;
        max-width:1920px;
        color: white;
    }

    .word_position_04 {
        text-align: center !important;
        margin-top: 156px;
    }

    .descrip_04 {
        font-size: 55px;

    }

    .descrip_slogan_com {
        font-size: 50px;
        line-height: 65px;
        font-family: "Microsoft YaHei";
        font-weight: bold;
    }

    .descrip_conetent_com {
        font-size: 20px;
        font-family: "Microsoft YaHei";
        margin-top: 10px;
    }

    .div_05 {
        width: 100%;
        max-width: 1920px;
        height: 1179px;
        background-color: #161616;
        margin: 0 auto;
        color: white;
        position: relative;
    }

    .word_position_05 {
        padding-top: 160px;
        padding-bottom: 280px;
    }

    .img_cube {
        position: absolute;
        top: 260px;
        width: 100%;

    }

    .cube_screen {
        // background-color: gray;
        width: 1140px;
        height: 507px;
        margin: 0 auto;
    }

    .screen_side {
        float: left;
        width: 65px;
        margin-top: 62px;

        img {
            cursor: pointer;
            display: block;
        }
        
        div {
            margin-bottom: 40px;
            border-radius: 8px;
        }
    }

    .screen_mid {
        width: 1010px;
        float: left;
        height: 507px;
        padding-left:56px;
        padding-right:56px;
        box-sizing: border-box;
        img {
            display: block;
        }
    }

    .div_06 {
        background-image: url('./../../assets/images/puppycube/div_06.jpg');
        height:1154px;
        max-width:1920px;
        color: white;
        
    }

    .word_p_06 {
        padding-top: 130px;
        width: 1010px;
        margin: 0 auto;

        div {
            float: left;
            font-size: 13px;
            font-family: "Microsoft YaHei";
            font-weight: lighter;
        }
    }

    .div_07 {
        background-image: url('./../../assets/images/puppycube/div_07.jpg');
        height:926px;
        max-width:1920px;
        color: white;
    }

    .word_position_07 {
        text-align: left;
        width: 1080px;
        margin: 0 auto;
        padding-top: 473px;
    }

    .div_08 {
        background-image: url('./../../assets/images/puppycube/div_08.jpg');
        height:643px;
        max-width:1920px;
        color: white;
    }

    .word_position_08 {
        width: 1340px;
        height: 643px;
        margin: 0 auto;

        .word_08 {
            text-align: left;
            padding-top: 230px;
            position: relative;
            // width: 540px;
            box-sizing: border-box;
        }

    }

    .word_08_absolute {
        left: 67px;
        top: 0px;
    }

    .d_img_container {
        float:left;
        width: 670px;
        height: 643px;
        padding-top: 100px;
        padding-left: 130px;
        box-sizing: border-box;
    }

    .img_front {
        width: 450px;
    }

    .img_side {
        width: 330px;
    }

    .img_overhead {
        width: 380px;
        padding-top: 100px;
    }

    .btn_container {
        margin-top: 55px;
    }

    .d_btn {
        width: 119px;
        height: 32px;
        float: left;
        background-color: #303233;
        line-height: 32px;
        font-size: 20px;
        font-family: "Microsoft YaHei";
        font-weight: lighter;
        text-align: center;
        margin-right: 1px;
        cursor: pointer;
    }

    .d_btn_selected {
        background-color: white;
        color: #303233;
    }

    .div_09 {
        background-image: url('./../../assets/images/puppycube/div_09.jpg');
        height:898px;
        max-width:1920px;
        color: black;
    }

    .word_position_09 {
        width: 1180px;
        height: 643px;
        margin: 0 auto;
        text-align: left;
        padding-top: 428px;
    }

    .div_10 {
        background-image: url('./../../assets/images/puppycube/div_10.jpg');
        height:898px;
        max-width:1920px;
        color: black;
    }

    .word_position_10 {
        width: 1080px;
        height: 643px;
        margin: 0 auto;
        text-align: right;
        padding-top: 640px;
    }

    .descrip_slogan_10 {
        font-size: 40px;
        line-height: 65px;
        font-family: "Microsoft YaHei";
        font-weight: bold;
    }

    .descrip_conetent_10 {
        font-size: 17px;
        font-family: "Microsoft YaHei";
        margin-top: 10px;
    }

    .carrousel {
        width: 100%;
        max-width: 1920px;
        height: 602px;
        margin: 0 auto;

    }

    .carrousel_container {
        width: 100%;
        position: relative;
        height: 602px;
        padding-top: 61px;
        padding-bottom: 61px;
    }

    .div_highLight {
        background-color: rgba(255,255,255,0.2);
    }
</style>
