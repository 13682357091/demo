<template>
  <div id='pageheader' :class="indexPage && isCurrScrollTop?'pageheader_index':'pageheader_normal'">
    <div class="pageheaderMid">
        <div id='divLogo'>
            <router-link to="/">
            <div id='pageheaderlogo'>
            </div>
            </router-link>
        </div>
        <div id='divPCNav'>
            <ul>
                <li @mouseover="cubeSecMenuDisplay()" @mouseout="cubeSecMenuHide()">
                    <div class="floatleft"><a herf="">Product</a></div> <div id="triangle" class="floatleft"></div>
                    <ul>
                        <router-link to="/puppycube">
                        <li>
                            <a herf="">Puppy Cube</a>
                        </li>  
                        </router-link>
                        <router-link to="/hachiinfinite">
                        <li>
                            <a herf="">Hachi Infinite</a>
                        </li>    
                        </router-link>
                    </ul>
                </li>


                <li>
                    <div class="floatleft"><a herf="">Explorer</a></div> <div id="triangle" class="floatleft"></div>
                    <ul>
                        <router-link to="/newscenter">
                        <li>
                            <a herf="">Newsroom</a>
                        </li>  
                        </router-link>
                        <router-link to="/aboutus">
                        <li>
                            <a herf="">About Us</a>
                        </li>    
                        </router-link>
                        <router-link to="/contact">
                        <li>
                            <a herf="">Contact Us</a>
                        </li>    
                        </router-link>
                    </ul>
                </li>

                <li>
                    <div class="floatleft"><a herf="">Support</a></div> <div id="triangle" class="floatleft"></div>
                    <ul>
                        <router-link to="/support?type=FAQ">
                        <li>
                            <a herf="">FAQ</a>
                        </li>  
                        </router-link>
                        <router-link to="/support?type=documents">
                        <li>
                            <a herf="">Documents</a>
                        </li>  
                        </router-link>
                        <router-link to="/support?type=ProcessWarranty">
                        <li>
                            <a herf="">Customer Service</a>
                        </li>    
                        </router-link>
                    </ul>
                </li>
                
            </ul>
        </div>

    </div>
  </div>
</template>

<script>

    export default {
        name: 'PageHeader',
        props: ['indexPage'],
        data () {
            return {
                isDisplay: false,
                cubeSecMenuDisp: false,
                menu1Display: false,
                menu2Display: false,
                menu3Display: false,
                headerMOver: false,
                isCurrScrollTop: true,
            }
        },
        mounted() {
            // 监听这个dom的scroll事件
            const _this = this;
            window.addEventListener('scroll', _this.handleScroll); // Dom树加载完毕
        },
        destroyed() {
            const _this = this;
            window.removeEventListener('scroll', _this.handleScroll); // 销毁页面时清除
        },
        methods: {
            cubeSecMenuDisplay: function() {
                this.cubeSecMenuDisp = true;
            },

            cubeSecMenuHide: function() {
                this.cubeSecMenuDisp = false;
            },
            handleScroll : function () {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // 固定导航栏
                let navBar = document.querySelector("#pageheader");

                if (scrollTop > navBar.offsetHeight){
                    this.isCurrScrollTop = false;
                } else {
                    this.isCurrScrollTop = true;
                    
                }     
            }
        }
    }
</script>

<style scoped lang="scss" type="text/css">
    $headerHeight: 60px;
    $menuSec: 44px;
    $headerColor: #f1f1f1;
    #triangle {
        width: 7px;
        height: 6px;
        margin-left: 5px;
        margin-top: $headerHeight/2 - 6px/2; 
    }

    .pageheader_normal {
        width: 100%;
        height: $headerHeight;
        z-index: 9999;
        text-align: center;

        background-color: rgba(241, 241, 241, 1);
        a {
            color: black;
            font-size: 16px;
            font-family: 'Microsoft YaHei';
        }

        #pageheaderlogo {
            width: 150px;
            height: 37.03px;
            background: url(./../../assets/images/header/puppy_black.png) center center no-repeat;
            background-size: contain;
            img {
                width: 150px;
            }

        }

        #triangle {
            background: url(./../../assets/images/header/triangle_black.png) top left no-repeat;
        }
    }

    .pageheader_index {
        background-color: rgba(241, 241, 241, 0);
        // opacity: 0.9;
        width: 100%;
        height: $headerHeight;
        z-index: 9999;
        text-align: center;
        a {
            color: white;
            font-size: 16px;
            font-family: 'Microsoft YaHei';
        }

        #triangle {
            background: url(./../../assets/images/header/triangle_white.png) center center no-repeat;
        }

        #pageheaderlogo {
            width: 150px;
            height: 37.03px;
            background: url(./../../assets/images/header/puppy_white.png) center center no-repeat;
            background-size: contain;
        }

        #triangle {
            background: url(./../../assets/images/header/triangle_white.png) top left no-repeat;
        }
    }

    .pageheader_index:hover {
        background-color: rgba(241, 241, 241, 1);
        a {
            color: black;
        }

        #pageheaderlogo {
            width: 150px;
            height: 37.03px;
            background: url(./../../assets/images/header/puppy_black.png) center center no-repeat;
            background-size: contain;
        }

        #triangle {
            background: url(./../../assets/images/header/triangle_black.png) top left no-repeat;
        }
    }

    .floatleft {
        float: left;
    }

    .pageheaderMid {
        width: 1080px;
        margin: 0 auto;
        &::before {
            content:"";
            clear:both;
        }
        &::after {
            content:"";
            clear:both;
        }
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
        height: 40px;
        margin-left: 15px;
        margin-top: $headerHeight/2 - 40px/2; 
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
        // padding-left: 30px;
        // padding-right: 15px;
        right: 0;
        top: 0px;
        bottom: 0px;
        width: 160px;
        text-align: center;
        list-style-type: none;
        a {
            font-size: 14px;
        }
        
    } 

    .puppycube_style {
        padding-left: 45px !important;
        width: 115px;
        
    }

    // li:hover {
        // background-color:white;
        // width: 110px;
        // box-shadow: 1px 1px 1px #e6e6e6;
        // opacity: 1;
        // border-bottom: 2px solid #000000;
    // }

    // ul li:hover>a{
    //     color: #929497;
    // }

    ul li {
        position: relative;
    }

    ul {
        margin: 0px;
    }

    ul ul {
        position: absolute;
        top: $headerHeight;
        // height: 130px;
        text-align: center;
        display: none;
        z-index: 9999;
        background-color: #f1f1f1;
        margin-left:-30px;
        width: 170px;
        padding-top: 10px;
        padding-bottom: 10px;
        box-sizing: border-box;
        line-height: 39px;

    }

    ul li:hover > ul {
        display: block;
    }

    ul li:hover .divCubeSecMenu{
        display: block;
    }

    ul ul li {
        width: 140px;
        height: 40px;
        position: relative;
        // background-color: white;
        display: inline-block;
        line-height: 40px !important;
        list-style-type: none;
        z-index: 9999;
        margin-top: 0px; 
        margin-bottom: 0px;
        margin-left: -30px;
        // background-color: red;
        text-align: left;
         a {
            font-size: 13px;
        }
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
        height: 180px;
        z-index: 9999;
        display: none;
        box-sizing: border-box;
        // box-shadow: 1px 1px 1px #e6e6e6;

        img {
            margin: 30px 10px -30px -12px;
        }
        ul li {
            width: 120px !important;
        }
    }

    .divCubeSecMenu ul {
        width: 100%;
        height: 190px;
        position: absolute;
        margin: 0px;
        // background-color: white;
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
        // background-color: white;
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
        font-size: 14px;
        // color: black;
        text-decoration: none;
        font-family: 'Pingfang SC','Microsoft YaHei',Arial,Helvetica,sans-serif; 
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

    .menu_sublist_1,.menu_sublist_2,.menu_sublist_3{
        display:none;
        // width: 96%;
        height: 110px;
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

