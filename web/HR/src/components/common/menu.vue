<template>
    <div id="menu">
        <div class="left">
            <div class="logo_container">
                <img src="./../../assets/images/index/logo.png">
            </div>
            <div class="menu_title">
                人事信息发布系统
            </div>
            <div class="clear"></div>
            <div class="menu">
                <ul>
                    <!-- <li style="cursor:default;">
                        <div>
                            <div class="topmenuicon">
                                <img src="./../../assets/images/index/u157.png" >
                            </div>
                            <div>
                                产品管理
                            </div>
                        </div>
                    </li> -->
                    <router-link to="/CarouselImage">
                    <li :class="currDisplay=='CarouselImage'?'currDisplay_li':''">
                        <div class="menu_words">
                        轮播图管理
                        </div>
                    </li>
                    </router-link>
                    <router-link to="/JobMgr">
                    <li :class="currDisplay=='JobMgr'?'currDisplay_li':''">
                        <div class="menu_words">
                        职位管理
                        </div>
                    </li>
                    </router-link>
                    <router-link to="/ParaMgr">
                    <li :class="currDisplay=='ParaMgr'?'currDisplay_li':''">

                            <!-- <div class="topmenuicon">
                                <img src="./../../assets/images/index/u171.png" >
                            </div> -->
                            <div class="menu_words">
                                参数设置
                            </div>

                    </li>
                    </router-link>
                    <router-link to="/CompanyIntro">
                    <li :class="currDisplay=='CompanyIntro'?'currDisplay_li':''">

                            <!-- <div class="topmenuicon">
                                <img src="./../../assets/images/index/u164.png" >
                            </div> -->
                            <div class="menu_words">
                                公司介绍
                            </div>
                    </li>
                    </router-link>
                </ul>
            </div>
            <div class="btn_logout" @click="exit()" v-show="userclick">
                    退出
            </div>
            <div class="user_info">
                <div class="user_con" @click="user_logout()">
                    <div class="float_right">
                        <img :src="!userclick?require('./../../assets/images/index/u186.png'):require('./../../assets/images/index/u187.png')">
                    </div>
                    <div class="username float_right">
                        {{username}}
                    </div>
                </div>
            </div>

        </div>
        <!-- <div class="right">
            <div class="right_title">

                1111
            </div>

        </div> -->

    </div>
</template>
<script>
export default {
    data(){
        return{
            userclick: false,
            currDisplay: 'ProductModel',
            currRouter: '/',
            username: window.localStorage["username"]? window.localStorage["username"]:'username'
        }
    },
    mounted() {
        var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if(h>694){
            if(document.querySelector(".left")){
                document.querySelector(".left").style.height = h + 'px';
            }
        } else {
            if(document.querySelector(".left")){
                document.querySelector(".left").style.height = '694px';
            }
        }

        window.onresize = function temp() {
            var rh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if(rh>694){
                if(document.querySelector(".left")){
                    document.querySelector(".left").style.height = rh + 'px';
                }
            } else {
                if(document.querySelector(".left")){
                    document.querySelector(".left").style.height = '694px';
                }
            }
        };

        this.currDisplay = this.$route.name;
    },
    watch: {
        // 监听路由参数发生变化，重新加载页面
        "$route": "routerChange"
    },
    methods: {
        user_logout: function(){
            this.userclick = !this.userclick;
        },

        routerChange: function() {
            this.currDisplay = this.$route.name;
        },

        exit() {
            var storage = window.localStorage;
            storage["token"] = "";
            storage["username"] = "";
            this.$router.push({path:'/'});
        }
    }
}
</script>

<style lang="scss" scoped>
#menu {
    width: 240px;
    height: 694px;
}

.left {
    width: 240px;
    height: 694px;
    background: inherit;
    background-color: rgba(36, 47, 66, 1);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    float: left;
    position: relative;
}

.logo_container {
    width: 60px;
    height: 48px;
    border-right: 1px solid #7c7b7b;
    border-bottom: 1px solid #7c7b7b;
    float: left;

    img {
        width: 30px;
        height: 30px;
        margin-top: 9px; 
    }
}

.menu_title {
    width: 179px;
    height: 48px;
    border-bottom: 1px solid #7c7b7b;
    float: left;
    font-family: 'PingFangSC-Semibold', 'PingFang SC Semibold', 'PingFang SC';
    font-weight: 650;
    font-style: normal;
    font-size: 18px;
    color: #FFFFFF;
    text-align: center;
    line-height: 48px;
}

.clear {
    clear: both;
}

.menu {
    margin-top: 20px;
}

.topmenuicon {
    img{
        width: 20px;
        height: 20px;
        padding-left:30px;
        padding-right: 10px;
        float: left;
        padding-top: 14px;
    }
}

ul {
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
}

li {
    display: inline-block;
    cursor: pointer;
    line-height: 50px;
    text-align: left;
    right: 0;
    top: 0px;
    bottom: 0px;
    width: 240px;
    height: 50px;
    list-style-type: none;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #FFFFFF;

    :hover {
        background-color: rgba(0, 0, 51, 1);
    }
}

.currDisplay_li {
    background-color: rgba(0, 0, 51, 1);
}

.menu_words {
    padding-left: 60px;
}

.user_info {
    position: absolute;
    bottom:20px;
    right: 20px;
    width: 200px;
    height: 30px;
    // background-color: red;
    .float_right {
        float:right;
    }

    .username {
        color: white;
        margin-right: 5px;
        -moz-user-select:none; /*火狐*/
        -webkit-user-select:none; /*webkit浏览器*/
        -ms-user-select:none; /*IE10*/
        -khtml-user-select:none; /*早期浏览器*/
        user-select:none;
    }

    .user_con {
        cursor: pointer;

        img{
            width: 16px;
            margin-top: 4px;
        }
    }


}

.btn_logout {
    position: absolute;
    bottom:55px;
    right: 20px;
    width: 82px;
    height: 35px;
    background-color: white;
    color: black;
    line-height: 35px;
    cursor: pointer;
    -moz-user-select:none; /*火狐*/
    -webkit-user-select:none; /*webkit浏览器*/
    -ms-user-select:none; /*IE10*/
    -khtml-user-select:none; /*早期浏览器*/
    user-select:none;
}

.right {
    width: 100%;
    padding-left: 240px;
    box-sizing: border-box;
}


.right_title {
    width: 100%;
    height: 48px;
    background-color: #f2f2f2;
    line-height: 48px;
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
}

</style>

