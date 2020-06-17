
<template>
  <div id="download">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              DOWNLOAD
            </div>
            <div class="solutionName">相关下载</div>
          </div>
          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>
    <div class="container">
        <div>
            •	遥控器升级工具&nbsp;&nbsp;<a href="http://source.hachismart.com/download/Airoha 1600 OTA-1.0.21.0-release.apk.1.1" target="_blank" download="">点击下载</a><br/><span>（Airoha 1600 OTA-1.0.21.0-release.apk.1.1）</span><br/>
        </div>
        <br/>
        <div>
            •	遥控器升级文件&nbsp;&nbsp;<a href="http://source.hachismart.com/download/remote_ota_20180918.bin" target="_blank" download="">点击下载</a><br/><span>（remote_ota_20180918.bin）</span><br/>
        </div>
    </div>
  </div>
</template>

<script>

import router from "./../../router/index"
export default {
    data() {
        return {

        }
    },
    mounted() {
    

    },
   
}
</script>


<style lang="scss" scoped>
$hachiSMB: 46px;


    #download {
        padding-left: 20px;
        padding-right: 20px;
    }

    .hachiheader {
        width: 100%;
        text-align: center;
    }

    .headerContent {
        width: 100%;
        margin: 0 auto;
    }

    #divNews {
        float: left;
        height: $hachiSMB;
        line-height: $hachiSMB;
    }

    .hachiThridMenu {
        height: $hachiSMB;
    }

    .solutionName {
        float: left;
        font-size: 13pt;
        height: $hachiSMB;
        line-height: $hachiSMB;
        margin-left: 10px;
    }

    .hachiHT {
        width: 100%;
        height: $hachiSMB;
    }

    .container {
        width: 100%;
        max-width: 750px;
        margin: 0 auto;
        text-align: left;
        padding-top: 50px;
        padding-bottom: 200px;
        // height: 70vh;

        span {
            font-size: 12px;
        }
    }

    .headerLine {
        height:1px;
        width: 100%;
        background-color:#f1f1f1;
    }


</style>
