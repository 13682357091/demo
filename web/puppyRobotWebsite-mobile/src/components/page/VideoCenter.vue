
<template>
  <div id="videocenter">
    <!-- <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              VIDEO
            </div>
            <div class="solutionName">视频中心</div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="videocontent">
        <div class="container">
            <div class="titlecontainer">
                <div class="line"></div>
                <div class="typetitlecontainer">
                    <div class="typetitle">视频分类</div>
                </div>
            </div>
            <div>
            <div :class="(selected==videotype.tid) ? 'type selected':'type'" v-for="videotype in videoList" :key="videotype.tid"
                @click="videoTypeChanged(videotype.tid)">
                    {{videotype.name}}
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="videocontainer">
            <div class="video_inner">
                <div v-for="(video) in videoContentList" :key="video.nid">
                    <Video :videoContent="video"/>
                    <div class="sperate_line"></div>
                </div>
                <div class="clear"></div>
                <div class="loadmore">
                    <div class="loadmore_btn" @click="getMoreInfo()" v-show="!moreInfo && (videoContentList && videoContentList.length >= 10)">
                        + 点击加载更多
                    </div>
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
let _ = require('lodash');

export default {
    data() {
        return { 
            videoList: null,
            selected: 0, 
            videoContentList: null,
            currentPage: 1,
            moreInfo: false,
            videoPlay: false,
            currDisplayVideoURL: '',
        }
    },
    mounted() {
        let _this = this;
        this.$store.dispatch('getVideoList').then((result)=> { 
            _this.videoList = result;
            if(_this.videoList) {
                _this.selected = _this.videoList[0].tid;
                _this.videoTypeChanged(_this.selected); 
            }
            return false;
        });
    },
    components: {
        Video
    },
    methods: {
        videoTypeChanged: function(selectedType){
            this.selected = selectedType;
            this.videoContentList = _.filter(this.videoList, ['tid', selectedType])[0].list;
            this.moreInfo = false;
        },

        getMoreInfo: function(){
            let _this = this;
            this.$store.state.videoType = this.selected;
            this.currentPage++;
            this.$store.state.pageIndex = this.currentPage;
            this.$store.dispatch('getVideoMore').then((result)=> { 
                console.log(result);
                if(result && result.length){
                    _this.videoContentList = _this.videoContentList.concat(result);
                    console.log( _this.videoContentList);
                    if(result.length<10){
                        _this.moreInfo = !_this.moreInfo;
                    }
                }  else {
                    _this.moreInfo = !_this.moreInfo;
                }
                
                return false;
            });        
        },
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
        position: relative;
    }

    .container {
        padding-top: 30px;
        width: 94%;
        margin: 0 auto;
    }

    // .detail {
    //     margin: 0 auto;
    //     padding-left: 10px;
    //     padding-right: 10px;
    //     padding-bottom: 40px;
    //     background-color: white;
    // }

    .detail_mid {
        padding: 25px 15px 25px 15px;
        text-align: left;
    }

    .titlecontainer{
        position: relative;
    }

    .line {
        width: 60%;
        padding-top: 10px;
        margin: 0 auto;
        height: 30px;
        border-top: 1px solid #bfbfbf;
    }

    .typetitlecontainer{
        position:absolute;
        top: -13px;
        width: 100%;
    }

    .typetitle {
        width: 90px;
        background-color: white;
        font-size: 18px;
        margin: 0 auto;

    }

    .type {
        width: 44%;
        height: 54px;
        background-color: #f5f5f5;
        line-height: 54px;
        cursor: pointer;
        float: left;
        margin-left: 3%;
        margin-right: 3%;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .selected {
        background-color: white;
        box-shadow: 3px 3px 3px #f5f5f5, 3px -3px 3px #f5f5f5,-3px 3px 3px #f5f5f5,-3px -3px 3px #f5f5f5
    }

    .videocontainer {
        margin-top: 20px;
        background-color: #f5f5f5;
        width: 100%;
    }

    .video_inner {
        padding-top: 20px;
        width: 94%;
        margin: 0 auto;
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
        margin-top: 20px;
        margin-bottom: 20px;
        background-color: #444444;

    }
   
    .clear {
        clear: both;
    }

    .loadmore {
    width: 100%;
    margin-top: 25px;
    padding-bottom: 50px;
    position: relative;
}

.loadmore_btn {
    height: 36px;
    line-height: 36px;
    width: 200px;
    margin: 0 auto;
    border: 1px solid #e6e7e8;
    background-color: #f1f1f1;
    // margin-bottom: 70px;
    cursor: pointer;
}


</style>
