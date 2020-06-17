<template>
    <div id="instruction">
        <!-- <div class="hachiheader">
            <div class="headerContent">
                <div class="hachiHT">
                <div class="hachiThridMenu">
                    <div id='divNews'>
                    puppy cube/puppy cube s产品使用说明
                    </div>
                </div>

                <div class="headerLine">
                </div>
                </div>
            </div>
        </div> -->
        <!-- <div class="top">
            <div class="top_center"><p>puppy cube/puppy cube s产品使用说明</p></div>
        </div> -->
        <div class="btm_container">
            <div class="btm">
                <div class="left">
                    <ul class="topLevelMenu_ul">
                        <div v-for="(menu, index) in menuList" :key="menu.name">

                            <div class="menuword">

                                <li :id="'nid=' + menu.nid" :class="(menu.nid == currDisplayNid || (menu.name == currTopLevelName)) ? 'topMenu_li currMenu':'topMenu_li'" @click="(menu.nid && !menu.has_child)?displayCon(menu, true):displaySubMenu(menu)">
                                    <div class="topmenuicon">
                                        <img :src="require('./../../assets/images/support/icon_' + index + '.png')" >
                                    </div>
                                    {{menu.name}}
 
                                
                                    <img v-if="menu.has_child" v-show="menu.name == currTopLevelName && topLevelMenuExpand" class="arrow" src="./../../assets/images/support/arrow_up.png">
                                    <img v-if="menu.has_child" v-show="menu.name != currTopLevelName || !topLevelMenuExpand" class="arrow" src="./../../assets/images/support/arrow_down.png">

                                    <ul class="subMenu_ul" v-show="menu.name == currTopLevelName && topLevelMenuExpand">
                                        <div v-for="(subMenu, index) in menu.list" :key="subMenu.name">
                                            <li :id="'support?id=' + subMenu.nid" @click.stop :class="subMenu.nid == currDisplayNid ? 'subMenu_li currSubMenu':'subMenu_li'" :style="index==0?'border-top: 1px solid #f2f2f2;':''" @click="displayCon(subMenu, false)">
                                                {{subMenu.title}}
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                            </div>
                        </div>
                    </ul>
                </div>
                <div class="right">
                    <div class="content_title">{{currDisplayName}}
                        <!-- <div class="white_line"></div> -->
                    </div>
                    <div class="content_style" v-html="content"></div>
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
            currDisplayNid: 31,
            currTopLevelName: null,
            currDisplayName: null,
            topLevelMenuExpand: false
        }
    },
    mounted() {

        let _this = this;
        this.$store.dispatch('getInstructionMenu').then((result)=> { 
            _this.menuList = result;

            if(this.menuList) {
                var tnid = this.GetQueryString('id')? this.GetQueryString('id'): '31';
                var ttitle = tnid == '31'? '关于' : '';
                if(tnid) {
                    var tempMenu = {
                        nid: tnid,
                        title: ttitle,
                    }
                    this.displayCon(tempMenu);
                }
            }
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
        displayCon: function(menu, isTopLevelMenu) {
            let _this = this;
            if(isTopLevelMenu) {
                this.currTopLevelName = menu.name;
            }

            this.$store.state.nid = menu.nid;
            this.$store.dispatch('getInstruction').then((result)=> { 
                _this.content = result;
            });
            this.currDisplayNid = menu.nid;
            this.currDisplayName = menu.name? menu.name : menu.title;
            if(!isTopLevelMenu) {
                for(var i=0;i<this.menuList.length;i++){
                    if(this.menuList[i].has_child && _.filter(this.menuList[i].list, ['nid', this.currDisplayNid]).length){
                        this.currDisplayName = _.filter(_this.menuList[i].list, ['nid', _this.currDisplayNid])[0].title;
                        this.currTopLevelName = _this.menuList[i].name;
                        this.topLevelMenuExpand = true;
                        return false;
                    }
                }
            }
        },

        displaySubMenu: function(menu) {
            if(menu.name == this.currTopLevelName || !this.topLevelMenuExpand) {
                this.topLevelMenuExpand = !this.topLevelMenuExpand;
            }
            this.currTopLevelName = menu.name;
            if(menu.list.length){
                if(this.topLevelMenuExpand){
                    this.displayCon(menu.list[0], false);
                }
            }
            return false;
        },

         GetQueryString: function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
    }
}
</script>
<style lang="scss" scoped>
$hachiSMB: 46px;
    .hachiheader {
        width: 100%;
        text-align: center;
    }

    .headerContent {
        width: 1280px;
        margin: 0 auto;
    }

    #divNews {
        float: left;
        height: $hachiSMB;
        line-height: $hachiSMB;
        margin-left: 10px;
        font-weight: bold;
    }

    .hachiThridMenu {
        height: $hachiSMB;
    }

    .solutionName {
        float: left;
        font-size: 13pt;
        height: $hachiSMB;
        line-height: $hachiSMB;
    }

    .hachiHT {
        width: 100%;
        height: $hachiSMB;
    }

    .headerLine {
        width: 100%;
        height: 1px;
        background-image: url('./../../assets/images/hachi/solution/nav_top_Hachi_line.png');
    }
// .top {
//     width: 100%;
//     height: 150px;
//     background-color: gray;
// }

// .top_center {
//     width: 1280px;
//     margin: 0 auto;
//     height: 130px;
//     padding-top: 0.5em;
//     // line-height: 130px;
//     text-align: right;
//     font-size: 30px;
// }

.btm_container {
    // padding-top: 10px;
    width: 100%;
    background-color: #fafafa;
    min-height: 700px;
}

.btm {
    width: 1280px;
    margin: 0 auto;
}

.left {
    width: 280px;
    height: 700px;
    float:left;
    background-color: #ffffff;
    overflow-y: scroll;
    overflow-x: hidden;
}

.right {
    margin-left: 10px;
    width: 990px;
    height: 700px;
    background-color: #ffffff;
    float: left;
    overflow-y: auto;

}

.content_title {
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    text-align: left;
    padding-left: 40px;
    background-color: #daebf7;
    box-sizing: border-box;
    position: relative;
    color: white;
    max-width: 970px;
    height: 80px;
    background-image: url("./../../assets/images/support/content_title.jpg");
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
    top: 60px;
    width: 30px;
    height: 4px;
    background-color: #ffffff;
}

.content_style {
    margin: 20px;
    text-align: left;
}

ul {
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}

.topmenuicon {
    width: 30px;
    padding-left:15px;
    padding-right: 10px;
    float: left;
    padding-top: 8px;
    height: 37px;
}

.menuword {
    width: 200px;
    float: left;
}

.topMenu_li { 
    display: inline-block;
    cursor: pointer;
    line-height: 45px;
    text-align: left;
    right: 0;
    top: 0px;
    bottom: 0px;
    width: 280px;
    list-style-type: none;
} 

.subMenu_ul {
    background-color: #ffffff;
}

.subMenu_li { 
    display: inline-block;
    cursor: pointer;
    line-height: 45px;
    text-align: left;
    right: 0;
    top: 0px;
    bottom: 0px;
    width: 210px;
    margin-left: 55px;
    // padding-left: 20px;
    list-style-type: none;
    border-bottom: 1px solid #f2f2f2;

} 

.subMenu_li_top { 
    display: inline-block;
    cursor: pointer;
    line-height: 45px;
    text-align: left;
    right: 0;
    top: 0px;
    bottom: 0px;
    width: 220px;
    padding-left: 20px;
    list-style-type: none;
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
} 



.currMenu {
    background-color: #f2f2f2;
}

.currSubMenu {
    color: #108fec;
}

.arrow {
    float: right;
    margin-right: 25px;
    margin-top: 18px;
}

</style>