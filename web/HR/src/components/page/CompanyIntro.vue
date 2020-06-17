<template>
    <div id="contengedit">
        <div class="title">
            公司介绍
        </div>
        <div class="content_container">
            <div class="editor_container">
                <WangEditor @loading="loadingChange" @catchData="catchData" :editorChange="editorChange" :content="editorDataInit"></WangEditor>
                
            </div>
            <div class="footer">
                <el-button type="primary" class="saveBtn" @click="submit()">保存</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import UploadAdapter from './../../store/uploadAdapter.js'
import WangEditor from "@/components/common/WangEditor";

export default {
    data(){
        return{
            profile_id: 0,
            // profile: '',
            editor: undefined,
            editorDataInit: '',
            editorData: '',
            contentDetail: '',
            loading: false,
            editorChange: 0,
        }
    },
    components:{
        WangEditor
    },
    created(){
        setInterval(this.timer, 600000);
    },
    mounted(){
        this.getCompanyIntro();
    },
    distroyed: function () {
    　　clearInterval(this.timer)
    },
    watch:{
        'editorData' : 'contentDetailChange',
    },
    methods: {
        getCompanyIntro(){
            // this.$store.state.  = this.article_id;
            this.loading = true;
            this.$store.dispatch('GetCompanyIntro').then((result)=> { 
                this.loading = false;
                if(result && result.status == "success"){
                    this.profile_id = result.data.profile_id? result.data.profile_id : 0;
                    this.editorDataInit = result.data.profile?result.data.profile:'';
                    this.editorData = this.editorDataInit;

                    //手动触发一次tab1的change事件
                    this.editorChange += 1;
                } else {

                }
                return false;
            }).catch(err=>{
                this.loading = false;
                this.$message.error(err.message);
            }); 
        },

        contentDetailChange(){
            if(this.editorData == '<p><br></p>') {
                this.editorData = '';
            }
            
            this.contentDetail = this.editorData;
        },

        submit() {
            this.$store.state.profile_id = this.profile_id;
            this.$store.state.profile = this.editorData;
            if(this.profile_id) {
                this.loading = true;
                this.$store.dispatch('UpdateCompanyIntro').then((result)=> { 
                    this.loading = false;
                    if(result.status == "error") {
                            this.$message.error(result.message);
                    } else {
                        this.successMsg();
                    }
                    return false;
                }).catch(err=>{
                    this.loading = false;
                    this.$message.error(err.message);
                }); 
            } else {
                this.loading = true;
                this.$store.dispatch('AddCompanyIntro').then((result)=> { 
                    this.loading = false;
                    if(result.status == "error") {
                            this.$message.error(result.message);
                    } else {
                        this.successMsg();
                    }
                    return false;
                }).catch(err=>{
                    this.loading = false;
                    this.$message.error(err.message);
                }); 
            }
        },

        successMsg(msg) {
            this.$message({
                message: msg?msg:'保存成功！',
                type: 'success'
            });
        },

        initRuleForm() {
            this.ruleForm = {
                name: '',
                contentDetail: ''
            }
        },

        handleClick(tab, event) {
            if(tab.name == 'first') {
                this.editor1Change += 1;
            } else if (tab.name == 'second'){
                this.editor2Change += 1;
            } else if (tab.name == 'third'){
                this.editor3Change += 1;
            }
        },

        catchData(value){
            this.editorData=value      //在这里接受子组件传过来的参数，赋值给data里的参数
        },
        loadingChange(val) {
            this.loading= val;
        },
        timer: function () {
            this.$store.state.profile_id = this.profile_id;
            this.$store.state.profile = this.editorData;
            if(this.profile_id) {
                this.loading = true;
                this.$store.dispatch('UpdateCompanyIntro').then((result)=> { 
                    this.loading = false;
                    if(result.status == "error") {
                            this.$message.error(result.message);
                    } else {
                        this.successMsg();
                    }
                    return false;
                }).catch(err=>{
                    this.loading = false;
                    this.$message.error(err.message);
                }); 
            } else {
                this.loading = true;
                this.$store.dispatch('AddCompanyIntro').then((result)=> { 
                    this.loading = false;
                    if(result.status == "error") {
                            this.$message.error(result.message);
                    } else {
                        this.successMsg();
                    }
                    return false;
                }).catch(err=>{
                    this.loading = false;
                    this.$message.error(err.message);
                }); 
            }
        }
    }
}
</script>


<style lang="scss" scoped>

.title {
    width: 100%;
    height: 48px;
    background-color: #f2f2f2;
    line-height: 48px;
    text-align: left;
    padding-left: 20px;
    box-sizing: border-box;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    
    span {
        font-weight: bold;
    }
}

.content_container {
    padding-left: 40px;
    padding-right: 40px;
    box-sizing: border-box;
    width: 100%;
    margin-top: 20px;
    text-align: left;
}

.content_top {
    width: 100%;
    height: 90px;
    background-color:rgba(242, 242, 242, 1);
    padding: 15px 20px;
    box-sizing: border-box;
    span {
        font-weight: bold;
    }
}

.manual_name {
    font-weight: bold;
    float: left;
    height: 32px;
    line-height: 32px;
    margin-right: 25px;
    font-size: 14px;
}

.tag_style {
    font-size: 14px;
}

.margintop_10px {
    margin-top: 10px;
}

.input_name {
    width: 200px;
}

.content_mid {
    margin-top: 20px;
    margin-bottom: 40px;
}

.noDisplay {
    display: none;
}

.status{
    float: left;
    width: 70px;
}

.footer {
    text-align: center;
    min-width: 600px;
    max-width: 1024px;
    margin-bottom: 80px;
    margin-top: 20px;
}

.editor_container {
    border: 1px solid #efefef;
    min-width: 600px;
    max-width: 1024px;
    margin-bottom: 10px;
}

.ck-content {
    height: 550px;
}

.saveBtn {
    width: 150px !important;
}

</style>



