<template>
    <div id="hachiinfinite">
        <div class="cube_header">
            <div class="header_mid">
                <h2 class="div_title">Hachi Infinite M1</h2>
                <div class="nav_list">
                    <span @click="changeCurrIndex(0)">Overview</span><span @click="changeCurrIndex(1)">Tech Specs</span><div><a href="https://store.puppyrobot.com/products/hachi-infinite" target="_blank" class="buynow cursor_pointer">Pre-Order Now</a></div>
                </div>
            </div>
        </div>
        <m1-overview v-show="currIndex == 0"/>
        <m1-tech v-show="currIndex == 1"/>
    </div>
</template>
<script>
import M1Overview from "./HachiInfinite_Overview"
import M1Tech from "./HachiInfinite_Tech"
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
        M1Overview,
        M1Tech
    }
}
</script>

<style lang="scss" scoped>
div,ul,li,h1,h2,p,a{margin:0;padding:0;}
.flex_between{
    display:-webkit-box;
    display:-webkit-flex; 
    display:-moz-box;  
    display:-ms-flexbox;
    display:flex;
    align-items:center;
    -webkit-justify-content: space-between;
    -moz-justify-content: space-between;
    -ms-justify-content: space-between;
    -o-justify-content: space-between;
    justify-content: space-between;
}
.cube_header {
    width: 100%;
    height: 60px;
    line-height:60px;
    position: fixed;
    background-color: #242323;
    z-index: 8888;
}

.header_mid {
    width: 1080px;
    @extend .flex_between;
    margin: 0 auto;
    color:#fff;
}

.div_title {
    font-size: 16px;
    margin-left:10px;
}
.nav_list {
    width:490px;
    text-align:left;
    span,div {
        width:33%;
        display:inline-block;
        cursor:pointer;
    }
}
.buynow {
    padding:0 10px;
    height: 24px;
    line-height: 24px;
    border-radius: 10px;
    text-align:center;
    background-color: #249df3;
    display:inline-block;
}
    
.content {
    padding-top: 60px;
}

a {
    text-decoration-line: none;
    color: white;
}

</style>
