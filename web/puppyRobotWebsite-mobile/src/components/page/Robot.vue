<template>
  <div id="robot">
    <div class="header_margin img_01 imgBackCenter padding_btm20">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/robot/div_01.jpg">
            </div>
        </div>
    </div>

        <div class="word">
            <div class="word_02">随着AI技术的快速发展</div>
            <div class="word_04 padding_btm20">无人驾驶作为一个会改变未来世界<br/>的科技吸引了无数巨头，投资者，<br/>和满怀梦想的创业者投身到这个领域中来。</div>
            <div class="word_03 padding_btm20">无人驾驶的落地场景主要包括：<br/>城市开放道路的无人驾驶，<br/>代表有美国Google 公司的Waymo 出租车，<br/>美国Tesla 的自动驾驶模式，<br/>国内的Apollo 打造的开放道路无人驾驶生态。</div>
        </div>
        <div class="img_01_content space_margin padding_btm20">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/robot/div_02.jpg">
            </div>
        </div>
        <div class="word">
            <div class="word_02">无人驾驶落地的重要场景</div>
            <div class="word_04 padding_btm20">重复劳动密集型行业：卡车、送货:</div>
        </div>
         <div class="img_01_content space_margin padding_btm20">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/robot/div_03.jpg">
            </div>
        </div>
        <div class="word">
            <div class="word_02">最适合无人驾驶大规模商用的场景</div>
            <div class="word_04 padding_btm20">封闭社区或者景区的 摆渡车：</div>
            <div class="word_03 padding_btm20">hachi 技术团队正在和国内，<br/>国外的技术领先公司研发适合于实地地产，<br/>富力地产以及旗下景区的无人摆渡车，<br/>来给业主以及景区的会员提供更高品质的生活体验<br/>和便利性。年底会推出符合量产要求的样车。</div>
        </div>
         <div class="img_01_content space_margin">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/robot/div_04.jpg">
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
        width: 90%;
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
        font-size: 18px;
        color: #6f95ca;
    }

    .word_03 {
        margin-top: 20px;
        font-size: 14px;
        line-height: 25px;
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

    .puppy_logo {
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }

</style>

