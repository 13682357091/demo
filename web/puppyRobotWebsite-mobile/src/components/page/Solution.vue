<template>
  <div id="solution">
    <div class="header_margin img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/solution/div_01.jpg">
            </div>
        </div>
    </div>
    <div class="img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/solution/div_02.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_03.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_04.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_05.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_06.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_07.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_08.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_09.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_10.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_11.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_12.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_13.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_14.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_15.jpg">
            </div>
        </div>
    </div>
    <div>
      <Banner :slideLists="officeList"></Banner>
    </div>
    <div class="img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/hachi/solution/div_16.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_17.jpg">
                <img class="img_style" src="./../../assets/images/hachi/solution/div_18.jpg">
            </div>
        </div>
    </div>
    <div>
      <Banner :slideLists="businessList"></Banner>
    </div>
        
     <div class="puppy_logo">
         <img src="./../../assets/images/logo.png">
     </div>
  </div>
</template>

<script>
import Banner from './../common/Banner'
export default {
    data() {
        return {
            currDisplayIndex: 0,
            officeList: [
            {            
                id: 1,
                img: require("./../../assets/images/hachi/solution/office_01.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 2,
                img: require("./../../assets/images/hachi/solution/office_02.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 3,
                img: require("./../../assets/images/hachi/solution/office_03.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 4,
                img: require("./../../assets/images/hachi/solution/office_04.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 5,
                img: require("./../../assets/images/hachi/solution/office_05.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 6,
                img: require("./../../assets/images/hachi/solution/office_06.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 7,
                img: require("./../../assets/images/hachi/solution/office_07.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            }
            ],
            businessList: [
            {            
                id: 1,
                img: require("./../../assets/images/hachi/solution/business_01.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 2,
                img: require("./../../assets/images/hachi/solution/business_02.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 3,
                img: require("./../../assets/images/hachi/solution/business_03.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 4,
                img: require("./../../assets/images/hachi/solution/business_04.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            },
            {            
                id: 5,
                img: require("./../../assets/images/hachi/solution/business_05.jpg"),
                maxWidth: '750px',
                backgroundColor: "#ffffff"
            }
            ],
        }
    },
    components: {
        Banner
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

    .padding_btm25 {
        padding-bottom: 25px;
    }

    .space_margin {
        margin-top: 25px;
    }

    .margin_top15 {
        height: 15px;
        width: 100%;
    }

    .margin_top30 {
        height: 30px;
        width: 100%;
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
        font-size: 18px;
        color: #6f95ca;
    }

    .word_03 {
        margin-top: 25px;
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
        padding-top: 35px;
        margin: 0 auto;
        border-bottom: 1px solid #444444;
    }

    .puppy_logo {
        // margin-top: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }

</style>

