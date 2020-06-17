<template>
  <div :id="videoContent && videoContent.id" class="newsClass">
    <div id="newsBtm">

        <div class="title">
          {{videoContent? videoContent.title : ''}}
        </div>

      <div class="date_container">
        {{videoContent? videoContent.date : ''}}
      </div>
      <div id="newsBtmImage">
          <div>
              <img class="img_style" :src="videoContent && videoContent.img">
          </div>
        <div class="imageBtn">
            <img src="./../../assets/video/play_01.png" @click="PlayVideo('video_' + videoContent.id)">
        </div>
        <video :src="videoContent && videoContent.video" v-show="videoPlay" :id="'video_' + videoContent.id" controls="controls" width="100%" :poster="videoContent && videoContent.img">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Video',
    props: ['videoContent' ],
    data() {
        return {
            videoPlay: false,
            video: null,
        }
    },
    mounted() {
        this.videoId = this.videoContent && ('video_' + this.videoContent.id);
        document.addEventListener("fullscreenchange", function () { 
            document.fullscreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        
        document.addEventListener("mozfullscreenchange", function () { 
            document.mozFullScreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        
        document.addEventListener("webkitfullscreenchange", function () { 
            document.webkitIsFullScreen? this.videoPlay =true : this.videoPlay = false;
        }); 
        document.addEventListener("msfullscreenchange", function () { 
            document.msFullscreenElement? this.videoPlay =true : this.videoPlay = false;
        }); 
    },
    methods: {
        PlayVideo: function(playVideo){
            console.log('当前播放videoid:' + playVideo);
            var mVideo = document.querySelector("#" + playVideo);
            if (mVideo) {
                if (mVideo.requestFullscreen) {
                    mVideo.requestFullscreen();
                }
                else if (mVideo.msRequestFullscreen) {
                    mVideo.msRequestFullscreen();
                }
                else if (mVideo.mozRequestFullScreen) {
                    mVideo.mozRequestFullScreen();
                }
                else if (mVideo.webkitRequestFullScreen) {
                    mVideo.webkitRequestFullScreen();
                }
                mVideo.play();
            }
        },
    }
}

</script>

<style scoped>
    #newsClass {
        width: 100%;
    }

    .newsImageContainer {
        width: 740px;
        margin-left: 270px;
        overflow: hidden;
    }

    #newsBtm {
        width: 100%;
        overflow: hidden;  
        position: relative;
        padding-top: 30px;
    }

    #newsBtmImage {
        width: 100%;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 1s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        position: relative;
    }

    .date_container {
        margin: 20px 20px 20px 20px;
        color: #919294;
    }

    .title {
        font-size: 14pt;
        font-weight: bold;
        line-height: 25px;
        margin: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
    }

    .imageBtn {
        position: absolute;
        top: 38%;
        left: 42%;
        cursor: pointer;
    }
    
    .imageBtn:hover {
        transform: scale(1.1);  
    }

    .shareVideo {
        width: 230px;
        margin: 20px;
        margin-bottom: 25px;
        margin-left: 35px;
        margin-right: 35px;
    }

    .shareDiv {
        float: right;
        line-height: 43px;
        color: #919294;
    }

    .img_style {
        width: 100%;
        display: block;
    }

</style>
