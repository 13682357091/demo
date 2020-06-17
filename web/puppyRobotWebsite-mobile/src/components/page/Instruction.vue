<template>
    <div id="instruction">
        <div class="btm_container">
            <div class="btn_container">
                用户手册
            </div>

        </div>
        <div class="content_con">
            <div class="left">
                <ul class="topLevelMenu_ul">
                    <div v-for="(menu) in menuList" :key="menu.name">
                        <div class="menuword">

                            <li :class="(menu.nid == currDisplayNid || (menu.name == currTopLevelName)) ? 'topMenu_li currMenu':'topMenu_li'" @click="(menu.nid && !menu.has_child)?displayCon(menu, true, true):displaySubMenu(menu)">
                                <div :class="(menu.nid == currDisplayNid || (menu.name == currTopLevelName)) ? 'title_container currTopMenu':'title_container'">
                                {{menu.name}}

                                </div>
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
            <div class="right">
                <div v-if="isTopLevelMenuSelected">
                    <div class="content_style" v-html="content"></div>
                </div>
                <div v-if="!isTopLevelMenuSelected">
                    <ul class="subMenu_ul" v-show="currTopMenu?(currTopMenu.name == currTopLevelName):false">
                        <div class="subMenu_li_container" v-for="(subMenu, index) in (currTopMenu?currTopMenu.list:null)" :key="subMenu.name">
                            <li :id="'support?id=' + subMenu.nid" @click.stop :class="(currSubMenuExpand && subMenu.nid == currDisplayNid) ? 'subMenu_li currSubMenu':'subMenu_li'" :style="index==0?'border-top: 1px solid #f2f2f2;':''" @click="displayCon(subMenu, false)">      
                                    {{subMenu.title}}
                                    <img v-show="subMenu.nid == currDisplayNid && currSubMenuExpand" class="arrow" src="./../../assets/images/support/arrow_up.png">
                                    <img v-show="!currSubMenuExpand || subMenu.nid != currDisplayNid" class="arrow" src="./../../assets/images/support/arrow_down.png">
                                    <div class="content_style submenu_content" v-if="subMenu.nid == currDisplayNid && currSubMenuExpand" v-html="content"></div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>

            <div class="clear"></div>
        </div>
        <div class="puppy_logo">
         <img src="./../../assets/images/logo.png">
        </div>

        <div class="returnToTop" v-show="returnToTopDisplay">
            <a href="#instruction">
                <div class="return_a" ><img  class="return_img" src="./../../assets/images/support/return.png"></div>
            </a>
        </div>

    </div>
</template>

<script>

export default {
    data(){
        return {
            menuList: null,
            content: null,
            currDisplayNid: 31,
            currTopLevelName: null,
            currDisplayName: null,
            topLevelMenuExpand: false,
            isMenuDisplay: false,
            isClickTopMenuAndHasChild: false,
            returnToTopDisplay: false,
            isClickTopMenu: false,
            isLinkHref: false,
            isTopLevelMenuSelected: false,
            currTopMenu: null,
            currSubMenuExpand: false,

        }
    },
    mounted() {
        let _this = this;
        window.addEventListener('scroll', _this.pageScroll); // Dom树加载完毕
        this.$store.dispatch('getInstructionMenu').then((result)=> { 
            _this.menuList = result;

            if(this.menuList) {
                var tnid = this.GetQueryString('id')? this.GetQueryString('id'): '31';
                this.isLinkHref= this.GetQueryString('id')? true:false;
                var ttitle = tnid == '31'? '关于' : '';
                if(tnid) {
                    var tempMenu = {
                        nid: tnid,
                        title: ttitle,
                    }
                    this.displayCon(tempMenu, true);
                }
            }
            return false;
        });
    },
    destroyed () {
      const _this = this;
      window.removeEventListener('scroll', _this.pageScroll); // 销毁页面时清除
    },
    updated() {
        // 循环使图片最大宽度为100%。
        if(document.querySelector(".content_style")) {
            let imgs = document.querySelector(".content_style").querySelectorAll("img");
            for(var i=0;i<imgs.length;i++) {

                let imgW = imgs[i].attributes['width'] && imgs[i].attributes['width'].value;
                let imgH = imgs[i].attributes['height'] && imgs[i].attributes['height'].value;
                if(imgs[i].attributes['data-align'] && imgs[i].attributes['data-align'].value == "center") {
                    if((imgW & imgH ) && imgW > (document.body.clientWidth * 0.725 -20)) {
                        imgs[i].style.height = (document.body.clientWidth * 0.725-20)/imgW * imgH + 'px';
                    }
                    imgs[i].style.maxWidth = '100%';
                    imgs[i].style.margin = '0 auto';
                    imgs[i].style.display = 'block';
                }
                else {
                    if((imgW & imgH ) && imgW > (document.body.clientWidth * 0.725-20)) {
                        imgs[i].style.height = (document.body.clientWidth * 0.725-20)/imgW * imgH + 'px';
                    }
                    imgs[i].style.maxWidth = '100%';
                }
            }
        }
    },
    methods: {
        displayCon: function(menu, isTopLevelMenu, fromTopMenuClick) {
            let _this = this;
            this.content = "";
            this.$store.state.nid = menu.nid;
            this.$store.dispatch('getInstruction').then((result)=> { 
                _this.content = result;
            });

            if(!fromTopMenuClick) {
                if(menu.nid == this.currDisplayNid){
                    this.currSubMenuExpand = !this.currSubMenuExpand;
                } else {
                    this.currSubMenuExpand = true;
                }
            } else {
                let instructionTop = document.querySelector("#instruction");
                 this.$nextTick(function () {
                    // Code that will run only after the
                    // entire view has been rendered
                    scrollTo(0,0);
                })

                this.currSubMenuExpand = false;
            }

            this.currDisplayNid = menu.nid;
            this.currDisplayName = menu.name? menu.name : menu.title;
            if(!isTopLevelMenu) {
                for(var i=0;i<this.menuList.length;i++){
                    if(this.menuList[i].has_child && _.filter(this.menuList[i].list, ['nid', this.currDisplayNid]).length){
                        this.currDisplayName = _.filter(_this.menuList[i].list, ['nid', _this.currDisplayNid])[0].title;
                        this.currTopLevelName = _this.menuList[i].name;
                        this.topLevelMenuExpand = true;
                       
                    }
                }
                this.isTopLevelMenuSelected = false;

            } else {
                this.currTopLevelName = menu.name;
                this.isTopLevelMenuSelected = true;
            }

            if(!this.isClickTopMenuAndHasChild && !this.isLinkHref) {
                this.isMenuDisplay = !this.isMenuDisplay;
            } else {
                this.isClickTopMenuAndHasChild = false;
                this.isLinkHref = false;
            }

            return false;
            
        },

        displaySubMenu: function(menu) {
            this.isClickTopMenuAndHasChild = true;
            this.isClickTopMenu = true;
            if(menu.name == this.currTopLevelName || !this.topLevelMenuExpand) {
                this.topLevelMenuExpand = !this.topLevelMenuExpand;
            }
            this.currTopLevelName = menu.name;
            this.currTopMenu = menu;
            if(menu.list.length){
                if(this.topLevelMenuExpand){
                    this.displayCon(menu.list[0], false, true);
                }
            }
            return false;
        },

         GetQueryString: function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },

        MenuDisplay: function() {
            this.isMenuDisplay = !this.isMenuDisplay;
        },

        pageScroll: function(){
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if ((scrollTop > 46)){
                this.returnToTopDisplay = true
            } else {
                this.returnToTopDisplay = false
            }     
        }
    }
}
</script>
<style lang="scss" scoped>
.top {
    width: 100%;
    height: 46px;
}

.top_center {
    width: 100%;
    margin: 0 auto;
    height: 46px;
    line-height: 46px;
    text-align: left;
    margin-left: 10px;
      box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */

}

.btm_container {
    width: 100%;
    background-color: #e5e6eb;
}

.btn_container{
    width: 100%;
    height: 40px;
    background-color: #5F76BE;
    color: white;
    font-size: 18px;
    line-height: 40px;
    position: relative;
}

.menu_btn {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 45px;
}

.btn {
    width: 95%;
    text-align: right;
    height: 45px;
    line-height: 45px;
    font-size: 30px;
}

.currdisplayMenuName {
    margin: 9px;
    float: left;
    width: 60%;
    color: #000000;
    border: 1px solid #000000;
}

p {
    margin: 0px;
}

.btm {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
}

.content_con {
    background-color:#F9F9F9;
}

.left {
    width: 27.5%;
    background-color: #F9F9F9;
    overflow-y: scroll;
    overflow-x: hidden;
    color: #7D7D7D;
    font-size: 14px;
    text-align: center;
    float: left;
}

.right {
    width: 72.5%;
    float: left;
    background-color: white;
    min-height: 549px;
}

.content_title {
    width: 100%;
    height: 60px;
    font-size: 22px;
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    position: relative;
    color: white;
    max-width: 750px;
    background-image: url("./../../assets/images/support/content_title.png");
}

.title {
    position:absolute;
    top: 0px;
    text-align: left;
    height: 60px;
    line-height: 60px;
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

.white_line {
    position:absolute;
    top: 55px;
    width: 30px;
    height: 4px;
    background-color: #ffffff;
}

.content_style {
    margin: 10px 5px 10px 5px;
    text-align: left;
}

.submenu_content {
    margin: 0px !important;
    padding: 10px 0px 10px 0px !important;
    border-top: 0.5px solid #D8D8D8;
    // border-bottom: 1px solid #f2f2f2;
    box-sizing: border-box;
    // width: 100%;
    color: #000000;
}

ul {
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.topmenuicon {
    width: 15%;
    padding-left:15px;
    padding-right: 5px;
    float: left;
    padding-top: 8px;
    height: 45px;
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
}

.menuword {
    width: 100%;
    float: left;
}

.topMenu_li { 
    display: inline-block;
    cursor: pointer;
    height: 42px;
    text-align: center;
    right: 0;
    width: 100%;
    list-style-type: none;
} 

.title_container {
    height: 20px;
    margin-top: 11px;
    margin-bottom: 11px;
    line-height: 20px;
}

.subMenu_ul {
    background-color: #ffffff;
}

.subMenu_li_container {
    // width: 100%;
    padding: 0px 15px 0px 15px;
}

.subMenu_li { 
    display: inline-block;
    cursor: pointer;
    line-height: 45px;
    text-align: left;
    // margin: 0px 15px 0px 15px;
    width: 100%;
    // padding-left: 20px;
    list-style-type: none;
    border-bottom: 0.5px solid #D8D8D8;
    box-sizing: border-box;
} 

// .subMenu_li_top { 
//     display: inline-block;
//     cursor: pointer;
//     line-height: 45px;
//     text-align: left;
//     right: 0;
//     top: 0px;
//     bottom: 0px;
//     width: 100%;
//     padding-left: 20px;
//     list-style-type: none;
//     border-top: 0.5px solid #D8D8D8;
//     border-bottom: 0.5px solid #D8D8D8;
// } 



.currMenu {
    background-color: #ffffff;
    color: #1290E6;
}

.currTopMenu {
    border-left: 4px solid #1290E6;
}

.currSubMenu {
    color: #108fec;
}

.arrow {
    float: right;
    margin-right: 2px;
    margin-top: 18px;
}

.puppy_logo {
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: black;
}

.returnToTop {
    position: fixed !important;
    top: 90%;
    left: 85%;
    width: 40px;
    height: 40px;
    float:right;
}

.return_a {
    width: 40px;
    height: 40px;
}

.return_img {
    width: 40px;
    opacity: 0.5;
}

.clear {
    clear: both;
}

</style>