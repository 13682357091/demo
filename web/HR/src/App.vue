<template>
  <div id="app">
    <div v-if="isLogin">
        <router-view/>
    </div>
    <div v-if="!isLogin">
      <div id="menu">
        <u-menu/>
      </div>
      <div id="mainPart">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
let _ = require('lodash')

import UMenu from './components/common/menu'
export default {
  name: 'App',
    data(){
        return {
            istabBar: false,
            isLogin: false
        }
    },
    components:{
      UMenu,
    },
    mounted(){
      // 监听这个dom的scroll事件
      const _this = this;
      window.addEventListener('scroll', _this.handleScroll); // Dom树加载完毕
      document.getElementById('app').style.display = 'block';
      document.getElementById('appLoading').style.display = 'none';
      if(this.$route.path == '/'){
        this.isLogin = true;
      };


      var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if(h>694){
          _this.GLOBAL.globalTableHeight = h - 160;
        } else {
          _this.GLOBAL.globalTableHeight = 694 - 160;
        }

        window.onresize = function temp() {
            var rh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            if(rh>694){
              _this.GLOBAL.globalTableHeight =  h - 160;
            } else {
              _this.GLOBAL.globalTableHeight = 694 - 160;
            }
        };
    },

    destroyed () {
      const _this = this;
      window.removeEventListener('scroll', _this.handleScroll); // 销毁页面时清除
    },
    watch:{
      $route(to,from){
        this.loginChange(to.path);
      }
    },

    methods: {
      loginChange(path) {
        if(path =="/") {
          this.isLogin = true;
        }else {
          this.isLogin = false;
        }
      }

    }
    
}


</script>

<style lang="scss">
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

  //dialog style 
  .el-dialog__header {
      padding: 10px 20px 10px 20px;
      text-align: left;
      background-color: #f2f2f2;
      font-weight: 400;
      font-style: normal;
      font-size: 18px;
  }

  .el-dialog__headerbtn {
      position: absolute;
      top: 10px;
      right: 20px;
      padding: 0;
      background: 0 0;
      border: none;
      outline: 0;
      cursor: pointer;
      font-size: 16px;
  }

  .el-dialog__headerbtn .el-dialog__close {
      color: black !important;
  }

  .el-dialog__headerbtn {
      font-size: 22px;
  }

  
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
    button {
        width: 60px;
    }
  }

  .text_left {
      text-align: left;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 375px;
    height: 125px;
    line-height: 125px;
    text-align: center;
  }
  .avatar {
    width: 375px;
    height: 125px;
    display: block;
  }

  .el-upload-dragger {
      width: 375px !important;
      height: 125px !important;
      .el-icon-upload {
        margin-top: 25px !important;
      }

      .el-upload__text {
        margin-top: -20px !important;
      }
  }

  .el-upload__tip {
    margin-top: -25px !important;
    color: red;
    text-align: left;
  }

  .dialog-footer {
      text-align: center;
  }

  .el-tree-node__content {
    height: 32px;
    margin-top: 1px;
    margin-bottom: 1px;
  }

  .el-button+.el-button {
    margin-left: 0px !important;
  }

  .color_red {
    color: #FF0000;
  }

  .color_green {
    color: #1ADC00;
  }

  .color_blue {
    color: #0DCCD3;
  }

  .color_orange{
    color: #FF9933;
  }

  .clear {
    clear: both;
  }

  .table_headercell {
    background-color: #e4e4e4 !important;
    text-align: center !important;
    font-weight: bold;
    color: black;
}

.table_cell {
    text-align: center !important;
}

.w-e-menu{
    z-index: 2 !important;
}
.w-e-text-container{
    z-index: 1 !important;
    height: 350px !important;
}

.w-e-droplist {
    background-color: #ccc !important;
}

</style>
