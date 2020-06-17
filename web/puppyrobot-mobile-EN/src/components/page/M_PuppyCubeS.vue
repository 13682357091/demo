<template>
  <div id="PuppyCubeS">
    <div class="video_container">
      <div class="box">
        <img id="bgvideo" src="./../../assets/images/m_puppy_cube_s/video_background.gif">
        <div class="divMp4Front">
        </div>
        <div class="divMp4Words">
          <div class="div_txt_btn">
            <div>
                <span class="title_01">puppy cube s</span>
                <!-- <br/>
                <span class="title_02">光影魔屏</span> -->
                <br/>
                <span class="title_03">光影乐趣&nbsp;&nbsp;触手可及</span>
            </div>
            <br />
            <div class="video_btn1">
              <div class="video_btns">
                <div class="video_btn2" @click="PlayVideo()">
                  <img class="imgPlay" src="./../../assets/images/m_puppy_cube_s/button_wzsp.png">
                  <span class="span_b">完整视频</span>
                </div>
                <div class="video_space"></div>
                <div class="video_btn3" @click="OrderCubeS()">
                  <img class="imgPlay" src="./../../assets/images/m_puppy_cube_s/button_kqyy.png">
                  <span class="span_b">开启预约</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <video id="fullVideo" v-show="videoPlay" src="http://source.puppyrobot.com/video/cube_s_17.mp4" controls="controls" width="100%" poster="./../../assets/video/videoload-cube-s-17s.jpg">
    </video>

    
    <div class="div_order_mobile" v-show="orderCubeS">
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

    <div class="designImg">
        <img src="./../../assets/images/m_puppy_cube_s/div_cpxt.jpg" style="max-width:750px;">
        <div class="imageTitle">
            <div class="title">产品形态</div>
            <div class="slogan">触摸未来，定义AI空间</div>
            <div class="description">智能交互不再被屏幕束缚，生活中的每一处都可能成为你的AI入口，puppy cube s将任意平面变为触摸界面，提供一个全新的智慧AI空间。</div>
        </div>
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
      <img src="./../../assets/images/m_puppy_cube_s/div_aick.jpg"  style="max-width:750px;">
        <div class="imageTitle">
            <div class="title">AI触控</div>
            <div class="slogan">AnyTouch，激发生活灵感</div>
            <div class="description">AnyTouch空间触控，将多点触控与投影技术完美结合，使空间任意平面变为触摸屏，创造出丰富的交互灵感和奇妙体验。</div>
        </div>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <img src="./../../assets/images/m_puppy_cube_s/div_aiyy.jpg"  style="max-width:750px;">
        <div class="imageTitle" style="color: #FFFFFF !important;">
            <div class="title" style="border-bottom: 1px solid #FFFFFF !important;">AI 语音</div>
            <div class="slogan">唤醒你的智慧伙伴</div>
            <div class="description">人工智能语音技术，让puppy cube s成为你家中的智慧新成员。无需遥控远场对话，多场景语音操控功能，为家人提供无微不至的关怀与服务。</div>
        </div>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <img src="./../../assets/images/m_puppy_cube_s/div_cdj.jpg"  style="max-width:750px;">
        <div class="imageTitle">
            <div class="title">超短焦</div>
            <div class="slogan">放在电视柜上的巨幕影院</div>
            <div class="description">先进的超短焦技术，让你拥有一个巨幕影院成为可能。自动对焦和图像调节功能，使画面在任何场景都清晰呈现。</div>
        </div>
    </div>
    <div class="designImg" style="background-color:#FFFFFF;">
        <img src="./../../assets/images/m_puppy_cube_s/div_cpts.jpg"  style="max-width:750px;">
        <div class="imageTitle" style="margin-top: 10%;">
            <div class="title" style="font-size: 18pt;">产品图赏</div>
        </div>
    </div>
    <div class="productPara">
        <div class="paraTop">
            <img src="./../../assets/images/logo.png">
            <div class="topLine"></div>
            <div class="descrip">
                <div class="productType">puppy cube s</div>
                <div class="para">产品参数</div>
            </div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">基本信息</div>

            <div class="detailTitle">名称</div>
            <div class="detailContent">puppy cube</div>

            <div class="detailTitle">型号</div>
            <div class="detailContent">PAIPMSVT02</div>
            <div class="detailTitle">产品尺寸</div>
            <div class="detailContent">142 x 90 x 218（mm）</div>

            <div class="detailTitle">产品重量</div>
            <div class="detailContent">1.7 KG</div>

            <div class="detailTitle">产品颜色</div>
            <div class="detailContent">星空灰</div>

            <div class="detailTitle">产品材质<br/>&nbsp;</div>
            <div class="detailContent">高透光覆膜玻璃面板<br/>+铝合金+PC/ABS</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">系统参数</div>

            <div class="detailTitle">CPU</div>
            <div class="detailContent">Mstar 6A938</div>

            <div class="detailTitle">RAM</div>
            <div class="detailContent">4GB</div>

            <div class="detailTitle">内置存储</div>
            <div class="detailContent">64GB eMMC</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">系统功能</div>

            <div class="detailTitle">OS</div>
            <div class="detailContent">puppyUI 1.0</div>

            <div class="detailTitle">Android系统</div>
            <div class="detailContent">Android 6.0</div>

            <div class="detailTitle">动态图像</div>
            <div class="detailContent">HDR</div>

            <div class="detailTitle">多屏互动</div>
            <div class="detailContent">Airplay/DLNA/Miracast</div>

            <div class="detailTitle">人工智能</div>
            <div class="detailContent">讯飞AIUI</div>

            <div class="detailTitle">Wi-Fi<br/>&nbsp;<br/>&nbsp;</div>
            <div class="detailContent">Wi-Fi: 2.4G/5GHz 双频<br/>802.11 a/b/g/n/ac<br/>2 x 2 双天线 双发双收</div>

            <div class="detailTitle">Bluetooth</div>
            <div class="detailContent">BT 4.0及以上/BLE 独立天线</div>

            <div class="detailTitle">Camera</div>
            <div class="detailContent">5M camera模组</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">投影参数</div>

            <div class="detailTitle">投射比</div>
            <div class="detailContent">0.39:1</div>

            <div class="detailTitle">画面尺寸</div>
            <div class="detailContent">23英寸~100英寸</div>

            <div class="detailTitle">推荐尺寸</div>
            <div class="detailContent">23英寸~40英寸</div>

            <div class="detailTitle">偏轴</div>
            <div class="detailContent">100%及以上</div>

            <div class="detailTitle">梯形校正</div>
            <div class="detailContent">支持自动垂直梯形校正</div>

            <div class="detailTitle">投影方式</div>
            <div class="detailContent">桌面投射，可水平和垂直放置</div>

            <div class="detailTitle">对焦方式</div>
            <div class="detailContent">自动对焦并可通过遥控器人工调节</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">光学参数</div>

            <div class="detailTitle">标准分辨率</div>
            <div class="detailContent">1280 x 720</div>

            <div class="detailTitle">兼容分辨率</div>
            <div class="detailContent">1080p/2K/4K</div>

            <div class="detailTitle">显示技术</div>
            <div class="detailContent">DLP</div>

            <div class="detailTitle">镜头</div>
            <div class="detailContent">高透光镀膜镜头</div>

            <div class="detailTitle">中心亮度</div>
            <div class="detailContent">400ANSI</div>

            <div class="detailTitle">色域</div>
            <div class="detailContent">>=100%NTSC</div>

            <div class="detailTitle">中心对比度</div>
            <div class="detailContent">600:1</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">音频</div>

            <div class="detailTitle">声道</div>
            <div class="detailContent">2.0声道</div>

            <div class="detailTitle">喇叭单元</div>
            <div class="detailContent">全频43mm x 2</div>

            <div class="detailTitle">功率</div>
            <div class="detailContent">7W x 2</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">端口</div>

            <div class="detailTitle">输入<br/>&nbsp;</div>
            <div class="detailContent">USB 3.0 Host x 1/<br/>HDMI 2.0 Input x 1/DC-in</div>

            <div class="detailTitle">输出</div>
            <div class="detailContent">3.5mm耳机接口 x 1</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">指示灯</div>

            <div class="detailTitle">状态提示<br/>&nbsp;</div>
            <div class="detailContent">开/关机、低电、充电，<br/>多种状态不同灯光提示</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">传感器</div>

            <div class="detailTitle">位置感应</div>
            <div class="detailContent">加速度传感器</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">控制</div>

            <div class="detailTitle">按键</div>
            <div class="detailContent">电源键、复位键、音量加减</div>

            <div class="detailTitle">遥控器</div>
            <div class="detailContent">蓝牙遥控器</div>

            <div class="detailTitle">交互式<br/>&nbsp;</div>
            <div class="detailContent">可以通过操作投射平面进行触控，<br/>支持10点和手势</div>
        </div>
        <div class="paraDetail">
            <div class="detailCollectionTitle">电气规格</div>

            <div class="detailTitle">噪音</div>
            <div class="detailContent">&lt; 30db</div>

            <div class="detailTitle">功耗</div>
            <div class="detailContent">20 ~ 40W</div>

            <div class="detailTitle">内置电池</div>
            <div class="detailContent">11.1v 5000mAh</div>

            <div class="detailTitle">电源</div>
            <div class="detailContent">AC100-240V, 50/60Hz</div>
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
                img: require("./../../assets/images/m_puppy_cube_s/div_sj_01.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff",
                title: '设计',
                slogan: '精准的几何美学',
                description: '高亮镜面与金属拉丝，<br/>不同的质感一分为二，<br/>同样的理性而不失温情。'
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube_s/div_sj_02.gif"),
                maxWidth: '750px',
                backgroundColor: "#ffffff",
                title: '设计',
                slogan: '友好交互设计<br/>智慧呼吸灯',
                description: '可视化语音响应，呼吸灯带在不同状态下相应变化人性化设计赋puppy cube s智慧心灵的窗口。'
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/m_puppy_cube_s/div_sj_03.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff",
                title: '设计',
                slogan: '背板集线防呆设计',
                description: '立卧姿态轻松转换，即使连线使用，也不会受到线缆的影响，同时起到收纳线缆的美观作用。'
            }
            ],
            smartHomeList: [
            {            
                id: 1,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_01.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——儿童',
                slogan: '触摸成长<br/>让学习成为乐趣',
                description: '独特的可触控智能投影，将AI交互应用于儿童教育与娱乐，化枯燥为神奇。不仅拥有丰富的儿童课程和内容，智慧的家长管理和护眼功能，还保护着孩子的健康成长。',
                top: '48%'
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_02.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——厨房',
                slogan: '触摸味道<br/>变厨房为美食课堂',
                description: '集合10万+精选食谱，语音交互，手把手教你成为米其林大厨。投墙投台面，有效利用厨房空间，更不用担心油污屏幕，还能边做饭边追剧。puppy让品质生活从厨房开始。'
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_03.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——健身',
                slogan: '触摸活力<br/>把私教请回家',
                description: '丰富的健身课程为您提供定制化训练，投墙大屏和AI语音控制，有如与私教面对面练习，个人训练计划和多账户管理，为全家人合理规划，让生活充满活力。'
            },
            {            
                id: 4,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_04.jpg"),
                 maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——健康',
                slogan: '触摸健康<br/>家庭医生陪伴身边',
                description: '拥有家庭医生不再是未来生活，在家就能与医生视频问诊，预约治疗，建立全家人健康档案。面对老人孩子的突发状况不再紧张，健康生活触手可得。'
            },
            {            
                id: 5,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhjt_05.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                title: '智慧家庭——智能家居',
                slogan: '触摸从容<br/>智慧生活尽在掌握',
                description: 'AI赋予“家”更多便利与安全。通过puppy cube语音控制家居和电器，为全家布控安防网络，万物互联的未来生活，有puppy为您保驾护航。'
            }
            ],
            smartOfficeList: [
            {            
                id: 1,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhbg_01.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                title: '智慧办公',
                slogan: '协同书写，桌面变白板',
                description: 'puppy cube s通过智能触控对投影桌面的文档进行协同处理，包括修改，标注，保存，缩放等多种操作，让您的办公桌变为智能白板。',
                fontColor: '#FFFFFF'
            },
             {            
                id: 2,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhbg_02.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                 title: '智慧办公',
                slogan: '视频会议，高效便捷',
                description: 'puppy cube内置高清摄像头和麦克风阵列，提供完整的会议系统方案。多方音视频，远程培训，移动会议等功能，节省沟通成本，大幅提升工作效率。'
            }, 
            {            
                id: 3,
                img: require("./../../assets/images/m_puppy_cube_s/div_zhbg_03.jpg"),
                maxWidth: '750px',
                backgroundColor: "#FFFFFF",
                 title: '智慧办公',
                slogan: '互动投屏，多终端共享',
                description: '具备AirPlay/DLNA/Miracast等多种投屏功能，与电脑，平板，手机各类终端多屏互动，省去有线连接和文件拷贝的繁琐操作。'
            }
            ]
            
        }
    },
    components: {
        Banner
    },
    mounted() {
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
                console.log(err, '失败')
            })
        },
        orderCube: function() {
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
            orderProduct(this.orderUser.name,this.orderUser.phone,this.orderUser.mail, 'puppy cube s').then(res=>{
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
        width: 100%; 
        height: auto; 
        max-width: 750px;
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
        height: 100%;
        background-color: black;
        text-align: center;
        z-index: 99999;
    }

    .videoSelect {
        width: 15vw;
        height: 20vh;
        background-color: black;
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
            width: 70%;
        }
    }

    .video_btn1 {
        text-align:center;
    }
    
    .video_btns {
        width: 260px;
        height: 42px;
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
            width: 90%;
            margin: 0 auto;
            font-size: 18pt;
            font-weight: 400;
            margin-top: 10px;
        }
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
        margin: 0 auto;
        padding: 20px 15px 20px 15px;
    }

    .sperateLine {
        width: 90%;
        margin: 0 auto;
        height: 1px;
        background-color: #cfd0d1;
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

    .productPara {
        width: 100%;
        background-color: black;
        color: white;
        padding-top: 20px;
        .paraTop{
            width: 208px;
            height: 70px;
            margin: 0 auto;
            img {
                float: left;
                width: 65px;
            }
            .topLine{
                height: 45px;
                width: 3px;
                background-color: #b3b3b3;
                float: left;
                margin: 5px 10px 0px 10px;
            }
            .descrip {
                width: 120px;
                float: left;
                text-align: left;
            }
            .productType {
                font-weight: 100;
            }

            .para {
                font-size: 18pt;
                font-weight: 100;
            }
        }

        .paraDetail {
            padding: 15px;
            font-weight: 300;
            line-height: 28px;
            .detailCollectionTitle {
                text-align: left;
                font-weight: normal;
                border-bottom: 2px solid white;
            }
 
            .detailTitle {
                width: 30%;
                float: left;
                // border-bottom: 1px solid white;
            }

            .detailContent {
                padding-left: 10px;
                // border-bottom: 1px solid white;
            }
        }

    }

    .title_01 {
        font-size: 26pt;
    }
    .title_02 {
        font-size: 20pt;
        font-weight: 100;
    }
    .title_03 {
        font-size: 20pt;
        margin-top: 15px;
    }

</style>

