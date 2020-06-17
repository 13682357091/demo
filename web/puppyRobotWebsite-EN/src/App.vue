<template>
  <div id="app">
    <div id="navBar" :class="{isFixed:istabBar}">
      <PageHeader :indexPage="isIndexPage" />
    </div>
    <div id="mainPart">
      <router-view/>
    </div>
    <div id='footer'>
      <PageFooter/>
    </div>
  </div>
</template>

<script>
import PageHeader from './components/common/pageheader'
import PageFooter from './components/common/pagefooter'
let _ = require('lodash')

export default {
  name: 'App',
  components: {
    PageHeader,
    PageFooter
  },
    data(){
        return {
            istabBar: false,
            isIndexPage: false,
        }
    },
    mounted(){
      // 监听这个dom的scroll事件
      const _this = this;
      window.addEventListener('scroll', _this.handleScroll); // Dom树加载完毕
      document.getElementById('app').style.display = 'block';
      document.getElementById('appLoading').style.display = 'none';
      if(this.$route.path =="/") {
        this.istabBar = true;
        this.isIndexPage = true;
      }
    
    },
    watch:{
      $route(to,from){
        if(to.path =="/") {
          this.istabBar = true;
          this.isIndexPage = true;
        } else {
          this.istabBar = false;
          this.isIndexPage = false;
        }
      }
    },
    destroyed () {
      const _this = this;
      window.removeEventListener('scroll', _this.handleScroll); // 销毁页面时清除
    },

    methods: {
      handleScroll : function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        // 固定导航栏
        let navBar = document.querySelector("#navBar");
        let mainPart = document.querySelector("#mainPart");

        if (scrollTop > navBar.offsetHeight && (this.$route.path !="/puppycube" && this.$route.path !="/hachiinfinite")){
            this.istabBar = true
            mainPart.style.paddingTop = navBar.offsetHeight + "px";
        } else {
            if(this.$route.path =='/') {
              this.istabBar = true;
            } else {
              this.istabBar = false;
            }
            mainPart.style.paddingTop = "0px";
            
        }     
      }
    }
    
}


</script>

<style lang="scss" type="text/css">
$headerHeight: 60px;

  #app {
    font-family: 'Helvetica','Microsoft YaHei',Arial,Helvetica,sans-serif; 
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    /* font-weight: 200; */
    text-align: center;
    vertical-align: middle;
    /* margin-top: 60px; */
    /* font-size: 11pt; */
    overflow-x: hidden;
  }

  #navBar {
    z-index: 9999;
    position: relative;
    &::after {
      content:"";
      clear:both;
    }
    &::before {
      content:"";
      clear:both;
      display:block;
    }
  }

  .isFixed {
    position: fixed !important;
    top: 0;
    width: 100%;
    height: $headerHeight;
  }
</style>
