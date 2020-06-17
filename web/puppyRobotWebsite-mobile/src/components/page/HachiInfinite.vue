<template>
  <div id="hachiinfinite">
    <main class="container">
        <section class="img_1">
            <div class="intr_wrap">
                <h2>智慧生活，触手可及</h2>
                <h1>哈奇光屏M1/M1 Pro</h1>
                <!--<p>•&nbsp;&nbsp;AI智慧眼</p>
                <p>•&nbsp;&nbsp;AnyTouch空间触控</p>
                <p>•&nbsp;&nbsp;100吋超短焦巨幕</p>-->
                <div  class="btn btn_video" @click="PlayVideo()">完整视频</div>
                <a href="https://item.m.jd.com/product/100013459494.html?wxa_abtest=o&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share" class="btn"><img class="imgPlay" src="./../../assets/images/m_puppy_cube_s/button_kqyy.png">京东自营</a>
            </div>
            <video id="fullVideo" v-show="videoPlay" src="./../../assets/video/hachi_m1/m1.mp4" controls="controls" width="100%" poster="./../../assets/video/videoload-m1.jpg"></video>
        </section>
        <section class="img_2">
            <div class="intr_wrap">
                <h2>AnyTouch空间触控,让投影不只是投影</h2>
                <p>投影不再仅是用来看，哈奇光屏在任意平面投影出一块超灵敏光学触控屏，让你随时随地拥有23吋的大屏Pad，工作，学习，玩游戏，流畅无延迟。</p>
            </div>
        </section>
        <div class="ai_title"></div>
        <section class="img_3">
            <div class="intr_wrap">
                <h2>AI智慧拼识，儿童启蒙教育助手</h2>
                <h3>•&nbsp;AI智慧眼&nbsp;&nbsp•&nbsp;AnyTouch空间触控&nbsp;&nbsp•&nbsp;100吋超短焦巨幕</h3>
                <p>通过AI智能识别英文字母，数字等专属积木，实现单词拼写，数学启蒙等教育功能，给孩子打造一个互动式学习场景，提升儿童学习的趣味性和沉浸感。</p>
            </div>
        </section>
        <section class="banner1">
            <div class="intr_wrap">
                <h2>Hachi儿童教育，智能推荐的专属教育平台</h2>
                <p>Hachi教育拥有专为孩子设计的精品内容，囊括海量的主流App、视频及音频资源等；另有绘画、书写、音乐、思维四大启蒙应用分类；还可根据孩子年龄和偏好智能推荐最适合的教育内容。</p>
            </div>
            <div class="banner-wrap">
                <m1banner :slideLists="eduList" :swiperHeight="'192px'"></m1banner>
            </div>
        </section>
        <section class="img_4">
            <div class="intr_wrap box">
                <h2>儿童健康用眼，无屏更彻底</h2>
                <h3>•&nbsp;漫反射不伤眼&nbsp;&nbsp•&nbsp;家长管理&nbsp;&nbsp•&nbsp;移动息屏</h3>
                <p>投影成像的漫反射方式，避免了手机和平板屏幕光线直射入眼的危害，降低电子产品对孩子眼部健康的危害；智能家长管理模式有效引导儿童科学用眼习惯；内置移动侦测sensor，可以实现移动息屏，防止光线射入眼睛。</p>
            </div>
        </section>
        <section class="img_5">
            <div class="intr_wrap">
                <h2>AI智慧健身 ，AI私教提供贴心服务</h2>
                <h3>•&nbsp;骨骼识别&nbsp;&nbsp•&nbsp;一屏双画&nbsp;&nbsp•&nbsp;定制课程</h3>
                <p>哈奇光屏通过顶部摄像头骨骼识别技术，实现健身动作追踪，一屏双画的功能让用户的动作和标准课程同步对比，实时提示动作的标准程度；同时，为你定制个人健身计划和课程，带来“私教级”家庭健身服务。</p>
            </div>
        </section>
        <section class="banner2">
            <div class="intr_wrap">
                <h2>AI未来厨房，“大厨”梦想就在眼前</h2>
                <h3>•&nbsp;AI识物&nbsp;&nbsp•&nbsp;营养分析&nbsp;&nbsp•&nbsp;菜谱推荐</h3>
                <p>通过深度学习算法，AI智慧眼能够识别不同食材，并分析食材的营养成分，推荐给你合适的菜谱， 手把手培养你成为大厨。</p>
            </div>
            <div class="banner-wrap">
                <m1banner :slideLists="cookImgLIst" :swiperHeight="'182px'"></m1banner>
            </div>
        </section>
        <section class="div_6_wrap">
            <div class="intr_wrap">
                <h2>100吋超短焦巨幕，时刻清晰的微型影院</h2>
                <h3>•&nbsp;自动对焦&nbsp;&nbsp•&nbsp;梯形校正&nbsp;&nbsp•&nbsp;0.39：1超短焦投射</h3>
                <p>距离墙面半米内就能投影出23吋-100吋屏幕，自动对焦和自动梯形校正技术，保证哈奇光屏在任何屏幕都能清晰成像，无需手动调校。</p>
            </div>
            <div class="img_6"></div>
        </section>
        <section class="img_7">
            <div class="intr_wrap">
                <h2>随环境光自动调节亮度，清晰柔和不刺眼</h2>
                <p>最高亮度达600ANSI，亮度随环境光线自动调节，保证白天画面看得清，夜晚光线柔和不刺眼。</p>
            </div>
        </section>
        <section class="img_8">
            <div class="intr_wrap">
                <h2>不只是投影，<br/>皆因一颗不平凡的AI“芯”</h2>
                <h3>•&nbsp;&nbsp;高通骁龙SDA670芯片</h3>
                <h3>•&nbsp;&nbsp;最高6GB内存</h3>
                <h3>•&nbsp;&nbsp;最大128GB闪存</h3>
                <p>拥有多核AI引擎的移动级芯片，</p>
                <p>让哈奇光屏从普通投影中脱颖而出，</p>
                <p>成为一个功能强大的AIoT家庭智慧终端。</p>
            </div>
        </section>
        <section class="img_9">
            <div class="intr_wrap">
                <h2>一台机器， 多种玩法，任意切换</h2>
                <h3>•&nbsp;AI语音助手&nbsp;&nbsp•&nbsp;镜像投屏&nbsp;&nbsp•&nbsp;高清视频通话</h3>
                <p>顶部高清摄像头，可随时与⼯作伙伴视频会议，或者和亲人远程通话，拉近彼此距离</p>
            </div>
        </section>
        <section class="img_10">
            <div class="intr_wrap">
                <h2>内置大容量电池，“轻携带”的黑科技</h2>
                <p>•&nbsp;&nbsp;内置5000mAh大容量电池，提供持久的续航能力；</p>
                <p>•&nbsp;&nbsp;摆脱电源线的束缚，家庭/办公/户外多场景便携使用。</p>
            </div>
        </section>
        <section class="banner3">
            <div class="intr_wrap">
                <h2>基于Android定制化UI</h2>
                <h3>海量安卓应用，触控遥控都自在</h3>
                <p>兼顾桌面触控和墙面遥控，AI交互等不同交互方式，定制开发的专属UI，让海量安卓应用在哈奇光屏上得到良好的体验效果。</p>
            </div>
            <div class="banner-wrap">
                <m1banner :slideLists="showList" :swiperHeight="'180px'"></m1banner>
            </div>
        </section>
        <section class="div_11_wrap">
            <div class="intr_wrap">
                <h2>卓越的工业设计，每处细节都体现匠心工艺</h2>
                <p>高透光玻璃面板材质+曜石黑配色尽显科技与艺术结合之美，为了保证机身小巧将整机重量控制在1.3kg，每处细节都体现匠心工艺。</p>
            </div>
            <div class="img_11"></div>
        </section>
        <div class="tab_wrap">
        <table class="tab_list">
            <thead>
                <tr>
                    <th colspan="3">产品参数 | SPEC</th>
                </tr>
                <tr>
                    <td colspan="3">名称</td>
                </tr>
                <tr>
                    <td colspan="3">哈奇光屏M1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;哈奇光屏M1 Pro</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th colspan="3">系统参数</th>
                </tr>
                <tr>
                    <td>CPU</td>
                    <td colspan="2">高通骁龙SDA670</td>
                </tr>
                <tr>
                    <td>内存+闪存</td>
                    <td>4GB+64GB</td>
                    <td>6GB+128GB</td>
                </tr>
                <tr>
                    <th colspan="3">系统功能</th>
                </tr>
                <tr>
                    <td>操作系统</td>
                    <td colspan="2">InfiniteOS（基于安卓9.0）</td>
                </tr>
                <tr>
                    <td>多屏互动</td>
                    <td colspan="2">Airplay/DLNA/Miracast/Hachi 投屏</td>
                </tr>
                <tr>
                    <td>语音交互</td>
                    <td colspan="2">讯飞AIUI，双Mic远场语音控制</td>
                </tr>
                <tr>
                    <td>Wi-Fi</td>
                    <td colspan="2">2.4G/5GHz，双频，802.11 a/b/g/n/ac，2×2 双天线，双发双收</td>
                </tr>
                <tr>
                    <td>蓝牙</td>
                    <td colspan="2">BT 5.0</td>
                </tr>
                <tr>
                    <td>摄像头</td>
                    <td colspan="2">8M独立Camera模组</td>
                </tr>
                <tr>
                    <td>定位系统</td>
                    <td>无</td>
                    <td>GPS、北斗卫星导航系统</td>
                </tr>
                <tr>
                    <th colspan="3">AI与操控</th>
                </tr>
                <tr>
                    <td>AI功能</td>
                    <td colspan="2">计算机视觉、深度学习、人体关键点检测、AI语音（科大讯飞深度定制)</td>
                </tr>
                <tr>
                    <td>操控</td>
                    <td colspan="2">通过操作投射平面进行触控，支持10点触控 ，标配蓝牙遥控器</td>
                </tr>
                <tr>
                    <th colspan="3">投影参数</th>
                </tr>
                <tr>
                    <td>投影画面</td>
                    <td colspan="2">投射比0.39:1，投影尺寸23吋-100吋</td>
                </tr>
                <tr>
                    <td>投影方式</td>
                    <td colspan="2">桌面投射：垂直放置；墙面投射：水平放置；100%以上偏轴</td>
                </tr>
                <tr>
                    <td>画面调整</td>
                    <td colspan="2">支持自动垂直梯形校正，支持自动对焦和通过遥控器手动对焦</td>
                </tr>
                <tr>
                    <th colspan="3">光学参数</th>
                </tr>
                <tr>
                    <td>亮度</td>
                    <td>500ANSI流明</td>
                    <td>600ANSI流明</td>
                </tr>
                <tr>
                    <td>分辨率</td>
                    <td colspan="2">标准分辨率1280×720，兼容分辨率1080p/2K/4K</td>
                </tr>
                <tr>
                    <td>显示技术/镜头</td>
                    <td colspan="2">DLP/高透光镀膜镜头</td>
                </tr>
                <tr>
                    <th colspan="3">电气规格</th>
                </tr>
                <tr>
                    <td>电池 /电源</td>
                    <td colspan="2">内置电池：11.1V，5000mAh，电源：AC100-240V, 50/60Hz</td>
                </tr>
                <tr>
                    <td>功耗/噪音</td>
                    <td colspan="2">30W-56W，噪音30dB</td>
                </tr>
                <tr>
                    <th colspan="3">其他</th>
                </tr>
                <tr>
                    <td>尺寸/重量</td>
                    <td colspan="2">长×宽×高：138×80×215mm ，重量1.3kg</td>
                </tr>
                <tr>
                    <td>颜色/材质</td>
                    <td colspan="2">曜石黑，高透光玻璃面板+PC</td>
                </tr>
                <tr>
                    <td>音响</td>
                    <td colspan="2">2.0声道，全频36mm喇叭，5W x 2</td>
                </tr>
                <tr>
                    <td>接口</td>
                    <td colspan="2">HDMI 1.4 Input ×1，DP 1.4 ×1(数据端口扩展)，3.5mm耳机接口×1，USB Type-C×1，DC-in ×1 （Type-C）</td>
                </tr>
                <tr>
                    <td>传感器</td>
                    <td colspan="2">加速度传感器，陀螺仪，光线传感器，接近传感器</td>
                </tr>
                <tr>
                    <td>标配配件</td>
                    <td colspan="2">产品原机，电源适配器，电源线/数据线，蓝牙遥控器，产品说明书，保修卡</td>
                </tr>
            </tbody>
        </table>
        </div>
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
            eduList:[
                {            
                    id: 1,
                    img: require("./../../assets/images/hachiinfinite/edu1.png")
                },
                {            
                    id: 2,
                    img: require("./../../assets/images/hachiinfinite/edu3.png")
                },
                {            
                    id: 3,
                    img: require("./../../assets/images/hachiinfinite/edu2.png")
                }
            ],
            cookImgLIst:[
                {            
                    id: 1,
                    img: require("./../../assets/images/hachiinfinite/cook1.png")
                },
                {            
                    id: 2,
                    img: require("./../../assets/images/hachiinfinite/cook2.png"),
                },
                {
                    id: 3,
                    img: require("./../../assets/images/hachiinfinite/cook3.png"),
                }
            ],
            showList:[
                {            
                    id: 1,
                    img: require("./../../assets/images/hachiinfinite/andriod1.png")
                },
                {            
                    id: 2,
                    img: require("./../../assets/images/hachiinfinite/andriod2.png"),
                },
                {            
                    id: 3,
                    img: require("./../../assets/images/hachiinfinite/andriod3.png")
                }
            ]
        }
    },
    watch: {
        videoPlay: function(val) {
            if (!val) {
                document.querySelector("#fullVideo").pause();
            }
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
            let mVideo = document.querySelector("#fullVideo");
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
    }
}
</script>

<style lang="scss" scoped>
// modify by 20200512
$headerHeight: 46px;
div,p,h1,h2,h3,section,table,tr,td,th{margin:0;padding:0;}
h1,h2,h3{font-weight:normal;}
#hachiinfinite {
    width:100%;
    height:100%;
}
.container {
    clear:both;
    display:block;
    width:100%;
    height:auto;
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
@for $i from 1 through 11 {
    .img_#{$i} {
        width:100%;
        background-image: url("./../../assets/images/hachiinfinite/div#{$i}.jpg");
        @extend .imgBackCenter;
    }
}
.intr_wrap {
    padding-top:30px;
    h1{font-size:24px;}
    h2{font-size:18px;}
    h3{font-size:14px;}
    p{font-size:13px;line-height:22px;}
    width:92%;
    margin:0 auto;
    box-sizing:border-box;
}
.img_1 {
    height:558px;
    .intr_wrap {
        padding-top:62px;
        text-align:left;
        padding-left:12%;
        h1 {
            margin-top:7px;
        }
        p {
            margin-top:6px;
        }
    }
}
.img_2 {
    height:700px;
    .intr_wrap {
        letter-spacing:.5px;
        padding: 32px 6px 0 6px;
        h2 {
            margin-bottom:14px;
        }
    }
}
.ai_title {
    height:214px;
    width:100%;
    background: url("./../../assets/images/hachiinfinite/ai.jpg") #f3f3f3;
    background-size:100%;
}
.img_3 {
    height:521px;
    .intr_wrap {
        padding-top:60px;
        h3 {
            padding:12px 0;
        }
        p {
            letter-spacing:1.4px;
        }
    }
}
.img_4 {
    height:637px;
    .box {
        background:rgba(0,0,0,.2);
        color:#fff;
        padding:12px 23px;
        margin-top:18px;
    }
    .intr_wrap {
        h3 {
            padding:10px 0;
        }
        p {
            letter-spacing:1.4px;
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
            letter-spacing:.5px;
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
.banner2,.banner3 {
    @extend .banner1;
}
.banner3 h3,.banner2 h3 {
    padding-top:10px;
}
.img_5 {
    height:777px;
    color:#fff;
    .intr_wrap {
        h3 {
            padding:10px 0;
        }
        p{
            padding:0 5%;
            letter-spacing:1px;
        }
    }
}
.div_6_wrap{
    background:#fff;
    padding:30px 0;
    .intr_wrap {
        padding-bottom:30px;
        h2{letter-spacing:1px;}
        h3{
            padding:10px 0;
        }
        p{
            padding:0 8%;
        }
    }
    .img_6 {
        width:92%;
    }
}
.img_6 {
    height:232px;
}
.img_7 {
    height:647px;
    .intr_wrap {
        color:#fff;
        p {
            letter-spacing:1.2px;
            padding:27px 2% 0 2%;
        }
    }
}
.img_8 {
    height:540px;
    .intr_wrap {
        color:#fff;
        padding:34px 0 0 18%;
        text-align:left;
        h2 {
            line-height:28px;
        }
        h3 {
            padding-top:7px;
        }
        p {
            letter-spacing:1px;
            line-height:24px;
            &:nth-of-type(1) {
                padding-top:10px;
            }
        }
    }
}
.img_9 {
    height:548px;
    .intr_wrap {
        h3 {
            padding:10px 0;
        }
        p {
            padding:0 7%;
        }
    }
}
.img_10 {
    height:384px;
    .intr_wrap {
        text-align:left;
        padding:30px 2% 0 2%;
        p {
            padding-top:6px;
            &:nth-of-type(1) {
                padding-top:10px;
            }
        }
    }
}
.div_11_wrap {
    background:#000;
    color:#fff;
    .intr_wrap {
        padding-top:50px;
        padding-bottom:40px;
        p {
            margin-top:10px;
            padding:0 6%;
            letter-spacing:1px;
        }
    }
}
.img_11 {
    height:228px;
}
.tab_list{
    width:100%;
    border-collapse: separate; 
    border-spacing: 10px 0;
    th,td{
        padding-top:20px;
        padding-bottom:5px;
    }
    th {
        text-align:left;
    }
    thead {
        th {
            font-size:18px;
            font-weight:600;
            text-align:center;
        }
        td {
            font-size:13px;
            border-bottom:1px solid #979797;
            font-weight:500;
            text-align:center;
        }
        tr:nth-child(2) td {
            text-align:left;
        }
    }
    tbody {
        th {
            font-size:13px;
            border-bottom:1px solid #979797;
            font-weight:normal;
        }
        td {
            font-size:12px;
            border-bottom:1px solid #979797;
            text-align:center;
        }
        tr:first-child td {
            text-align:left;
        }
        tr td:first-child {
            width:18.63%;
        }
    }
}
.tab_wrap {
    width:100%;
    background:#000;
    padding:20px 10px 20px 5px;
    box-sizing:border-box;
    color:#fff;
}
#fullVideo{
    
}
.btn {
    display:inline-block;
    color:#000;
    font-size:12px;
    margin-top:16px;
    width: 120px;
    height: 42px;
    line-height:42px;
    text-align: center;
    background-color: #f2f2f2;
    text-decoration:none;
    position:relative;
}
img {
    vertical-align:middle;
}
div.btn{
    margin-right:18px;
    text-indent:34px;
}
div.btn::before {
    content:"";
    display:inline-block;
    width:18px;
    height:18px;
    border-radius:50%;
    position:absolute;
    border:1px solid #565656;
    top:50%;
    transform:translateY(-50%);
    left:26px;
}
div.btn::after {
    content:"";
    display:inline-block;
    border-radius:2px;
    position:absolute;
    border:4px solid;
    border-color:transparent transparent transparent #565656;
    top:51%;
    transform:translateY(-50%);
    left:35px;
}
</style>