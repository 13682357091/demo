<template>
  <div id="aboutus">
    <div class="header_margin img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/aboutus/div_01.jpg">
            </div>
        </div>
    </div>
    
        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/aboutus/div_02.jpg">
            </div>
        </div>

        <div class="img_03 imgBackCenter">
            <div class="img_01_content">
                <!-- <div>
                    <img class="img_style" src="./../../assets/images/aboutus/div_03.jpg">
                </div> -->
                <div class="img_03_wordscontainer">
                    <div class="img_02_descrip">
                        <!-- <div class="img_02_1">Product & Service</div>
                        <div class="img_02_2">3 product segments under one life service brand</div>
                        <div class="img_02_3">To build smart spaces that caters to different purposes in people’s life, puppy develops a variety of AI-enabled products with the help of other technologies such as big data and cloud computing, laying a cornerstone for future AI-based life services.</div>
                    
                        <img class="img_03_elements" src="./../../assets/images/aboutus/elements.png"> -->
                        <div class="img_02_2">The meaning behind puppy</div>
                        <img class="img_03_logo" src="./../../assets/images/aboutus/logo_generate.png">
                        <div class="img_02_3 margin_bottom">Puppies are not just cute little baby dogs.<br/><br/>They’re loved companions and family members, sharing their home with their human friends.<br/><br/>The contour of our puppy’s belly resembles a house, implying that he wants to be a guardian to your home.<br/><br/>Our logo is divided into three parts, each symbolizing an aspect of our vision – be smarter, make it easier, and more convenient.</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/aboutus/div_03.jpg">
            </div>
        </div>

        <div class="img_04_back">
            <div class="img_04 imgBackCenter">
                <div class="img_04_descrip">
                    <div class="img_02_2">Is to build an ecosystem of smart devices that can improve your life</div>
                    <div class="img_04_4">
                        <img src="./../../assets/images/aboutus/cube.png"/>
                    </div>
                    <div class="img_04_3 margin_bottom76">Twenty years ago, the personal computer and the Internet became a ubiquitous part of people’s everyday life. Both at home and at work.<br/><br/>With the advent of the modern smartphone ten years ago, mobile Internet revolutionized how we access information and communicate.<br/><br/>The next big step will be towards AI, which is going to become an indispensable necessity for modern families and smart homes. <br/><br/>puppy’s mission is to build an ecosystem where smart living spaces are created.</div>

                </div>
            </div>
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

    .img_style {
        width: 100%;
        display: block;
        max-width: 750px;
        margin: 0 auto;
    }

    .word {
        width: 90%;
        position: relative;
        max-width: 750px;
        margin: 0 auto;
        background-color: white;
    }

    .word_01 {
        padding-top: 37.5px;
        font-size: 16px;
        font-weight: bold;
    }

    .word_02 {
        margin-top: 26px;
        font-size: 16px;
        font-weight: bold;
    }

    .word_03 {
        margin-top: 20px;
        font-size: 12px;
        line-height: 20px;
    }

    .sperate_line {
        height: 1px;
        width: 90%;
        padding-top: 20px;
        margin: 0 auto;
        border-bottom: 1px solid #444444;
    }

    .img_03 {
        margin-top: 38px;
    }

    .img_03_wordscontainer {
        width: 100%;
    }

    .img_02_descrip {
        width: 90%;
        margin: 0 auto;
    }

    .img_02_1 {
        font-size: 16px;
        font-weight: bold;
    }

    .img_02_2 {
        font-size: 16px;
        font-weight: bold;
    }

    .img_02_3 {
        font-size: 12px;
        line-height: 18px;
        margin-top:26px;
    }

    .img_03_elements {
        width: 100%;
        margin-top:53px;
    }

    .logo_margin {
        margin-top: 75px;
    }

    .img_03_logo {
        width: 100%;
        margin-top:23px;
    }

    .fontcolor_balck {
        color: black;
    }

    .img_04_descrip {
        width: 90%;
        margin: 0 auto;
        padding-top: 75px;
    }

    .img_04_4 {
        img {
            width: 100%;
        }
    }

    .img_04_3 {
        font-size: 12px;
        line-height: 18px;
    }

    .margin_bottom {
        margin-bottom: 55px;
    }

    .margin_bottom76 {
        margin-bottom: 76px;
    }

</style>

