
<template>
  <div id="newsdetail">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              NEWS
            </div>
            <div class="solutionName"></div>
          </div>
          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="videocontent">
        <div class="container">
            <div class="container_detail">
            <div class="detail">
                <div class="detail_mid">
                    <div class="article_title">
                        {{newsArticle.title}}
                    </div>

                    <div class="article_auth_date">
                        <div class="auth_img"><img src='./../../assets/images/videocenter/user.png'/></div>
                        <div class="auth">来源：<a :href='newsArticle.source_url' target="_blank">{{newsArticle.author}}</a></div>
                        <div class="date">{{newsArticle.add_time}}</div>
                        <!-- <div class="shareDiv">
                            <img src="./../../assets/images/videocenter/share.png">
                        </div>
                        <div class="shareDiv">
                            分享到：
                        </div> -->
                    </div>

                    <div class="speratLine"></div>
                    <div class="article" v-html="newsArticle.content"></div>
                    <div class="end">THE END</div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import router from "./../../router/index"
export default {
    data() {
        return {
            newsArticle: {
                title: '',
                source_url: '',
                author: '',
                add_time: '',
                content:''
            },
            newsLists: []
        }
    },
    mounted() {
      let _this = this;
      this.$store.state.newsId = this.GetQueryString('id');
      this.$store.dispatch('getNewsDetailInfo').then((result)=> { _this.newsArticle = result[0]; });

    },
    updated() {
        // 循环使图片最大宽度为100%。
        let imgs = document.querySelector(".article").querySelectorAll("img");
        for(var i=0;i<imgs.length;i++) {
            imgs[i].style.maxWidth = '90%';
            imgs[i].style.margin = '0 auto';
            imgs[i].style.display = 'block';
        }

        // let centerText = document.querySelectorAll(".text-align-center");
        // for(var i=0;i<centerText.length;i++) {
        //     centerText[i].style.textAlign = 'center';
        // }
    
    },
    methods: {
        GetQueryString: function(name) {
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null)return  unescape(r[2]); return null;
        }
    }
}
</script>


<style lang="scss" scoped>
$hachiSMB: 46px;

    .hachiheader {
        width: 100%;
        text-align: center;
    }

    .headerContent {
        width: 1280px;
        margin: 0 auto;
    }

    #divNews {
        float: left;
        height: $hachiSMB;
        line-height: $hachiSMB;
        width: 73.17px;
    }

    .hachiThridMenu {
        height: $hachiSMB;
    }

    .solutionName {
        float: left;
        font-size: 13pt;
        height: $hachiSMB;
        line-height: $hachiSMB;
    }

    .hachiHT {
        width: 100%;
        height: $hachiSMB;
    }


    .headerLine {
        width: 100%;
        height: 1px;
        background-image: url('./../../assets/images/hachi/solution/nav_top_Hachi_line.png');
    }

    .videocontent {
        width: 100%;
        background-color: #efefef;
        position: relative;
    }

    .container {
        // margin-top: 70px;
        margin-bottom: 70px;
    }

    .container_detail {
        padding-top: 70px;
        padding-bottom: 70px;
    }

    .detail {
        margin: 0 auto;
        width: 1010px;
        background-color: white;
    }

    .detail_mid {
        padding: 75px 85px 105px 75px;
        text-align: left;
    }

    .article_title {
        font-size: 20pt;
    }

    .article_auth_date {
        margin-top: 70px;
        height: 50px;
    }

    .auth_img {
        float: left;
    }

    .auth {
        float: left;
        margin-left: 5px;
        line-height: 43px;
    }

    .date {
        float: left;
        margin-left: 15px;
        color:  #919294;
        line-height: 43px;
    }

    .shareDiv {
        float: right;
        line-height: 43px;
        color: #919294;
        line-height: 43px;
    }

    .speratLine {
        width: 100%;
        height: 1px;
        background-color: #a6a8ab;
        margin-top: 30px;

    }

    .article {
        margin-top: 40px;
    }

    .video {
        margin-top: 40px;
    }

    .end {
        margin-top: 100px;
        text-align: center;
    }


   

</style>
