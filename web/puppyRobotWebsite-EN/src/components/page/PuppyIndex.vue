<template>
  <div id="PuppyIndex">
    <div class="image_back">
      <!-- <Banner :slideLists="slideLists" :isAutoplay="true" :swiperHeight="'550px'"></Banner> -->
      <!-- <router-link to="/puppycube"> -->
        <div class="top_image">
          <!-- <img src="./../../assets/images/index/focus-image_02.jpg"> -->
          <div class="slogan">The World at Your Fingertips</div>
          <div class="slogan_sub">
            <div class="sub_line"></div>
            <div class="sub_t">Start Playing Whenever and Wherever</div>
            <div class="sub_line"></div>
          </div>
          <router-link to="/puppycube">
            <div class="learnmore">learn more</div>
          </router-link>
        </div>
      <!-- </router-link> -->
    </div>
    <div class="mediaReport">
      <div class="mediaContainer">
        
        <div class="mediaTitle">
          In the Press
            <!-- <router-link to="/newscenter">
            <div class="moreInfo">
              <a herf="#">+more</a>
            </div>
            </router-link> -->
        </div>
        <div class="titleLine"></div>
        <div class="media_block">
          <div class="mediaMain">
            <MediaForIndex :mediaContent="mainTopNews[0]" :imageHeight="411" :imageWidth="378" :isIndex="true" v-if="mainTopNews && mainTopNews[0]"/>
          </div>
          <div class="mediaMain">
            <MediaForIndex :mediaContent="otherTopNews[0]" :imageHeight="411" :imageWidth="378" :isIndex="true" v-if="otherTopNews && otherTopNews[0]"/>
          </div>
          <div class="media_right">
            <MediaForIndex :mediaContent="otherTopNews[1]" :imageHeight="411" :imageWidth="378" :isIndex="true" v-if="otherTopNews && otherTopNews[1]"/>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
   <div>
     <img src="./../../assets/images/index/related.jpg">
   </div>
    <div class="subscribe">
      <div class="sub_1">Always Be The First To Know</div>
      <div class="sub_2">Subscribe to our newsletter!</div>
      <div class="sub_3"></div>
      <div class="sub_4">
        <div class="sub_4_1"><input v-model="clientInfo.email" id="clientInfo_email" placeholder="Enter your email address" type="text" maxlength="50" /></div>
        <div class="sub_4_2" @click="submitClientEmial()">Subscribe</div>
      </div>
      <div class="sub_5">
        <div v-show="emailError"><div><img src="./../../assets/images/red_circle.png"></div><div class="word_style color_red">Please enter a valid email address.</div></div>
        <div v-show="subscribeSuccess"><div><img src="./../../assets/images/green_circle.png"></div><div class="word_style color_green">Thanks for subscribing! <br/>Now you will be the first to receive updates and offers.</div></div>
      </div>
    </div>
  </div>

</template>
<script>

import MediaForIndex from './../common/MediaForIndex'
import {postClientSubmit} from './../axios/api';

export default {
  name: "PuppyIndex",
  components: {
    MediaForIndex,
  },
  data() {
    return {
       mediaLists: [],
       mainTopNews: null,
       otherTopNews: null,
       clientInfo: {
         email: '',
       },
       emailError: false,
       subscribeSuccess: false,
    }
  },
  mounted() {
    let _this = this;
    this.$store.dispatch('getTopNewsInfo').then((result)=> { 
      _this.mediaLists = result;
      _this.mainTopNews = _.filter(_this.mediaLists, ['is_main_promote', "1"]);
      _this.otherTopNews = _.filter(_this.mediaLists, ['is_main_promote', "0"]);
    });
  },
  watch: {
    'clientInfo.email' : 'initMsg',
  },
  methods: {
    submitClientEmial: function(){
      if(!this.clientInfo.email) {
          this.autoFocus('clientInfo_email');
          return;
      } else {
          if(!this.fChkMail(this.clientInfo.email)){
              this.emailError = true;
              this.autoFocus('clientInfo_email');
              return;
          } else {
            var that = this;
            console.log('Save Subscribe...');
            postClientSubmit(this.clientInfo).then(res => {
              if (res.status == 200) {
                this.initSubscribe();
                this.$nextTick(function () {
                  this.subscribeSuccess = true;
                })
                
                console.log('Save Success...');
              } else {
                this.errMsg = "unknow error";
                console.log('error...');
              }
            }).catch(err => {
              console.log(err, 'fail');
            })
          }
      }
    },

    initSubscribe: function() {
      this.clientInfo.email = '';
    },

    fChkMail: function(szMail){ 
      szMail=szMail.toLowerCase();
      var szReg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; 
      var bChk=szReg.test(szMail); 
      return bChk; 
    },

    autoFocus: function(elementId){               
        var pFocus = document.getElementById(elementId); 
        pFocus.focus();      
        pFocus.select();      
    },
    initMsg() {
      this.emailError = false;
      this.subscribeSuccess = false;
    }       
  }

}

</script>

<style lang="scss" scoped>

.image_back {
  width: 100%;
  background-color: black;
  height: 1000px;
}

.top_image {
  top: -7px;
  max-width: 1920px;
  background-image: url('./../../assets/images/index/index_top.jpg');
  height: 1060px;
  // background-color: #000000;
  display: block;
  // position: relative;
  margin: 0 auto;
  background-position: center center; 
  background-repeat:no-repeat;
  color: white;
}

.slogan {
  width: 1080px;
  margin: 0 auto;
  padding-top: 398px;
  font-family: 'Microsoft YaHei';
  font-weight: bold;
  font-size: 62px;
  font-style:italic;
}

.slogan_sub {
  width: 780px;
  height: 90px;
  margin: 0 auto;
}

.sub_line {
  width: 63px;
  height: 1px;
  background-color: white;
  float: left;
  margin-top: 35px;
  margin-left: 20px;
  margin-right: 20px;
}

.sub_t {
  font-family: 'Microsoft YaHei';
  font-size: 30px;
  font-style: italic;
  margin-top: 15px;
  float: left;
}

.learnmore {
  width: 150px;
  height: 34px;
  line-height: 30px;
  font-family: 'Microsoft YaHei';
  font-size: 20px;
  font-style:italic;
  border: 1px solid #ffffff;
  border-radius: 20px 20px 20px 20px;
  margin: 0 auto;
  cursor: pointer;
}

a {
  color: white;
  text-decoration-line: none;
}

.titleLine {
  width: 80px;
  height: 3px;
  background-color: black;
  margin: 5px 0px 29px 0px; 
}

.mediaTitle {
  font-family: 'Microsoft YaHei';
  font-weight: bold;
  font-size: 29.68px;
  text-align: left;
  line-height: 40px;
  width: 100%;
  height: 40px;
}

.moreInfo {
  float: right;
  font-size: 10pt;
  text-align: right;
  line-height: 40px;
  color: black;
  a:hover {
    color: #929497;
  }
}

.mediaReport {
  // height: 780px;
  width: 100%;
  text-align: center;
  background-color: #f9f9f9;
  padding-top: 70px;
}

.mediaContainer {
  width: 1280px;
  padding-bottom: 80px;
  margin: 0 auto;
}

.mediaContainer_mobile {
  width: 100%;
  height: 430px;
  margin: 0 auto;
}

.media_block {
  margin-left: 20px;
}

.mediaMain {
  width: 378px;
  margin-right: 48px;
  float: left;
}

.media_right {
  width: 378px;
  float: left;
}


.newsCol {
  width: 100%;
  text-align: center;
}

.newsContainer {
  width: 1280px;
  margin:0 auto;
}

.subscribe {
  width: 100%;
  height: 320px;
  background-color: #fbfbfb;
}

.sub_1 {
  font-size: 29.68px;
  font-family: 'Microsoft YaHei';
  font-weight: bold;
  padding-top: 62px;
}

.sub_2 {
  font-size: 20px;
  font-family: 'Microsoft YaHei';
  margin-top: 10px;
  color: #5d5d5d;
  font-weight: lighter;
}

.sub_3 {
  width: 45px;
  height: 10px;
  border-bottom: 2px solid #272a2e;
  top: 15px;
  margin: 0 auto;
}

.sub_4 {
  width: 605px;
  height: 60px;
  padding-top: 40px;
  margin: 0 auto;
}

.sub_4_1 {
  width: 370px;
  float: left;
  input {
    height: 49px;
    width: 370px;
    font-size: 16.26px;
    text-align: center;
    font-family: 'Microsoft YaHei';
  }
}
.sub_4_2 {
  width: 230px;
  height: 55px;
  background-color: #272a2e;
  color: white;
  line-height: 55px;
  float: left;
  cursor: pointer;
}

.sub_5 {
  width: 605px;
  height: 50px;
  text-align: left;
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 20px;
  img {
    margin-top: -200px;
  }
  div {
    float: left;
  }
  .word_style {
    font-size: 20px;
    font-family: "NeutraText-Book";
    line-height: 20px;
    margin-left: 10px;
  }

  .color_red {
    color: #d70519;
  }

  .color_green {
    color: #23b506;
  }
}

.clear {
  clear: both;

}

</style>


