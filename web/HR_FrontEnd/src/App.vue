<template>
  <div id="app">
    <div>
      <carousel />
      <router-view/>
    </div>
  </div>
</template>
<script src="./iconfont.js"></script>
<script>
let _ = require('lodash')

import Carousel from './components/page/Carousel'
export default {
  name: 'App',
    data(){
        return {
          carouselList: {},
        }
    },
    components:{
      Carousel,
    },
    mounted(){
      // 监听这个dom的scroll事件
      const _this = this;
      window.addEventListener('scroll', _this.handleScroll); // Dom树加载完毕
      document.getElementById('app').style.display = 'block';
      document.getElementById('appLoading').style.display = 'none';

    },

    destroyed () {
      const _this = this;
      window.removeEventListener('scroll', _this.handleScroll); // 销毁页面时清除
    },
    watch:{
      // $route(to,from){
      //   this.loginChange(to.path);
      // }
    },

    methods: {
     
    }
    
}


</script>
<style lang="scss">
  #app {
    font-family: 'Microsoft YaHei','Pingfang SC',Arial,Helvetica,sans-serif; 
    /* -webkit-font-smoothing: antialiased; */
    /* -moz-osx-font-smoothing: grayscale; */
    /* font-weight: 200; */
    text-align: center;
    vertical-align: middle;
    max-width: 750px;
    margin: 0 auto;
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

  
  #menu {
    float: left;
    /* background-color: red; */
    position: absolute;
    top: 0px;
    left: 0px;
  }

  #mainPart {
    float: left;
    padding-left: 240px;
    box-sizing: border-box;
    width: 100%;
    overflow-y: auto;
    // min-width: 1660px;
  }

  body, p, ul, li, ol, h1, h2, h3, h4, h5, h6, dl, dt, dd, form, iframe {
    margin: 0;
    padding: 0;
}

 .clear {
   clear: both;
 }

</style>
