<template>
    <div>
        <div class="title">
            轮播图管理
        </div>
        <div class="content_container">

            <!-- <el-input size="medium" placeholder="请输入名称搜索" class="input_search" v-model="searchString"></el-input>
            <el-button size="medium" type="primary" @click="currentPage = 1;getProductModel()">查询</el-button>
            <el-button size="medium" @click="searchString='';getProductModel()">重置</el-button> -->
            <el-button size="medium" type="primary" class="float_right margin-bottom"  @click="dialogFormVisible = true">+新建</el-button>
            <el-table v-loading="loading" border class="table_margin" :height="GLOBAL.globalTableHeight" header-cell-class-name="table_headercell" cell-class-name="table_cell" :data="imageCollection">
                <el-table-column label="缩略图" prop="src">
                    <template slot-scope="scope">
                        <img class="carousel_image" :src="scope.row.src" />
                    </template>
                </el-table-column>
                <el-table-column label="序号" prop="order_num" width="130">
                
                </el-table-column>
                <el-table-column label="操作" width="220">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[50, 100, 200]"
                :page-size="50"
                layout="total, sizes, prev, pager, next, jumper"
                :total="dataTotal"
                class="float_right">
            </el-pagination>
            <div class="clear"></div>
        </div>


        <el-dialog :title="dialogEditMode?'修改轮播图':'添加轮播图'" width="500px" :visible.sync="dialogFormVisible" 
        :close-on-click-modal="closeOnClickModalOrEsc" :close-on-press-escape="closeOnClickModalOrEsc" @closed="resetForm('ruleForm')">
            <el-form :model="ruleForm" label-width="80px" ref="ruleForm" v-loading="dialogLoading">
                <el-form-item v-loading="imageUploading" :class="ruleForm.type==0?'item_margin':'item_margin display_none'" label="缩略图" prop="img_id"
                :rules="[
                    { required: true, message: '请上传图片', trigger: 'change' },  
                ]">
                    <el-upload
                        class="avatar-uploader"
                        action=""
                        :auto-upload ="false"
                        :show-file-list ="false"
                        :on-change="handleImageChange"
                        :file-list="fileList"
                        :on-success="handleAvatarSuccess"
                        :drag="true"
                        list-type="picture">
                        <img v-show="ruleForm.src" :src="ruleForm.src" class="avatar">
                        <el-input style="display: none;" v-model="ruleForm.img_id" type="text"></el-input>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">规格：750px * 250px，只能上传jpg/png文件，且不超过1MB。</div>
                    </el-upload>
                </el-form-item>
                 <el-form-item label="序号" prop="order_num"
                :rules="[
                    { required: true, message: '请输入序号', trigger: 'change' },  
                ]">
                    <el-input v-model="ruleForm.order_num" placeholder="输入序号" type="text" ></el-input>
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
        dataTotal: 0,
        searchString: '',
        dialogFormVisible: false,
        closeOnClickModalOrEsc: false,
        ruleForm: {
            carousel_id: 0,
            order_num: '',
            img_id: '',
            src: '',
        },
        dialogEditMode: false,
        imageCollection: [],
        loading: true,
        dialogLoading: false,
        imageUploading: false,
        
        fileList: [],
        
    }
    
},
mounted(){
    this.getCarouselImage();
},
methods: {
    getCarouselImage(){
        let _this = this;
        // this.$store.state.name = this.searchString;
        this.$store.state.currentPage = this.currentPage;
        this.$store.state.pageSize = this.pageSize;
        this.$store.dispatch('GetCarouselImage').then((result)=> { 
            this.loading = false;
            console.log(result);
            if(result && result.status == "success"){
                this.imageCollection = result.list;
                this.dataTotal = parseInt(result.total);
            }
            return false;
        }).catch(err=>{
            this.loading = false;
            this.$message.error(err.message);
        }); 
    },

    //图片上传。
        handleImageChange(file, filesList) {
            const isJPG = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/png');
            const isLt2M = file.raw.size / 1024 / 1024 < 1;
            if (!isJPG) {
                this.$message.error('上传图片只能是 JPG/PNG 格式!');
                return;
            }
            if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 1MB!');
                return;
            }

            console.log("开始上传图片...");
            this.GLOBAL.getBase64(file.raw).then(res => {
                let img = _.split(res,',')[1];
                this.$store.state.image = img;
                this.imageUploading = true;
                this.$store.dispatch('ImageUpload').then((result)=> { 
                    this.imageUploading = false;
                    console.log("图片上传成功...");
                    if(result){
                        this.ruleForm.src = result.src;
                        this.ruleForm.img_id = result.target_id;
                    }
                    return false;
                }).catch(err=>{
                    this.imageUploading = false;
                    this.$message.error(err.message);
                }); 
            });

        },

        handleAvatarSuccess(res, file) {
            this.ruleForm.icon = file.url;
        },

    handleSizeChange(val) {
        this.pageSize = val;
        this.getProductModel();
    },
    
    handleCurrentChange(val) {
        this.currentPage = val;
        this.getProductModel();
    },

    successMsg() {
        this.$message({
            message: '保存成功！',
            type: 'success'
        });
    },
    cancelMsg() {
        this.$message('操作取消。');
        this.initDialog();
    },
    initDialog(){
        this.dialogFormVisible = false;
        this.dialogEditMode = false;
    },
    errorMsg() {
        this.$message.error('保存失败，请重新录入。');
    },

    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this;
            this.$store.state.carousel_id = this.ruleForm.carousel_id;
            this.$store.state.order_num = this.ruleForm.order_num;
            console.log(this.ruleForm.img_id);
            this.$store.state.img_id = this.ruleForm.img_id;
            
            this.dialogLoading = true;
            if(!this.dialogEditMode){
                this.$store.dispatch('AddCarouselImage').then((result)=> {
                    this.dialogLoading = false; 
                    if(result.status == "error") {
                        this.$message.error(result.message);
                    } else {
                        this.getCarouselImage();
                        this.successMsg(); 
                        this.initDialog();
                    }
                    
                    return false;
                }).catch(err=>{
                    this.dialogLoading = false;
                    cosnole.log(111);
                    this.$message.error(err.message);
                }); 
            }else {
                this.$store.dispatch('SaveCarouselImage').then((result)=> { 
                    this.dialogLoading = false;
                    if(result.status == "error") {
                        this.$message.error(result.message);
                    } else {
                        this.getCarouselImage();
                        this.successMsg();
                        this.initDialog();
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
        this.$refs[formName].clearValidate();
        this.initRuleForm();
        this.initDialog();
        
    },

    handleEdit(index, row) {
        // this.ruleForm = this.GLOBAL.deepCopy(row);
        this.ruleForm.carousel_id = row.carousel_id;
        this.ruleForm.order_num = row.order_num;
        this.ruleForm.img_id = row.image_target_id;
        this.ruleForm.src = row.src;
        this.dialogEditMode = true;
        this.dialogFormVisible = true;
    },
    handleDelete(index, row) {
        this.$confirm('操作不可恢复，确认删除该内容吗？?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            this.$store.state.carousel_id = row.carousel_id;
            this.$store.dispatch('DelCarouselImage').then((result)=> { 
                if(result.status == 'success'){
                    this.getCarouselImage();
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                } else {
                    this.$message.error(result.message);
                }
                return false;
            }).catch(err=>{
                this.$message.error(err.message);
            }); 
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消删除。'
            });
            return false;          
        });
    },
    initRuleForm() {
        this.ruleForm = {
            carousel_id: 0,
            order_num: '',
            img_id: '',
            src: ''
        };
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

.float_right {
    float: right;
}

.margin-bottom {
    margin-bottom: 10px;
}

.table_margin {
    margin-top: 10px;
    margin-bottom: 10px;
}

.carousel_image{
    width: 375px;
    height: 125px;
}

</style>




