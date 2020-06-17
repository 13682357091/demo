<template>
  <div :id="mediaId" class="newsClass">
      <!-- <div id="newsTop">

      </div> -->
    <a :href="mediaContent.source_url" target="_blank" class="clickable">
      <div id="newsBtm" :style="{height:`${imageHeight+133}px !important`, width: `${imageWidth}px !important`}">
        <div class="newsImageContainer" :style="{height:`${imageHeight}px !important`}">
            <div id="newsBtmImage" :style="{backgroundImage:`url(${mediaContent.img[0]})`,height:`${imageHeight}px !important`}">
            </div>
        </div>
        <div class="newsTitle">
            <div class="title_mid">
                <div class="title_top">
                    <div class="add_time">
                        {{mediaContent.add_time_en}}
                    </div>
                    <div class="ReviewOrVideo">
                        <span class="sign" v-if="mediaContent.is_review == '1'">Review</span> <span class="sign"  v-if="mediaContent.is_video == '1'">Video</span>
                    </div>
                    <div class="clear"></div>
                </div>
                
                <div class="title">
                    {{mediaContent.title}}
                </div>
            </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MediaForIndex',
  props: ['mediaId', 'mediaContent', 'imageHeight', 'imageWidth', 'isIndex']
}

</script>


<style lang="scss" scoped>
    #newsClass {
        width: 100%;
        height: 200px;
    }

    .newsImageContainer {
        width: 100%;
        overflow: hidden;
    }

    #newsBtm {
        width: 100%;
        height: 100%;
        overflow: hidden;  
        position: relative;
        border-radius: 18px;
    }

    #newsBtmImage {
        width: 100%;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 1s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        cursor: pointer;
    }

    #newsBtmImage:hover {
        width: 100%;
        height: 200px;
        transform: scale(1.1);  
    }

    .newsTitle {
        width: 100%;
        text-align: center;
        background-color: white;
        color: black;
        padding-bottom: 25px;
    }

    .add_time {
        font-size: 14.71px;
        font-family: 'Microsoft YaHei';
        color: #504d4d;
        float: left;
        // width: 
    }

    .ReviewOrVideo {
        float: right;
        width: 100px;
        text-align: right;
        .sign{
            color: #0065ba;
            font-size: 14.71px;
            font-family: 'Microsoft YaHei';
        }
    }

    .title_mid {
        margin: 0px 15px 0px 15px;
    }

    .title_top {
        width: 100%;
        border-bottom: 1px solid #c9c7c7;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .clear {
        clear: both;
    }

    .title {
        font-size: 17.86px;
        font-family: 'Microsoft YaHei';
        color: black;
        line-height: 25px;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 8px;
        height: 51px;
    }

    a {
        text-decoration-line: none;
    }

</style>
