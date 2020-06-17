
<template>
  <div id="NewsCenter">
    <div class="c_container">
      <div class="title">
        The latest stories from Puppy
      </div>
      <div class="newscontent">
        <div class="mediaReport">
          <div class="mediaContainer">
            <div class="mediaMain">
              <news-center-top :newsCenterId="mainTopNews[0].nid" :newsContent="mainTopNews[0]" :newsHeight="646"  :isLeft="true" v-if="mainTopNews && mainTopNews[0]"/>
            </div>
            <div class="mediaSub">
              <div class="mediaSub1">
              <news-center-top :newsCenterId="otherTopNews[0].nid" :newsContent="otherTopNews[0]" :newsHeight="316" :isTitleTwoLine="true" v-if="otherTopNews && otherTopNews[0]"/>
              </div>
              <div class="mediaSub2">
                <news-center-top :newsCenterId="otherTopNews[1].nid" :newsContent="otherTopNews[1]" :newsHeight="316" :isTitleTwoLine="true" v-if="otherTopNews && otherTopNews[1]"/>
              </div>
            </div>
          </div>
        </div>

        <div class="subscribe">
          <div class="sub_4">
            <div class="sub_4_1"><input v-model="clientInfo.email" id="clientInfo_email" placeholder="Want to hear the latest news about Puppy Robot?" type="text" /></div>
            <div class="sub_4_2" @click="submitClientEmial()">Sign Up</div>
          </div>
          <div class="colsperate"></div>
          <div class="icon">
                <a href="https://www.facebook.com/puppycubeAI/?modal=admin_todo_tour" target="_blank"><img src="./../../assets/images/newscenter/facebook.png"></a>
                <a href="https://twitter.com/puppyrobot3" target="_blank"><img src="./../../assets/images/newscenter/twitter.png"></a>
                <a href="https://www.youtube.com/channel/UCHigMQdlEXhRskshOnjrCYg" target="_blank"><img src="./../../assets/images/newscenter/youtube.png"></a>
                <a href="https://www.instagram.com/puppycubeai/" target="_blank"><img src="./../../assets/images/newscenter/ins.png"></a>
            </div>
        </div>
        <div class="newsCol" v-if="normalNews">
          <div class="newsContainer">
            <div class="productContainer">
              <div v-for="(news, index) in normalNews" :key="news.nid">
                <div class="newsTabPC">
                  <News :newsContent="news" :newsImageHeight="232" :newsBtnHide="true" />
                </div>
                <div class="newsSpace" v-if="(index+1)%3 != 0">
                </div>
                <div class="newsColSpace" v-if="index!=0 && (index+1)%3 == 0">
                </div>
              </div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="loadmore_container">
          <div class="loadmore" v-show="this.moreInfo">
              <div class="loadmore_btn" @click="getMoreInfo()" >
                  Load more
              </div>
              <!-- <div class="loadmore_nomore" v-show="moreInfo">
                  
              </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import News from './../common/News'
import NewsCenterTop from './../common/NewsCenterTop'
import {postClientSubmit} from './../axios/api';
export default {
  data() {
      return {
        moreInfo: false,
        normalNews: null,
        nornalNewsPageTotle: 0,
        mediaLists: null,
        mainTopNews: null,
        otherTopNews: null,
        currentPage: 1,
        clientInfo: {
          email: '',
        }
      }
  },
    components: {
        News,
        NewsCenterTop
    },
    mounted() {
      let _this = this;
      this.$store.dispatch('getTopNewsInfo').then((result)=> { 
        _this.mediaLists = result;
        _this.mainTopNews = _.filter(_this.mediaLists, ['is_main_promote', "1"]);
        _this.otherTopNews = _.filter(_this.mediaLists, ['is_main_promote', "0"]); 
      });
      this.$store.state.pages = 1;
      this.$store.dispatch('getNormalNewsInfo').then((result)=> { 
        _this.normalNews = result.list;
        _this.nornalNewsPageTotle = result.page_total;
        console.log(result.page_total);
        if(_this.currentPage < result.page_total) {
          _this.moreInfo = true;
        }
      });
    },

    methods: {
      getMoreInfo: function() {
        let _this = this;
        // if(_this.normalNews.length > 3 && _this.normalNews.length < 6) {
        //   document.querySelector(".newsCol").style.height = '506px';
        // } else if(_this.normalNews.length <= 4 && _this.normalNews.length > 0) {
        //   document.querySelector(".newsCol").style.height = '248px';
        // }
        this.currentPage++;
        this.$store.state.pages = this.currentPage;
        this.$store.dispatch('getNormalNewsInfo').then((result)=> { 
          if(result) {
            _this.normalNews = _this.normalNews.concat(result.list);
            // let newColHeight = document.querySelector(".newsCol").style.height;
            // newColHeight = newColHeight.replace('px',"");
            // if(result.length> 4){
            //   document.querySelector(".newsCol").style.height = (parseInt(newColHeight) + 516) + 'px'; 
            // }else {
            //   document.querySelector(".newsCol").style.height = (parseInt(newColHeight) + 258) + 'px'; 
            // }
            if(_this.currentPage < _this.nornalNewsPageTotle){
              _this.moreInfo = true;
            }else {
              _this.moreInfo = false;
            }
          } else {
            _this.moreInfo = false;
          }
        });
      },

      submitClientEmial: function(){
      if(!this.clientInfo.email) {
          this.autoFocus('clientInfo_email');
          return;
      } else {
          if(!this.fChkMail(this.clientInfo.email)){
              alert('Incorrect email format.');
              this.autoFocus('clientInfo_email');
              return;
          } else {
            var that = this;
            console.log('Save Subscribe...');
            postClientSubmit(this.clientInfo).then(res => {
              if (res.status == 200) {
                alert('Thanks for your subscribe.');
                this.initSubscribe();
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
    }  

    }
}
</script>




<style lang="scss" scoped>
$hachiSMB: 46px;

#NewsCenter {
  background-color: #fafafa;
}

.c_container {
  width: 1080px;
  margin: 0 auto;
}

.title {
  font-size: 40px;
  font-family: "NeutraText-Book";
  padding-top: 55px;
  margin-bottom: 55px;
}
    

.newscontent {
    margin-top: 30px;
    width: 100%;
}

.mediaTitle {
  font-size: 18pt;
  text-align: left;
  float: left;
  line-height: 40px;
  /* margin-bottom: 5px; */
  width: 100%;
}

.moreInfo {
  float: right;
  font-size: 10pt;
  text-align: right;
  line-height: 40px;
}

.mediaReport {
  width: 100%;
  text-align: center;
}

.mediaReport_mobile {
  height: 675px;
  width: 100%;
  text-align: center;
}

.mediaContainer {
  width: 1080px;
  height: 646px;
  margin: 0 auto;
}

.mediaMain {
  height: 646px;
  width: 646px;
  margin-right: 10px;
  float: left;

}

.mediaSub {
  width: 421px;
  float: left;
}

.mediaSub1 {
  width: 100%;
  height: 316px;
}


.mediaSub2 {
  width: 100%;
  height: 316px;
  margin-top: 14px;
}

.subscribe {
  margin-top: 52px;
  margin-bottom: 42px;
  width: 100%;
  height: 133px;
  background-color: #eeeeee;
}

.colsperate {
      width: 49px;
      height: 105px;
      border-right: 1px solid #a0a0a0;
      float: left;
      margin-top: 14px;
  }

  .icon {
      width: 366px;
      height: 108px;
      float: left;
      margin-top: 46px;
      img {
          margin-left: 14px;
          margin-right: 14px;
      }
  }

.sub_4 {
  padding-top: 42px;
  margin-left: 53px;
  float: left;
}

.sub_4_1 {
  float: left;
  input {
    width: 453px;
    height: 44px;
    text-align: center;
    font-family: 'NeutraText-Book';
    font-size: 16px;
    padding-left: 10px;
  }
}
.sub_4_2 {
  margin-left: 12px;
  width: 132px;
  height: 50px;
  float: left;
  font-family: 'NeutraText-Book';
  font-size: 20px;
  background-color: #494949;
  line-height: 50px;
  color: white;
  border-radius:3px 3px 3px 3px;
  -webkit-box-shadow: 0px 0px 15px #aaa7a7;//（这是专对火狐浏览器的支持而设置的）
  -moz-box-shadow: 0px 0px 15px #aaa7a7;//（这是对Safari和Chrome浏览器而设置的）
  box-shadow: 0px 0px 15px #aaa7a7;
  cursor: pointer;
}

.newsCol {
  width: 100%;
  min-height: 350px;
  text-align: center;
  margin-top: 28px;
}

.newsContainer {
  width: 1080px;
  margin:0 auto;
}

.techContainer {
  float: left;
  width: 1080px;
}
.productContainer {
  float: left;
  width: 1080px;
}

.newsSpace {
  width: 15px;
  height: 220px;
  float: left;
}

.newsColSpace {
  width: 100%;
  height: 15px;
  float: left;
}

.newColMobile {
  width: 100%;
  height: 480px;
  text-align: center;
}

.newsTabPC {
  float: left;
  width: 350px;
}

.newsTabMobile {
  width: 50%;
  float: left;
}

.loadmore_container {
  padding-top: 50px;
}

.loadmore {
    width: 1080px;
    height: 60px;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 30px;
    position: relative;
}

.loadmore_btn {
    margin: 0 auto;
    width: 244px;
    height: 52px;
    font-family: 'NeutraText-Book';
    font-size: 20px;
    background-color: #494949;
    line-height: 50px;
    color: white;
    border-radius:3px 3px 3px 3px;
    -webkit-box-shadow: 0px 0px 15px #aaa7a7;//（这是专对火狐浏览器的支持而设置的）
    -moz-box-shadow: 0px 0px 15px #aaa7a7;//（这是对Safari和Chrome浏览器而设置的）
    box-shadow: 0px 0px 15px #aaa7a7;
    cursor: pointer;
}

.loadmore_nomore {
    height: 36px;
    line-height: 36px;
    width: 500px;
    margin: 0 auto;
    margin-bottom: 70px;
}

.clear {
  clear: both;
}

</style>
