<template>
  <div id="m_index">
    <div>
      <Banner :slideLists="slideLists" :isAutoplay="true" :isMobileIndex="true"></Banner>
    </div>
    <div>
      <img class="img_01 imgBackCenter" src="./../../assets/images/m_index/div_01.jpg">
    </div>
    <div class="block">
      <div class="block_title">机器人技术</div>
      <div>人工智能技术吸引了无数巨头，<br/>投资者，和满怀梦想的创业者。</div>
    </div>
    <div>
      <img class="img_01 imgBackCenter" src="./../../assets/images/m_index/div_02.jpg">
    </div>
    <div class="sperateLine">
      <div class="line"></div>
    </div>
    <div class="block">
      <div class="block_title">智能视觉技术</div>
      <div>智能视觉技术在复杂的场景中，<br/>快速、精确的定位人脸、人体等目标位置。</div>
    </div>
    <div>
      <img class="img_01 imgBackCenter" src="./../../assets/images/m_index/div_03.jpg">
    </div>
    <div class="sperateLine"></div>
    <div>
      <img class="img_01 imgBackCenter" src="./../../assets/images/m_index/div_04.jpg">
    </div>
    <div class="block">
      <div class="block_title">cube X</div>
      <div>智慧生活<br/>触手可及</div>
    </div>
    <div>
      <router-link to="/cubeX">
      <img class="img_01 imgBackCenter" src="./../../assets/images/m_index/div_05.jpg">
      </router-link>
    </div>
    <div class="sperateLine">
      <div class="line"></div>
    </div>
    <div class="block">
      <div class="block_title">智慧家居</div>
      <div>Live Your Way<br/>智能由你</div>
    </div>
    <div>
      <img class="img_01 imgBackCenter" src="./../../assets/images/m_index/div_06.jpg">
    </div>
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
    <div class="puppy_logo">
      <img src="./../../assets/images/logo.png">
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
       slideLists: [
         {
            id: 6,
            img: require("./../../assets/images/m_index/banner_06.jpg"),
            backgroundColor: "#FFFFFF",
            maxWidth: '750px',
            router: "/hachiInfinite"
         },
         {
            id: 1,
            img: require("./../../assets/images/m_index/banner_05.jpg"),
            backgroundColor: "#FFFFFF",
            maxWidth: '750px',
            router: "/hachidelight"
         },
         {
            id: 2,
            img: require("./../../assets/images/m_index/banner_01.jpg"),
            backgroundColor: "#FFFFFF",
            maxWidth: '750px',
            router: "/hachiauto"
         },
          {
            id: 3,
            img: require("./../../assets/images/m_index/banner_02.jpg"),
            backgroundColor: "#FFFFFF",
            maxWidth: '750px',
            router: "/hachibingo"
         },
         {
            id: 4,
            img: require("./../../assets/images/m_index/banner_03.jpg"),
            backgroundColor: "#FFFFFF",
            maxWidth: '750px',
            router: "/cubeX"
         },
          {
            id: 5,
            img: require("./../../assets/images/m_index/banner_04.jpg"),
            backgroundColor: "#000000",
            maxWidth: '750px',
            router: "/puppycube"
         }
          
       ],
       
       mainNews: null,
    }
  },
   mounted() {
    let _this = this;
    this.$store.dispatch('getTopNewsInfo').then((result)=> { 
      // console.log(result);
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
      height: 120px;
      width: 100%;
      background-color: white;
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

  .puppy_logo {
      margin-top: 50px;
      padding-top: 10px;
      padding-bottom: 10px;
      background-color: black;
  }
</style>

