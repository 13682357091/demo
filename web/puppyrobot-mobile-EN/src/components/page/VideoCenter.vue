
<template>
  <div id="videocenter">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              VIDEO
            </div>
            <div class="solutionName">产品视频</div>
          </div>
        </div>
      </div>
    </div>

    <div class="videocontent">
        <div class="container">
            <div class="detail">
                <div v-for="(video, index) in videoLists" :key="video.id">
                    <Video :videoContent="video"/>
                    <div class="sperate_line" v-if="index!=4"></div>
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
import Video from './../common/Video'

export default {
    data() {
        return {
            videoLists: [
                {
                    id: '1',
                    date: 'May 24, 2018, 09:10',
                    title: 'puppy cube s',
                    auth: 'puppy cube',
                    img: require("./../../assets/video/videoload-cube-s-17s.jpg"),
                    article: '<p style="text-indent: 2em">小狗机器人黑科技产品puppy cube s今日发布，未来触手可及。</p><p style="text-indent: 2em">小狗机器人黑科技产品将于5月24日发布，其是一部智能化设备。</p>',
                    video: 'http://source.puppyrobot.com/video/cube_s_17.mp4'
                },
                {
                    id: '2',
                    date: 'May 24, 2018, 08:34',
                    title: 'puppy cube',
                    auth: 'puppy cube',
                    img: require("./../../assets/video/videoload-cube.jpg"),
                    article: '<p style="text-indent: 2em">小狗机器人黑科技产品puppy cube，未来触手可及。</p>',
                    video: 'http://source.puppyrobot.com/video/cube_final.mp4'
                },
                {
                    id: '3',
                    date: 'May 24, 2018, 07:15',
                    title: 'puppy cube s 应用场景',
                    auth: 'puppy cube',
                    img: require("./../../assets/video/videoload-cube-s-100s.jpg"),
                    article: '<p style="text-indent: 2em"></p>',
                    video: 'http://source.puppyrobot.com/video/cube_s_100.mp4'
                },
                {
                    id: '4',
                    date: 'Jul 5, 2018, 14:00',
                    title: 'puppy bingo',
                    auth: 'puppy cube',
                    img: require("./../../assets/video/puppy_bingo.jpg"),
                    article: '<p style="text-indent: 2em"></p>',
                    video: 'http://source.puppyrobot.com/video/puppybingo.mp4'
                },
                {
                    id: '5',
                    date: 'Jul 5, 2018, 14:30',
                    title: 'puppy auto',
                    auth: 'puppy cube',
                    img: require("./../../assets/video/puppy_auto.jpg"),
                    article: '<p style="text-indent: 2em"></p>',
                    video: 'http://source.puppyrobot.com/video/puppyauto.mp4'
                }
            ],
        }
    },
    components: {
        Video
    },
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
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 40px;
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

    .sperate_line {
        height: 1px;
        width: 100%;
        padding-top: 30px;
        margin: 0 auto;
        border-bottom: 1px solid #444444;
    }
   

</style>
