<template>
    <div>

        <div class="search">
            <el-input v-model="searchString" size="mini" :placeholder="icon" @keyup.enter.native="getJobList()"></el-input>
            <div class="icon_search" @click="getJobList()">
                <img src="./../../assets/images/iconsSearch.png">
            </div>
        </div>
        <div class="condition_box">
            <ul class="d-box">
                <li class="flex1 item select-box">
                    <span :class="selectedDepart?'colorConditionSelected txt':'colorNoCondition txt'">{{selectedDepart?selectedDepartText:dListEnum.dep}}</span>
                    <div class="select_con">
                        <select v-model="selectedDepart" @change="selectChange(selectedDepart, dListEnum.dep);getJobList()">
                            <option value="">全部</option>
                            <option v-for="(item, index) in depCollection"
                                    :key="index"
                                    :label="item.value"
                                    :value="item.id">{{item.value}}</option>
                        </select>
                        <div class="underline_con">
                            <div v-show="selectedDepart" class="underLine"></div>
                        </div>
                    </div>
                </li>
                <li class="flex1 item select-box">
                    <span :class="selectedFun?'colorConditionSelected txt':'colorNoCondition txt'">{{selectedFun?selectedFunText:dListEnum.fun}}</span>
                    <div class="select_con">
                        <select v-model="selectedFun" @change="selectChange(selectedFun, dListEnum.fun);getJobList()">
                            <option value="">全部</option>
                            <option v-for="(item, index) in funCollection"
                                    :key="index"
                                    :label="item.value"
                                    :value="item.id">{{item.value}}</option>
                        </select>
                        <div class="underline_con">
                            <div v-show="selectedFun" class="underLine"></div>
                        </div>
                    </div>
                </li>
                <li class="flex1 item select-box">
                    <span :class="selectedCity?'colorConditionSelected txt':'colorNoCondition txt'">{{selectedCity?selectedCityText:dListEnum.city}}</span>
                    <div class="select_con">
                        <select v-model="selectedCity" @change="selectChange(selectedCity, dListEnum.city);getJobList()">
                            <option value="">全部</option>
                            <option v-for="(item, index) in cityCollection"
                                    :key="index"
                                    :label="item.value"
                                    :value="item.id">{{item.value}}</option>
                        </select>
                        <div class="underline_con">
                            <div v-show="selectedCity" class="underLine"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="detail">
            <div class="detail_top">
                <img src="./../../assets/images/detail_back.png">
            </div>
            <div class="detail_btm">
                <div class="delail_con">
                    <ul>
                        <li class="job_block" v-for="(item, index) in jobCollection" :key="index" @click="navToJobDetail(item.job_id)">
                            <div>
                                <div class="job_style">{{item.job}}</div> 
                                <div class="pub_time">{{item.changed}}</div>
                                <div class="clear"></div>
                            </div>
                            <div class="job_btm">
                                <div class="add_icon"><img src="./../../assets/images/add.png"></div>
                                <div class="add">{{item.address}}</div>
                                <div class="dep">{{item.dep}}</div>
                                <div class="clear"></div>
                            </div>
                        </li>
                        <li class="no_jd" v-show="!(jobCollection && jobCollection.length > 0)">
                            没找到相关职位
                        </li>
                        <li v-show="loading_more" class="loading">
                            <img src="./../../assets/images/load_more.gif">
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            carouselList: [],
            loading: true,
            icon: '搜索职位',
            searchString: '',
            selectedCity: '',
            selectedCityText: '',
            selectedDepart: '',
            selectedDepartText: '',
            selectedFun: '',
            selectedFunText: '',
            depCollection: {},
            funCollection: {},
            cityCollection: {},
            jobCollection: {},
            dListEnum: {
                dep: '部门',
                fun: '职能',
                city: '城市'
            }, 
            pageTotal: 0,
            dataTotal: 0,
            loading_more: false,
        }
    },
    mounted(){
        this.$store.state.currentPage = 1;
        this.getJobList();
        window.addEventListener('scroll', this.handleScroll, true);
    },
    destroyed(){
        window.removeEventListener("scroll", this.handleScroll, true);
    },
    methods: {

        getJobList(){
            let _this = this;
            this.$store.state.job_id = '';
            this.$store.state.add_id = this.selectedCity;
            this.$store.state.dep_id = this.selectedDepart;
            this.$store.state.fun_id = this.selectedFun;
            this.$store.state.job = this.searchString;
            this.$store.state.currentPage = 1;
            this.$store.dispatch('GetJob').then((result)=> { 
                this.loading_more = false;
                if(result && result.status == "success"){

                    this.jobCollection = result.list;
                    this.depCollection = result.depList;
                    this.funCollection = result.funList;
                    this.cityCollection = result.addList;
                    this.pageTotal = result.page_total;
                    this.dataTotal = result.total;
                }
                return false;
            }).catch(err=>{
                // this.loading = false;
                this.$message.error(err.message);
            }); 
        },

        selectChange(pId, listType) {
            switch(listType) {
                case this.dListEnum.dep: 
                    this.selectedDepartText = _.filter(this.depCollection, {'id':pId})[0]?_.filter(this.depCollection, {'id':pId})[0].value:'';
                    break;
                case this.dListEnum.fun:
                    this.selectedFunText = _.filter(this.funCollection, {'id':pId})[0]?_.filter(this.funCollection, {'id':pId})[0].value:'';
                    break;
                case this.dListEnum.city:
                    this.selectedCityText = _.filter(this.cityCollection, {'id':pId})[0]?_.filter(this.cityCollection, {'id':pId})[0].value:'';
                    break;
            }
        },

        getTextCrossId(collection, id) {
            if(_.filter(collection, {'id': id})) {
                return _.filter(collection, {'id': id})[0].value;
            } else {
                return '';
            }
        },

        navToJobDetail(job_id){
            this.$router.push({path:'/JobDetail',query:{job_id:job_id}});
        },

        getScrollTop(){
        　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        　　if(document.body){
        　　　　bodyScrollTop = document.body.scrollTop;
        　　}
        　　if(document.documentElement){
        　　　　documentScrollTop = document.documentElement.scrollTop;
        　　}
        　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        　　return scrollTop;
        },
        //文档的总高度
        getScrollHeight(){
        　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        　　if(document.body){
        　　　　bodyScrollHeight = document.body.scrollHeight;
        　　}
        　　if(document.documentElement){
        　　　　documentScrollHeight = document.documentElement.scrollHeight;
        　　}
        　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        　　return scrollHeight;
        },
        getWindowHeight(){
        　　var windowHeight = 0;
        　　if(document.compatMode == "CSS1Compat"){
        　　　　windowHeight = document.documentElement.clientHeight;
        　　}else{
        　　　　windowHeight = document.body.clientHeight;
        　　}
        　　return windowHeight;
        },

        handleScroll(){
            this.loading_more = true;
            let _this = this;
            if(this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight()){
                if(!this.$store.state.currentPage) {
                    this.$store.state.currentPage = 1;
                }
                if(this.$store.state.currentPage && this.$store.state.currentPage < this.pageTotal){
                    this.$store.state.currentPage += 1;
                    this.getJobMore();
                } else {
                    this.loading_more = false;
                }
            }
        },

        getJobMore(){
            let _this = this;
            this.$store.state.job_id = '';
            this.$store.state.add_id = this.selectedCity;
            this.$store.state.dep_id = this.selectedDepart;
            this.$store.state.fun_id = this.selectedFun;
            this.$store.state.job = this.searchString;
            this.$store.dispatch('GetJob').then((result)=> { 
                if(result && result.status == "success" && _this.dataTotal > _this.jobCollection.length ){
                    _this.jobCollection = _.union(_this.jobCollection, result.list);
                    this.loading_more = false;
                }
                return false;
            }).catch(err=>{
                this.loading_more = false;
                _this.$message.error(err.message);
            }); 
        },

    }
}
</script>

<style lang="scss" scoped>

    .spearteLine {
        float: left;
        width: 1px;
        line-height: 25px;
        font-size: 22px;
        color: #e8ebf0;
    }

    .condtion_con {
        margin-top: 10px;
    }

    .colorNoCondition {
        color: #94a1b2;
    }

    .colorConditionSelected {
        color: #4a82c6;
    }

    .underline_con{
        width: 100%;
        height: 3px;
    }

    .underLine {
        width: 65%;
        height: 3px;
        background-color: #75a8e5;
        margin: 0 auto;
    }

    select {
        position: absolute;
        width: 100%;
        height: 100%;
        line-height: 40px;
    }

    .condition_box {
        text-align: center;
        overflow: hidden;
        background: #fff;
        margin-top: 5px;
        margin-bottom: 3px;

        .item {
            overflow: hidden;
            border-right: solid 1px #c9c9c9;
            line-height: 140%;
            font-size: 15px;
            margin: 5px -1px 2px 0;
        }

        .txt {
            display: inline-block;
            vertical-align: middle;
            font-size: 15px;
        }
    }

    .d-box {
        display: -webkit-box;
        display: -moz-box;
        display: box;
    }

    ul, li, ol {
        list-style: none outside none;
    }

    .select-box {
        position: relative;
        select {
            position: absolute;
            width: 100%;
            height: 100%;
            line-height: 40px;
            top: 0;
            left: 0;
            opacity: 0;
        }

    }

    .flex1 {
        -moz-box-flex: 1.0;
        -webkit-box-flex: 1.0;
        box-flex: 1.0;
        display: block;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -o-box-sizing: border-box;
        -ms-box-sizing: border-box;
        box-sizing: content-box;

    }

    .detail {
        position: relative;
    }

    .detail_top {
        img {
            width: 100%;
        }
    }

    .detail_btm {
        position: absolute;
        top: 5px;
        width: 100%;
    }

    .delail_con {
        width: 85%;
        margin: 0 auto;
        cursor: pointer;
    }

    .job_block {
        margin-top: 15px;
        margin-bottom: 15px;
        padding-bottom: 5px;
        border-bottom: 1px solid #e8ebf0;
    }

    .job_btm {
        margin-top: 5px;
    }

    .job_style{
        font-size: 16px;
        font-weight: bold;
        float: left;
    }

    .pub_time {
        font-size: 12px;
        color: #959595;
        float: right;
    }

    .add_icon {
        float: left;
        width: 10px;
        img {
            width: 100%;
        }
    }

    .add {
        float: left;
        font-size: 13px;
        margin-left: 5px;
        color: #686868;
        line-height: 22px;
    }

    .dep {
        float: left;
        font-size: 13px;
        margin-left: 15px;
        color: #686868;
        line-height: 22px;
    }

    .icon_search{
        position: absolute;
        top: 9px;
        right:2px;
        width: 30px;
        height: 30px;
        z-index: 999;
        img {
            width: 100%;
        }
    }

    .no_jd {
        font-size: 16px;
        text-align: center;
        color: #686868;
        padding-top: 20px;
    }

    .loading{
        height: 40px;
        padding-top: 10px;
        img {
            width: 25px;
            height: 25px;
        }
    }

    .select_con {
        // height: 7px;
    }

</style>

<style lang="scss">
    .search{ 
        position: relative;
        width: 88%;
        margin: 0 auto;
        padding-top: 10px;
        .el-input__inner{
            border-radius: 20px !important;
            font-family: 'iconfont';
            text-align: center;
        }
    }

</style>


