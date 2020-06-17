<template>
  <div id="app">
    <div id="mainPart">
      <router-view/>
    </div>
  </div>
</template>

<script>
let _ = require('lodash')

export default {
  name: 'App',
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
      if(this.$route.path =="/") {
        this.$router.replace('/manual');
      }
    },

    destroyed () {
      const _this = this;
      window.removeEventListener('scroll', _this.handleScroll); // 销毁页面时清除
    },

    methods: {
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
</style>
