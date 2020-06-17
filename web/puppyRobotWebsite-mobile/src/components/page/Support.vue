<template>
    <div id="techsupport">
        <div class="img_container">
            <img class="img_style" src="./../../assets/images/support/div_01.jpg">
            <div class="top_word">
                <p class="top_word_01">技术支持</p>
                <p>我们随时提供帮助。</p>
            </div>
        </div>
        <div class="title">产品使用说明</div>
        <router-link to="/manual"> 
            <div class="container">
                <div class="product_container">
                    <img class="img_style" src="./../../assets/images/support/div_03.png">
                </div>
                <div class="cube_link">
                    <div class="link_left">
                            哈奇光屏M1/M1 Pro
                    </div>
                </div>
            </div>
        </router-link>
        <router-link to="/support">
            <div class="container">
                <div class="product_container">
                    <img class="img_style" src="./../../assets/images/support/div_02.png">
                </div>
                <div class="cube_link">
                    <div class="link_left">
                            puppy cube
                    </div>
                </div>
            </div>
        </router-link>
        <div class="title">配件指导说明</div>
        <div class="container">
            <a href="http://source.hachismart.com/download/遥控器升级教程.pdf" target="_blank" download="">
                <img class="iconstyle" src="./../../assets/images/support/controlupdate.png">
                <div class="cube_link">
                    <div class="link_left">
                            遥控器升级教程
                    </div>
                    <!-- <div class="link_right">
                        <img src="./../../assets/images/support/arrow_right.png">
                    </div> -->
                </div>
            </a>
            <div class="white_space"></div>
            <router-link to="/download">
                <img class="iconstyle_download" src="./../../assets/images/support/download.png">
                <div class="cube_link">
                    <div class="link_left">
                            工具及固件下载
                    </div>
                    <!-- <div class="link_right">
                        <img src="./../../assets/images/support/arrow_right.png">
                    </div> -->
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.title {
    width: 100%;
    max-width: 748px;
    height: 100px;
    line-height: 100px;
    font-size: 26px;
    margin: 0 auto;
    color: #108fec;
    border: 1px solid #f1f5f9;
}

.content {
    width: 100%;
    height: 180px;
    padding-top: 20px;
}

.descrip {
    font-size: 14px;
    color: #000000;
}

a:link{text-decoration:none;}
a:visited{text-decoration:none;}
a:active{text-decoration:none;}

.img_container {
    width: 100%;
    position: relative;
}

.img_style {
    width: 100%;
    display: block;
    max-width: 750px;
    margin: 0 auto;
}

.top_word {
    position: absolute;
    top: 35%;
    width: 100%;
}

p {
    margin: 0px;
}

.top_word_01 {
    font-size: 45px;
}

.instruction_title {
    width: 100%;
    background-color: #f1f5f9;
    color: #000000;
    padding-top: 50px;
}

.word_pro {
    font-size: 30px;
}

.container {
    background-color: #fafafa;
     padding-top: 50px;
     padding-bottom: 50px;
}

.product_container {
    width: 150px;
    margin: 0 auto;
}

.cube_link {
    //width: 110px;
    margin: 0 auto;
    // text-align: left;
    font-size: 14px;
    color: #108fec;
    height: 40px;
}

.link_left {
    // width: 100px;
    // float:left;
    text-decoration: underline;
}

.link_right {
    width: 10px;
    float: left;
    line-height: 45px;
}

.arrow_right {
    width: 8px;
}

.iconstyle {
    width: 130px;
}

.iconstyle_download {
    width: 110px;
}

.white_space {
    width: 100%;
    height: 30px;
}

</style>

