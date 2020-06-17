<template>
  <div class="newsClass">

    <div class="newsBtm_1" :id="techId + `_div1`" @mouseover="left_mouseover()" @mouseout="left_mouseout()">
      <router-link :to="{path:contents[0].path}" class="clickable">
        <transition name="hide-fade" v-on:after-leave="leftAfterLeave">
          <div class="hide_div" v-show="hideLeftShow">
            <transition name="top-fade">
              <div class="hide_top" v-show="hideLeftShow">{{contents? contents[0].title : ''}}</div>
            </transition>
            <transition name="fade">
              <div class="hide_bottom" v-show="hideLeftShow">
                <div class="hide_imageBtn">
                  <img src="./../../assets/images/index/button_01.png">
                </div>
                <transition name="subtitle-fade">
                    <div class="hide_newsTitle" v-show="hideLeftShow">{{contents? contents[0].subtitle : ''}}</div>
                </transition>
              </div>
            </transition>
          </div>
        </transition>
        <div class="newsImageContainer">
          <div class="newsBtmImage" :id="techId + `_1`" :style="{backgroundImage:`url(${contents?contents[0].img:''})`} ">
          </div>
        </div>
        <transition name="btn-fade">
          <div class="imageBtn" v-if="!hideLeftShow">
            <img src="./../../assets/images/index/button_01.png">
          </div>
        </transition>
      </router-link>
    </div>

    <!-- <div class="newsSpace"></div>
    <div class="newsBtm_2" :id="techId + `_div2`" @mouseover="right_mouseover()" @mouseout="right_mouseout()">
      <router-link :to="{path:contents[1].path}" class="clickable">
        <transition name="hide-fade-right" v-on:after-leave="rightAfterLeave">
          <div class="hide_div_right" v-show="hideRightShow">
            <transition name="top-fade">
              <div class="hide_top" v-show="hideRightShow">{{contents? contents[1].subtitle : ''}}</div>
            </transition>
            <transition name="fade">
              <div class="hide_bottom" v-show="hideRightShow">
                <div class="hide_imageBtn">
                  <img src="./../../assets/images/index/button_01.png">
                </div>

                <div class="hide_newsTitle">
                  {{contents? contents[1].title : ''}}
                </div>
              </div>
            </transition>
          </div>
        </transition>
        <div class="right_div" :id="techId + `_right`">
          <div class="newsImageContainer">
            <div class="newsBtmImage_right" :id="techId + `_2`" :style="{backgroundImage:`url(${contents?contents[1].img:''})`} ">
            </div>
          </div>
          <transition name="btn-fade">
            <div class="imageBtn" v-if="!hideRightShow">
              <img src="./../../assets/images/index/button_01.png">
            </div>
          </transition>
        </div>
      </router-link>
    </div> -->
  </div>
</template>


<script>
export default {
  name: 'tech',
  props: ['techId', 'contents'],
  data() {
    return {
      hideLeftShow: false,
      hideRightShow: false,
    }
  },
  methods: {
    left_mouseover: function () {
        this.hideLeftShow = true;
        document.querySelector("#" + this.techId + "_div1").style.width = 620 + 'px';
        document.querySelector("#" + this.techId + "_div1").style.zIndex = 2;
        document.querySelector("#" + this.techId + "_1").style.transform = 'scale(1.2)';


    },
    left_mouseout: function () {
        this.hideLeftShow = false;
        document.querySelector("#" + this.techId + "_1").style.transform = 'scale(1)';
    },

    leftAfterLeave: function(el) {
        document.querySelector("#" + this.techId + "_div1").style.width = 620 + 'px';
        document.querySelector("#" + this.techId + "_div1").style.zIndex = 1;
    },

    // right_mouseover: function () {
    //     this.hideRightShow = true;
    //     document.querySelector("#" + this.techId + "_div2").style.left = 0 + 'px';
    //     document.querySelector("#" + this.techId + "_div2").style.width = 620 + 'px';
    //     document.querySelector("#" + this.techId + "_div2").style.zIndex = 2;
    //     document.querySelector("#" + this.techId + "_right").style.left = 330 + 'px';
    //     document.querySelector("#" + this.techId + "_2").style.transform = 'scale(1.2)';
    // },
    // right_mouseout: function () {
    //     this.hideRightShow = false;
    //     document.querySelector("#" + this.techId + "_2").style.transform = 'scale(1)';
    // },

    // rightAfterLeave: function(el) {
    //     document.querySelector("#" + this.techId + "_div2").style.left = 330 + 'px';
    //     document.querySelector("#" + this.techId + "_div2").style.width = 290 + 'px';
    //     document.querySelector("#" + this.techId + "_div2").style.zIndex = 1;
    //     document.querySelector("#" + this.techId + "_right").style.left = 0 + 'px';
    // }


  }
}


</script>

<style lang="scss" scoped>
    .newsClass {
        width: 620px;
        height: 220px;
        position: relative;
    }

    .newsImageContainer {
        width: 620px;
        height: 220px;
        overflow: hidden;
    }

    .newsBtm_1 {
        width: 620px;
        height: 220px;
        overflow: hidden;  
        position: absolute;
        float: left;
        box-shadow: 1px 1px 2px #e6e6e6;

    }

    .hide_div {
        width: 620px;
        height: 220px;
        z-index: 3;
        position: absolute;
        background: -webkit-radial-gradient(circle at 100px -5px, rgba(0,0,0,0.1), rgba(0,0,0,0.8), rgba(0,0,0,0.9), rgba(0,0,0,0.9)); /* Safari 5.1 - 6.0 */
        background: -o-radial-gradient(circle at 100px -5px, rgba(0,0,0,0.1), rgba(0,0,0,0.8), rgba(0,0,0,0.9), rgba(0,0,0,0.9)); /* Opera 11.6 - 12.0 */
        background: -moz-radial-gradient(circle at 100px -5px, rgba(0,0,0,0.1), rgba(0,0,0,0.8), rgba(0,0,0,0.9), rgba(0,0,0,0.9)); /* Firefox 3.6 - 15 */
        background: radial-gradient(circle at 100px -5px, rgba(0,0,0,0.1), rgba(0,0,0,0.8), rgba(0,0,0,0.9), rgba(0,0,0,0.9)); /* 标准的语法（必须放在最后） */
    }

    // .hide_div_right {
    //     width: 620px;
    //     height: 220px;
    //     z-index: 3;
    //     position: absolute;
    //     background: -webkit-radial-gradient(circle at 620px -15px, rgba(0,0,0,0.1), black,black, black); /* Safari 5.1 - 6.0 */
    //     background: -o-radial-gradient(circle at 620px -15px, rgba(0,0,0,0.1), black,black, black); /* Opera 11.6 - 12.0 */
    //     background: -moz-radial-gradient(circle at 620px -15px, rgba(0,0,0,0.1), black,black, black); /* Firefox 3.6 - 15 */
    //     background: radial-gradient(circle at 620px -15px, rgba(0,0,0,0.1), black,black, black); /* 标准的语法（必须放在最后） */
    // }

    .hide_top {
        margin-top: 110px;
        color: #3e71b8;
        margin-left: 80px;
        text-align: left;
        font-size: 16px;
    }

    .hide_bottom {
        text-align: left;
        color: white;

        .hide_imageBtn {
            position: absolute;
            top: 162px;
            left: 20px;
            float: left;
        }

        .hide_newsTitle {
            position: absolute;
            top: 165px;
            line-height: 20px;
            font-size: 14px;
            margin-left: 80px;
        }
    }

    .newsBtm_2 {
        width: 290px;
        height: 220px;
        left: 330px;
        overflow: hidden;  
        position: absolute;
        float: left;
        box-shadow: 1px 1px 2px #e6e6e6;
    }

    .right_div {
        position: relative;
    }

    .newsBtmImage {
        width: 620px;
        height: 220px;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 2s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        cursor: pointer;
    }

    .newsBtmImage_right {
        width: 290px;
        height: 220px;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 2s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        cursor: pointer;
    }


    .newsTitle {
        width: 100%;
        line-height: 57px;
        text-align: center;
        height: 57px;
        background-color: white;
        color: black;
    }

    .title {
        font-size: 10pt;
        line-height: 20px;
        text-align: left;
        margin: 8px 15px 8px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .imageBtn {
        position: absolute;
        top: 162px;
        left: 20px;
        cursor: pointer;
    }

    .clickable {
        cursor: pointer;
        text-decoration-line: none;
    }

    .newsSpace {
        position: absolute;
        left: 260px;
        width: 40px;
        height: 220px;
        float: left;
    }

    .fade-enter-active, {
        transition: opacity 2s;
    }
    .fade-leave-active {
        transition: opacity 2s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .top-fade-enter-active {
        transition: all 1s ease;
    }
    .top-fade-leave-active {
        transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .top-fade-enter, .top-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(-20px);
        opacity: 0;
    }

    .subtitle-fade-enter-active {
        transition: all 1s ease;
    }
    .subtitle-fade-leave-active {
        transition: all 1.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .subtitle-fade-enter, .subtitle-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateY(20px);
        opacity: 0;
    }

    .hide-fade-enter-active {
        transition: all 0.5s ease;
    }
    .hide-fade-leave-active {
        transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .hide-fade-enter, .hide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(-260px);
        opacity: 0;
    }

    .hide-fade-right-enter-active {
        transition: all 0.5s ease;
    }
    .hide-fade-right-leave-active {
        transition: all 0.3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .hide-fade-right-enter, .hide-fade-right-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
        transform: translateX(330px);
        opacity: 0;
    }

    .btn-fade-enter-active, {
        transition: opacity 3s;
    }
    .btn-fade-leave-active {
        transition: opacity 1s;
    }
    .btn-fade-enter, .btn-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
    

</style>
