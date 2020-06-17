<template>
    <div id="instruction">
        <div class="btm_container">
            <div :class="['btm', {'en':isEn}]">
                <div class="left">
                    <ul class="topLevelMenu_ul">
                        <li v-for="(menu) in menuList" :key="menu.name" :id="'id=' + menu.id" :class="menu.id == currTopLevelId? 'topMenu_li currMenu':'topMenu_li'">
                            <div class="topmenu" @click.stop="(menu.id && !menu.children)?displayCon(menu, 1):displaySubMenu(menu, 1)">
                                <img :src="menu.icon" class="icon"><p>{{menu.name}}</p>
                                <template v-if="menu.children && menu.type != 1">
                                    <img v-if="menu.Expand && menu.id == currTopLevelId" class="arrow" src="./../../assets/images/support/arrow_up.png">
                                    <img v-if="!menu.Expand || menu.id != currTopLevelId" class="arrow" src="./../../assets/images/support/arrow_down.png">    
                                </template> 
                            </div>
                                                            
                            <ul class="subMenu_ul" v-if="menu.type != 1" v-show="menu.Expand && menu.id == currTopLevelId">
                                <li v-for="(subMenu, index2) in menu.children" :key="subMenu.id" :id="'subMenuid=' + subMenu.id" :class="subMenu.id == currLevel2Id ? 'subMenu_li currSubMenu':'subMenu_li'">
                                    <template v-if="subMenu.children && subMenu.id !=1">
                                        <p :class="(subMenu.id == currLevel2Id && subMenu.Expand)?'up_arrow':'down_arrow'"  @click.stop="(subMenu.id && !subMenu.children)?displayCon(subMenu, 2):displaySubMenu(subMenu, 2)">{{subMenu.name}}</p>
                                        <ul class="menu3_ul" v-if="subMenu.Expand && subMenu.id == currLevel2Id">
                                            <li v-for="(menu3, index3) in subMenu.children" :key="menu3.id" :id="'menu3Id=' + menu3.id" :class="menu3.id == currLevel3Id ? 'menu3_li currMenu3':'menu3_li'" @click.stop="displayCon(menu3, 3)">{{menu3.name}}</li>
                                        </ul>
                                    </template>
                                    <template v-else>
                                        <p  @click.stop="(subMenu.id && !subMenu.children)?displayCon(subMenu, 2):displaySubMenu(subMenu, 2)">{{subMenu.name}}</p>
                                    </template>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="right">
                    <h2 class="content_title">{{content?content.title:''}}</h2>
                    <div class="content_style" v-html="content?content.cube_content:''"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            menuList: null,
            content: null,
            // currDisplayNid: 31,
            currTopLevelId: 0,
            currLevel2Id: 0,
            currLevel3Id: 0,
            currDisplayId: 0,
            // topLevelMenuExpand: false
            isEn: false
        }
    },
    mounted() {
        // 20200420 modify
        let _this = this;
        // let id = this.$route.query.id;
        this.$store.state.menuId =  this.$route.query.id;
        if(this.$route.query.id && this.$route.query.id == 2) {
            this.isEn = true;
        }
        this.$store.dispatch('getInstructionMenu').then((result)=> { 
            _this.menuList = result;
            _this.displayCon(result[0], 1)
            return false;
        });
    },

    updated() {
        // 循环使图片最大宽度为100%。
        let imgs = document.querySelector(".content_style").querySelectorAll("img");
        for(var i=0;i<imgs.length;i++) {
            if(imgs[i].attributes['data-align'] && imgs[i].attributes['data-align'].value == "center") {
                imgs[i].style.maxWidth = '100%';
                imgs[i].style.margin = '0 auto';
                imgs[i].style.display = 'block';
            }
        }
    },
    methods: {
        displayCon: function(menu, menuLevel) {
            let _this = this;
            switch(menuLevel) {
                case 1:
                    this.currTopLevelId = menu.id;
                    this.currLevel3Id = 0;
                    this.currLevel2Id = 0;
                    break;
                case 2:
                    this.currLevel2Id = menu.id;
                    this.currLevel3Id = 0;
                    break;
                case 3:
                    this.currLevel3Id = menu.id;
                    break;
                default:
                    this.currDisplayId = menu.id;
                    break;
            }
            this.currDisplayId = menu.id;
            if(menu.type != 1) {
                return;
            }
            this.$store.state.node_id = menu.node_id;

            this.$store.dispatch('getInstruction').then((result)=> { 
                _this.content = result;
                // console.log(result);
            });
            
        },

        displaySubMenu: function(menu, menuLevel) {
            switch(menuLevel) {
                case 1:
                    this.currTopLevelId = menu.id;
                    break;
                case 2:
                    this.currLevel2Id = menu.id;
                    break;
                case 3:
                    this.currLevel3Id = menu.id;
                    break;
                default:
                    this.currDisplayId = menu.id;
                    break;
            }
            
            if(!menu.Expand) {
                menu.Expand = true;
                this.$forceUpdate();
            } else {
                if(this.currDisplayId == menu.id){
                    menu.Expand = !menu.Expand; 
                    this.$forceUpdate();
                }
            }

            this.currDisplayId = menu.id;
            return false;
        },

        GetQueryString: function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        },
    }
}
</script>
<style lang="scss" scoped>
$hachiSMB: 46px;
html,body,ul,li,p,div,img{
    margin:0;
    padding:0;
}
.flex {
    display: -webkit-flex;  /* 新版本语法: Chrome 21+ */
    display: -webkit-box;   /* 老版本语法: Safari, iOS, Android browser, older WebKit browsers. */
    display: -moz-box;      /* 老版本语法: Firefox (buggy) */
    display: -ms-flexbox;   /* 混合版本语法: IE 10 */
    display: flex;          /* 新版本语法: Opera 12.1, Firefox 22+ */   
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    flex-flow: row;
}
.btm_container {
    width: 100%;
    background-color: #ffffff;
    min-height: 800px;
    margin-bottom:20px;
}

.btm {
    max-width: 1840px;
    margin: 0 auto;
    padding: 0 40px;
    height: 1080px;
    @extend .flex;
    font-family:PingFang SC,Microsoft YaHei,sans-serif;
    -webkit-tap-highlight-color: transparent;
}
.en {
    .left {
        width:398px;
    }
}

.left {
    width: 316px;
    background-color: #F9F9F9;
    overflow-y: scroll;
    overflow-x: hidden;
    padding:10px 12px;
    box-sizing:border-box;
}
.right {
    // margin-left: -15px;
    width: 1500px;
    padding:0 20px;
    background-color: #ffffff;
    overflow-y: scroll;
    overflow-x: scroll;
    box-sizing: border-box;
    flex: 1;
}

.content_title {
    width: 100%;
    line-height: 96px;
    font-size: 48px;
    text-align: center;
    color: #444445;
    font-weight:normal;
    margin:0;
    padding:0
}

.content_style {
    text-align: left;
    img {
        max-width:100%;
    }
}

.topLevelMenu_ul {
    padding: 10px 0;
    background-color: #F9F9F9;
    color:#7C8088;
    font-size:22px;
    line-height:33px;
    &:after {
        content:"";
        display:block;
        clear:both;
    }
}

.topmenu {
    padding:0 9px;
    position:relative;
    img.icon {
        width: 100%;
        width: 28px;
        height: 28px;
        vertical-align:middle;
        margin-right: 13px;
    }
    p{
        display:inline-block;
    }
    .arrow {
        position:absolute;
        right:9px;
        top:50%;
        -webkit-transform:translateY(-50%);
        -ms-transform:translateY(-50%);
        transform:translateY(-50%);
    }
}

.currMenu {
    .topmenu {
        background-color: rgba(91,154,255,.1);
        border-radius:4px;
    }
    
}
.topMenu_li { 
    display: inline-block;
    cursor: pointer;
    line-height: 50px;
    text-align: left;
    width: 100%;
    list-style-type: none;
    box-sizing:border-box;
    margin-top:12px;
} 


.subMenu_ul {
    font-size:18px;
    padding-left:50px;
    padding-right:4px;
    width:100%;
    box-sizing:border-box;
}
.subMenu_li { 
    position: relative;
    cursor: pointer;
    text-align: left;
    list-style-type: none;
    font-size:18px;
    color:#9398A2;
    margin-top:11px;
    p {
        padding:0 6px;
        margin:0;
        position:relative;
        line-height:34px;
        border-bottom:1px solid #D5DAE6;
    }

} 
.currSubMenu{
    > p {
        border-radius:2px;
        background:#5B9AFF;
        color:#fff;
    }
}

//文字图片等不可被选中
div{
    -webkit-user-select:none;

     -moz-user-select:none;

     -ms-user-select:none;

     user-select:none;

}
.up_arrow {
    background:#5B9AFF;
    color:#fff;
    &:after {
        content:"";
        display:inline-block;
        position:absolute;
        border:solid 5px;
        right:10px;
        top:11px;
        border-color:transparent transparent #fff transparent;
    }
}
.down_arrow {
    color:#9398A2 !important;
    background:transparent !important;
    &:after {
        content:"";
        display:inline-block;
        position:absolute;
        border:solid 5px;
        right:10px;
        top:12px;
        border-color: #bcbcbc transparent transparent transparent;
    }
}
.menu3_ul {
    background-color: #F9F9F9;
    // padding-left: -5px !important;
    list-style-type: none;
    >li:first-child {
        margin-top:16px;
    }
}

.menu3_li { 
    position: relative;
    cursor: pointer;
    text-align: left;
    font-size:16px;
    text-indent:6px;
    line-height:24px;
    margin-top:12px;
    &::before {
        content:"";
        display:inline-block;
        width:4px;
        height:4px;
        border-radius:50%;
        background:#B6BCC8;
        margin-right:6px;
        vertical-align:middle;
    }
} 

.currMenu3 {
    color: #5B9AFF;
    &::before {
        background:#5B9AFF;
    }
}

.clear {
    clear: both;
}

@media screen and (max-width:1080px) {
    .icon {display:none;}
    .topLevelMenu_ul{font-size:14px;}
    .topMenu_li {line-height:30px;}
    .topmenu .arrow {right:0; max-width:16px;}
    .subMenu_ul{padding-left:4px;font-size:12px;}
    .subMenu_li{font-size:12px;}
    .menu3_li{font-size:12px;}
    .down_arrow:after, .up_arrow:after{right:0;}
    .content_title{line-height:48px;font-size:16px;}
    .right{padding:0 10px;}
    .left{width:150px;}
    .hachiheader{font-size:16px;line-height:40px;}
}
@media screen and (max-width:415px) {
    .en .left{width:180px;}
    .hachiheader{font-size:16px;line-height:40px;}
    .btm {padding:0;}
}
</style>