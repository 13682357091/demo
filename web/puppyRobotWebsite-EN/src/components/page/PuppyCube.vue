<template>
    <div id="puppycube">
        <div class="cube_header">
            <div class="header_mid">
                <div class='div_title'>
                    Puppy Cube
                </div>
                <div class='divNav'>
                    <div class="nav cursor_pointer" @click="changeCurrIndex(0)">
                            Overview
                    </div>
                    <div class="nav cursor_pointer" @click="changeCurrIndex(1)">
                            Tech Specs
                    </div>
                    <div class="nav">
                        <a href="https://store.puppyrobot.com/products/puppy-cube-purchase-page" target="_blank">
                        <div class="buynow cursor_pointer">
                            Buy Now
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <cube-overview v-show="currIndex == 0"/>
            <cube-tech v-show="currIndex == 1"/>
        </div>
    </div>
</template>
<script>
import CubeOverview from "./Cube_Overview"
import CubeTech from "./Cube_Tech"
export default {
    data() {
        return {
            currIndex: 0,
            scrolldelay: null,
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
        changeCurrIndex (index) {
            this.currIndex = index;

            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
                scrollTo(0,0);
            })
            
        },
        handleScroll : function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // 固定导航栏
        let navBar = document.querySelector(".cube_header");

        if (scrollTop + 60 > navBar.offsetHeight){
            // this.isFixedBar = true
            navBar.style.marginTop = "-60px";
        } else {
            // this.istabBar = false
            navBar.style.marginTop = "0px";
        }     
      }
    },
    components: {
        CubeOverview,
        CubeTech
    }
}
</script>

<style lang="scss" scoped>
    
.cube_header {
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: #242323;
    z-index: 8888;
}

.header_mid {
    width: 1080px;
    height: 60px;
    margin: 0 auto;
}

.div_title {
    float: left;
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    width: 100px;
    margin-left: 10px;
    text-align: left;
}

.divNav {
    float: right;
    height: 60px;
    line-height: 60px;
    color: white;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    margin-right: 48px;
}

.nav {
    float: left;
    width: 162px;
}

.buynow {
    width: 88px;
    height: 24px;
    border-radius: 10px;
    margin: 0 auto;
    background-color: #249df3;
    margin-top: 18px;
    line-height: 22px
}

.cursor_pointer {
    cursor: pointer;
}
    
.content {
    padding-top: 60px;
}

a {
    text-decoration-line: none;
    color: white;
}

</style>




