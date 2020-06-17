<template>
  <div>
    <div ref="editor" style="text-align:left;"></div>
  </div>
</template>
 
<script>
import E from "wangeditor";
let _ = require('lodash');
// import GLOBAL from './global';
export default {
  name: "editor",
  data() {
    return {
      editor:"",
    };
  },
  props: {
    content: { required: true },
    // loading: false,
    editorChange:  { required: true },
    // editorId: { required: true },
  },
  watch: {
    content: function(val) {
      this.editor.txt.html(val);
    },
    editorChange: function(val) {
      this.editor.change();
    }
  },
  mounted(){
    let _this = this;
    this.editor = new E(this.$refs.editor);
    
    this.editor.customConfig.onchange = (html) => {
      this.$emit('catchData',html);
    };

  //开启debug模式
    // this.editor.customConfig.debug = true;
    // 关闭粘贴内容中的样式
    this.editor.customConfig.pasteFilterStyle = false;
    // 忽略粘贴内容中的图片
    this.editor.customConfig.pasteIgnoreImg = true;
    // 将图片大小限制为 3M
    this.editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;
    this.editor.customConfig.uploadImgMaxLength = 1;
    this.editor.customConfig.uploadImgTimeout = 50000;
   
    this.editor.customConfig.customUploadImg = function (files, insert) {
      // console.log(files);
      if(files.length>1) {
        _this.$message.error('一次只能上传一张图片');
        return;
      } else {
        let file = files[0];
        const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif');
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
            _this.$message.error('上传图片只能是 JPG/PNG/GIF 格式!');
            return;
        }
        if (!isLt2M) {
            _this.$message.error('上传图片大小不能超过 2MB!');
            return;
        }
        console.log("开始上传图片...");
        // _this.loading = true;
        _this.$emit('loading',true);
        _this.GLOBAL.getBase64(file).then((res) => {
          let img = _.split(res,',')[1];
          _this.$store.state.image = img;
          _this.$store.dispatch('ImageUpload').then((result)=> { 
              // _this.loading = false;
              _this.$emit('loading',false);
              console.log("图片上传成功...");
              if(result){
                  insert(result.src);
              }
              return false;
          }).catch(err=>{
            _this.$emit('loading',false);
            _this.$message.error(err.message);
          }); 
        });
      }
    
    }
    this.editor.create();
    //解决dialog窗口初始化时赋值不正确的问题。
    this.editor.txt.html(this.content);
  }
};
</script>