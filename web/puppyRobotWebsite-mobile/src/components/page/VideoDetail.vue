
<template>
  <div id="videodetail">

    <div class="videocontent">
        <div class="container">
            <div class="container_detail">
            <div class="detail">
                <div class="detail_mid">
                    <div class="article_title">
                        {{videoArticle?videoArticle.title:''}}
                    </div>
                    

                    <!-- <div class="article_auth_date">
                        <div class="auth_img"><img :src='videoArticle.auth_img'/></div>
                        <div class="auth">{{videoArticle.auth}}</div>z
                        <div class="date">{{videoArticle.date}}</div>
                        <div class="shareDiv">
                            <img src="./../../assets/images/videocenter/share.png">
                        </div>
                        <div class="shareDiv">
                            分享到：
                        </div>
                    </div> -->

                    <!-- <div class="speratLine"></div> -->
                    <div class="article">
                        <p>
                            <iframe id="videoplayer" height="300px" width="100%" :src="videoArticle?videoArticle.video:''"
                            allowscriptaccess="always"
                            allowfullscreen="true"
                            wmode="opaque"
                            allowTransparency="true"
                            frameborder="0"
                            type="application/x-shockwave-flash"></iframe>
                        </p>
                    </div>

                    <div class="diplay_times"> 播放次数：{{videoArticle?videoArticle.total:''}}</div>
                    <!-- <div class="video">
                        <video :src="videoArticle.video" :poster="videoArticle.img" id="article_video" preload="true" controls="controls" width="100%"></video>
                    </div> -->
                </div>
            </div>
            </div>
        </div>
        <div class="puppy_logo">
            <img src="./../../assets/images/logo.png">
        </div>
    </div>
  </div>
</template>

<script>
import router from "./../../router/index"
export default {
    data() {
        return {
            videoArticle: null,

        }
    },

    beforeMount() {
        let videoId = this.GetQueryString('id');
        let _this = this;
        this.$store.state.videoId = videoId;
        this.$store.dispatch('getVideoContent').then((result)=> { 
            if(result.length && result[0].video){
                
                result[0].video = result[0].video.replace("<p>",'');
                result[0].video = result[0].video.replace("</p>",'');
                result[0].video = result[0].video.replace("==/v.swf",'');
                result[0].video = result[0].video.replace("player.php/sid",'embed');
                _this.videoArticle = result[0];
                document.title = _this.videoArticle.title;
                document.querySelector('meta[name="Description"]').setAttribute('content', '');

            }
            return false;
        });        
    },

    onload(){

    },

    mounted() {
        document.querySelector("#videoplayer").style.height = (window.document.body.offsetWidth * (720 /1280)).toFixed(2) + "px";
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

    .videocontent {
        width: 100%;
        position: relative;
    }

    .container {
        // margin-top: 70px;
        // margin-bottom: 70px;
    }

    .container_detail {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .detail {
        margin: 0 auto;
        width: 95%;
        background-color: white;
    }

    .detail_mid {
        padding: 10px 0px 10px 0px;
        text-align: left;
    }

    .article_title {
        font-size: 18px;
        float: left;
    }

    .diplay_times {
        margin-top: 2px;
        font-size: 14px;
        color: gray;
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
        margin-left: 5px;
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

    .puppy_logo {
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }
   

</style>
