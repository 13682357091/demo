<template>
    <div id="instruction">
        <h1 class="top_title">
            哈奇光屏M1/M1 Pro产品使用说明
        </h1>
        <div class="contanier flex">
            <div class="silde_left">
                <ul>
                    <li v-for="menu in menuList" :class="menu.id == currTopLevelId? 'currMenu':''" :key="menu.name" @click="(menu.id && !menu.children)?displayCon(menu, 1):displaySubMenu(menu, 1)">{{menu.name}}</li>
                </ul>
            </div>
            <div class="silde_right">
                <ul v-if="secondMenuList && secondMenuList.length > 0" class="subMenu_list">
                    <template></template>
                    <li v-for="subMenu in secondMenuList" @click.stop="(subMenu.id && !subMenu.children)?displayCon(subMenu, 2):displaySubMenu(subMenu, 2)">
                        <template v-if="subMenu.children && subMenu.id !=1">
                            <p :class="(subMenu.id == currLevel2Id && subMenu.Expand)?'icon_up':'icon_down'">{{subMenu.name}}</p>
                            <template v-if="subMenu.Expand && subMenu.id == currLevel2Id">
                                <ul class="menu3_ul">
                                    <li v-for="(menu3, index3) in subMenu.children" :key="menu3.id" @click.stop="displayCon(menu3, 3)">
                                        <p :class="(menu3.id == currLevel3Id && isThirdShow)? 'menu3_li currMenu3':'menu3_li'">{{menu3.name}}</p>
                                        <div v-show="(currLevel3Id == menu3.id && isThirdShow)" class="three_content">
                                            <div class="content_style" v-html="content?content.cube_content:''"></div>
                                        </div>
                                    </li>
                                </ul>
                            </template>
                        </template>
                        <template v-else>
                            <p :class="(isSecondShow && subMenu.id == currLevel2Id)?'icon_up':'icon_down'">{{subMenu.name}}</p>
                            <div v-show="(isSecondShow && subMenu.id == currLevel2Id)" class="second_content">
                                <div class="content_style" v-html="content?content.cube_content:''"></div>
                            </div>
                        </template>         
                    </li>
                </ul>
                <div v-else class="top_content">
                    <!-- <p>{{content?content.title:''}}</p> -->
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
            currTopLevelId: 0,
            currLevel2Id: 0,
            currLevel3Id: 0,
            currDisplayId: 0,
            secondMenuList: null,
            isSecondShow: false,
            isThirdShow: false
        }
    },
    mounted() {
        // 20200420 modify
        let _this = this;
        // let id = this.$route.query.id;
        this.$store.state.menuId =  1 //this.$route.query.id;
        this.$store.dispatch('getMMenu').then((result)=> { 
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
                    this.secondMenuList = null;
                    break;
                case 2:
                    this.currLevel2Id == menu.id?this.isSecondShow = !this.isSecondShow:this.isSecondShow = true;
                    this.currLevel2Id = menu.id;
                    this.currLevel3Id = 0;
                    break;
                case 3:
                    this.currLevel3Id == menu.id?this.isThirdShow = !this.isThirdShow:this.isThirdShow = true;
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

            this.$store.dispatch('getMContent').then((result)=> { 
                _this.content = result;
                // console.log(result);
            });
            
        },

        displaySubMenu: function(menu, menuLevel) {
            switch(menuLevel) {
                case 1:
                    this.currTopLevelId = menu.id;
                    this.secondMenuList = menu.children;
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
*{
    margin:0;
    padding:0;
}
// modify 20200420
.top_title {
    background:#000;
    color:#fff;
    font-size:14px;
    padding:10px 0;
}
ul {
    list-style: none;
}
.content_style{
    width:calc(100% - 40px);
    margin: 0 auto;
    img {
        max-width:100%;
    }
}
.flex {
    display: -webkit-flex; /* Safari */
    display:flex;
    justify-content:space-between;
    width:100%;
}
.silde_left {
    width:27.5%;
    text-align:center;
    background-color: #F9F9F9;
    font-size: 16px;
    height: 570px;
    overflow-y:scroll;
    li {
        height:22px;
        line-height:22px;
        padding:10px 0;
        color:#7D7D7D;
    }
    .currMenu{
        position:relative;
        background:#fff;
        color:#5B9AFF;
        &::before {
            content:"";
            position: absolute;
            display:inline-block;
            width:4px;
            height:22px;
            top:50%;
            -webkit-transform:translateY(-50%);
            -ms-transform:translateY(-50%);
            transform:translateY(-50%);
            background:#5B9AFF;
            left:0;
        }
    }
}
.silde_right {
    width:72.5%;
    height:570px;
    overflow-y:scroll;
}
.subMenu_list {
    &>li > p {
        line-height:42px;
        width:calc(100% - 40px);
        margin:0 auto;
        text-align:left;
        border-bottom:1px solid #D8D8D8;
        color:#030303;
        font-size:14px;
    }
}
.icon_up{
    position:relative;
    color:#5B9AFF !important;
    background:url('./../../assets/images/support/arrow1_up.png') no-repeat;
    background-size:14px 8px;
    background-position:bottom 16px right;
}
.icon_down{
    position:relative;
    background:url('./../../assets/images/support/arrow1_down.png') no-repeat;
    background-size:14px 8px;
    background-position:bottom 16px right;
}
.menu3_ul{
    width:calc(100% - 40px);
    margin:0 auto;
    li {
        font-size:12px;
        text-align:left;
        margin-top:12px;
    }
    li:first-child {
        margin-top:16px;
    }
    p.currMenu3{
        color:#5B9AFF;
        &:before {
            background:#5B9AFF;
        }
        &::after {
            border-color: transparent transparent #5B9AFF transparent;
        }
    }
    
}

.menu3_li {
    position:relative;
    text-indent:20px;
    &:before {
        content:"";
        display:inline-block;
        color:#000;
        width:4px;
        height:4px;
        margin-right:6px;
        background:#000;
        vertical-align:middle;
        border-radius:50%;
    }
    &::after {
        content:"";
        display:inline-block;
        position:absolute;
        border:solid 4px;
        border-color: #bcbcbc transparent transparent transparent;
        right:4px;
        top:50%;
        -webkit-transform:translateY(-50%);
        -ms-transform:translateY(-50%);
        transform:translateY(-50%);
    }
}
</style>