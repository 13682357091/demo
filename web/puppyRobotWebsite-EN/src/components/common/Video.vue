<template>
  <div :id="videoId" class="newsClass">
      <div id="newsBtm">
        <div class="video_left">

            <div class="date_container">
                {{videoContent? videoContent.date : ''}}
            </div>

            <div class="newsTitle">
                <div class="title">
                    {{videoContent? videoContent.title : ''}}
                </div>
            </div>

             <!-- <div class="shareVideo">
                
                 <div class="shareDiv">
                    <img src="./../../assets/images/videocenter/share.png">
                 </div>
                  <div class="shareDiv">
                    分享到：
                 </div>
            </div> -->

        </div>

        <div class="newsImageContainer">
            <div id="newsBtmImage" :style="{backgroundImage:`url(${videoContent?videoContent.img:''})`}">
                <div class="imageBtn">
                     <router-link :to="{path:'/videodetail',query: {id: videoContent.id}}" target="_blank">
                        <img src="./../../assets/images/videocenter/play_01.png">
                     </router-link>
                </div>
            
            </div>
        </div>
      
        
      </div>
  </div>
</template>

<script>
export default {
  name: 'Video',
  props: ['videoId', 'videoContent' ]
}

</script>

<style scoped>
    #newsClass {
        width: 100%;
        height: 380px;
    }

    .newsImageContainer {
        width: 740px;
        height: 380px;
        margin-left: 270px;
        overflow: hidden;
    }

    #newsBtm {
        width: 100%;
        height: 380px;
        overflow: hidden;  
        position: relative;
    }

    .video_left {
        width: 300px;
        height: 380px;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 2;
        background-image: url('./../../assets/images/videocenter/shadow.png');
    }

    #newsBtmImage {
        width: 100%;
        height: 380px;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 1s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        position: relative;
    }

    /* #newsBtmImage:hover {
        width: 100%;
        height: 380px;
        transform: scale(1.1);  
    } */

    .date_container {
        margin: 20px 35px -10px 35px;
        text-align: left;
        color: #919294;
    }

    .newsTitle {
        width: 230px;
        margin: 20px;
        line-height: 57px;
        text-align: center;
        height: 260px;
        background-color: white;
        color: black;
    }

    .title {
        line-height: 25px;
        text-align: left;
        margin: 8px 15px 8px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
    }

    .imageBtn {
        position: absolute;
        top: 160px;
        left: 340px;
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

</style>
