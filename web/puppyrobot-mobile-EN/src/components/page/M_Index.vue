<template>
  <div id="m_index">
    <div>
      <!-- <Banner :slideLists="slideLists" :isAutoplay="true" :isMobileIndex="true"></Banner> -->
      <router-link to="/puppycube">
        <div class="top_image">
          <img src="./../../assets/images/m_index/banner_01.jpg">
        </div>
      </router-link>
    </div>
    <div style="margin-top: 5px;">
      <img class="img_01 imgBackCenter" src="./../../assets/images/m_index/div_01.jpg">
    </div>
    <div class="block">
        <video src="http://source.puppyrobot.com/video/puppycube_phone(english).mp4" controls poster="./../../assets/video/puppycube_EN.jpg"></video>
    </div>

    <div class="sperateLine"></div>
    
    <div class="sperateLine"></div>
    <div>
      <img class="img_01 imgBackCenter" src="./../../assets/images/m_index/div_07.jpg">
    </div>
    <div>
      <div v-for="(news, index) in mainNews" :key="news.nid">
        <mobile-news :newsContent="news"/>
        <div v-if="index<2" class="sperateLine">
          <div class="line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './../common/Banner'
import MobileNews from './../common/MobileNews'

export default {
  name: "M_Index",
  components: {
    Banner,
    MobileNews,
  },
  data() {
    return {
      //  slideLists: [
      //    {
      //       id: 1,
      //       img: require("./../../assets/images/m_index/banner_01.jpg"),
      //       backgroundColor: "#FFFFFF",
      //       maxWidth: '750px',
      //       router: "/puppyauto"
      //    },
      //     {
      //       id: 2,
      //       img: require("./../../assets/images/m_index/banner_02.jpg"),
      //       backgroundColor: "#FFFFFF",
      //       maxWidth: '750px',
      //       router: "/puppybingo"
      //    },
      //    {
      //       id: 3,
      //       img: require("./../../assets/images/m_index/banner_03.jpg"),
      //       backgroundColor: "#FFFFFF",
      //       maxWidth: '750px',
      //       router: "/puppycubes"
      //    },
      //     {
      //       id: 4,
      //       img: require("./../../assets/images/m_index/banner_04.jpg"),
      //       backgroundColor: "#000000",
      //       maxWidth: '750px',
      //       router: "/puppycube"
      //    }
          
      //  ],
       
       mainNews: null,
    }
  },
   mounted() {
    let _this = this;
    this.$store.dispatch('getTopNewsInfo').then((result)=> { 
      console.log(result);
      _this.mainNews = result;
    });
  },
}
</script>

<style lang="scss" scoped>
    $headerHeight: 46px;
    $headerColor: #f2f2f2;

    #m_index {
      max-width: 750px;
    }

  .top_image {
    width: 100%;
    background-color: #000000;
    background-size: cover;
    display: block;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    img {
      width: 100%;
      max-width: 750px;
    }
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

    .block {
      width: 100%;
      background-color: white;
      padding-top: 38px;
      video {
        width: 95%;
        margin: 0 auto;
      }
    }

    .block_title {
      color: #0078fa;
      margin-top: 30px;
      margin-bottom: 15px;
      font-size: 15pt;
    }

    .sperateLine {
      margin-top: 30px;
      .line{
        border-bottom: 1px solid #444444;
        width: 95%;
        margin: 0 auto;
      }
    }
</style>

