<template>
  <div id="PuppyCube_bak">
    <div class="video_container">
        <div class="box">
            <video src="http://source.hachismart.com/video/cube_30s.mp4" id="bgvideo" autoplay loop width="100%" muted="true" poster="./../../assets/video/videoload-cube.jpg">
            </video>
            <div class="divMp4Front">
            </div> 
            <div class="divMp4Words">
                <div class="div_txt_btn">
                    
                    <div class="main_title">
                        <div class="title_01">puppy cube</div>
                        <div class="title_02">An all-in-one ultra-short throw projector</div>
                        <div class="title_03">Make Any Surface Interactive</div>
                    </div>
                    <br />
                    <br />
                    <div class="video_btn1">
                        <div class="video_btns" >
                            <div class="video_btn2" @click="PlayVideo()">
                                <img class="imgPlay" src="./../../assets/images/puppy_cube/button_wzsp.png">
                                <span class="span_b">Watch Our Video</span>   
                            </div>
                            <!-- <div class="video_space"></div> -->
                            <!-- <a href="https://z.jd.com/project/details/101098.html" target="_blank">
                            <div class="video_btn3">
                                <img class="imgPlay" src="./../../assets/images/puppy_cube/button_jdzc.png">
                                <span class="span_b">京东众筹</span>   
                            </div>
                            </a> -->
                            <!-- <div class="video_btn3" @click="OrderCubeS()"> -->
                            <!-- <a class="video_btn3" href="https://www.indiegogo.com/projects/puppy-cube-touchscreen-short-throw-projector/x/19113580#/" target="_blank" >
                            <img class="imgPlay" style="margin-top:15px !important;" src="./../../assets/images/puppy_cube/icon_puppy.png">
                            <span class="span_b">Crowdfounding</span>
                            </a> -->
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    </div>

    <video v-show="videoPlay" src="http://source.hachismart.com/video/puppy_cube(EN).mp4" id="fullVideo" controls="controls" width="100%" poster="./../../assets/video/videoload-cube.jpg">
    </video>

    <div class="designImg" style="background-color: #000000;">
        <div class="div_image_common div_cpxt">
            <div class="img_descrip word_position_cpxt">
                <div class="descrip_slogan">Digital screens are a thing of the past</div>
                <div class="descrip_content">puppy cube is what we call a smart projector. <br/>Point it at any flat surface and turn it into an interactive space. <br/>Lay it flat and turn any wall into a home theater. <br/>You’ve never experienced something like this before.</div>
            </div>
        </div>
    </div>
    <div class="designImg">
        <Banner :slideLists="designList" :swiperHeight="'1010px'"></Banner>
    </div>
    <div>
        <Banner :slideLists="smartHomeList" :swiperHeight="'1010px'"></Banner>
    </div>
    <div>
        <Banner :slideLists="smartOfficeList" :swiperHeight="'1010px'"></Banner>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <div class="div_image_common div_aick">
            <div class="img_descrip word_position_aick">
                <div class="descrip_slogan">The technology behind puppy cube</div>
                <div class="descrip_content">Projectors with basic touch functionality has been around for a while.<br/>Projectors with multi-touch technology as responsive as capacitive displays has not. <br/>The technology that drives puppy cube is called AnyTouch. Try it and you will understand why.</div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#121315;">
        <div class="div_image_common div_cdj">
            <div class="word_width">
                <div class="img_descrip word_position_cdj">
                    <div class="descrip_slogan">A small cube that will dwarf your TV</div>
                    <div class="descrip_content" style="font-size:20px;">Project up to 100 inches of 4K quality content as short as only 20 inches from a wall. puppy cube has both autofocus and automatic keystone correction, making the setup process quick and easy. There’s also manual focus if you prefer to do it yourself.</div>
                </div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <div class="div_image_common div_cpts">
             <!-- <div class="img_descrip word_position_cpts">
                <div class="descrip_title cpts_title">产品图赏</div>
            </div> -->
        </div>
    </div>
    <!-- <div class="designImg" style="background-color:#000000;">
        <div class="para_height_width div_image_common">
            <div>
                <div class="paraLeft">
                    <div class="descrip">
                        <div class="productType">puppy&nbsp;&nbsp;&nbsp;cube</div>
                        <div class="para">Product Specifications</div>
                    </div>
                    <div class="topLine"></div>
                    <img class="puppy_logo" src="./../../assets/images/logo.png">
                    <div class="div_product">
                        <img class="img_product" src="./../../assets/images/puppy_cube/cube.png">
                    </div>
                </div>
                <div class="paraRight">
                    <div class="para_block">
                        <div class="para_title">Product information</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail">
                            <div class="detail_line">  </div>
                            <div class="detail">
                                <div class="detail_key">Name</div>
                                <div class="detail_value">puppy cube</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Model</div>
                                <div class="detail_value">PAIPMSVT01</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Size</div>
                                <div class="detail_value">132 x 86 x 213（mm）</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Weight</div>
                                <div class="detail_value">1.6 KG</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Color</div>
                                <div class="detail_value">Starry grey</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Material</div>
                                <div class="detail_value">Translucent coated glass+Aluminum alloy+PC/ABS</div>
                            </div>
                        </div>   
                        <div class="clear"></div>
                    </div>
                    <div class="para_block para_margin_top">
                        <div class="para_title">System parameters</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">CPU</div>
                                <div class="detail_value">Mstar 6A938</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">RAM</div>
                                <div class="detail_value">4GB</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Built-in storage</div>
                                <div class="detail_value">32GB eMMC</div>
                            </div>
                        </div>    
                        <div class="clear"></div>
                    </div>
                    <div class="para_block para_margin_top">
                        <div class="para_title">System functions</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">OS</div>
                                <div class="detail_value">puppyUI 1.0</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Android system</div>
                                <div class="detail_value">Android 6.0</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Dynamic image</div>
                                <div class="detail_value">HDR</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Multi-scr interaction</div>
                                <div class="detail_value">Airplay/DLNA/Miracast</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Wi-Fi<br/>&nbsp;<br/>&nbsp;</div>
                                <div class="detail_value">Wi-Fi: 2.4G/5GHz dual frequency<br/>802.11 a/b/g/n/ac<br/>2 x 2 Dual antenna, dual transmission and reception</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Bluetooth</div>
                                <div class="detail_value">BT 4.0 and above/BLE independent antenna</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Camera</div>
                                <div class="detail_value">5M camera module</div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                     <div class="para_block para_margin_top">
                        <div class="para_title">Projection parameters</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">Projection ratio</div>
                                <div class="detail_value">0.39:1</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Picture size</div>
                                <div class="detail_value">23~100 inches</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Recommended size</div>
                                <div class="detail_value">23~40 inches</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Off-axis</div>
                                <div class="detail_value">100% and above</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">Keystone correction</div>
                                <div class="detail_value">Support automatic vertical keystone correction</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">Projection mode</div>
                                <div class="detail_value">Desk projection, support horizontal and vertical placement</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">Focus mode</div>
                                <div class="detail_value">Auto focus and allow manual adjustment by remote control</div>
                            </div>
                        </div><div class="clear"></div>
                    </div>
                     <div class="para_block para_margin_top">
                        <div class="para_title">Optical parameters</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">Standard resolution</div>
                                <div class="detail_value">1280 x 720</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Compatible resolution</div>
                                <div class="detail_value">1080p/2K/4K</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Display technique</div>
                                <div class="detail_value">DLP</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Lens</div>
                                <div class="detail_value">High transmittance coated lens</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">Center brightness</div>
                                <div class="detail_value">300ANSI</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Brightness Uniformity</div>
                                <div class="detail_value">JBMA > 85%</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">Color gamut</div>
                                <div class="detail_value">>=100%NTSC</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">Center contrast</div>
                                <div class="detail_value">600:1</div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                     <div class="para_block para_margin_top">
                        <div class="para_title">Audio</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">Channel</div>
                                <div class="detail_value">2.0 channels</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Speaker</div>
                                <div class="detail_value">Full frequency 36mm x 2</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Power</div>
                                <div class="detail_value">5W x 2</div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                     <div class="para_block para_margin_top">
                        <div class="para_title">Port</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">Input</div>
                                <div class="detail_value">USB 3.0 Host x 1/HDMI 2.0 Input x 1/DC-in</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Output</div>
                                <div class="detail_value">3.5mm headphone jack x 1</div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="para_block para_margin_top">
                        <div class="para_title">Indicators</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail"> 
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">Status indication<br/>&nbsp;</div>
                                <div class="detail_value">Different indicators are used to indicate various statuses like power on/off, lower battery, charging</div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="para_block para_margin_top">
                        <div class="para_title">Sensor</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail"> 
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">Position sensing</div>
                                <div class="detail_value">Acceleration sensor</div>
                            </div>
                        </div> 
                        <div class="clear"></div>
                    </div>
                    <div class="para_block para_margin_top">
                        <div class="para_title">Control</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail"> 
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">Key</div>
                                <div class="detail_value">Power key, reset key, volume up and down</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Remote control</div>
                                <div class="detail_value">Bluetooth remote control</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Interactive<br/>&nbsp;</div>
                                <div class="detail_value">The projection surface is available for touch operation. Support 10 points multi touch and gestures</div>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="para_block para_margin_top">
                        <div class="para_title">Electrical specification</div>
                        <div class="para_title_line"></div>
                        <div class="para_detail"> 
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">Noise</div>
                                <div class="detail_value">&lt; 30db</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Power consumption</div>
                                <div class="detail_value">20 ~ 40W</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Built-in battery</div>
                                <div class="detail_value">11.1v 5000mAh</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">Power supply</div>
                                <div class="detail_value">AC100-240V, 50/60Hz</div>
                            </div>                           
                        </div>
                        <div class="clear"></div>
                    </div>                                
                </div>
            </div>
        </div>
    </div> -->
  </div>

</template>

<script>
import Banner from './../common/Banner'
import {validPhone, orderProduct} from './../axios/api';

export default {
    data() {
        return {
            videoPlay: false,
            orderCubeS: false,
            loadProgress: 0,
            errMsg: '',
            orderUser: {
                phone: '',
                name: '',
                mail: '',
            },
            designList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube/div_sj_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube/div_sj_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#000000",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube/div_sj_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#ffffff",
            }
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube/div_zhjt_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#000000",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube/div_zhjt_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#000000",
            }, 
            // {            
            //     id: 3,
            //     img: require("./../../assets/images/puppy_cube/div_zhjt_03.jpg"),
            //     maxWidth: '2580px',
            //     backgroundColor: "#e3d3c4",
            // },
            // {            
            //     id: 4,
            //     img: require("./../../assets/images/puppy_cube/div_zhjt_04.jpg"),
            //     maxWidth: '2580px',
            //     backgroundColor: "#ffffff",
            // },
            // {            
            //     id: 5,
            //     img: require("./../../assets/images/puppy_cube/div_zhjt_05.jpg"),
            //     maxWidth: '2580px',
            //     backgroundColor: "#ffffff",
            // }
            ],
            smartOfficeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube/div_zhbg_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#000000",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube/div_zhbg_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#E4E4E8",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube/div_zhbg_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#0d0f09",
            }
            ]
            
        }
    },
    components: {
        Banner
    },
    mounted() {
        document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
        document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
        document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;
        let _this = this;
        window.onresize = function temp() {
            if(document.querySelector(".divMp4Front")){
                document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
                }
            if(document.querySelector(".divMp4Words")){
                document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
            }
            if(document.querySelector(".div_txt_btn")){document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;}

        };

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
            var mVideo = document.querySelector("#fullVideo");
          if (document.webkitIsFullScreen) {
            _this.videoPlay = true;
          } else {
            _this.stopVideo();
          }
        }, false);

    },
    methods: {

        PlayVideo: function(){
            var mVideo = document.querySelector("#fullVideo");
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
        stopVideo: function(){
            this.videoPlay = false;
            var mVideo = document.querySelector("#fullVideo");
            mVideo.pause();
        },
        selectVideo: function(index){
        },
        displayVideoSelecter: function(){
            document.querySelector(".videoSelect").style.opacity = 1;
        },

        btnMouseOver: function(className){
            document.querySelector(className).style.backgroundColor = "#0078fa";
        },

        btnMouseOut: function(className){
            document.querySelector(className).style.backgroundColor = "#f2f2f2";
        },

        videoSelecterFadeOut: function(){
            var timer,timer2,a=1,t=true;
            timer = setInterval(function(){              
                a -= 0.2;
                t = false;
                if( a <= 0){
                    a=0;
                    clearInterval(timer);
                }
                document.querySelector(".videoSelect").style.opacity = a;                            
            },100)   
        },

    }
}
</script>

<style lang="scss" scoped>
    $headerHeight: 46px;
    $headerColor: #f2f2f2;

    #bgvideo {
        position: relative;
        top: 0px; 
        left: 0px;
        min-width: 100%;
        width: 100%; 
        height: auto; 
        // z-index: -100;
        //background: url(polina.jpg) no-repeat;
        background-size: cover; 
    }

    #fullVideo {
        margin-bottom: -8px;
    }
    .video_container {
        background-color: black;
    }
    .box {
        display: inline-block;
        background-color: black;
        width: 100%;
        max-width: 1920px;
    }

    .videoImage1, .videoImage2 {
        cursor: pointer;
    }

    .divmp4 {
        width: 100%;
        text-align: center;
        background-color: black;
    }

    .divMp4Front {
        position: absolute;
        top: 46px;
        left: 0px;
        width: 100%;
        //height: 100%;
        background-color: black;
        opacity: 0.4;
        text-align: center;
        vertical-align: middle;
        // z-index: -99;
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
        top: 46px;
        width: 100%;
        text-align: center;
        vertical-align: middle;
        color: white;
        display: table;
        left: 0px;
    }

    .puppy_txt1{
        font-family: 'PingFangSC-Medium', 'PingFang SC Medium', 'PingFang SC';
        font-weight: 500;
        font-style: normal;
        //font-size: 25px;
        color: #FFFFFF;
        text-align: center;
        line-height: normal;
    }
    span {
        display:inline-block;
    }

    .span_b {
        font-size: 20px;
        line-height: 52px;
        color: black;
        white-space: nowrap;
        overflow:hidden;
        margin-right: 10px;
    }

    .div_txt_btn {
        vertical-align: middle; 
        display: table-cell; 
        overflow: hidden; 
        width: 100%;
        .div_words_img {
            max-width: 580px;
            width: 100%;
        }
    }

    .title_01 {
        font-size: 90px;
    }

    .title_02 {
        font-size: 20px;
        margin-top: 15px;
    }

    .title_03 {
        font-size: 60px;
        margin-top: 15px;
    }

    .video_btn1 {
        text-align:center;
    }
    
    .video_btns {
        width: 470px;
        height: 40px;
        text-align: center;
        margin: 0 auto;
        span:hover {
            color: #929497;
        }
    }

    .video_btn2 {
        width: 220px;
        height: 52px;
        cursor: pointer;
        text-align: center;
        // float: left;
        margin: 0 auto;
        background-color: #f2f2f2;
    }

    .video_space {
        width: 30px;
        height: 40px;
        float: left;
        margin: 0 auto;
    }

    .video_btn3 {
        width: 220px;
        height: 52px;
        cursor: pointer;
        text-align: center;
        float: left;
        margin: 0 auto;
        background-color: #f2f2f2;
    }

    .imgPlay {
        -webkit-filter: grayscale(100%);  
       -webkit-filter: grayscale(1);  
       filter: grayscale(100%);  
       filter: gray;  
       margin-top: 13px;
       margin-bottom: 8px;
       margin-left: 20px;
       float: left;
    }

    .closeBtnContainer {
        position: absolute;
        top:0px;
        left: 0px;
        width: 100%;
        height: $headerHeight;
        z-index: 99999;
    }

    .closeBtn {
        height: $headerHeight;
        width: $headerHeight;
        background-color: white;;
        opacity: 0.4;
        float: right;
        margin: 1px;
        text-align: center;
        vertical-align: middle;
        line-height: $headerHeight;
        font-size: 25px;
        cursor: pointer;
    }
    .designImg {
        text-align: center;
        img {
            max-width: 1280px;
            width: 100%;
            display: block;  
            margin: 0 auto;
        }
    }

    .designImg_mobile {
        text-align: center;
        img {
            width: 100%;
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

    .div_cpxt {
        background-image: url('./../../assets/images/puppy_cube/div_cpxt.jpg');
        height:1010px;
        max-width:2580px;
        color: white;
    }

    .div_aick{
        background-image: url('./../../assets/images/puppy_cube/div_aick.jpg');
        height:1010px;
        max-width:2580px;
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
            font-size: 50px;
            // margin-top: 25px;
            font-weight: bold;
        }

        .descrip_content {
            font-size: 24px;
            margin-top: 50px;
            line-height: 35px;
        }
    }

    .word_width {
        width: 1010px;
        margin: 0 auto;
    }

    .word_position_cpxt {
        margin-top: 215px;
    }

    // .img_aick {
    //     max-width: 2580px;
    //     height: 1010px;
    //     background-image: url("./../../assets/images/puppy_cube_s/div_aick.jpg");
    // }

    .word_position_aick {
        margin-top: 720px;
    }

    .word_position_aiyy {
        margin-top: 200px;
        color:white;
        text-align: center;
    }

    // .div_word{
    //     width: 1010px;
    //     margin: 0 auto;
    // }

    .word_position_cdj {
        margin-top: 250px;
        margin-left: 500px;
        color: white !important;
        text-align: left;
        font-weight: 100 !important;
        width: 510px;
    }

     .word_position_cpts {
        margin-top: 220px;
        color: black !important;
        text-align: center;
        font-weight: 100 !important;
        width: 650px;
        .cpts_title{
            font-size: 30pt;
        }
    }

    .div_aiyy {
        background-image: url('./../../assets/images/puppy_cube/div_aiyy.jpg');
        height:1010px;
        max-width: 2580px;;
    }

    .div_cdj {
        background-image: url('./../../assets/images/puppy_cube/div_cdj.jpg');
        height:1010px;
        max-width:2580px;
    }

    .div_cpts {
        background-image: url('./../../assets/images/puppy_cube/div_cpts.jpg');
        height:1010px;
        max-width:2580px;
    }

    .div_cpcs_01 {
        background-image: url('./../../assets/images/puppy_cube/div_cpcs_01.jpg'); 
        height:955px !important;
        max-width:1440px;
    }

    .div_cpcs_02 {
        background-image: url('./../../assets/images/puppy_cube/div_cpcs_02.jpg');
        height:955px !important;
        max-width:1440px;
    }

    .para_height_width {
        width: 1440px;
    }

    .paraLeft{
        width: 530px;
        height: 70px;
        margin-top: 150px;
        color: white;
        font-weight: 100;
        float: left;
        .puppy_logo {
            float: right;
            width: 74px;
        }
        .div_product {
            width: 530px;
            margin-top: 1010px;
            .img_product {
                width: 323px;
                float: right;
            }
        }

        .topLine{
            height: 56px;
            width: 4px;
            background-color: #b3b3b3;
            float: right;
            margin: 0px 25px 0px 25px;
        }
        .descrip {
            width: 165px;
            float: right;
            text-align: left;
        }
        .productType {
            font-size: 28px;
            margin-top: -5px;
        }

        .para {
            margin-top: 10px;
            font-size: 16px;
        }
    }

    .clear {
        clear:both;
    }

    .paraRight {
        width: 800px;
        color: white;
        float:left;
        margin-top: 150px;
        margin-bottom: 150px;

        .para_block {
            position: relative;
        }

        .para_title {
            margin-left: 100px;
            text-align: left;
            font-size: 18px;
            line-height: 26px;
            position: absolute;
        }

        .para_title_line {
            margin-left: 100px;
            height: 26px;
            float: left;
            width: 70px;
            border-bottom: 2px solid white;
        }

        .para_detail {
            float: left;
            margin-left: 12px;
            width: 560px;
            .detail_line{
                width: 560px;
                height: 26px;
                border-bottom: 1px solid #404040;
            }

            .detail {
                font-size: 12px;
                font-weight: 200;
                line-height: 23px;
                .detail_key{
                    float: left;
                    margin-left: 18px;
                    width: 140px;
                    border-bottom: 1px solid #333333;
                }

                .detail_value{
                    float: left;
                    width: 385px;
                    margin-left: 15px;
                    border-bottom: 1px solid #333333;
                }
            }
        }

        .para_margin_top {
            margin-top: 8px;
        }

        .height_50 {
            height: 69px;
            line-height: 69px;
        }
    }

    .div_order {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 10;
            
            .div_order_01 {
            padding-top: 120px;
            width: 100%;
            .order_content {
                width: 500px;
                height: 600px;;
                background-color: white;
                margin: 0 auto;
                text-align: left;
                position: relative;

                img {
                    height: 50px;
                    margin-top: 20px;
                    margin-left: 20px;
                }

                .close_order {
                    height: 35px;
                    width: 35px;
                    cursor: pointer;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    line-height: 35px;
                    text-align: center;
                    font-size: 15pt;
                    span:hover {
                        color: #929497;
                    }
                }

                .order_title {
                    text-align: center;
                    margin-top: 60px;
                    font-size: 20pt;
                }

                .order_info {
                    margin-top: 50px;
                    margin-left: 50px;
                    div{
                        height: 80px;

                        span{
                            width: 120px;
                            text-align: right;
                        }

                        input {
                            height: 25px;
                            width: 220px;
                        }
                    }
                }

                .err_msg {
                    margin-top: -20px;
                    margin-left: 50px;
                    margin-right: 50px;
                    color: red;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                }

                .order_confirm {
                    margin-top: 20px;
                    text-align: center;
                    .confirm_btn {
                        width: 140px;
                        height: 40px;
                        line-height: 40px;
                        cursor: pointer;
                        border-radius: 5px;
                        text-align: center;
                        margin: 0 auto;
                        background-color: #f2f2f2;
                        border: none;
                        font-size: 12pt;
                    }
                }

            }
        }
    }



    .div_order_mobile {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        text-align: center;
        z-index: 99999;
            
            .div_order_01 {
            width: 100%;
            height: 100%;
            .order_content {
                width: 100%;
                height: 100%;
                background-color: white;
                margin: 0 auto;
                text-align: left;
                position: relative;

                img {
                    height: 50px;
                    margin-top: 20px;
                    margin-left: 20px;
                }

                .close_order {
                    height: 35px;
                    width: 35px;
                    cursor: pointer;
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    line-height: 35px;
                    text-align: center;
                    font-size: 15pt;
                    span:hover {
                        color: #929497;
                    }
                }

                .order_title {
                    text-align: center;
                    margin-top: 60px;
                    font-size: 20pt;
                }

                .order_info {
                    margin-top: 50px;
                    margin-left: 50px;
                    div{
                        height: 80px;

                        span{
                            width: 80px;
                            text-align: right;
                        }

                        input {
                            height: 25px;
                            width: 150px;
                        }
                    }
                }

                .err_msg {
                    margin-top: -20px;
                    margin-left: 50px;
                    margin-right: 50px;
                    color: red;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                }

                .order_confirm {
                    margin-top: 20px;
                    text-align: center;
                    .confirm_btn {
                        width: 140px;
                        height: 40px;
                        line-height: 40px;
                        cursor: pointer;
                        border-radius: 5px;
                        text-align: center;
                        margin: 0 auto;
                        background-color: #f2f2f2;
                        border: none;
                        font-size: 12pt;
                    }
                }

            }
        }
    }
</style>

