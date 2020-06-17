<template>
  <div id="smartsight">
    <div class="header_margin img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/smartsight/div_01.jpg">
            </div>
        </div>
    </div>

        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/smartsight/div_02.jpg">
            </div>
            <div class="title_words">
                <div class="word_02">目标检测
                    <div class="word_03">在复杂的场景中，<br/>快速、精确的定位人脸、人体等目标位置。</div>
                </div>
                
            </div>

        </div>
        <div class="word_container backcolor_gray space_padding">
            <div class="word backcolor_gray">
                <div class="word_02">AI技术衍生的高端触控影像设备</div>
                <div class="word_03">未来的多场景应用设备，<br/>例如：计算机视觉应用、球形智能设备</div>
            </div>
        </div>
         <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/smartsight/div_03.jpg">
            </div>
        </div>
        <div class="word_container backcolor_gray space_padding">
            <div class="word backcolor_gray">
                <div class="word_02">属性提取</div>
                <div class="word_03">精确识别人脸、人体属性，<br/>如性别、年龄、饰品、胡须、<br/>服装颜色和样式等。</div>
            </div>
        </div>
         <div class="img_01_content padding_btm20 backcolor_gray">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/smartsight/div_04.jpg">
            </div>
        </div>
        <div class="word_container backcolor_black space_padding">
            <div class="word backcolor_black">
                <div class="word_02">身份识别</div>
                <div class="word_03 word_white">通过人脸、人体特征，<br/>可在千万级库的场景下，准确识别人员身份，<br/>并支持1比1认证和1比N识别的多种场景。</div>
            </div>
        </div>
         <div class="img_01_content padding_btm20 backcolor_black">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/smartsight/div_05.jpg">
            </div>
        </div>
        <div class="space_div"></div>
        <div class="word">
            <div class="word_02">轨迹分析</div>
            <div class="word_03 padding_btm20">结合GIS地理信息系统，<br/>可将图像内人员位置映射到物理空间，<br/>并统计分析行动轨迹。</div>
        </div>
        <div class="img_01_content padding_btm20">
            <div class="img_container">
                <img class="img_style_sepc" src="./../../assets/images/smartsight/A.gif">
            </div>
        </div>
        <div class="word">
            <div class="word_02">边缘计算</div>
            <div class="word_03 padding_btm20">基于高效模型压缩和加速技术，<br/>可将复杂计算前置于设备端，<br/>提升实时性，<br/>节约网络通讯、后端计算成本。</div>
        </div>
        <div class="img_01_content padding_btm20">
            <div class="img_container">
                <img class="img_style_sepc" src="./../../assets/images/smartsight/B.png">
            </div>
        </div>
       
     <div class="puppy_logo">
         <img src="./../../assets/images/logo.png">
     </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            currDisplayIndex: 0,
        }
    },

    methods: {
        displayIndexChange(index) {
            this.currDisplayIndex = index;
        }
    }
    
}
</script>

<style lang="scss" scoped>
    $headerHeight: 46px;
    $headerColor: #f2f2f2;
    #aboutus {
        max-width: 750px;
        margin: 0 auto;
    }
    .header_margin {
        margin-top: $headerHeight;
    }

    .img_01 {
      max-width: 750px;
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

    .img_01_content {
        width: 100%;
        position: relative;
    }

    .backcolor_gray {
        background-color: #f2f2f2;
    }

    .img_01_word {
        position: absolute;
        top: 35%;
        width: 100%;
    }

    .word_sub_01 {
        margin: 0 auto;
    }

    .sub_img {
        width: 90px;
    }

    .sub_intro {
        font-size: 24pt;
    }

    .img_style {
        width: 100%;
        display: block;
        max-width: 750px;
        margin: 0 auto;
    }

    .img_style_sepc {
        width: 75%;
        display: block;
        max-width: 750px;
        margin: 0 auto;
    }

    .content_center {
        padding: 10px;
    }
    
    .icon_row {
        height: 154px;
        margin: 0 auto;
    }

    .icon_container {
        width:49.5%;
        height: 150px;
        background-color: white;
        float: left;
    }

    .icon_container_selected {
        width:49.5%;
        height: 150px;
        background-color: #d6d6d6;
        float: left;
    }

    .white_space {
        width: 1%;
        height: 150px;
        float: left;
    }

    .icon_style {
        width: 60px;
        margin-top: 25px;
        margin-bottom: 10px;
    }

    .detail {
        padding: 20px;
        margin-top: -5px;
        margin-bottom: -1px;
        font-size: 10pt;
        background-color: #d6d6d6;
        .line {
            width: 100%;
            height: 1px;
            padding-top:10px;
            margin: 0 auto;
            border-bottom: 1px solid #ffffff;
        }

        .descrip_top {
            text-align: left;
            margin-top: 20px;
            text-indent: 2em;
        }

        .descrip_btm {
            text-align: left;
            margin-bottom: 15px;
            text-indent: 2em;
        }
    }

    .padding_btm20 {
        padding-bottom: 30px;
    }

    .space_margin {
        margin-top: 20px;
    }

    .space_padding {
        padding-top: 30px;
        padding-bottom: 30px;
    }

    .img_container {
        position: relative;
    }

    .img_descrip {
        position: absolute;
        top: 200px;
    }

    .title_words {
        position: absolute;
        top: 5%;
        width: 100%;
        margin: 0 auto;
        color: white;
    }

    .word {
        width: 90%;
        position: relative;
        max-width: 750px;
        margin: 0 auto;
        background-color: white;
    }

    .word_container {
        width: 100%;
        max-width: 750px;
        margin: 0 auto;
    }

    .backcolor_gray {
        background-color: #eeeeee !important;
    }

    .backcolor_black {
        background-color: #000000 !important;
    }

    .word_white {
        color: #ffffff !important;
    }

    .word_01 {
        padding-top: 30px;
        font-size: 13pt;
        font-weight: bolder;
    }

    .word_02 {
        margin-top: 20px;
        font-size: 18px;
        color: #6f95ca;
    }

    .word_03 {
        margin-top: 20px;
        font-size: 14px;
        line-height: 25px;
        color: black;
    }

    .word_04 {
        margin-top: 20px;
        line-height: 25px;
        font-weight: bold;
    }

    .sperate_line {
        height: 1px;
        width: 90%;
        padding-top: 20px;
        margin: 0 auto;
        border-bottom: 1px solid #444444;
    }

    .space_div {
        width:100%;
        height: 20px;
    }

    .puppy_logo {
        margin-top: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }

</style>

