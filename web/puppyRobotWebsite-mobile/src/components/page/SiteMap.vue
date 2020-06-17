<template>
    <div class="sitemap">
        <div class="hachiheader">
            <div class="headerContent">
                <div class="hachiHT">
                    <div class="hachiThridMenu">
                        <div class='solutionName'>
                        hachi网站地图
                        </div>
                    </div>
                    <div class="headerLine">
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="con_left">
                <div class="left_container">
                    <div class="con_title">cube</div>
                    <div class="site_add"><router-link to="/cubeX">cube X</router-link></div>
                    <div class="site_add"><router-link to="/puppycube">puppy cube</router-link></div>
                </div>
                <div class="left_container">
                    <div class="con_title">智能机器人</div>
                    <div class="site_add"><router-link to="/hachibingo">hachi bingo</router-link></div>
                    <div class="site_add"><router-link to="/hachiauto">hachi auto</router-link></div>
                </div>
                <div class="left_container">
                    <div class="con_title">智能家居</div>
                    <div class="site_add"><router-link to="/hachisolution">解决方案</router-link></div>
                    <div class="site_add"><router-link to="/hachiproduct">产品中心</router-link></div>
                    <div class="site_add"><router-link to="/hachicases">应用案例</router-link></div>
                </div>
                <div class="left_container">
                    <div class="con_title">AI技术方案</div>
                    <div class="site_add"><router-link to="/aiot">AIoT技术</router-link></div>
                    <div class="site_add"><router-link to="/robottech">机器人技术</router-link></div>
                    <div class="site_add"><router-link to="/aisighttech">智能视觉技术</router-link></div>
                </div>
                <div class="left_container">
                    <div class="con_title">授权经销</div>
                    <div class="site_add"><a href="https://mall.jd.com/index-1000112421.html" target="_blank">京东自营</a></div>
                </div>
                <div class="left_container">
                    <div class="con_title">关于hachi</div>
                    <div class="site_add"><router-link to="/aboutus">公司介绍</router-link></div>
                    <div class="site_add"><router-link to="/cooperate">商务合作</router-link></div>
                    <div class="site_add"><router-link to="/contact">联系我们</router-link></div>
                    <div class="site_add"><router-link to="/newscenter">媒体报道</router-link></div>
                    <div class="site_add"><router-link to="/videocenter">视频中心</router-link></div>
                    <div class="site_add"><router-link to="/techsupport">技术支持</router-link></div>
                    <div class="site_add"><router-link to="/joinus">加入我们</router-link></div>
                    <div class="site_add"><router-link to="/campusrecruitment">校园招聘</router-link></div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$hachiSMB: 46px;
.hachiheader {
    width: 100%;
    text-align: center;
}

.headerContent {
    width: 90%;
    margin: 0 auto;
}

#divNews {
    float: left;
    height: $hachiSMB;
    line-height: $hachiSMB;
}

.hachiThridMenu {
    height: $hachiSMB;
}

.solutionName {
    float: left;
    height: $hachiSMB;
    line-height: $hachiSMB;
}

.hachiHT {
    width: 100%;
    height: $hachiSMB;
}

.headerLine {
    width: 100%;
    height: 1px;
    background-color: #adadad;
}

.content {
    width: 90%;
    margin: 0 auto;
    padding-top: 40px;
    min-height: 600px;
}

.con_left {
    position: relative;
    width: 100%;
    // float: left;
}

.con_right {
    width: 25%;
    float: left;
}

.left_container {
    width: 50%;
    // min-height: 140px;
    float: left;
    margin-bottom: 30px;
}

.con_title {
    // font-weight: bold;
    font-size: 18px;
    height: 40px;
    line-height: 40px;
}

.site_add {
    color: #0088e2;
    font-size: 16px;
    line-height: 30px;
}

.clear {
    clear: both;
}

a {
    text-decoration: none;
    color: #0088e2;
}
</style>
