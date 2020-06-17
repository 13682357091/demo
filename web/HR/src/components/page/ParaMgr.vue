<template>
    <div>
        <div class="title">
            参数管理
        </div>
        <div class="content_container">

            <div class="div_label">类型</div>
            <el-select class="select_style select_width_200" v-model="selectedType" placeholder="请选择" size="medium">
                <el-option :key="defaultValue" label="全部" :value="defaultValue"></el-option>
                <el-option
                    v-for="(index, item)  in typeCollection"
                    :key="index"
                    :label="typeCollection[item]"
                    :value="item">
                </el-option>
            </el-select>

            <div class="div_label">状态</div>
            <el-select class="select_style" v-model="selectedStatus" placeholder="请选择" size="medium">
                <el-option :key="defaultStatusValue" label="全部" :value="defaultStatusValue"></el-option>
                <el-option
                    v-for="(index, item) in statusCollection"
                    :key="index"
                    :label="statusCollection[item]"
                    :value="item">
                </el-option>
            </el-select>

            <el-input size="medium" placeholder="输入值内容搜索" class="input_search" v-model="searchString"  @keyup.enter.native="getParaList()"></el-input>

            <el-button type="primary" size="medium" @click="currentPage = 1;getParaList()">搜索</el-button>
            <el-button size="medium" @click="resetSearch()">重置</el-button>
            <el-button size="medium" type="primary" class="float_right"  @click="create('ruleForm')">新增</el-button>
            <el-table border class="table_margin" :height="GLOBAL.globalTableHeight" header-cell-class-name="table_headercell" cell-class-name="table_cell" :data="paraCollection">
                <el-table-column label="类型" prop="type_value">

                </el-table-column>
                <el-table-column label="值" prop="param_value">
                
                </el-table-column>

                <el-table-column label="状态" width="130">
                    <template slot-scope="scope">
                        <div :class="scope.row.usable_num==1?'color_green':'color_red'">{{scope.row.usable}}</div>
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
                :total="totalData"
                class="float_right">
            </el-pagination>
            <div class="clear"></div>
        </div>

        <el-dialog :title="dialogMode" width="400px" :visible.sync="dialogFormVisible" 
        :close-on-click-modal="closeOnClickModalOrEsc" :close-on-press-escape="closeOnClickModalOrEsc" @closed="resetForm('ruleForm')">
            <el-form v-loading="dialogLoading" :model="ruleForm" label-width="60px" ref="ruleForm">

                <el-form-item label="类型" prop="type_id"
                :rules="[
                    { required: true, message: '请选择类型', trigger: 'change' },  
                ]">
                    <el-select class="select_style" v-model="ruleForm.type_id" placeholder="请选择" size="medium">
                        <el-option
                            v-for="(index, item) in typeCollection"
                            :key="index"
                            :label=" typeCollection[item]"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="值" prop="param_value"
                :rules="[
                    { required: true, message: '对应类型的值不可为空', trigger: 'blur' },  
                    { max: 30, message: '最大30字符', trigger: 'blur' }      
                ]">
                    <el-input v-model="ruleForm.param_value" placeholder="请输入对应类型的值"></el-input>
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
export default {
data(){
    return{
        currentPage: 1,
        pageSize: 50,
        totalData: 0,
        defaultValue: 0,
        defaultStatusValue: -1,
        dTypeValue: 1,
        
        typeCollection: [],
        selectedType: 0,

        statusCollection: {
            0:'禁用',
            1:'启用'
        },
        selectedStatus: -1,

        searchString: '',

        paraCollection: [],
        loading: true,

        ruleForm: {
            param_id: 0,
            param_value: '',
            type_id: '',
            usable_num: -1,
        },

        dialogFormVisible: false,
        closeOnClickModalOrEsc: false,
        dialogLoading: false,
        dialogMode: '新建参数',
        dModeEnum: {
            create: '新建参数',
            edit: '编辑参数',
        },
        
    }
    
},
mounted(){
    this.getParaList();
},
methods: {
    getParaList(){
        this.$store.state.type_id = this.selectedType;
        if( this.selectedStatus > -1) {
            this.$store.state.usable = this.selectedStatus;
        }else {
            this.$store.state.usable = -1;
        }
        this.$store.state.val = this.searchString;
        this.$store.state.currentPage = this.currentPage;
        this.$store.state.pageSize = this.pageSize;

        this.$store.dispatch('GetParaList').then((result)=> { 
            this.loading = false;
            if(result && result.status == "success"){
                // console.log(result);
                this.typeCollection = result.typeList;
                this.statusCollection = {
                    0: '禁用',
                    1: '启用'
                };
                this.paraCollection = result.list;
                this.totalData = parseInt(result.total);
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
        this.getParaList();
    },
    
    handleCurrentChange(val) {
        this.currentPage = val;
        this.getParaList();
    },
    
    handleEdit(index, row) {
        this.$router.push({path:'/ContentEdit',query:{from:'contentList', article_id:row.article_id}});
    },

    resetSearch() {
        this.selectedType = 0;//选中的手机状态value值
        this.selectedStatus = -1;
        this.searchString = '';
        this.getParaList();
    },

    handleStatus(index, row) {
        this.$store.state.param_id = row.param_id;
        this.$store.state.usable_num = row.usable_num? 0: 1;
        this.Loading = true;
        this.$store.dispatch('ModifyParamStatus').then((result)=> { 
            this.Loading = false;
            if(result.status == "success") {
                this.successMsg( row.usable_num?'禁用成功！':'启用成功！');
                this.getParaList();
            } else {
                this.$message.error(result.message);
            }
            return false;
        }).catch(err=>{
            this.Loading = false;
            this.$message.error(err.message);
        }); 
        
    },

    create(formName){
        this.initRuleForm();
        if(this.$refs[formName]){
            this.$refs[formName].clearValidate();
        }
        this.dialogFormVisible = true;
    },

    initRuleForm() {
        this.ruleForm = {
            param_id: 0,
            param_value: '',
            type_id: '',
            usable_num: -1,
        };
    },
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
                this.$store.state.param_id = this.ruleForm.param_id;
                this.$store.state.type_id = this.ruleForm.type_id;
                // this.$store.state.usable_num = this.ruleForm.usable_num>-1?this.ruleForm.usable_num:0;
                this.$store.state.val = this.ruleForm.param_value;
                if(this.dialogMode == this.dModeEnum.create) {
                    this.dialogLoading = true;
                    this.$store.dispatch('AddParam').then((result)=> { 
                        this.dialogLoading = false;
                        if(result.status == "success") {
                            this.successMsg('添加成功！');
                            this.getParaList();
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
                    this.$store.dispatch('UpdateParam').then((result)=> { 
                        this.dialogLoading = false;
                        if(result.status == "success") {
                            this.successMsg('修改成功！');
                            this.getParaList();
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
        this.ruleForm.param_id = row.param_id;
        this.ruleForm.param_value = row.param_value;
        this.ruleForm.type_id = row.type_id;
        this.ruleForm.usable_num = row.usable_num;
        this.dialogMode = this.dModeEnum.edit;
        this.dialogFormVisible = true;
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

.select_width_200 {
    width: 200px !important;
}

.select_style {
    width: 130px;
    float: left;
    margin-right: 20px;
}

div{
    font-size: 14px;
}

</style>


