<template>
  <div :id="newsId" class="newsClass">
      <router-link :to="{path:'/newsdetail', query: {id: newsContent.nid}}" class="clickable">
        <div id="newsBtm" :style="{height:`${newsImageHeight + 57}px !important`}">
            <div class="newsTitle">
                <div class="title">
                    {{newsContent? newsContent.title : ''}}
                </div>
            </div>
            <div class="newsImageContainer" :style="{height:`${newsImageHeight}px !important`}">
                <img id="newsBtmImage" :src="newsContent?newsContent.img[0]:''">
            </div>


        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'MobileNews',
  props: ['newsId', 'newsContent', 'newsWidth', 'newsImageHeight', 'newsBtnHide']
}

</script>

<style scoped>
    #newsClass {
        width: 100%;
    }

    .newsImageContainer {
        width: 100%;
        /* height: 163px; */
        overflow: hidden;
        position: relative;
    }

    #newsBtm {
        width: 100%;
        overflow: hidden;  
        position: relative;
    }

    #newsBtmImage {
        width: 100%;
        /* height: 163px; */
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
        line-height: 100px;
        text-align: center;
        background-color: white;
        color: black;
    }

    .title {
        line-height: 25px;
        padding-top: 25px;
        padding-bottom: 25px;
        margin-left:20px;
        margin-right: 20px;
        overflow: hidden;
    }

    .clickable {
        cursor: pointer;
        text-decoration-line: none;
    }
    

</style>
