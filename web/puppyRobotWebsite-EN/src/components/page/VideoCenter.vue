
<template>
  <div id="VideoCenter">
    <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              VIDEO
            </div>
            <div class="solutionName"></div>
          </div>

          <div class="headerLine">
          </div>
        </div>
      </div>
    </div>

    <div class="newscontent">
        <div class="video_back"> 
            <div class="video_main">
                <div v-for="video in videoLists" :key="video.id">
                    <Video :videoId="video.id" :videoContent="video"/>
                    <div class="space"></div>
                </div>
            </div>
        </div>
        <!-- <div class="loadmore">
          <div class="loadmore_btn">
              + 点击加载更多
          </div>

      </div> -->
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
                    date: 'May 24, 2018, 07:15',
                    title: 'puppy cube s: user scenario',
                    auth: 'puppy cube',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/video/videoload-cube-s-100s.jpg"),
                    article: '<p style="text-indent: 2em"></p>',
                    video: 'http://source.hachismart.com/video/cube_s_100.mp4'
                },
                {
                    id: '2',
                    date: 'May 24, 2018, 08:34',
                    title: 'puppy cube',
                    auth: 'puppy cube',
                    auth_img: require("./../../assets/images/videocenter/user.png"),
                    img: require("./../../assets/video/videoload-cube.jpg"),
                    video: 'http://source.hachismart.com/video/cube_final.mp4'
                }
        ],
      }
  },
    components: {
        Video
    },
  methods: {

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

    .newscontent {
        margin-top: 1px;
        width: 100%;
        position: relative;
    }
    .video_back {
        width: 100%;
        background-color: #f6f6f6;
        
    }
    .video_main {
        width: 1010px;
        margin: 0 auto;
        padding: 50px;
    }

    .space {
        height: 30px;
        width: 100%;
    }

    

.loadmore {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    position: relative;
}

.loadmore_btn {
    height: 36px;
    line-height: 36px;
    width: 500px;
    margin: 0 auto;
    border: 1px solid #e6e7e8;
    background-color: #f1f1f1;
    // margin-bottom: 70px;
    cursor: pointer;
}

</style>
