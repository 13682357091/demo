
<template>
  <div id="intro">
    <div class="content">
        <div class="img_01_back">
            <div class="img_01 imgBackCenter">
                <div class="our_logo">
                    <div class="img_01_1">Be smarter, make it easier, <br/>and more convenient</div>
                    <div class="img_01_2">The Guangzhou Puppy Robotics Beijing Branch was founded in <br/>November 2016, and is a wholly-owned subsidiary of <br/>Beijing puppy robotics Co., Ltd.<br/><br/>As a young start-up company, puppy robot focuses on artificial <br/>intelligence and robotics technology; with innovation as its <br/>engine and outstanding user experience as its goal, puppy robot <br/>will bring AI products and solutions to consumers, creating a new <br/>ecosystem of AI-enhanced smart living.</div>
                   
                </div>
            </div>
        </div>
        <div class="img_02_back">
            <div class="img_02 imgBackCenter">
            </div>
        </div>
        <div class="img_03_back">
            <div class="img_03">
                <div class="img_03_01">
                    <img src="./../../assets/images/aboutus/div_03.jpg">
                </div>
                <div class="img_03_02">
                    <div class="i030201">The meaning behind puppy</div>
                    <div class="i030202">Puppies are not just cute little baby dogs.<br/><br/>They’re loved companions and family members, sharing their home with their human friends.<br/><br/>The contour of our puppy’s belly resembles a house, implying that he wants to be a guardian to your home.<br/><br/>Our logo is divided into three parts, each symbolizing an aspect of our vision – be smarter, make it easier, and more convenient.</div>
                </div>
                <div class="clear"></div>
            </div>
            
        </div>

    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    components: {
    },
    methods: {

    }
}
</script>




<style lang="scss" scoped>
$hachiSMB: 46px;
    .content {
        margin-top: 1px;
        width: 100%;
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

    .img_01 {
        max-width: 1920px;
        height: 650px;
        background-image: url("./../../assets/images/aboutus/div_01.jpg");
    }

    .img_01_back {
        background-color: #242424;
    }

    .img_01_descrip {
        width: 800px;
        margin: 0 auto;
        padding-top: 390px;
        text-align: left;
    }

    .title {
        font-size: 35px;
        font-weight: bold;
        line-height: 60px;
    }

    .title_descrip {
        font-size: 14px;
        line-height: 24px;
    }

    .our_logo {
        width: 1080px;
        margin: 0 auto;
        color: white;
        text-align: left;
    }

    .img_01_1 {
        margin-top: 147px;
        font-size: 40px;
        font-family: "NeutraText-Book";
    }

    .img_01_2 {
        font-size: 20px;
        font-family: "NeutraText-Book";
        margin-top: 70px;
    }

    .img_02 {
        max-width: 1920px;
        height: 135px;
        background-image: url("./../../assets/images/aboutus/div_02.jpg");
    }


    .img_02_back {
        background: #fbfbfb;
    }

    .img_02_descrip {
        width: 800px;
        margin: 0 auto;
        padding-top: 100px;
    }

    .img_02_2 {
        font-size: 18px;
        font-weight: bold;
        margin-top:30px;
    }

    .img_02_3 {
        font-size: 14px;
        line-height: 24px;
        margin-top:50px;
    }

    .fontcolor_balck {
        color: #000000;
    }

    .img_03_back {
        background-color: #fbfbfb;
    }

    .img_03 {
        width: 1080px;
        margin: 0 auto;
    }

    .img_03_01 {
        width: 526px;
        height: 560px;
        float: left;
    }
    .img_03_02 {
        width: 554px;
        height: 560px;
        float: left;
    }

    .i030201 {
        margin-top: 110px;
        font-size: 40px;
        font-family: "NeutraText-Book";
        text-align: left;
    }

    .i030202 {
        margin-top: 60px;
        font-size: 20px;
        font-family: "NeutraText-Book";
        text-align: left;
    }

    .clear {
        clear: both;
    }

</style>
