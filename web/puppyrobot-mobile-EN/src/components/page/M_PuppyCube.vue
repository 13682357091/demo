<template>
  <div id="PuppyCube">
    <div class="video_container">
        <div class="box">
            <img id="bgvideo" width="100%" src="./../../assets/images/m_puppy_cube/video_background.gif">
            <div class="divMp4Front">
            </div> 
            <div class="divMp4Words">
                <div class="div_txt_btn">
                    <div class="main_title">
                        <div class="title_01">puppy cube</div>
                        <div class="title_02">An all-in-one ultra-short throw projector</div>
                        <div class="title_03">Make any surface interactive</div>
                    </div>
                    <div class="video_btn1">
                        <div class="video_btns" >
                            <div class="video_btn2" @click="PlayVideo()">
                                <img class="imgPlay" src="./../../assets/images/m_puppy_cube_s/button_wzsp.png">
                                <span class="span_b">Watch our video</span>   
                            </div>
                            <!-- <div class="video_space"></div>
                            <a class="video_btn3" href="https://www.indiegogo.com/projects/puppy-cube-touchscreen-short-throw-projector/x/19113580#/">
                                <img class="imgPlay" style="margin-top:12px !important;" src="./../../assets/images/m_puppy_cube/icon_puppy.png">
                                <span class="span_b"> Crowdfounding</span>
                            </a> -->

                        </div>
                    </div>
                </div>       
            </div>
        </div>
    </div>

    <video src="http://source.puppyrobot.com/video/puppycube_phone(english).mp4" v-show="videoPlay" id="fullVideo" controls="controls" width="100%" poster="./../../assets/video/videoload-cube.jpg">
    </video>

    <div class="designImg">
        <img src="./../../assets/images/m_puppy_cube/div_cpxt.jpg"  style="max-width:750px;">
    </div>
    <div class="designImg">
        <Banner :slideLists="designList"></Banner>
    </div>
    <div>
        <Banner :slideLists="smartHomeList"></Banner>
    </div>
    <div>
        <Banner :slideLists="smartOfficeList"></Banner>
    </div>

    <div class="designImg" style="background-color:#FFFFFF;">
      <img src="./../../assets/images/m_puppy_cube/div_aick.jpg"  style="max-width:750px;">
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <img src="./../../assets/images/m_puppy_cube/div_cdj.jpg"  style="max-width:750px;">
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <img src="./../../assets/images/m_puppy_cube/div_cpts.jpg"  style="max-width:750px;">
    </div>
    <!-- <div class="productPara">
        <div class="paraTop">
            <img src="./../../assets/images/logo.png">
            <div class="topLine"></div>
            <div class="descrip">
                <div class="productType">puppy cube</div>
                <div class="para">Product Specifications</div>
            </div>
        </div>
        <div class="white_space"></div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Product information</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Name</div>
            <div class="detailContent">puppy cube</div>

            <div class="detailTitle">Model</div>
            <div class="detailContent">PAIPMSVT01</div>
            <div class="detailTitle">Size</div>
            <div class="detailContent">132 x 86 x 213（mm）</div>

            <div class="detailTitle">Weight</div>
            <div class="detailContent">1.6 KG</div>

            <div class="detailTitle">Color</div>
            <div class="detailContent">Starry grey</div>

            <div class="detailTitle">Material<br/>&nbsp;</div>
            <div class="detailContent">Translucent coated glass+Aluminum <br/>alloy+PC/ABS</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">System parameters</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">CPU</div>
            <div class="detailContent">Mstar 6A938</div>

            <div class="detailTitle">RAM</div>
            <div class="detailContent">4GB</div>

            <div class="detailTitle">Built-in storage</div>
            <div class="detailContent">32GB eMMC</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">System functions</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">OS</div>
            <div class="detailContent">puppyUI 1.0</div>

            <div class="detailTitle">Android system</div>
            <div class="detailContent">Android 6.0</div>

            <div class="detailTitle">Dynamic image</div>
            <div class="detailContent">HDR</div>

            <div class="detailTitle">Multi-scr interaction</div>
            <div class="detailContent">Airplay/DLNA/Miracast</div>

            <div class="detailTitle">Wi-Fi<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;</div>
            <div class="detailContent">Wi-Fi: 2.4G/5GHz dual frequency<br/>802.11 a/b/g/n/ac<br/>2 x 2 Dual antenna, dual transmission <br/>and reception</div>

            <div class="detailTitle">Bluetooth<br/>&nbsp;</div>
            <div class="detailContent">BT 4.0 and above/BLE independent <br/>antenna</div>

            <div class="detailTitle">Camera</div>
            <div class="detailContent">5M camera module</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Projection parameters</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Projection ratio</div>
            <div class="detailContent">0.39:1</div>

            <div class="detailTitle">Picture size</div>
            <div class="detailContent">23~100 inches</div>

            <div class="detailTitle">Recommended size</div>
            <div class="detailContent">23~40 inches</div>

            <div class="detailTitle">Off-axis</div>
            <div class="detailContent">100% and above</div>

            <div class="detailTitle">Keystone correction<br/>&nbsp;</div>
            <div class="detailContent">Support automatic vertical keystone <br/>correction</div>

            <div class="detailTitle">Projection mode<br/>&nbsp;</div>
            <div class="detailContent">Desk projection, support horizontal and <br/>vertical placement</div>

            <div class="detailTitle">Focus mode<br/>&nbsp;</div>
            <div class="detailContent">Auto focus and allow manual adjustment <br/>by remote control</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Optical parameters</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Standard resolution</div>
            <div class="detailContent">1280 x 720</div>

            <div class="detailTitle">Compatible resolution</div>
            <div class="detailContent">1080p/2K/4K</div>

            <div class="detailTitle">Display technique</div>
            <div class="detailContent">DLP</div>

            <div class="detailTitle">Lens</div>
            <div class="detailContent">High transmittance coated lens</div>

            <div class="detailTitle">Center brightness</div>
            <div class="detailContent">300ANSI</div>

            <div class="detailTitle">Brightness Uniformity</div>
            <div class="detailContent">JBMA > 85%</div>
            
            <div class="detailTitle">Color gamut</div>
            <div class="detailContent">>=100%NTSC</div>

            <div class="detailTitle">Center contrast</div>
            <div class="detailContent">600:1</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Audio</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Channel</div>
            <div class="detailContent">2.0 channels</div>

            <div class="detailTitle">Speaker</div>
            <div class="detailContent">Full frequency 36mm x 2</div>

            <div class="detailTitle">Power</div>
            <div class="detailContent">5W x 2</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Port</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Input<br/>&nbsp;</div>
            <div class="detailContent">USB 3.0 Host x 1/HDMI 2.0 <br/>Input x 1/DC-in</div>

            <div class="detailTitle">Output</div>
            <div class="detailContent">3.5mm headphone jack x 1</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Indicators</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Status indication<br/>&nbsp;<br/>&nbsp;</div>
            <div class="detailContent">ifferent indicators are used to indicate <br/>various statuses like power on/off, <br/>lower battery, charging</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Sensor</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Position sensing</div>
            <div class="detailContent">Acceleration sensor</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Control</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Key<br/>&nbsp;</div>
            <div class="detailContent">Power key, reset key, volume up and <br/>down</div>

            <div class="detailTitle">Remote control</div>
            <div class="detailContent">Bluetooth remote control</div>

            <div class="detailTitle">Interactive<br/>&nbsp;<br/>&nbsp;</div>
            <div class="detailContent">The projection surface is available for <br/>touch operation. Support 10 points multi <br/>touch and gestures</div>
            <div class="clear"></div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">Electrical specification</div>
            <div class="white_space_25"></div>
            <div class="detailTitle">Noise</div>
            <div class="detailContent">&lt; 30db</div>

            <div class="detailTitle">Power consumption</div>
            <div class="detailContent">20 ~ 40W</div>

            <div class="detailTitle">Built-in battery</div>
            <div class="detailContent">11.1v 5000mAh</div>

            <div class="detailTitle">Power supply</div>
            <div class="detailContent">AC100-240V, 50/60Hz</div>
            <div class="clear"></div>
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
            orderCube: false,
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
                img: require("./../../assets/images/m_puppy_cube/div_sj_01.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube/div_sj_02.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/m_puppy_cube/div_sj_03.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff",
            }
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/m_puppy_cube/div_zhjt_01.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube/div_zhjt_02.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
            }
            ],
            smartOfficeList: [
            {            
                id: 1,
                img: require("./../../assets/images/m_puppy_cube/div_zhbg_01.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
               
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube/div_zhbg_02.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                }, 
            {            
                id: 3,
                img: require("./../../assets/images/m_puppy_cube/div_zhbg_03.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                }
            ]
            
        }
    },
    components: {
        Banner
    },
    mounted() {
        let _this = this;
        document.querySelector(".divMp4Front").style.height = (window.document.body.offsetWidth * (960 /750)).toFixed(2) + "px";
        document.querySelector(".divMp4Words").style.height = (window.document.body.offsetWidth * (960 /750)).toFixed(2) + "px";
        document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;
        window.onresize = function temp() {
            //根据视频高宽比计算div的高度
            if(document.querySelector(".divMp4Front")){
                document.querySelector(".divMp4Front").style.height = (window.document.body.offsetWidth * (960 /750)).toFixed(2) + "px";
                }
            if(document.querySelector(".divMp4Words")){
                document.querySelector(".divMp4Words").style.height = (window.document.body.offsetWidth * (960 /750)).toFixed(2) + "px";
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

        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        },
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

    
        OrderCubeDisplay: function() {
            this.orderCube = !this.orderCube;
            if(this.orderCube) {
                document.getElementById('orderName').focus();
            } else {
                this.errMsg = "";
                this.orderUser.phone = "";
                this.orderUser.name = "";
                this.orderUser.mail = "";
            }
        },

        validataPhone: function() {
            if (!this.orderUser.phone) {
                this.errMsg = "手机号码不能为空。";
                document.getElementById('orderPhone').focus();
                return;
            } else if(!this.fChkPhone(this.orderUser.phone)) {
                this.errMsg = "手机号码格式有误。";
                document.getElementById('orderPhone').focus();
                return;
            }

            validPhone(this.orderUser.phone).then(res=>{
                if(res.status == 200) {
                    if(res.data.status == 1) {
                        document.getElementById('orderBtn').disabled = false;
                        this.errMsg = "";
                    } else if (res.data.status == 2) {
                        this.errMsg = "该手机号码已经预约过，请勿重复预约。";
                        document.getElementById('orderBtn').disabled = true;
                        document.getElementById('orderPhone').focus();
                    } else {
                        this.errMsg = res.data.error;
                    }
                } else {
                     this.errMsg = "未知错误";
                     document.getElementById('orderPhone').focus();
                    return;
                }
                
            }).catch(err=>{
                console.log(err, '失败');
            });
        },

        orderCube_Data: function() {
            this.errMsg = '';
            if(!this.orderUser.name) {
                 this.errMsg = "姓名不能为空。";
                 document.getElementById('orderName').focus();
                return;
            }

            if(!this.orderUser.phone) {
                 this.errMsg = "手机号码不能为空。";
                 document.getElementById('orderBtn').disabled = true;
                 document.getElementById('orderPhone').focus();
                return;
            } else {
                if(this.orderUser.phone.length !== 11) {
                     this.errMsg = "手机号码格式有误。";
                     document.getElementById('orderPhone').focus();
                    return;
                }
            }

            if(!this.orderUser.mail) {
                 this.errMsg = "邮箱不能为空。";
                 document.getElementById('orderMail').focus();
                return;
            } else {
                if(!this.fChkMail(this.orderUser.mail)){
                   this.errMsg = "邮箱格式有误。";
                    document.getElementById('orderMail').focus();
                   return;
                }
            }

            document.getElementById('orderBtn').disabled = true;
            var that = this;
            orderProduct(this.orderUser.name,this.orderUser.phone,this.orderUser.mail, 'puppy cube').then(res=>{
                if(res.status == 200) {
                    if(res.data.status == 1) {
                        this.orderUser.name = '';
                        this.orderUser.phone = '';
                        this.orderUser.mail = '';
                        this.errMsg = "预约成功,可继续预约或点击[X]按钮关闭窗口。";
                    } else if (res.data.status == 2){
                        this.errMsg = "该手机号码已经预约过，请勿重复预约。";
                        document.getElementById('orderPhone').focus();
                    } else {
                        this.errMsg = res.data.error;
                    }
                } else {
                     this.errMsg = "未知错误";
                }
                document.getElementById('orderBtn').disabled = false;
                
            }).catch(err=>{
                console.log(err, '失败');
                document.getElementById('orderBtn').disabled = false;
            })
        },

        fChkMail: function(szMail){ 
            var szReg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; 
            var bChk=szReg.test(szMail); 
            return bChk; 
        },

        fChkPhone: function(szPhone) {
            var szReg =/^13[\d]{9}$|^14[5,7]{1}\d{8}$|^15[^4]{1}\d{8}$|^17[0,6,7,8]{1}\d{8}$|^18[\d]{9}$/;
            var bChk=szReg.test(szPhone); 
            return bChk; 
        }

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
        opacity: 0.6;
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
        font-size: 12px;
        line-height: 42px;
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
            width: 70%;
        }
    }

    .video_btn1 {
        text-align:center;
        margin-top: 50px;
    }
    
    .video_btns {
        width: 300px;
        height: 42px;
        text-align: center;
        margin: 0 auto;
        span:hover {
            color: #929497;
        }
    }

    .video_btn2 {
        width: 140px;
        height: 42px;
        cursor: pointer;
        text-align: center;
        // float: left;
        margin: 0 auto;
        background-color: #f2f2f2;
    }

    .video_space {
        width: 20px;
        height: 40px;
        float: left;
        margin: 0 auto;
    }

    .video_btn3 {
        width: 140px;
        height: 42px;
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
        margin-top: 8px;
        margin-bottom: 8px;
        margin-left: 10px;
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
    .imageTitle {
        position: absolute;
        top: 0px;
        width: 100%;
        .descrip_title {
            font-size: 14px;
            margin-top: 25%;
        }

        .descrip_slogan {
            font-size: 26px;
            font-weight: bold;
        }

        .descrip_content {
            font-size: 12px;
            margin-top: 25px;
        }
    }

    .font_color_white {
        color: white;
    }


    .designImg {
        text-align: center;
        position: relative;
        img {
            width: 100%;
            display: block;  
            margin: 0 auto;
        }
    }

    .description {
        width: 75%;
        font-size: 12px;
        margin: 0 auto;
        padding: 20px 15px 20px 15px;
    }

    .sperateLine {
        width: 90%;
        margin: 0 auto;
        height: 1px;
        background-color: #cfd0d1;
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

    .loading {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 99991;
        top: 46px;
        left: 0px;
        background-color: white;
        span {
            position: absolute;
            display: block;
            font-size: 50px;
            line-height: 50px;
            top: 50%;
            left: 50%;
            width: 140px;
            height: 110px;
            -webkit-transform: translateY(-50%)  translateX(-50%);
            transform: translateY(-50%)  translateX(-50%);
        }

    }

    .productPara {
        width: 100%;
        background-color: black;
        color: white;
        padding-top: 65px;
        padding-bottom: 65px;
        max-width: 750px;
        margin: 0 auto;
        .paraTop{
            width: 300px;
            height: 70px;
            margin: 0 auto;
            border-bottom: 2.5px solid white;
            img {
                float: left;
                width: 60px;
                margin-left: 45px;
                margin-top: 4px;
            }
            .topLine{
                height: 45px;
                width: 3px;
                background-color: #b3b3b3;
                float: left;
                margin: 5px 10px 0px 10px;
            }
            .descrip {
                width: 170px;
                float: left;
                text-align: left;
            }
            .productType {
                font-size: 14px;
                font-weight: bold;
                margin-top: 5px;
            }

            .para {
                font-size: 12px;
                margin-top: 13px;
            }
        }

        .white_space {
            width: 100%;
            height: 50px;
        }

        .white_space_25 {
            width: 100%;
            height: 25px;
        }

        .paraDetail {
            padding: 15px;
            line-height: 21px;
            width: 100%;
            box-sizing: border-box;

            .detailCollectionTitle {
                text-align: center;
                font-weight: normal;
                font-size: 14px;
                line-height: 35px;
                font-weight: bold;
                border-bottom: 1px solid white;
            }

            .detailTitle {
                width: 33%;
                float: left;
                font-size: 12px;
                text-align: right;
                margin-right: 10px;
                border-bottom: 1px solid #333333;
                box-sizing: border-box;
                white-space:nowrap;

            }

            .detailContent {
                // padding-left: 10px;
                float: left;
                width:64%;
                font-size: 12px;
                text-align: left;
                color: #929497;
                border-bottom: 1px solid #333333;
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
                    margin-top: -30px;
                    margin-left: 50px;
                    margin-right: 50px;
                    color: red;
                    text-align: center;
                    height: 30px;
                    line-height: 30px;
                }

                .order_confirm {
                    margin-top: 40px;
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

    .title_01 {
        font-size: 40px;
    }
    .title_02 {
        font-size:13px;
        margin-top: 12.5px;
    }
    .title_03 {
        font-size: 25px;
        margin-top: 20px;
    }

    .clear {
        clear: both;
    }
</style>

