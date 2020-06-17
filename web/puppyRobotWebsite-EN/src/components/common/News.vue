<template>
  <div :id="newsId" class="newsClass" :style="{height:`${newsImageHeight + 118}px !important`}">
      <a :href="newsContent.source_url?newsContent.source_url:''" target="_blank" class="clickable">
        <div id="newsBtm" :style="{height:`${newsImageHeight + 118}px !important`}">
            <div class="newsImageContainer" :style="{height:`${newsImageHeight}px !important`}">
                <div id="newsBtmImage" :style="{backgroundImage:`url(${newsContent?newsContent.img[0]:''})`, height:`${newsImageHeight}px !important`} ">
                </div>
            </div>
            <div class="imageBtn" v-if="!newsBtnHide">
                <img src="./../../assets/images/index/button_01.png">
            </div>
            <div class="newsTitle">
                <div class="title title_right">
                    {{newsContent? newsContent.title : ''}}
                </div>

                <div class="time_type time_type_right">
                    <div class="add_time">
                        {{newsContent? newsContent.add_time_en :''}}
                    </div>
                    <div class="ReviewOrVideo">
                        <span v-if="newsContent.is_review == '1'">Review</span><span v-if="newsContent.is_review == '1' && newsContent.is_video == '1'"> | </span><span  v-if="newsContent.is_video == '1'">Video</span>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
      </a>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: ['newsId', 'newsContent', 'newsWidth', 'newsImageHeight', 'newsBtnHide']
}

</script>

<style scoped>
    #newsClass {
        width: 100%;
        height: 220px;
    }

    .newsImageContainer {
        width: 100%;
        height: 163px;
        overflow: hidden;
    }

    #newsBtm {
        width: 100%;
        height: 220px;
        overflow: hidden;  
        position: relative;
    }

    #newsBtmImage {
        width: 100%;
        height: 163px;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 1s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        cursor: pointer;
    }

    #newsBtmImage:hover {
        width: 100%;
        height: 163px;
        transform: scale(1.1);  
    }

    .newsTitle {
        width: 100%;
        text-align: left;
        height: 118px;
        background-color: #282828;
        color: white;
        margin-bottom: 0px;
        margin-top: 0px;
    }

    .newsTitleWord {
        width: 100%;
        line-height: 50px;
        text-align: center;
        height: 50px;
        color: white;
        margin-bottom: 0px;
    }

    span{
        opacity: 1;
    }

    .title {
        line-height: 28px;
        text-align: left;
        height: 60px;
        padding: 10px 23px 0px 8px;
        margin-bottom: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 26px;
        font-family: "NeutraText-Book";
    }

    .title_right {
        font-size: 20px !important;
        font-family: "NeutraText-Book" !important;
    }

    .space {
        width: 100%;
        height: 5px;
    }

    .add_time {
        float: left; 
    }

  .ReviewOrVideo {
      float: right;
      width: 150px;
      text-align: right;
  }

    .title_mid {
        margin: 0px 15px 0px 15px;
    }

    .time_type {
        padding: 0px 23px 11px 8px;
        color: white;
        font-size: 22px;
        font-family: 'NeutraText-Book';
    }

    .time_type_right {
        font-size: 18px !important;
        font-family: 'NeutraText-Book' !important;
    }

    .clickable {
        cursor: pointer;
        text-decoration-line: none;
    }

    a:link{text-decoration:none;}
    a:visited{text-decoration:none;}
    a:active{text-decoration:none;}
    

</style>
