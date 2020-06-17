<template>
    <div>
        <div class="title">
            职位管理
        </div>
        <div class="content_container">
            <div class="condition_con">
                <div class="div_label">工作地点</div>
                
                <el-select class="select_style" v-model="selectedLocation" placeholder="请选择" size="medium">
                    <el-option :key="defaultValue" label="全部" :value="defaultValue"></el-option>
                    <el-option
                        v-for="(item, index) in locationCollection"
                        :key="index + 1"
                        :label="item.param_value"
                        :value="item.param_id">
                    </el-option>
                </el-select>

                <div class="div_label">部门</div>
                <el-select class="select_style" v-model="selecteddepart" placeholder="请选择" size="medium">
                    <el-option :key="defaultValue" label="全部" :value="defaultValue"></el-option>
                    <el-option
                        v-for="(item, index) in departCollection"
                        :key="index + 1"
                        :label="item.param_value"
                        :value="item.param_id">
                    </el-option>
                </el-select>

                <div class="div_label">职能</div>
                <el-select class="select_style" v-model="selectedFunc" placeholder="请选择" size="medium">
                    <el-option :key="defaultValue" label="全部" :value="defaultValue"></el-option>
                    <el-option
                        v-for="(item, index) in funcCollection"
                        :key="index + 1"
                        :label="item.param_value"
                        :value="item.param_id">
                    </el-option>
                </el-select>

                <div class="div_label">状态</div>
                <el-select class="select_style" v-model="selectedStatus" placeholder="请选择" size="medium">
                    <el-option :key="defaultStatusValue" label="全部" :value="defaultStatusValue"></el-option>
                    <el-option
                        v-for="(item, index) in statusCollection"
                        :key="index"
                        :label="statusCollection[index]"
                        :value="index">
                    </el-option>
                </el-select>
            </div>
            <div class="btn_container">
                <el-button type="primary" size="medium" @click="currentPage = 1;getJob()">搜索</el-button>
                <el-button size="medium" @click="resetSearch()">重置</el-button>
                <el-button size="medium" type="primary" class="float_right"  @click="create('ruleForm')">新增</el-button>
            </div>
            <el-table v-loading="loading" border class="table_margin" :height="GLOBAL.globalTableHeight" header-cell-class-name="table_headercell" cell-class-name="table_cell" :data="jobCollection">
                <el-table-column label="职位" prop="job" >

                </el-table-column>
                <el-table-column label="工作地点" width="130">
                    <template slot-scope="scope">
                        <div>{{getTextCrossId(locationCollection, scope.row.add)}}</div>
                    </template>
                </el-table-column>
                <el-table-column label="部门" width="200">
                    <template slot-scope="scope">
                        <div>{{getTextCrossId(departCollection, scope.row.dep)}}</div>
                    </template>
                </el-table-column>
                <el-table-column label="职能" width="200" prop="fun">
                    <template slot-scope="scope">
                        <div>{{getTextCrossId(funcCollection, scope.row.fun)}}</div>
                    </template>
                </el-table-column>
                <el-table-column label="发布日期" width="180" prop="changed">
                </el-table-column>
                <el-table-column label="状态" width="130">
                    <template slot-scope="scope">
                        <div :class="{'color_red':scope.row.usable_num==0,'color_green':scope.row.usable_num==1}">{{scope.row.usable}}</div>
                    </template>
                </el-table-column>
                
                <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                
                    <el-button
                    size="mini"
                    :type="scope.row.usable_num == 0?'success':'danger'"
                    :disabled="scope.row.has_dir"
                    @click="handleStatus(scope.$index, scope.row)">{{scope.row.usable_num == 0?'启用':'禁用'}}</el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[50, 100, 200]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="dataTotal"
                class="float_right">
            </el-pagination>
            <div class="clear"></div>
        </div>


        <el-dialog :title="dialogMode" width="880px" :visible.sync="dialogFormVisible" 
        :close-on-click-modal="closeOnClickModalOrEsc" :close-on-press-escape="closeOnClickModalOrEsc" @closed="resetForm('ruleForm')">
            <el-form v-loading="dialogLoading" :model="ruleForm" label-width="100px" ref="ruleForm">
                <el-form-item label="职位" prop="job"
                :rules="[
                    { required: true, message: '请输入职位名称', trigger: 'blur' },
                    { max: 30, message: '最大30字符', trigger: 'blur' }      
                ]">
                    <el-input v-model="ruleForm.job" placeholder="请输入职位名称"></el-input>
                </el-form-item>

                <el-form-item label="职能" prop="fun_id"
                :rules="[
                    { required: true, message: '请选择职能', trigger: 'change' },  
                ]">
                    <el-select class="select_style" v-model="ruleForm.fun_id" placeholder="请选择" size="medium">
                        <el-option
                            v-for="(item, index) in funcCollection"
                             :key="index"
                            :label="item.param_value"
                            :value="item.param_id">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="工作地点" prop="add_id"
                :rules="[
                    { required: true, message: '请选择工作地点', trigger: 'change' },  
                ]">
                    <el-select class="select_style" v-model="ruleForm.add_id" placeholder="请选择" size="medium">
                        <el-option
                            v-for="(item, index) in locationCollection"
                            :key="index"
                            :label="item.param_value"
                            :value="item.param_id">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="部门" prop="dep_id"
                :rules="[
                    { required: true, message: '请选择部门', trigger: 'change' },  
                ]">
                    <el-select class="select_style" v-model="ruleForm.dep_id" placeholder="请选择" size="medium">
                        <el-option
                            v-for="(item, index) in departCollection"
                            :key="index"
                            :label="item.param_value"
                            :value="item.param_id">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="职位内容">
                    <WangEditor @loading="loadingChange" @catchData="catchData" :editorChange.sync="editorChange" :content.sync="editorData"></WangEditor>
                </el-form-item>
                
                <el-form-item label="联系邮箱" prop="mail"
                :rules="[
                    { required: true, message: '请输入联系邮箱', trigger: 'blur' }     
                ]">
                    <el-input v-model="ruleForm.mail" placeholder="输入联系邮箱"></el-input>
                </el-form-item>

            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="cancelMsg()">取 消</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
            </div>
        </el-dialog>
        
    </div>
</template>
<script>
import WangEditor from "@/components/common/WangEditor";
import _ from 'lodash';
export default {
data(){
    return{
        currentPage: 1,
        pageSize: 50,
        dataTotal: 0,
        defaultValue: 0,
        defaultStatusValue: -1,
        
        locationCollection: {},
        selectedLocation: 0,//选中的工作地点value值

        departCollection: {},
        selecteddepart: 0,//选中的部门value值

        funcCollection: {},
        selectedFunc: 0,//选中的职能value值

        statusCollection: {
            0: '禁用',
            1: '启用'
        },
        selectedStatus: -1,//选中的状态value值

        dialogFormVisible: false,
        closeOnClickModalOrEsc: false,
        ruleForm: {
            job_id: 0,
            job: '',
            fun_id: '',
            add_id: '',
            dep_id: '',
            job_des: '',
            mail: '',
            usable_num: 0
        },
        dialogMode: '新建职位',
        dModeEnum: {
            create: '新建职位',
            edit: '编辑职位',
            // copy: '复制手册',
        },
        jobCollection: [],
        loading: true,
        dialogLoading: false,
        editorData: '',
        editorChange: 0,
        
    }
    
},
components:{
    WangEditor
},
mounted(){
    this.getJob();
},

methods: {
    getJob(){
        let _this = this;
        this.$store.state.add_id = this.selectedLocation;
        this.$store.state.dep_id = this.selecteddepart;
        this.$store.state.fun_id = this.selectedFunc;
        if( this.selectedStatus > -1) {
            this.$store.state.usable = this.selectedStatus;
        }else {
            this.$store.state.usable = -1;
        }
        this.$store.state.currentPage = this.currentPage;
        this.$store.state.pageSize = this.pageSize;
        this.$store.dispatch('GetJob').then((result)=> { 
            this.loading = false;
            // console.log(result);
            if(result && result.status == "success"){
                this.jobCollection = result.list;
                this.dataTotal = parseInt(result.total);
                this.locationCollection = result.addList;
                this.departCollection = result.depList;
                this.funcCollection = result.funList;
            } else {
                this.$message.error(result.message);
            }
            return false;
        }).catch(err=>{
            this.loading = false;
            this.$message.error(err.message);
        }); 
    },

    handleSizeChange(val) {
        this.pageSize = val;
        this.getJob();
    },
    
    handleCurrentChange(val) {
        this.currentPage = val;
        this.getJob();
    },

    successMsg(msg) {
        this.$message({
            message: msg? msg : '保存成功！',
            type: 'success'
        });
        this.initDialog();
    },
    cancelMsg() {
        this.$message('操作取消。');
        this.initDialog();
    },
    initDialog(){
        this.dialogFormVisible = false;
        this.dialogMode = this.dModeEnum.create;
    },
    errorMsg() {
        this.$message.error('保存失败，请重新录入。');
    },

    create(formName){
        this.initRuleForm();
        if(this.$refs[formName]){
            this.$refs[formName].clearValidate();
        }
        this.dialogFormVisible = true;
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                this.$store.state.job_id = this.ruleForm.job_id;
                this.$store.state.job = this.ruleForm.job;
                this.$store.state.fun_id = this.ruleForm.fun_id;
                this.$store.state.add_id = this.ruleForm.add_id;
                this.$store.state.dep_id = this.ruleForm.dep_id;
                this.$store.state.job_des = this.ruleForm.job_des;
                this.$store.state.mail = this.ruleForm.mail;
                this.$store.state.usable_num = this.ruleForm.usable_num;
                if(this.dialogMode == this.dModeEnum.create) {
                    this.dialogLoading = true;
                    this.$store.dispatch('AddJob').then((result)=> { 
                        this.dialogLoading = false;
                        if(result.status == "success") {
                            this.successMsg('添加成功！');
                            this.getJob();
                        } else {
                            this.$message.error(result.message);
                        }
                        return false;
                    }).catch(err=>{
                        this.dialogLoading = false;
                        this.$message.error(err.message);
                    }); 
                } else if (this.dialogMode == this.dModeEnum.edit) {
                    this.dialogLoading = true;
                    this.$store.dispatch('EditJob').then((result)=> { 
                        this.dialogLoading = false;
                        if(result.status == "success") {
                            this.successMsg('修改成功！');
                            this.getJob();
                        } else {
                            this.$message.error(result.message);
                        }
                        return false;
                    }).catch(err=>{
                        this.dialogLoading = false;
                        this.$message.error(err.message);
                    }); 
                } 
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    },
    resetForm(formName) {
        this.initRuleForm();
        this.$refs[formName].clearValidate();
        this.initDialog();
    },
    
    handleEdit(index, row) {
        this.ruleForm.job_id = row.job_id;
        this.ruleForm.job = row.job;
        this.ruleForm.fun_id = row.fun_id;
        this.ruleForm.add_id = row.add_id;
        this.ruleForm.dep_id = row.dep_id;
        this.ruleForm.usable_num = row.usable_num;
        this.ruleForm.mail = row.mail;
        this.dialogMode = this.dModeEnum.edit;
        this.editorData = row.job_des;  //初始化wangEditor数据
        this.ruleForm.job_des = row.job_des;
        
        this.editorChange = this.editorChange + 1;

        this.dialogFormVisible = true;
    },

    // loadDialogData(row){


        
    // },

    handleStatus(index, row) {
        this.$store.state.job_id = row.job_id;
        this.$store.state.usable_num = row.usable_num? 0: 1;
        this.Loading = true;
        this.$store.dispatch('ModifyStatus').then((result)=> { 
            this.Loading = false;
            if(result.status == "success") {
                this.successMsg( row.usable_num?'禁用成功！':'启用成功！');
                this.getJob();
            } else {
                this.$message.error(result.message);
            }
            return false;
        }).catch(err=>{
            this.Loading = false;
            this.$message.error(err.message);
        }); 
        
    },

    initRuleForm() {
        this.ruleForm = {
            job_id: 0,
            job: '',
            fun_id: '',
            add_id: '',
            dep_id: '',
            job_des: '',
            mail: '',
            usable_num: 0,
        };
        this.editorData = "";
    },

    resetSearch() {
        this.selectedLocation = 0;
        this.selecteddepart = 0;
        this.selectedFunc = 0;
        this.selectedStatus = -1;
        this.getJob();
    },

    
    catchData(value){
        this.ruleForm.job_des=value;      //在这里接受子组件传过来的参数，赋值给data里的参数
    },

    loadingChange(val) {
        this.dialogLoading= val;
    },

    getTextCrossId(collection, id) {
        if(_.filter(collection, {'param_id': id})) {
            return _.filter(collection, {'param_id': id})[0].param_value;
        } else {
            return '';
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
}

.content_container {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
    margin-top: 10px;
    text-align: left;
}

.div_label {
    float: left;
    height: 36px;
    line-height: 36px;
    margin-right: 10px;
}

.input_search {
    width: 200px !important;
    height: 30px !important;
}

.float_right {
    float: right;
}

.table_margin {
    margin-top: 10px;
    margin-bottom: 10px;
}

.eldd_style {
    width: 150px;
}

.select_style {
    width: 130px;
    float: left;
    margin-right: 20px;
}

div{
    font-size: 14px;
}

.condition_con {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
}

.btn_container {
    margin-top: 10px;
    margin-bottom: 10px;
}

</style>


