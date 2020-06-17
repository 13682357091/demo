<template>
  <div id="PuppyCubeS">
    <div class="video_container">
      <div class="box">
        <video src="http://source.hachismart.com/video/cube_s_17.mp4" id="bgvideo" autoplay="autoplay" loop="loop" width="100%" muted="true" poster="./../../assets/video/videoload-cube-s-17s.jpg">
        </video>
        <div class="divMp4Front">
        </div>
        <div class="divMp4Words">
          <div class="div_txt_btn">
            <img class="div_words_img" src="./../../assets/images/puppy_cube_s/focus_title_01.png">
            <br />
            <br />
            <div class="video_btn1">
              <div class="video_btns">
                <div class="video_btn2" @click="PlayVideo()">
                  <img class="imgPlay" src="./../../assets/images/puppy_cube_s/button_wzsp.png">
                  <span class="span_b">完整视频</span>
                </div>
                <div class="video_space"></div>
                <div class="video_btn3" @click="OrderCubeS()">
                  <img class="imgPlay" src="./../../assets/images/puppy_cube_s/button_kqyy.png">
                  <span class="span_b">开启预约</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <video id="fullVideo" v-show="videoPlay" src="http://source.hachismart.com/video/cube_s_17.mp4" controls="controls" width="100%" poster="./../../assets/video/videoload-cube-s-17s.jpg">
      </video>

    <div class="div_order" v-show="orderCubeS" @touchmove.prevent>
      <div class="div_order_01">
        <div class="order_content">
          <div class="img_container">
            <img src="./../../assets/images/header/puppyheaderlogo.svg" />
          </div>
          <div class="close_order" @click="OrderCubeS()">
            <span>X</span>
          </div>
          <div class="order_title">预约puppy cube s</div>

          <div class="order_info">
            <div>
              <span>姓名：</span>
              <input id='orderName' v-model="orderUser.name" type="text" />
            </div>

            <div>
              <span>手机号码：</span>
              <input id="orderPhone" type="text" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"
                v-model="orderUser.phone" @blur="validataPhone()" />
            </div>

            <div>
              <span>邮箱：</span>
              <input id="orderMail" type="email" v-model="orderUser.mail" />
            </div>
          </div>

          <div class="err_msg">{{errMsg}}</div>
          <div class="order_confirm">
            <input id="orderBtn" type="button" class="confirm_btn" @click="orderCube()" value="确定预约" />
          </div>
        </div>
      </div>
    </div>

    <div class="designImg" style="background-color:black;">
        <div class="img_cpxt imgBackCenter"> 
            <div class="img_descrip word_position_cpxt">
                <div class="descrip_title">产品形态</div>
                <div class="descrip_slogan">触摸未来，定义AI空间</div>
                <div class="descrip_content">智能交互不再被屏幕束缚，<br/>生活中的每一处都可能成为你的AI入口，<br/>puppy cube s将任意平面变为触摸界面，<br/>提供一个全新的智慧AI空间。</div>
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
        <div class="img_aick imgBackCenter">
             <div class="img_descrip word_position_aick">
                <div class="descrip_title aick_title">AI触控</div>
                <div class="descrip_slogan aick_slogan">AnyTouch，激发生活灵感</div>
                <div class="descrip_content aick_content">AnyTouch空间触控，将多点触控与投影技术完美结合，使空间任意平面变为触摸屏，<br/>创造出丰富的交互灵感和奇妙体验。</div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
      <div class="img_aiyy imgBackCenter">
           <div class="img_descrip word_position_aick">
                <div class="descrip_title aick_title">AI 语音</div>
                <div class="descrip_slogan aick_slogan">唤醒你的智慧伙伴</div>
                <div class="descrip_content aick_content">人工智能语音技术，让puppy cube s成为你家中的智慧新成员。无需遥控远场对话，<br/>多场景语音操控功能，为家人提供无微不至的关怀与服务。</div>
            </div>
      </div>
    </div>
    <div class="designImg" style="background-color:#101010;">
        <div class="img_cdj imgBackCenter">
            <div class="img_descrip word_position_cdj">
                <div class="descrip_title cdj_title">超短焦</div>
                <div class="descrip_slogan cdj_slogan">放在电视柜上的巨幕影院</div>
                <div class="descrip_content cdj_content">先进的超短焦技术，让你拥有一个巨幕影院成为可能。自动对焦和图像调节功能，<br/>使画面在任何场景都清晰呈现。</div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <div class="img_cpts imgBackCenter">
            <div class="img_descrip word_position_cpts">
                <div class="descrip_title cpts_title">产品图赏</div>
            </div>
        </div>
    </div>
    <div class="designImg" style="background-color:#000000;">
        <div class="para_height_width imgBackCenter">
            <div>
                <div class="paraLeft">
                    <div class="descrip">
                        <div class="productType">puppy&nbsp;&nbsp;cube&nbsp;&nbsp;s</div>
                        <div class="para">产品参数</div>
                    </div>
                    <div class="topLine"></div>
                    <img class="puppy_logo" src="./../../assets/images/logo.png">
                    <div class="div_product">
                        <img class="img_product" src="./../../assets/images/puppy_cube_s/cube_s.png">
                    </div>
                </div>
                <div class="paraRight">
                    <div>
                        <div class="para_title">基本信息</div>
                        <div class="para_detail">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">名称</div>
                                <div class="detail_value">puppy cube</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">型号</div>
                                <div class="detail_value">PAIPMSVT02</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">产品尺寸</div>
                                <div class="detail_value">142 x 90 x 218（mm）</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">产品重量</div>
                                <div class="detail_value">1.7 KG</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">产品颜色</div>
                                <div class="detail_value">星空灰</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">产品材质</div>
                                <div class="detail_value">高透光覆膜玻璃面板+铝合金+PC/ABS</div>
                            </div>
                        </div>    
                        <div class="para_title para_margin_top">系统参数</div>
                        <div class="para_detail para_margin_top">
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
                                <div class="detail_key">内置存储</div>
                                <div class="detail_value">64GB eMMC</div>
                            </div>
                        </div>    
                        <div class="para_title para_margin_top">系统功能</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">OS</div>
                                <div class="detail_value">puppyUI 1.0</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Android系统</div>
                                <div class="detail_value">Android 6.0</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">动态图像</div>
                                <div class="detail_value">HDR</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">多屏互动</div>
                                <div class="detail_value">Airplay/DLNA/Miracast</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">人工智能</div>
                                <div class="detail_value">讯飞AIUI</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Wi-Fi<br/>&nbsp;<br/>&nbsp;</div>
                                <div class="detail_value">Wi-Fi: 2.4G/5GHz 双频<br/>802.11 a/b/g/n/ac<br/>2 x 2 双天线 双发双收</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Bluetooth</div>
                                <div class="detail_value">BT 4.0及以上/BLE 独立天线</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">Camera</div>
                                <div class="detail_value">5M camera模组</div>
                            </div>
                        </div>
                        <div class="para_title para_margin_top">投影参数</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">投射比</div>
                                <div class="detail_value">0.39:1</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">画面尺寸</div>
                                <div class="detail_value">23英寸~100英寸</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">推荐尺寸</div>
                                <div class="detail_value">23英寸~40英寸</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">偏轴</div>
                                <div class="detail_value">100%及以上</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">梯形校正</div>
                                <div class="detail_value">支持自动垂直梯形校正</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">投影方式</div>
                                <div class="detail_value">桌面投射，可水平和垂直放置</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">对焦方式</div>
                                <div class="detail_value">自动对焦并可通过遥控器人工调节</div>
                            </div>
                        </div>
                        <div class="para_title para_margin_top">光学参数</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">标准分辨率</div>
                                <div class="detail_value">1280 x 720</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">兼容分辨率</div>
                                <div class="detail_value">1080p/2K/4K</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">显示技术</div>
                                <div class="detail_value">DLP</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">镜头</div>
                                <div class="detail_value">高透光镀膜镜头</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">中心亮度</div>
                                <div class="detail_value">400ANSI</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">色域</div>
                                <div class="detail_value">>=100%NTSC</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">中心对比度</div>
                                <div class="detail_value">600:1</div>
                            </div>
                        </div>
                        <div class="para_title para_margin_top">音频</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">声道</div>
                                <div class="detail_value">2.0声道</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">喇叭单元</div>
                                <div class="detail_value">全频43mm x 2</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">功率</div>
                                <div class="detail_value">7W x 2</div>
                            </div>
                        </div>  
                        <div class="para_title para_margin_top">端口</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">输入</div>
                                <div class="detail_value">USB 3.0 Host x 1/HDMI 2.0 Input x 1/DC-in</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">输出</div>
                                <div class="detail_value">3.5mm耳机接口 x 1</div>
                            </div>
                        </div> 
                        <div class="para_title para_margin_top">指示灯</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">状态提示</div>
                                <div class="detail_value">开/关机、低电、充电，多种状态不同灯光提示</div>
                            </div>
                        </div> 
                        <div class="para_title para_margin_top">传感器</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">位置感应</div>
                                <div class="detail_value">加速度传感器</div>
                            </div>
                        </div> 
                        <div class="para_title para_margin_top">控制</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">按键</div>
                                <div class="detail_value">电源键、复位键、音量加减</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">遥控器</div>
                                <div class="detail_value">蓝牙遥控器</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">交互式</div>
                                <div class="detail_value">可以通过操作投射平面进行触控，支持10点和手势</div>
                            </div>
                        </div>  
                        <div class="para_title para_margin_top">电气规格</div>
                        <div class="para_detail para_margin_top">
                            <div class="detail_line"></div>
                            <div class="detail">
                                <div class="detail_key">噪音</div>
                                <div class="detail_value">&lt; 30db</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">功耗</div>
                                <div class="detail_value">20 ~ 40W</div>
                            </div>
                            <div class="detail">
                                <div class="detail_key">内置电池</div>
                                <div class="detail_value">11.1v 5000mAh</div>
                            </div>
                             <div class="detail">
                                <div class="detail_key">电源</div>
                                <div class="detail_value">AC100-240V, 50/60Hz</div>
                            </div>                           
                        </div>                                
                    </div>
                </div>
            </div>
        </div>
    </div>
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
                img: require("./../../assets/images/puppy_cube_s/div_sj_01.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#ffffff",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_sj_02.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#252427",
                video: "http://source.hachismart.com/video/puppy_cube_s/light_breath.mp4"
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_sj_03.jpg"),
                maxWidth: '1440px',
                backgroundColor: "#ffffff",
            }
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            },
            {            
                id: 4,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_04.jpg"),
                 maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            },
            {            
                id: 5,
                img: require("./../../assets/images/puppy_cube_s/div_zhjt_05.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            }
            ],
            smartOfficeList: [
            {            
                id: 1,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_01.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            },
             {            
                id: 2,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_02.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/puppy_cube_s/div_zhbg_03.jpg"),
                maxWidth: '2580px',
                backgroundColor: "#FFFFFF",
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

        window.onresize = function temp() {
            //根据视频高宽比计算div的高度
            if(document.querySelector(".divMp4Front")){
                document.querySelector(".divMp4Front").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
            }
            if(document.querySelector(".divMp4Words")){
                document.querySelector(".divMp4Words").style.height = ((window.document.body.offsetWidth<1920?window.document.body.offsetWidth:1920) * (1080 /1920)).toFixed(2) + "px";
            }
            if(document.querySelector(".div_txt_btn")){document.querySelector(".div_txt_btn").style.height = document.querySelector(".divMp4Words").style.height;}

        };

        document.addEventListener("fullscreenchange", function () { 
            document.fullscreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        
        document.addEventListener("mozfullscreenchange", function () { 
            document.mozFullScreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        
        document.addEventListener("webkitfullscreenchange", function () { 
            document.webkitIsFullScreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        document.addEventListener("msfullscreenchange", function () { 
            document.msFullscreenElement? this.videoPlay =true : this.videoPlay = false;
        }); 


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
        OrderCubeS: function() {
            this.orderCubeS = !this.orderCubeS;
            if(this.orderCubeS) {
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
                // document.getElementById('orderPhone').focus();
                return;
            } else if(!this.fChkPhone(this.orderUser.phone)) {
                this.errMsg = "手机号码格式有误。";
                // document.getElementById('orderPhone').focus();
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
                        // document.getElementById('orderPhone').focus();
                    } else {
                        this.errMsg = res.data.error;
                    }
                } else {
                     this.errMsg = "未知错误";
                    //  document.getElementById('orderPhone').focus();
                    return;
                }
                
            }).catch(err=>{
                console.log(err, '失败')
            })
        },
        orderCube: function() {
            this.errMsg = '';
            if(!this.orderUser.name) {
                 this.errMsg = "姓名不能为空。";
                //  document.getElementById('orderName').focus();
                return;
            }

            if(!this.orderUser.phone) {
                 this.errMsg = "手机号码不能为空。";
                 document.getElementById('orderBtn').disabled = true;
                //  document.getElementById('orderPhone').focus();
                return;
            } else {
                if(this.orderUser.phone.length !== 11) {
                     this.errMsg = "手机号码格式有误。";
                    //  document.getElementById('orderPhone').focus();
                    return;
                }
            }

            if(!this.orderUser.mail) {
                 this.errMsg = "邮箱不能为空。";
                //  document.getElementById('orderMail').focus();
                return;
            } else {
                if(!this.fChkMail(this.orderUser.mail)){
                   this.errMsg = "邮箱格式有误。";
                    // document.getElementById('orderMail').focus();
                   return;
                }
            }

            document.getElementById('orderBtn').disabled = true;
            var that = this;
            console.log('开始预约...');
            orderProduct(this.orderUser.name,this.orderUser.phone,this.orderUser.mail, 'puppy cube s').then(res=>{
                if(res.status == 200) {
                    if(res.data.status == 1) {
                        this.orderUser.name = '';
                        this.orderUser.phone = '';
                        this.orderUser.mail = '';
                        this.errMsg = "预约成功,可继续预约或点击[X]按钮关闭窗口。";
                        console.log('预约成功...');
                    } else if (res.data.status == 2){
                        this.errMsg = "该手机号码已经预约过，请勿重复预约。";
                        // document.getElementById('orderPhone').focus();
                    } else {
                        this.errMsg = res.data.error;
                    }
                } else {
                     this.errMsg = "未知错误";
                     console.log('错误...');
                }
                document.getElementById('orderBtn').disabled = false;
                
            }).catch(err=>{
                console.log(err, '失败');
                document.getElementById('orderBtn').disabled = false;
            })
        },

        fChkMail: function(szMail){ 
            szMail=szMail.toLowerCase();
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
        margin-bottom: 10%;
        // z-index: -100;
        //background: url(polina.jpg) no-repeat;
        background-size: cover; 
        object-fit:fill;
    }

    #fullVideo {
        margin-bottom: -8px;
    }
    .video_container {
        background-color: black;
    }

    .box {
        display: inline-block;
        width: 100%;
        max-width: 1920px;
    }

    .videoSelect_container_1{
        display: table;
    }

    .playbutton{
        position: absolute;
        margin: 0 auto;
        display: table-cell;
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
        z-index: 99999;
    }

    .videoSelect {
        width: 15vw;
        height: 20vh;
        background-color: white;
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
        font-size: 11pt;
        line-height: 42px;
        color: black;
        white-space: nowrap;
        overflow:hidden;
        margin-right: 15px;
    }

    .div_txt_btn {
        vertical-align: middle; 
        display: table-cell; 
        overflow: hidden; 
        max-width:1920px;
        width: 100%;
        .div_words_img {
            max-width: 580px;
            width: 100%;
        }
    }

    .video_btn1 {
        text-align:center;
    }
    
    .video_btns {
        width: 300px;
        height: 40px;
        text-align: center;
        margin: 0 auto;

        span:hover {
            color: #929497;
        }
    }

    .video_btn2 {
        width: 120px;
        height: 42px;
        cursor: pointer;
        text-align: center;
        float: left;
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
        width: 120px;
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
       margin-left: 15px;
       float: left;
    }


    .closeBtnContainer {
        position: absolute;
        top:0px;
        left: 0px;
        width: 100%;
        height: $headerHeight;
        z-index: 9990;
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
        position: relative;
        img {
            width: 100%;
            display: block;  
            margin: 0 auto;
        }
    }

    .imgBackCenter {
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
    }

    .img_cpxt {
        max-width: 1440px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cpxt.jpg");
    }

    .img_descrip {
        width: 400px;
        height: 300px;
        margin: 0 auto;
        color: white;
        font-weight: 200;
        text-align: left;
        .descrip_title {
            font-size: 16pt;
            margin-top: 15px;
        }

        .descrip_slogan {
            font-size: 30pt;
            margin-top: 18px;
        }

        .descrip_content {
            margin-top: 35px;
            line-height: 25px;
            font-weight: 100;
        }
    }

    .word_position_cpxt {
        margin-top: 175px;
        margin-left: 840px;
    }

    .img_aick {
        max-width: 2580px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_aick.jpg");
    }

    .word_position_aick {
        margin-top: 80px;
        color: black !important;
        text-align: center;
        font-weight: 300 !important;
        width: 650px;
        .aick_title{
            font-size: 20pt;
        }

        .aick_slogan {
            font-size: 32pt;
        }

        .aick_content {
            font-weight: normal;
        }
    }

    .word_position_cdj {
        margin-top: 80px;
        color: white !important;
        text-align: center;
        font-weight: 100 !important;
        width: 650px;
        .cdj_title{
            font-size: 20pt;
        }

        .cdj_slogan {
            font-size: 32pt;
        }

        .cdj_content {
            font-weight: 200;
        }
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

    .img_aiyy {
        max-width: 2580px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_aiyy.jpg");
    }

    .img_cdj {
        max-width: 2580px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cdj.jpg");
    }

    .img_cpts {
         max-width: 2580px;
        height: 1010px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cpts.jpg");
    }

    .img_cpcs_01 {
        max-width: 1440px;
        height: 955px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cpcs_01.jpg");
    }

    .img_cpcs_02 {
        max-width: 1440px;
        height: 955px;
        background-image: url("./../../assets/images/puppy_cube_s/div_cpcs_02.jpg");
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
        min-width: 1280px;
        max-width: 1280px;
        height: 680px;
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
        z-index: 99999;
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

            div{
                margin-top: -20px;
                font-size: 18pt;
            }
        }
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
            width: 95px;
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
            height: 71px;
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
            font-size: 18pt;
            margin-top: -8px;
        }

        .para {
            font-size: 31pt;
            margin-left: -3px;
        }
    }

    .paraRight {
        width: 800px;
        // height: 2000px;
        color: white;
        float:left;
        margin-top: 150px;
        margin-bottom: 150px;
        .para_title {
            float: left;
            margin-left: 60px;
            text-align: left;
            font-size: 13pt;
            width: 70px;
            line-height: 26px;
            border-bottom: 2px solid white;
        }

        .para_detail {
            float: left;
            margin-left: 10px;
            width: 560px;
            .detail_line{
                width: 560px;
                height: 26px;
                border-bottom: 1px solid #808080;
            }

            .detail {
                font-size: 10pt;
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


</style>

