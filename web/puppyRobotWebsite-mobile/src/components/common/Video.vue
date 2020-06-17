<template>
  <div :id="videoContent.nid" class="newsClass">
      <router-link :to="{path:'/videodetail',query: {id: videoContent.nid}}" target="_blank">
            <div id="newsBtmImage">
                <img :src="videoContent?videoContent.img_url:''" style="width: 100%; display:block;">
                <div class="playbtn">
                    <div class="imageBtn">
                        <img src="./../../assets/images/videocenter/play_01.png">
                        
                    </div>
                </div>
                
            </div>
            <div class="title">{{videoContent?videoContent.title: ''}}</div>
      </router-link>

  </div>
</template>

<script>
export default {
    name: 'Video',
    props: ['videoContent' ],
    data() {
        return {
        }
    },
    mounted() {
        
    },
    methods: {
        
    }
}

</script>

<style lang="scss" scoped>
     #newsClass {
        width: 100%;
    }

    .newsImageContainer {
        width: 100%;
        overflow: hidden;
    }

    #newsBtmImage {
        width: 100%;
        background-color: #f5f5f5;
        background-repeat:no-repeat; 
        transition: all 1s;    
        background-size:100% 100%;
        -moz-background-size:100% 100%;
        position: relative;
        z-index: 1;
    }

    .title {
        height: 45px;
        line-height: 45px;
        position: relative;
        margin-top: -45px;
        width: 100%;
        padding-left: 8px;
        color: white;
        text-align: left;
        background-color: rgba(0,0,0,0.6);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 10;
        -webkit-box-orient: vertical;
        z-index: 2;
        text-decoration: none;
        text-decoration-line: none;
        box-sizing: border-box;
    }

    .playbtn {
        position: absolute;
        top: 18%;
        width: 100%;
    }
    
    .imageBtn {
        cursor: pointer;
        img {
            width: 70px;
            
        }
    }
    
    .imageBtn:hover {
        transform: scale(1.1);  
    }

    a {
        text-decoration-line: none;
    }

</style>
