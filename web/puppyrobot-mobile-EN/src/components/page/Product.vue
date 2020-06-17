<template>
  <div id="solution">
    <div class="header_margin img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/product/div_01.jpg">
            </div>
            <div class="title_absolute">
                <img src="./../../assets/images/hachi//logo_Hachi.png">
                <div class="title">产品中心</div>
                <div class="btn_container">
                    <a href="#hardware">
                        <div class="btn">硬件</div>
                    </a>
                    <a href="#hachismarthomeapp">
                        <div class="btn">哈奇智家App</div>
                    </a>
                    <a href="#hachiapp">
                        <div class="btn">哈奇App</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div id="hardware" class="target-fix"></div>
    <div class="img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/product/div_02.jpg">
            </div>
        </div>
    </div>
    <div class="img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/product/title_01.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_01.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/title_02.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_02.jpg">
            </div>
        </div>
    </div>
    <div class="img_01 imgBackCenter">
        <div class="img_01_content">

            <div>
                <img class="img_style" src="./../../assets/images/hachi/product/title_03.jpg">
                <div class="tab_con" style="background-color: #eeeeee !important;">
                    <div class="tab_container">
                        <div :class="lightcontrolIndex==0?'tab_left active':'tab_left'" @click="changeLightControlIndex(0)">
                            <div>逸致系列</div>  
                            <div :class="lightcontrolIndex==0?'tab_underline tab_underline_active':'tab_underline'"></div>
                        </div>

                        <div :class="lightcontrolIndex==1?'tab_right active':'tab_right'" @click="changeLightControlIndex(1)">
                            <div>莹润系列</div>
                            <div :class="lightcontrolIndex==1?'tab_underline tab_underline_active':'tab_underline'"></div>
                        </div>
                    </div>
                </div>
                <img class="img_style" v-show="!lightcontrolIndex" src="./../../assets/images/hachi/product/product_03_1.jpg">
                <img class="img_style" v-show="lightcontrolIndex" src="./../../assets/images/hachi/product/product_03_2.jpg">
            </div>
        </div>
    </div>
    <div class="img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/product/title_04.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_04.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/title_05.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_05.jpg">
            </div>
        </div>
    </div>
    <div class="img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/product/title_06.jpg">
                 <div class="tab_con">
                    <div class="tab_container">
                        <div :class="scenecontrolIndex==0?'tab_left active':'tab_left'" @click="changeSceneControlIndex(0)">
                            <div>逸致系列</div>  
                            <div :class="scenecontrolIndex==0?'tab_underline tab_underline_active':'tab_underline'"></div>
                        </div>

                        <div :class="scenecontrolIndex==1?'tab_right active':'tab_right'" @click="changeSceneControlIndex(1)">
                            <div>莹润系列</div>
                            <div :class="scenecontrolIndex==1?'tab_underline tab_underline_active':'tab_underline'"></div>
                        </div>
                    </div>
                </div>
                <img class="img_style" v-show="!scenecontrolIndex" src="./../../assets/images/hachi/product/product_06_1.jpg">
                <img class="img_style" v-show="scenecontrolIndex" src="./../../assets/images/hachi/product/product_06_2.jpg">
            </div>
        </div>
    </div>
    <div class="img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/product/title_07.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_07.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/title_08.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_08.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/title_09.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_09.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/title_10.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_10.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/title_11.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/product_11.jpg">
                <div id="hachismarthomeapp" class="target-fix"></div>
                <img class="img_style" src="./../../assets/images/hachi/product/div_03.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/div_04.jpg">
                <div id="hachiapp" class="target-fix"></div>
                <img class="img_style" src="./../../assets/images/hachi/product/div_05.jpg">
                <img class="img_style" src="./../../assets/images/hachi/product/div_06.jpg">
            </div>
        </div>
    </div>

     <div class="puppy_logo">
         <img src="./../../assets/images/logo.png">
     </div>
  </div>
</template>

<script>

export default {
    data() {
      return {
          currSearchedIndex: 0,
          lightcontrolIndex: 0,
          scenecontrolIndex: 0,
      }
  },

  methods: {
      changeSearchIndex: function(index) {
          this.currSearchedIndex = index;
      },
      changeLightControlIndex: function(index) {
          this.lightcontrolIndex = index;
      },
      changeSceneControlIndex: function(index) {
          this.scenecontrolIndex = index;
      }
  }
    
}
</script>

<style lang="scss" scoped>
    $headerHeight: 46px;
    $headerColor: #f2f2f2;
    #aboutus {
        max-width: 750px;
        margin: 0 auto;
    }
    .header_margin {
        margin-top: $headerHeight;
    }

    .img_01 {
      max-width: 750px;
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

    .img_01_content {
        width: 100%;
        position: relative;
    }

    .title_absolute {
        width:100%;
        position: absolute;
        top: 10%;
        img {
            width: 95px;
        }

        .title {
            font-size: 23px;
            margin-top: 5px;
        }
        .btn_container {
            width: 97px;
            margin: 0 auto;
        }

        .btn {
            width: 95px;
            height: 27px;
            line-height: 27px;
            margin-top: 10px;
            border: 1px solid #ffffff;
            background-color: rgba(255,255,255, 0.3);
            font-size: 12px;
            color: #000000;
        }
    }

    .img_style {
        width: 100%;
        display: block;
        max-width: 750px;
        margin: 0 auto;
    }

    a:link{text-decoration:none;}
    a:visited{text-decoration:none;}
    a:active{text-decoration:none;}

    .target-fix {
        position: relative;
        top: -46px; // 偏移值
        display: block;
        height: 0;
        overflow: hidden;
    }
    .tab_con {
        width: 100%;
        height: 30px;
        padding-top: 10px;
        .tab_container {
            width: 165px;
            margin: 0 auto;
            text-align: center;

            .tab_underline {
                height: 2px;
                width: 80px;
                background-color: #bbbdbf;
            }

            .tab_underline_active {
                background-color: black !important;
            }
            
            .tab_left {
                width: 80px;
                margin-right: 5px;
                float: left;
                color: #bbbdbf;
                font-size: 10px;
                cursor: pointer;
            }

            .tab_right {
                width: 80px;
                float:left;
                color: #bbbdbf;
                font-size: 10px;
                cursor: pointer;
            }

            .active {
                color: black;
            }


        }
    }

    .puppy_logo {
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }
</style>

