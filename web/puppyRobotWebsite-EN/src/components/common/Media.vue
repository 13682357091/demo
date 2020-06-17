<template>
  <div :id="mediaId" class="newsClass">
      <!-- <div id="newsTop">

      </div> -->
    <router-link :to="{path:'/newsdetail', query: {id: mediaContent.nid}}" target="_blank" class="clickable">
      <div id="newsBtm" :style="{height:`${mediaHeight}px !important`}">
        <div class="newsImageContainer" :style="{height:`${mediaHeight}px !important`}">
            <div id="newsBtmImage" :style="{backgroundImage:`url(${mediaContent.img[0]})`,height:`${mediaHeight}px !important`}">
            </div>
        </div>
        <div class="newsTitle" :style="{top:`${mediaHeight - 57}px !important`}">
        </div>
        <div class="newsTitleWord" :style="{top:`${mediaHeight - 57}px !important`}">
            <div class="title">
                {{mediaContent.title}}
            </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Media',
  props: ['mediaId', 'mediaContent', 'mediaHeight', 'mediaWidth', 'isIndex']
}

</script>


<style scoped>
    #newsClass {
        width: 100%;
        height: 200px;
    }

    .newsImageContainer {
        width: 100%;
        height: 200px;
        overflow: hidden;
    }

    #newsBtm {
        width: 100%;
        height: 100%;
        overflow: hidden;  
        position: relative;
    }

    #newsBtmImage {
        width: 100%;
        height: 200px;
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
        line-height: 57px;
        text-align: center;
        height: 57px;
        background-color: black;
        color: white;
        position: absolute;
        margin-bottom: 0px;
        opacity: 0.7;
    }

    .newsTitleWord {
        width: 100%;
        line-height: 57px;
        text-align: center;
        height: 57px;
        color: white;
        position: absolute;
        margin-bottom: 0px;
    }

    span{
        opacity: 1;
    }

    .title {
        font-size: 11pt;
        line-height: 41px;
        text-align: left;
        margin: 8px 15px 8px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

</style>
