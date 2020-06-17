<template>
  <div id="newscenter">
    <div class="header_margin img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/media/div_01.jpg">
            </div>
        </div>
    </div>
    <div class="img_01_content space_margin">
        <div class="img_container">
            <NewsCenterTop :newsCenterId="mainTopNews?mainTopNews[0].nid:''" :newsContent="mainTopNews && mainTopNews[0]" v-if="mainTopNews && mainTopNews[0]"/>
        </div>
    </div>

    <div class="img_01_content space_margin">
        <div class="img_container">
            <div class="topsnews_1">
                <News :newsId="otherTopNews?otherTopNews[0].nid:''" :isTopNews="true" :newsContent="otherTopNews && otherTopNews[0]"/>
            </div>
            <div class="white_space"></div>
            <div class="topsnews_1">
                <News :newsId="otherTopNews?otherTopNews[1].nid:''" :isTopNews="true" :newsContent="otherTopNews && otherTopNews[1]"/>
            </div>
            <div style="clear:both;"></div>
        </div>
    </div>

    <div class="img_01_content space_margin">
        <div class="img_container">
            <div v-for="(news, index) in normalNews" :key="news.nid">
                <div class="topsnews_1">
                    <News :newsContent="news"/>
                </div>
                <div class="white_space" v-if="index==0 ||index%2==0"></div>
                <!-- <div class="sperate_line_inner" v-if="index!=0 && index%2!=0"></div> -->
                <div class="white_space_row" v-if="index!=0 && index%2!=0"></div>
             </div>
        </div>
        <div style="clear:both;"></div>
    </div>

    <div class="loadmore">
          <div class="loadmore_btn" @click="getMoreInfo()" v-show="!moreInfo">
              + 点击加载更多
          </div>
      </div>
        
        
     <div class="puppy_logo">
         <img src="./../../assets/images/logo.png">
     </div>
  </div>
</template>

<script>
import NewsCenterTop from './../common/NewsCenterTop'
import News from './../common/News'

export default {
data() {
      return {
        moreInfo: false,
        normalNews: null,
        mediaLists: null,
        mainTopNews: null,
        otherTopNews: null,
        currentPage: 1,
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
        _this.normalNews = result;

      });
    },

    methods: {
      getMoreInfo: function() {
        let _this = this;
        this.currentPage++;
        this.$store.state.pages = this.currentPage;
        this.$store.dispatch('getNormalNewsInfo').then((result)=> { 
          if(result) {
            _this.normalNews = _this.normalNews.concat(result);
            if(result.length!=8){
              _this.moreInfo = !_this.moreInfo;
            }
          } else {
            _this.moreInfo = !_this.moreInfo;
          }
        });
      },

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

    .img_style {
        width: 100%;
        display: block;
        max-width: 750px;
        margin: 0 auto;
    }

    .white_space {
        width: 6%;
        height: 50px;
        float: left;
    }

    .white_space_row {
        width: 100%;
        height: 25px;
        float: left;
    }

    .topsnews_1 {
        width: 47%;
        float: left;
    }

    .space_margin {
        margin-top: 25px;
    }

    .space_padding {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .img_container {
        position: relative;
        width: 90%;
        margin: 0 auto;
        *zoom:1;
    }

    .img_container:after {
        display: block;
        clear: both;
    }

    .img_descrip {
        position: absolute;
        top: 200px;
    }

    .loadmore {
        width: 100%;
        margin-top: 20px;
        position: relative;
    }

    .loadmore_btn {
        height: 36px;
        line-height: 36px;
        width: 90%;
        margin: 0 auto;
        border: 1px solid #e6e7e8;
        background-color: #f1f1f1;
        margin-bottom: 40px;
        cursor: pointer;
    }

    .puppy_logo {
        margin-top: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }

</style>

