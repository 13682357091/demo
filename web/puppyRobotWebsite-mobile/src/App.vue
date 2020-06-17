<template>
  <div id="app">
    <div id="navBar" :class="{isFixed:istabBar}">
      <PageHeader/>
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
            istabBar: false
        }
    },
    mounted(){
      // 监听这个dom的scroll事件
      const _this = this;
      window.addEventListener('scroll', _this.handleScroll); // Dom树加载完毕
      document.getElementById('app').style.display = 'block';
      document.getElementById('appLoading').style.display = 'none';
      // if(this.$route.path =="/") {
      //   if (this._isMobile()) {
      //       this.$router.replace('/m_index');
      //     } else {
      //       this.$router.replace('/');
      //     }
      // }
    
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
        if (scrollTop > navBar.offsetHeight){
            this.istabBar = true
            mainPart.style.paddingTop = navBar.offsetHeight + "px";
        } else {
            this.istabBar = false
            mainPart.style.paddingTop = "0px";
        }     
      },
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      },
    }
    
}


</script>

<style>
  #app {
    font-family: 'Pingfang SC','Microsoft YaHei',Arial,Helvetica,sans-serif; 
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    /* font-weight: 200; */
    text-align: center;
    vertical-align: middle;
    /* margin-top: 60px; */
    /* font-size: 11pt; */
  }

  #navBar {
    z-index: 9999;
    position: relative;
  }

  .isFixed {
    position: fixed !important;
    top: 0;
    width: 100%;
  }

/*解决手机上图片点击出现蓝色框的问题*/
img {border: 0;}
</style>
