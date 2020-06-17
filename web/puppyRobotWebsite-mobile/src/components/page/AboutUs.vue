<template>
  <div id="aboutus">
    <div class="header_margin img_01 imgBackCenter">
        <div class="img_01_content">
            <div>
                <img class="img_style" src="./../../assets/images/aboutus/div_01.jpg">
            </div>
        </div>
    </div>
    <div class="img_01_content backcolor_gray">
        <div class="content_center">
            <div class="icon_row">
                <div :class="currDisplayIndex==1?'icon_container_selected':'icon_container'" @click="displayIndexChange(1)">
                    <img class="icon_style" src="./../../assets/images/aboutus/icon_01.png">
                    <div>资本背景</div>
                </div>
                <div class="white_space"></div>
                <div :class="currDisplayIndex==2?'icon_container_selected':'icon_container'" @click="displayIndexChange(2)">
                    <img class="icon_style" style="margin-top:28px !important;" src="./../../assets/images/aboutus/icon_02.png">
                    <div>公司品牌</div>
                </div>
            </div>
            <div class="detail" v-show="currDisplayIndex==1">
                <div class="line"></div>
                <div class="descrip_top">广州小狗机器人技术有限公司成立于2016年11月，是北京小狗智能机器人技术有限公司的全资子公司。小狗机器人围绕人居场景，将AI技术筑入空间，为千万用户打造成熟可靠的智能化系统解决方案。</div>
            </div>
            <div class="detail" v-show="currDisplayIndex==2">
                <div class="line"></div>
                <div class="descrip_top">hachi是小狗机器人的品牌名称；hachi的品牌形象是一只可爱的宠物犬，名称缘于忠犬八公的故事，象征忠诚和守护，寓意hachi既是人们生活中亲密的伙伴，也是智慧空间的守护者。</div>
            </div>
            <div class="detail padding_btm20" v-show="currDisplayIndex==3">
                <div class="descrip_btm">hachi以AI为技术核心，以创新驱动为引擎，以极致的用户体验为标杆，围绕人居场景筑造智慧空间，专注打造AI人居的服务新生态，让人们的生活空间更智慧、更舒适、更便捷。</div>
                <div class="line"></div>
            </div>
            <div class="detail padding_btm20" v-show="currDisplayIndex==4">
                <div class="descrip_btm">hachi拥有国内领先的智能化系统解决方案，智能化社区在全国多个一线城市成功部署运营稳健。凭借成熟的技术方案和运营经验，hachi已经与国内多家地产龙头企业建立了长期战略合作关系。</div>
                <div class="line"></div>
            </div>
            <div class="icon_row">
                <div :class="currDisplayIndex==3?'icon_container_selected':'icon_container'" @click="displayIndexChange(3)">
                    <img class="icon_style" src="./../../assets/images/aboutus/icon_03.png">
                    <div>公司品牌</div>
                </div>
                <div class="white_space"></div>
                <div :class="currDisplayIndex==4?'icon_container_selected':'icon_container'" @click="displayIndexChange(4)">
                    <img class="icon_style" src="./../../assets/images/aboutus/icon_04.png">
                    <div>服务方案</div>
                </div>
            </div>
        </div>
    </div>
        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/aboutus/div_02.jpg">
            </div>
        </div>
        <div class="word">

            <div class="word_01">
                <span>三大产品业务线、一个生活服务品牌</span>
            </div>
            <div class="word_03">hachi针对智慧空间人居场景的多项产品研发，<br/>以AI为核心引擎，辅以大数据和云计算，<br/>是未来智慧人居服务的稳健基石。</div>

            <div class="word_03">哈奇智能旗下智能家居和智慧空间事业部<br/>是国内领先的高端定制化空间解决方案提供商，<br/>多年来专注打造五大智慧空间：<br/>家庭、社区、酒店、商业、办公。<br/>为国内多个房地产项目提供和部署专业的<br/>智能化配套解决方案，<br/>提供智慧空间生活服务。<br/>目前hachi在全国十多个城市部署了<br/>四十多个合作项目，<br/>拥有10万+级用户的大规模交付经验，<br/>智能化配套系统稳定性得到了<br/>全国用户的严格检验和认可。</div>

        </div>
        <div class="space_margin">
            <img class="img_style" src="./../../assets/images/aboutus/div_03.jpg">
        </div>
        <div class="word">

            <div class="word_01">
                <span>关于智能家居和智慧空间事业部</span>
            </div>
            <div class="word_03"> 前身是广州普及网络科技有限公司<br/>（原名：普及科技）于2006成立，<br/>为房地产行业提供<br/>智能化配套解决方案及项目实施等服务。<br/>以智能化产品设计研发为核心，<br/>集成整合优秀智能单品，<br/>确保方案高度匹配客户需求，<br/>力求人性化交互体验，<br/>致力于成为国内领先的<br/>定制化智慧空间解决方案提供商，<br/>打造五大智慧空间：智慧家庭、智慧社区、<br/>智慧酒店、智慧商业、智慧办公。</div>

        </div>
        <div class="word">

            <div class="word_01">
                <span>智能家居及智慧空间事业部的优势</span>
            </div>
            <div class="space_margin">
                <img class="img_style" src="./../../assets/images/aboutus/div_04.jpg">
            </div>
        </div>
        <div class="word">
            <div class="word_02">丰富的行业经验及领先性</div>
            <div class="word_03">借助前沿技术研究及优秀合作伙伴，<br/>帮助客户为项目规划提供多样性选择，<br/>为客户节省更多的时间与选择成本。</div>
        </div>
        <div class="sperate_line"></div>
        <div class="word">
            <div class="word_02">专业的技术研发团队</div>
            <div class="word_03">公司团队成员具备丰富的专业经验。<br/>确保以领先科技驱动产品研发，<br/>以及产品的持续改善能力。</div>
        </div>
        <div class="sperate_line"></div>
        <div class="word">
            <div class="word_02">产品的高稳定性和安全性</div>
            <div class="word_03">社区多层云架构，<br/>双网设计上做安全保障产品已通过富力、<br/>实地等知名地产企业的年标集采审核。</div>
        </div>
        <div class="sperate_line"></div>
        <div class="word">
            <div class="word_02">持续的销售与运营支持服务</div>
            <div class="word_03">客户进行智能销售卖点的研发及培训，<br/>助力项目销售。<br/>协助客户进行产品的后续运营，<br/>提升项目的持续盈利。</div>
        </div>
        <div class="sperate_line"></div>
        <div class="word">

            <div class="word_01">
                <span>哈奇智能部分合作伙伴</span>
            </div>
            <div class="space_margin">
                <img class="img_style" src="./../../assets/images/aboutus/div_05.jpg">
            </div>
        </div>
        <div class="img_01_content space_margin">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/aboutus/div_06.jpg">
            </div>
        </div>
        <div class="space_padding backcolor_gray">
            <img class="img_style" src="./../../assets/images/aboutus/div_07.jpg">
            <div class="word_03">hachi的英文原意是可爱的幼犬，<br/>可爱的萌犬是人类亲密的伙伴；</div>
            <div class="word_03">hach腹部曲线取自房屋的造型，<br/>寓意着puppy要做人类家园的守护者；</div>
            <div class="word_03">hachi身上的线条寓意AI和空间的连接，<br/>为人们筑造更智慧、更舒适、更便捷的生活空间；</div>
        </div>
        <div class="img_01_content">
            <div class="img_container">
                <img class="img_style" src="./../../assets/images/aboutus/div_08.jpg">
            </div>
        </div>
        <div class="word">
            <div class="word_01">
                <span>筑造智慧空间的服务新生态</span>
            </div>
            <div class="word_03">二十年前，PC作为人们工作、<br/>学习和娱乐的工具，开启了互联网时代的大幕。<br/>过去十年来，手机成为人们随身携带必不可少的用品，<br/>揭开了移动互联网时代的篇章。<br/>在人工智能时代，AI将无处不在，<br/>成为人们生活中的不可或缺的时代元素，<br/>hachi要筑造人工智能时代智慧人居的服务生态。</div>
        </div>
        <div class="word space_padding">
            <img class="img_style" src="./../../assets/images/aboutus/div_09.jpg">
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
        font-size: 11pt;
        color: #6f95ca;
    }

    .word_03 {
        margin-top: 20px;
        font-size: 11pt;
        line-height: 25px;
    }

    .sperate_line {
        height: 1px;
        width: 90%;
        padding-top: 20px;
        margin: 0 auto;
        border-bottom: 1px solid #444444;
    }

    .word_num {
        font-size: 22pt;
        font-weight: 200;
        color: #b2d371;
    }

    .word_absolute {
        position: absolute;
        top: 0px;
        width: 100%;
    }

    .img_dot {
        position: absolute;
        top: 68px;
        left: 0px;
        width: 80px;
    }

    .dot_container {
        width: 100%;
        text-align: right;
    }

   .img_dot_right {
        position: absolute;
        top: 68px;
        width: 80px;
        float: right;
        display: block;
    }

    .dot_1 {
        float: right;
        width:80px;
        height: 100px;
    }

    .puppy_logo {
        margin-top: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: black;
    }

</style>

