<template>
  <div id="cooperate">
    <div class="header_margin img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/cooperate/div_01.jpg">
            </div>
        </div>
    </div>

        <div class="img_01_content space_margin">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/cooperate/div_02.jpg">
            </div>
        </div>
        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/cooperate/div_03.jpg">
            </div>
        </div>
        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/cooperate/div_04.jpg">
            </div>
        </div>
        <div class="img_01_content space_margin">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/cooperate/div_05.jpg">
            </div>
        </div>
        <div class="word">
            <div class="word_02">资本背景</div>
            <div class="word_03">国内知名VC投资。</div>
        </div>
        <div class="sperate_line"></div>
        <div class="word">
            <div class="word_02">智慧生态</div>
            <div class="word_03">AIoT、机器人、智能视觉、智慧人居<br/>四大业务生态布局。</div>
        </div>
        <div class="sperate_line"></div>
        <div class="word">
            <div class="word_02">解决方案</div>
            <div class="word_03">hachi智能化系统解决方案<br/>已在多个一线城市成功部署运营专利技术。</div>
        </div>
        <div class="sperate_line"></div>
        <div class="word">
            <div class="word_02">专利技术</div>
            <div class="word_03">国际领先的专利核心技术，<br/>拥有专注AI人工智能方向豪华研发团队。</div>
        </div>

        <div class="img_01_content space_margin">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/cooperate/div_06.jpg">
            </div>
        </div>
        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/cooperate/div_07.jpg">
            </div>
        </div>
        <div class="word">
            
            <div class="word_01">联系方式</div>
            <div style="height: 45px; width: 260px; margin: 0 auto;">
                <div class="word_04">cube服务热线：&nbsp;</div>
                <div class="word_04" ><img style="width: 16px;" src="./../../assets/images/cooperate/phone.png"></div>
                <div class="word_04">&nbsp;400-000-1320</div>
            </div>
            <div style="height: 45px; width: 300px; margin: 0 auto;">
                <div class="word_04">智能家居服务热线：&nbsp;</div>
                <div class="word_04" ><img style="width: 16px;" src="./../../assets/images/cooperate/phone.png"></div>
                <div class="word_04">&nbsp;400-898-9160</div>
            </div>
            <div style="height: 45px; width: 300px; margin: 0 auto;">
                <div class="word_04">Delight销售热线：</div>
                <div class="word_04">&nbsp;<img style="width: 16px;" src="./../../assets/images/cooperate/phone.png"></div>
                <div class="word_04">&nbsp;400-021-6106</div>
            </div>
            <div style="height: 50px; line-height: 50px; width: 325px; margin: 0 auto; padding-top: 10px;">
                <div class="">商务合作邮箱：service@hachismart.com&nbsp;</div>
            </div>
            <div style="height: 50px; line-height: 50px; width: 325px; margin: 0 auto;">
                <div class="">市场合作邮箱：marketing@hachismart.com&nbsp;</div>
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
        margin-top: 30px;
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
        top: 18%;
        width: 100%;
        color: white;
    }

    .word {
        width: 90%;
        position: relative;
        max-width: 750px;
        margin: 0 auto;
        background-color: white;
    }

    .word_01 {
        padding-top: 30px;
        font-size: 13pt;
        font-weight: bolder;
    }

    .word_02 {
        margin-top: 20px;
        font-size: 14pt;
        color: #6f95ca;
    }

    .word_03 {
        margin-top: 20px;
        font-size: 11pt;
        line-height: 25px;
    }

    .word_04 {
        margin-top: 20px;
        line-height: 25px;
        float: left;
    }

    .sperate_line {
        height: 1px;
        width: 90%;
        padding-top: 20px;
        margin: 0 auto;
        border-bottom: 1px solid #444444;
    }

    .puppy_logo {
        margin-top: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }
</style>

