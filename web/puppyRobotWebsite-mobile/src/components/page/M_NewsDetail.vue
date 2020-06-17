
<template>
  <div id="newsdetail">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              NEWS
            </div>
            <div class="solutionName">媒体报道</div>
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
                        <div class="auth_img"><img src='./../../assets/images/user.png'/></div>
                        <div class="auth">来源：<a :href='newsArticle.source_url' target="_blank">{{newsArticle.author}}</a></div>
                        <div class="date">&nbsp;{{newsArticle.add_time}}</div>
                    </div>

                    <div class="speratLine"></div>
                    <div class="article" v-html="newsArticle.content"></div>
                    <div class="end">THE END</div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="puppy_logo">
      <img src="./../../assets/images/logo.png">
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
      this.$store.dispatch('getNewsDetailInfo').then((result)=> { 
            _this.newsArticle = result[0];
            let articleContent = _this.newsArticle.content.replace(/<[^>]*>|/g, "");
            let tempPageDescription = articleContent.length > 160? articleContent.substring(0,160) : articleContent.substring(0,articleContent.length); //获取内容的前80字
            document.title = _this.newsArticle.title;
            document.querySelector('meta[name="Description"]').setAttribute('content', tempPageDescription);
      });

    },
    updated() {
        // 循环使图片最大宽度为100%。
        let imgs = document.querySelector(".article").querySelectorAll("img");
        for(var i=0;i<imgs.length;i++) {
            imgs[i].style.maxWidth = '100%';
            imgs[i].style.margin = '0 auto';
            imgs[i].style.display = 'block';
        }
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
        width: 100%;
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

    .videocontent {
        width: 100%;
        background-color: #efefef;
        position: relative;
    }

    .container {
        padding-top: 30px;
        padding-bottom: 30px;
        width: 95%;
        margin: 0 auto;
    }

    .detail {
        margin: 0 auto;
        width: 100%;
        background-color: white;
    }

    .detail_mid {
        padding: 25px 15px 25px 15px;
        text-align: left;
    }

    .article_title {
        font-size: 16pt;
    }

    .article_auth_date {
        margin-top: 30px;
        // height: 30px;
        font-size: 11pt;
    }

    .auth_img {
        float: left;
        img {
            width: 30px;
        }
    }

    .auth {
        line-height: 35px;
        float:left;
    }

    .date {
        line-height: 35px;
        color:  #919294;
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
        margin-top: 10px;

    }

    .article {
        margin-top: 40px;
    }

    .video {
        margin-top: 40px;
    }

    .end {
        margin-top: 20px;
        text-align: center;
    }

    .puppy_logo {
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }
   

</style>
