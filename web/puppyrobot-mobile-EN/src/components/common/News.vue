<template>
  <div :id="newsId" class="newsClass">
      <router-link :to="{path:'/newsdetail', query: {id: newsContent && newsContent.nid}}" class="clickable">
        <div id="newsBtm">
            <div class="newsImageContainer">
              <img id="newsBtmImage" :src="isTopNews? newsContent && newsContent.img[1] : newsContent && newsContent.img[0]">
            </div>
            <div class="newsTitle">
                <div class="title">
                    {{newsContent && newsContent.title}}
                </div>
            </div>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: ['newsId', 'newsContent', 'isTopNews']
}

</script>

<style scoped>
    #newsClass {
        width: 100%;
    }

    .newsImageContainer {
        width: 100%;
        overflow: hidden;
    }

    #newsBtm {
        width: 100%;
        overflow: hidden;  
        position: relative;
        box-shadow: 1px 1px 2px #e6e6e6;
    }

    #newsBtmImage {
        width: 100%;
        background-color: gray;
        background-repeat:no-repeat; 
        transition: all 1s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        cursor: pointer;
        display: block;
    }

    #newsBtmImage:hover {
        width: 100%;
        transform: scale(1.1);  
    }

    .newsTitle {
        width: 100%;
        line-height: 51px;
        text-align: center;
        height: 51px;
        background-color: white;
        color: black;
    }

    .title {
        font-size: 10pt;
        line-height: 20px;
        text-align: left;
        padding: 8px 15px 8px 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .imageBtn {
        position: absolute;
        top: 105px;
        left: 20px;
        cursor: pointer;
    }

    .clickable {
        cursor: pointer;
        text-decoration-line: none;
    }
    

</style>
