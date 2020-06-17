<template>
  <div id="contact">
    <div class="header_margin img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/contact/div_01.jpg">
            </div>
        </div>
    </div>

        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/contact/div_02.jpg">
            </div>
        </div>

        <div class="img_01_content space_margin">
            <div class="img_container">
                <img class="img_style logo_width" src="./../../assets/images/header/puppyheaderlogo.png">
            </div>
        </div>

        <div class="word">
            <div class="word_02">AIoT事业部 | 机器人事业部 | 智能视觉产品事业部</div>
            <div class="phone_container">
                <div class="word_04" ><img style="width: 14px;" src="./../../assets/images/contact/phone.png"></div>
                <div class="word_04">&nbsp;010-59037583</div>
            </div>
            <div class="add_container">
                <div class="word_04" ><img style="width: 14px;" src="./../../assets/images/contact/address.png"></div>
                <div class="word_04">&nbsp;北京市朝阳区东三环中路63号<br/>富力中心709室</div>
            </div>
        </div>
        <div class="sperate_line space_padding"></div>

        <div class="img_01_content space_margin">
            <div class="img_container">
                <img class="img_style logo_width" src="./../../assets/images/header/puppyheaderlogo.png">
            </div> 
        </div>
        <div class="word">
            <div class="word_02">智能家居及智慧空间事业部</div>
            <div class="phone_container">
                <div class="word_04" ><img style="width: 14px;" src="./../../assets/images/contact/phone.png"></div>
                <div class="word_04">&nbsp;010-59220690</div>
            </div>
            <div class="add_container">
                <div class="word_04" ><img style="width: 14px;" src="./../../assets/images/contact/address.png"></div>
                <div class="word_04">&nbsp;北京市朝阳区东三环中路63号<br/>富力中心1610室</div>
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

    .img_style {
        width: 100%;
        display: block;
        max-width: 750px;
        margin: 0 auto;
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
        margin-top: 60px;
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
    }

    .word_03 {
        margin-top: 20px;
        font-size: 11pt;
        line-height: 25px;
    }

    .phone_container {
        padding-top: 20px;
        width: 150px;
        height: 40px;
        margin: 0 auto;
    }

    .add_container {
        width: 250px;
        height: 30px;
        margin: 0 auto;
    }

    .word_04 {
        line-height: 25px;
        float: left;
    }

    .sperate_line {
        height: 1px;
        width: 95%;
        padding-top: 60px;
        margin: 0 auto;
        border-bottom: 1px solid #444444;
    }

    .logo_width {
        width: 160px;
    }

    .hachi_logo_width {
        width: 120px;
    }

    .puppy_logo {
        margin-top: 80px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }

</style>

