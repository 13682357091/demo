
<template>
  <div id="store">
    <!-- <div class="hachiheader">
      <div class="headerContent">
        <div class="hachiHT">
          <div class="hachiThridMenu">
            <div id='divNews'>
              puppy cube
            </div>
            <div class="solutionName">线下门店</div>
          </div>

        </div>
      </div>
    </div> -->

    <div class="content">
        <div class="img_container">
            <div class="img_01 imgBackCenter">
                <img class="img_style" src="./../../assets/images/store/headimage.jpg">
            </div>
            <!-- <div class="center_01">
                <div class="center_01_01">
                    puppy cube 授权销售网点
                </div>
                <img class="sperate_line" src="./../../assets/images/store/line.png">
                <div class="center_01_02">
                    超过200家线下门店支持销售服务
                </div>
            </div> -->
        </div>
        <div class="img_container">
            <!-- <div class="header_title">
                puppy cube 线下门店
                <div class="under_line"></div>
            </div> -->

            <div class="selector">
                <select class="select_style" v-model="selected" @change="provinceChanged()">
                    <option v-for="province in provinceList" :value="province.id" :key="province.id">
                        {{ province.name }}
                    </option>
                </select>
            </div>

            <div class="store_detail">
                <div class="city" v-for="(store) in storeOfProvince" :key="store.city">
                    <div class="city_name">{{store.city}}</div>
                    <div class="info" v-for="(s) in store.info" :key="s.nid">
                        <!-- <div class="info_sperate" v-if="index!=0 && index/3!=0"></div> -->
                        <div class="info_2">
                            <div class="store_name">{{s.title}}</div>
                            <div class="address" v-html="'地址：' + s.content"></div>
                            <div class="under_line"></div>
                        </div>
                    </div>
                    <!-- <div v-if="index1 !== (storeOfProvince.length - 1)" class="clear"></div> -->
                </div>
            </div>
        </div>

    </div>
  </div>
</template>

<script>

export default {
    data() {
        return { 
            provinceList: null,
            storeOfProvince: null,
            selected: 11 //北京
        }
    },
    mounted() {
        let _this = this;
        this.$store.dispatch('getProvinceList').then((result)=> { 
            _this.provinceList = result;
            if(_this.provinceList) {
                _this.provinceChanged(_this.selected); 
            }
            return false;
        });        
    },
    components: {
    },
    methods: {
        provinceChanged: function(){
            let _this = this;
            if(this.selected) {
                this.$store.state.provinceId = this.selected;
                this.$store.dispatch('getStoreOfProvince').then((result)=> { 
                    _this.storeOfProvince = result;
                    return false;
                });        
            } else {
                _this.storeOfProvince = null;
            }
        }
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
        margin-right: 10px;
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

    .titleLine {
    width: 70px;
    height: 4px;
    background-color: black;
    margin: 24px 0px 0px 0px; 
    }
    .content {
        margin-top: 1px;
        width: 100%;
        background-color: #f6f6f6;
    }

    .imgBackCenter {
        background-size: cover;
        display: block;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        background-repeat: no-repeat;
        background-position: center center;
        width: 100%;
    }

    .img_container {
        width: 95%;
        position: relative;
        margin: 0 auto;
    }

    .img_01 {
        width: 100%;
        max-width: 694px;
        margin-top: 10px;
    }

    .img_style {
        width: 100%;
        max-width: 694px;
    }

    .center_01 {
        position: absolute;
        top: 210px;
        width: 100%;
        display: table-cell;
        vertical-align: middle;
    }

    .sperate_line {
        margin-top: -5px;
        margin-bottom: 5px;
    }

    .center_01_01 {
        width: 1280px;
        color: white;
        font-size: 44px;
        margin: 0 auto;
    }

    .center_01_02 {
         width: 1280px;
        color: white;
        font-size: 28px;
        margin: 0 auto;
    }

    .header_title {
        width: 1280px;
        font-size: 19px;
        text-align: left;
        height: 80px;
        line-height: 80px;
        color: #aeaeae;
        border-bottom: 1px solid #e7e7e7;
        position:relative;
    }

    .under_line {
        margin-top: 5px;
        margin-bottom: 5px;
        width: 100%;
        height: 1px;
        background-color: #eaeaea;
    }

    .selector {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .select_style {
        height: 30px;
        width: 200px;
        font-size: 14px;
    }

    .store_detail {
        width: 100%;
        background-color: white;
        min-height: 500px;
        margin-bottom: 50px;
        margin: 0 auto;
        padding: 20px 20px;
        box-sizing: border-box;
    }

    .city {
        text-align: left;
        width: 100%;
    }

    .city_name {
        font-size: 17px;
        font-weight: bold;
        width: 100%;
        margin-bottom: 15px;
        margin-top: 5px;
        
    }

    .info {
        padding-bottom: 15px;
        width: 100%;
        // float: left;
        .store_name {
            font-size: 15px;
            font-weight: normal;
        }
        .address {
            font-size: 14px;
            margin-top: 5px;
            color: #aeb0b1;
        }

        .info_sperate {
            width: 75px;
            height: 50px;
            // float: left;
        }

        .info_2{

            width: 100%;

        }
    }

    .clear {
        width: 100%;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 64px;
        clear: both;
    }
</style>
