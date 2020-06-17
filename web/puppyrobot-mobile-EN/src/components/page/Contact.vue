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

    <div class="company_name">
        Beijing puppy robotics Co., Ltd
    </div>
    <div class="title">
        <img class="icon_style_2" src="./../../assets/images/contact/Address.png">&nbsp;Headquarters
    </div>
    <div class="content border_btm">
        Room 709, R&F Center Office Building, No.63 East 3rd Ring Middle Road, Chaoyang District, Beijing, P.R. China
    </div>
    <div class="title">
        <img class="icon_style" src="./../../assets/images/contact/Earth.png">&nbsp;Overseas Business
    </div>
    <div class="content border_btm">
        overseas@puppyrobot.com
    </div>
    <div class="title">
        <img class="icon_style" src="./../../assets/images/contact/Email.png">&nbsp;Tech Support
    </div>
    <div class="content">
        service@puppyrobot.com
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

    .icon_style {
        width: 12px;
    }

    .icon_style_2 {
        height: 15px;
    }

    .company_name {
        line-height: 85px;
        font-size: 16px;
        font-weight: bold;
        width: 90%;
        margin: 0 auto;
        border-bottom: 1px solid #000000;
    }

    .title {
        margin-top: 20px;
        font-size: 14px;
        font-weight: bold;
        // line-height: 25px;
    }

    .content {
        width: 90%;
        font-size: 12px;
        margin: 0 auto;
        padding-top: 15px;
        padding-bottom: 20px;
    }

    .border_btm {
        border-bottom: 1px solid #444444;
    }


</style>

