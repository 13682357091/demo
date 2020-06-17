<template>
  <div id='pageheader'>
    <div :class="this._isMobile()? 'pageheaderMid_mobile' : 'pageheaderMid'">
        <div id='divLogo'>
            <router-link to="/puppycube">
            <img id='pageheaderlogo' @click="isDisplay?mobileMenuDisplay():''" :class="this._isMobile()?'logo_margin':''" src="./../../assets/images/header/puppyheaderlogo.svg">
            </router-link>
        </div>

        <div id='divMobileNav' v-show="_isMobile()">
            <div class="headerMobileMenu" @click="mobileMenuDisplay()">
                <div class="mobileMenu"> 
                    <span class="line-t">
                        <span class="mobileMenuLine"> </span>
                    </span>
                    <span class="line-m">
                        <span class="mobileMenuLine"> </span>
                    </span>
                    <span class="line-b">
                        <span class="mobileMenuLine"> </span>
                    </span>
                </div>
            </div>
        </div>
        <!-- <div v-show="isDisplay" @touchmove.prevent> -->
        <div id="menuContainer" class="wrapper" ref="wrapper" v-show="isDisplay">
            <dl id="mobileMenuList" class="content">    
                <dt>
                    <div class="menu_title" @click="detailDisplay(1)">
                        <div class="m_con">
                            <div class="mtitle">Puppy Cube</div>
                            <div class="arrow_contianer">
                                <img class="arrow_style" :src="menu1Display?require('./../../assets/images/m_header/arrow_up.png'):require('./../../assets/images/m_header/arrow_down.png')">
                            </div>
                        </div>
                    </div>
                    <div class="menu_sublist_1">
                        <!-- <router-link to="/puppycubes">
                            <div class="icon_con" @click="mobileMenuDisplay()">
                                <div><img class="icon" src="./../../assets/images/m_header/icon_cube_s.png"></div>
                                <div class="icon_title">puppy cube s</div>
                            </div>
                        </router-link>
                        <div class="space"></div> -->
                        <router-link to="/puppycube">
                            <div class="icon_con" @click="mobileMenuDisplay()">
                                <div><img class="icon" src="./../../assets/images/m_header/icon_cube.png"></div>
                                <div class="icon_title">Puppy Cube</div>
                            </div>
                        </router-link>
                        <router-link to="/techspec">
                            <div class="icon_con" @click="mobileMenuDisplay()">
                                <div><img class="icon" style="padding-top: 15px; padding-bottom: 9px;" src="./../../assets/images/m_header/Tech_Spec.png"></div>
                                <div class="icon_title">Tech spec</div>
                            </div>
                        </router-link>
                        <router-link to="/instruction">
                            <div class="icon_con" @click="mobileMenuDisplay()">
                                <div><img class="icon" style="padding-top: 15px; padding-bottom: 9px;" src="./../../assets/images/m_header/Tech_Spec.png"></div>
                                <div class="icon_title">User Manual</div>
                            </div>
                        </router-link>
                    </div>
                </dt>  
                <dt>
                    <div class="menu_title" @click="detailDisplay(4)">
                        <div class="m_con">
                            <div class="mtitle">Hachi Infinite</div>
                            <div class="arrow_contianer">
                                <img class="arrow_style" :src="menu1Display?require('./../../assets/images/m_header/arrow_up.png'):require('./../../assets/images/m_header/arrow_down.png')">
                            </div>
                        </div>
                    </div>
                    <div class="menu_sublist_4">
                        <router-link to="/hachiinfinite">
                            <div class="icon_con" @click="mobileMenuDisplay()">
                                <div><img class="icon" src="./../../assets/images/m_header/icon_cube.png"></div>
                                <div class="icon_title">Hachi Infinite</div>
                            </div>
                        </router-link>
                        <router-link to="/m1techspec">
                            <div class="icon_con" @click="mobileMenuDisplay()">
                                <div><img class="icon" style="padding-top: 15px; padding-bottom: 9px;" src="./../../assets/images/m_header/Tech_Spec.png"></div>
                                <div class="icon_title">Tech spec</div>
                            </div>
                        </router-link>
                        <!-- <router-link to="/instruction">
                            <div class="icon_con" @click="mobileMenuDisplay()">
                                <div><img class="icon" style="padding-top: 15px; padding-bottom: 9px;" src="./../../assets/images/m_header/Tech_Spec.png"></div>
                                <div class="icon_title">User Manual</div>
                            </div>
                        </router-link> -->
                    </div>
                </dt>  

                <dt>
                    <div class="menu_title" @click="detailDisplay(2);">
                        <div class="m_con">
                            <div class="mtitle">About puppy</div>
                            <div class="arrow_contianer">
                                <img class="arrow_style" :src="menu2Display?require('./../../assets/images/m_header/arrow_up.png'):require('./../../assets/images/m_header/arrow_down.png')">
                            </div>
                        </div>
                    </div>
                    <div class="menu_sublist_2">
                        <router-link to="/aboutus">
                            <div :class="isWidthLess375?'icon_con_less_375':'icon_con'" @click="mobileMenuDisplay()">
                                <div><img class="icon" style="width: 65px !important; margin-left: 0px;" src="./../../assets/images/m_header/intro.png"></div>
                                <div class="icon_title" style="margin-left: -20px !important;">About us</div>
                            </div>
                        </router-link>
                    </div>
                </dt>     
                <dt>
                    <div class="menu_title" @click="detailDisplay(3)">
                        <div class="m_con">
                            <div class="mtitle">Contact us</div>
                            <div class="arrow_contianer">
                                <img class="arrow_style" :src="menu3Display?require('./../../assets/images/m_header/arrow_up.png'):require('./../../assets/images/m_header/arrow_down.png')">
                            </div>
                        </div>
                    </div>
                    <div class="menu_sublist_3" style="height: 380px !important;">
                        <router-link to="/contact">
                            <div :class="isWidthLess375?'icon_con_less_375':'icon_con'" @click="mobileMenuDisplay()">
                                <div><img class="icon" style="width:58px !important; margin-left: 30px;" src="./../../assets/images/m_header/contact.png"></div>
                                <div class="icon_title" style="margin-left: 10px !important;">Contact us</div>
                            </div>
                        </router-link>
                    </div>
                </dt>  

            </dl>
        </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
        name: 'PageHeader',
        data () {
            return {
                isDisplay: false,
                cubeSecMenuDisp: false,
                menu1Display: false,
                menu2Display: false,
                menu3Display: false,
                menu4Display: false,
                menu5Display: false,
                isWidthLess375: false,
                scroll: null,
            }
        },
        mounted(){
            if(window.innerWidth < 375) {
                this.isWidthLess375 = true;
            };

            document.querySelector("#menuContainer").style.height = window.innerHeight + 'px';
            // this.$nextTick(() => {
            //     this.scroll = new BScroll(this.$refs.wrapper, {})
            // })
            
        },
        methods: {
            _isMobile() {
                let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
                return flag;
            },
            mobileMenuDisplay: function() {
                this.isDisplay = !this.isDisplay;
                if(this.isDisplay) {
                    document.querySelector("#mobileMenuList").style.minHeight = window.innerHeight + 'px';
                    document.querySelector(".line-t").style.transform = 'rotate(45deg)';
                    document.querySelector(".line-b").style.transform = 'rotate(135deg)';
                    document.querySelector(".line-t .mobileMenuLine").style.backgroundColor = '#fff';
                    document.querySelector(".line-t .mobileMenuLine").style.transform = 'translateY(0px)';
                    document.querySelector(".line-b .mobileMenuLine").style.backgroundColor = '#fff';
                    document.querySelector(".line-b .mobileMenuLine").style.transform = 'translateY(0px)';
                    document.querySelector(".line-m .mobileMenuLine").style.opacity = '0';
                    document.querySelector(".mobileMenu").style.backgroundColor = '#000000';
                } else {
                    document.querySelector(".line-t").style.transform = 'rotate(180deg)';
                    document.querySelector(".line-b").style.transform = 'rotate(180deg)';
                    document.querySelector(".line-t .mobileMenuLine").style.backgroundColor = '#000';
                    document.querySelector(".line-t .mobileMenuLine").style.transform = 'translateY(-8px)';
                    document.querySelector(".line-b .mobileMenuLine").style.backgroundColor = '#000';
                    document.querySelector(".line-b .mobileMenuLine").style.transform = 'translateY(8px)';
                    document.querySelector(".line-m .mobileMenuLine").style.opacity = '1';
                    document.querySelector(".mobileMenu").style.backgroundColor = '#f1f1f1';
                }
            },

            cubeSecMenuDisplay: function() {
                this.cubeSecMenuDisp = true;
            },

            cubeSecMenuHide: function() {
                this.cubeSecMenuDisp = false;
            },

            detailDisplay: function(index) {
                switch(index) {
                    case 1:
                        if(!document.querySelector(".menu_sublist_1").style.display || document.querySelector(".menu_sublist_1").style.display == 'none'){
                            document.querySelector(".menu_sublist_1").style.display = 'block';
                            this.menu1Display = true;
                        } else {
                            document.querySelector(".menu_sublist_1").style.display = 'none';
                            this.menu1Display = false;
                        }
                        document.querySelector(".menu_sublist_2").style.display = 'none';
                        document.querySelector(".menu_sublist_3").style.display = 'none';
                        document.querySelector(".menu_sublist_4").style.display = 'none';
                        // document.querySelector(".menu_sublist_5").style.display = 'none';
                        this.menu2Display = false;
                        this.menu3Display = false;
                        this.menu4Display = false;
                        // this.menu5Display = false;
                        break;
                    case 2:
                        if(!document.querySelector(".menu_sublist_2").style.display || document.querySelector(".menu_sublist_2").style.display == 'none'){
                            document.querySelector(".menu_sublist_2").style.display = 'block';
                            this.menu2Display = true;
                        } else {
                            document.querySelector(".menu_sublist_2").style.display = 'none';
                            this.menu2Display = false;
                        }
                        document.querySelector(".menu_sublist_1").style.display = 'none';
                        document.querySelector(".menu_sublist_3").style.display = 'none';
                        document.querySelector(".menu_sublist_4").style.display = 'none';
                        // document.querySelector(".menu_sublist_5").style.display = 'none';
                        this.menu1Display = false;
                        this.menu3Display = false;
                        this.menu4Display = false;
                        // this.menu5Display = false;
                        break;
                    case 3:
                        if(!document.querySelector(".menu_sublist_3").style.display || document.querySelector(".menu_sublist_3").style.display == 'none'){
                            document.querySelector(".menu_sublist_3").style.display = 'block';
                            this.menu3Display = true;
                        } else {
                            document.querySelector(".menu_sublist_3").style.display = 'none';
                            this.menu3Display = false;
                        }
                        document.querySelector(".menu_sublist_1").style.display = 'none';
                        document.querySelector(".menu_sublist_2").style.display = 'none';
                        document.querySelector(".menu_sublist_4").style.display = 'none';
                        // document.querySelector(".menu_sublist_5").style.display = 'none';
                        this.menu1Display = false;
                        this.menu2Display = false;
                        this.menu4Display = false;
                        // this.menu5Display = false;
                        break;
                    case 4:
                        if(!document.querySelector(".menu_sublist_4").style.display || document.querySelector(".menu_sublist_4").style.display == 'none'){
                            document.querySelector(".menu_sublist_4").style.display = 'block';
                            this.menu4Display = true;
                        } else {
                            document.querySelector(".menu_sublist_4").style.display = 'none';
                            this.menu4Display = false;
                        }
                        document.querySelector(".menu_sublist_1").style.display = 'none';
                        document.querySelector(".menu_sublist_2").style.display = 'none';
                        document.querySelector(".menu_sublist_3").style.display = 'none';
                        // document.querySelector(".menu_sublist_5").style.display = 'none';
                        this.menu1Display = false;
                        this.menu2Display = false;
                        this.menu3Display = false;
                        // this.menu5Display = false;
                        break;
                    // case 5:
                    //     if(!document.querySelector(".menu_sublist_5").style.display || document.querySelector(".menu_sublist_5").style.display == 'none'){
                    //         document.querySelector(".menu_sublist_5").style.display = 'block';
                    //         this.menu3Display = true;
                    //     } else {
                    //         document.querySelector(".menu_sublist_5").style.display = 'none';
                    //         this.menu3Display = false;
                    //     }
                    //     document.querySelector(".menu_sublist_1").style.display = 'none';
                    //     document.querySelector(".menu_sublist_2").style.display = 'none';
                    //     document.querySelector(".menu_sublist_3").style.display = 'none';
                    //     document.querySelector(".menu_sublist_4").style.display = 'none';
                    //     this.menu1Display = false;
                    //     this.menu2Display = false;
                    //     this.menu3Display = false;
                    //     this.menu4Display = false;
                    //     break;
                }

            },

        }
    }
</script>

<style scoped lang="scss" type="text/css">
    $headerHeight: 46px;
    $menuSec: 44px;
    $headerColor: #f1f1f1;

    #pageheader {
        background-color: $headerColor;
        // opacity: 0.9;
        width: 100%;
        height: $headerHeight;
        z-index: 9999;
        text-align: center;
    }

    .pageheaderMid {
        width: 1280px;
        margin: 0 auto;
    }

    .pageheaderMid_mobile {
        width: 100%;
    }

    #divLogo {
        float: left;
        // margin-left: 30px;
        height: $headerHeight;
    }

    #pageheaderlogo {
        height: 28px;
        margin-top: $headerHeight/2 - 28px/2; 
    }

    .logo_margin {
        margin-left: 10px;
    }

    #divPCNav {
        float: right;
        // margin-right: 30px;
    }

    li { 
        display: inline-block;
        cursor: pointer;
        line-height: $headerHeight;
        // padding-left: 15px;
        // padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        width: 130px;
        font-size: 11pt;
        list-style-type: none;
    } 

    li:hover {
        background-color:white;
        // width: 110px;
        // box-shadow: 1px 1px 1px #e6e6e6;
        // opacity: 1;
    }

    ul li:hover>a{
        color: #929497;
    }

    ul li {
        position: relative;
    }

    ul {
        margin: 0px;
    }

    ul ul {
        position: absolute;
        top: $headerHeight;
        padding: 0px;
        text-align: center;
        line-height: 44px !important;
        display: none;
        z-index: 9999;
        background-color: white;
        box-shadow: 2px 2px 2px #e6e6e6;
    }

    .divCubeSecMenu {
        position: fixed;
        top: $headerHeight;
        margin-top: -1px;
        border-top: none;
        left: 0px;
        padding: 0px;
        text-align: center;
        width: 100%;
        // height: 200px;
        z-index: 9999;
        display: none;
        // box-shadow: 1px 1px 1px #e6e6e6;

        img {
            margin: 30px 10px -30px 0px;
        }
        ul li {
            width: 120px !important;
        }
    }

    ul li:hover > ul {
        display: block;
    }

    ul li:hover .divCubeSecMenu{
        display: block;
    }

    ul ul li {
        width: 130px;
        height: $menuSec;
        position: relative;
        margin: 0px;
        background-color: white;
        display: inline-block;
        line-height: $menuSec !important;
        right: 0;
        top: 0px;
        bottom: 0px;
        list-style-type: none;
        // opacity: 0.9;
        z-index: 9999;
    }

    .divCubeSecMenu ul {
        width: 100%;
        height: 180px;
        position: absolute;
        margin: 0px;
        background-color: white;
        display: inline-block;
        line-height: $menuSec !important;
        padding-left: 15px;
        padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        list-style-type: none;
        // opacity: 0.9;
        z-index: 9999;
    }

    .divCubeSecMenu ul li {
        width: 100%;
        height: $menuSec;
        position: relative;
        margin: 0px;
        background-color: white;
        display: inline-block;
        line-height: $menuSec !important;
        padding-left: 15px;
        padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        list-style-type: none;
        // opacity: 0.9;
        z-index: 9999;
    }

    a {
        font-size: 12pt;
        color: black;
        text-decoration: none;
        font-family: 'Pingfang SC','Microsoft YaHei',Arial,Helvetica,sans-serif; 
    }

    #divMobileNav {
        float: right;
        width: $headerHeight;
    }

    .headerMobileMenu {
        position:absolute;
        height: $headerHeight;
        width: $headerHeight;
        float: right;
    }

    .mobileMenu {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: $headerColor;
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 200ms;
        transition-duration: 200ms;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    .mobileMenu>span {
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        -webkit-transition: -webkit-transform .25s,opacity .25s;
        transition: transform .25s,opacity .25s;
        -webkit-transition-timing-function: cubic-bezier(0.4,.01,.165,.99);
        transition-timing-function: cubic-bezier(0.4,.01,.165,.99);
    }

    .mobileMenuLine {
        height: 2.5px;
        width: 24px;
        top: $headerHeight/2 - 2.5px/2;
        right: $headerHeight/2 - 24px/2;
        position: absolute;
        background-color: #000;
        border-radius: 2px;
        transition: transform .2s;

    }

    #menuContainer{
        position: absolute;
        top: $headerHeight;
        width: 100%;
        overflow-x: auto;
    }

    #mobileMenuList {
        position: absolute;
        top: 0px;
        margin: 0px;
        padding: 10px 0px 0px 0px;
        text-align: left;
        width:100%;
        background-color: black;
    }

    #mobileMenuList dt{
        width: 96%;
        position: relative;
        margin-top: 4px;
        margin-left: 2%;
        // height: 70px;
       
        .menu_title {
            line-height: 70px;
            background-color: rgba(255,255,255, 0.15);
            color: white;
            padding-left: 15px;
            font-size: 13pt;
        }
    }

    .line-t {
        position: absolute;
        top: $headerHeight;
        margin-right: 0px;
        padding: 0px;
        text-align: center;
        width:100%;
    }

    .line-b {
        position: absolute;
        top: $headerHeight;
        margin-right: 0px;
        padding: 0px;
        text-align: center;
        width:100%;
    }

    .line-t .mobileMenuLine {
        -webkit-transform: translateY(-8px); 
        transform: translateY(-8px); 
    }

    .line-b .mobileMenuLine {
        -webkit-transform: translateY(8px); 
        transform: translateY(8px); 
    }

    .menu_sublist_1,.menu_sublist_2,.menu_sublist_3,.menu_sublist_4,.menu_sublist_5{
        display:none;
        // width: 96%;
        height: 105px;
        margin-top: 4px;
        padding: 25px;
        background-color: rgba(255,255,255, 0.1);
    }

    .m_con {
        width: 100%;
        height: 70px;
    }

    .mtitle {
        float: left;
        height: 70px;
    }

    .arrow_contianer {
        height: 35px;
        padding-top: 31px;
        padding-right: 20px;
        float: right;
    }

    .arrow_style {
        width: 15px;
        float: right;
    }

    .icon_con {
        width: 100px;
        float: left;
    }

    .icon_con_less_375 {
        width: 80px;
        float: left;
    }

    .icon {
        width: 50px;
        opacity: 0.5;
        margin-left: 26px;
        // float: left;
    }

    .icon_title {
        width: 100px;
        text-align: center;
        color: white;
        margin-top: 5px;
        opacity: 0.5;
    }

    .space {
        float: left;
        height: 50px;
        width: 20px;
    }

</style>

