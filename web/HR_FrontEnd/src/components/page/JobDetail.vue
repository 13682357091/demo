<template>
    <div id="detail">
        <div class="detail_con">
            <div class="detail_1">
                <div class="bule_block"></div>
                <div class="detail_top">
                    <div class="job_title">{{jobDetail.job}}</div>
                    <div class="job_add">{{jobDetail.address}}</div>
                    <div class="job_add">{{jobDetail.dep}}</div>
                </div>
                <div class="job_pubdate">
                    {{jobDetail.changed}}
                </div>
                <div class="clear"></div>
            </div>
            <div class="sperate_line"></div>
            <div class="des_style" v-html="jobDetail.job_des">
            </div>
        </div>
        <div class="mail">
            <div class="float_left font_mail_title">申请邮箱</div>
            <div class="float_left mail_con">{{jobDetail.mail}}</div>
            <div class="float_left">
                <button class="copybtn" v-clipboard:copy="jobDetail.mail" v-clipboard:success="onCopy" v-clipboard:error="onError">复制</button>
            </div>
            <div class="clear"></div>
        </div>
        <div class="company">
            <div class="pro_title">公司介绍</div>
            <div class="pro_con" v-html="profile"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            job_id: 0,
            jobDetail: {},
            loading: false,
            profile: "",
        }
    },
    mounted(){
        this.job_id = this.GLOBAL.GetQueryString('job_id');
        this.getJobList();
        this.getCompanyIntro();
    },
    methods:{
        getJobList(){
            let _this = this;
            this.loading = true;
            this.$store.state.job_id = this.job_id;
            this.$store.dispatch('GetJob').then((result)=> { 
                this.loading = false;
                if(result && result.status == "success"){
                    this.jobDetail = result.info;
                }
                return false;
            }).catch(err=>{
                this.loading = false;
                this.$message.error(err.message);
            }); 
        },

        getCompanyIntro(){
            this.loading = true;
            this.$store.dispatch('GetCompanyIntro').then((result)=> { 
                this.loading = false;
                if(result && result.status == "success"){
                    this.profile = result.info;
                } else {

                }
                return false;
            }).catch(err=>{
                this.loading = false;
                this.$message.error(err.message);
            }); 
        },
        onCopy() {
            this.$message({
                type: 'success',
                message: '复制成功!'
            });
        },
        onError() {
            this.$message.error('复制失败。');
        }

    }
}
</script>

<style lang="scss" scoped>
    #detail{
        width: 94%;
        margin: 0 auto;
        padding-top: 20px;
    }

    .detail_con{
        box-shadow: 0 0 15px #f3f6f9;
        border-radius: 8px;
        padding:15px 10px;
    }

    .bule_block{
        width: 6px;
        height: 57px;
        background-color: #75a8e5;
        float:left;
    }

    .detail_top {
        float: left;
        text-align: left;
        margin-left: 10px;
        margin-top: -3px;
    }

    .job_title {
        font-size: 16px;
        font-weight: bold;
    }

    .job_add {
        font-size: 12px;
        color: #686868;
        margin-top: 5px;
    }

    .job_pubdate {
        font-size: 12px;
        color: #686868;
        margin-top: -3px;
        float: right;
    }

    .detail_1 {
        margin-bottom: 10px;
    }

    .sperate_line {
        width:92%;
        margin: 0 auto;
        height: 1px;
        background-color: #f3f4f7;
    }

    .des_style{
        padding: 10px 30px;
        text-align: left;
        font-size: 14px;
    }

    .mail {
        margin: 15px 10px;
    }

    .float_left{
        float: left;
    }
    
    .font_mail_title {
        font-size: 14px;
        margin-top:3px;
    }

    .mail_con {
        font-size: 14px;
        text-align: center;
        width: 50%;
        margin:3px 10px;
        border-bottom: 1px solid #f3f4f7;
    }

    .copybtn {
        font-size: 14px;
        width: 80px;
        height: 23px;
        line-height: 23px;
        border: none;
        border-radius: 15px;
        background-color: #3e4047;
        color: #ffffff;
        cursor: pointer;
    
    }

    .company{
        margin-top: 20px;
    }

    .pro_title {
        width: 70px;
        font-size: 16px;
        font-weight: bold;
        border-bottom: 3px solid #75a8e5;
        margin: 0 auto;
    }

    .pro_con {
        margin-top: 20px;
        padding: 20px 10px;
        background-color: #f3f5f9;
        font-size: 14px;
        text-align: left;
    }
</style>


