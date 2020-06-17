<template>
  <div id="pagefooter">
      <div class="pagefooterTop">
        <div class="pagefooterMid_mobile">
            <div class="footerInfo-mobile">
                <div class="footerLeft-mobile">
                    <!-- <div class="footerLeft_div">
                        <span>售后服务</span>
                        <div>
                            <router-link to="">
                                <a herf="#">客服邮箱</a>
                            </router-link>
                        </div>
                    </div> -->
                    <div class="footerLeft_div">
                        <span>授权经销</span>
                        <div>
                            <a href="https://mall.jd.com/index-1000112421.html" target="_blank">京东自营</a>
                        </div>
                        <!-- <div>
                             <router-link to="/store">
                                <a herf="#">线下门店</a>
                            </router-link>
                        </div> -->
                    </div>
                    <div class="footerLeft_div">
                        <span>站点导航</span>
                        <div>
                            <router-link to="/legalnotices">
                                <a herf="#">法律声明</a>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/privacyprotection">
                                <a herf="#">隐私保护</a>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/sitemap">
                                <a herf="#">网站地图</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="footerLeft_div">
                        <span>关于我们</span>
                        <div>
                        <router-link to="/joinus">
                            <a herf="#">加入我们</a>
                        </router-link>
                        </div>
                        <div>
                        <router-link to="/campusrecruitment">
                            <a herf="#">校园招聘</a>
                        </router-link>
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="footerMid-mobile">
                    <div class="footerMid_1">
                        <div class="footerMid_img">
                            <img src="./../../assets/images/footer/QR-code_WeChat.jpg">
                            <br/>
                            <span>官方微信</span>
                        </div>
                    </div>
                </div>
                <div class="footerRight-mobile">
                    <div class="service">
                        <a herf="#">cube全国统一服务热线：</a>
                        <span class="serviceNum">400-000-1320</span>
                        <br/>
                        <a herf="#">智能家居全国统一服务热线：</a>
                        <span class="serviceNum">400-898-9160</span>
                        <br/>
                        <a herf="#">产品技术服务热线：</a>
                        <span class="serviceNum">400-666-0390</span>
                        <br/>
                        <a herf="#">Delight物流机器人销售热线：</a>
                        <span class="serviceNum">400-021-6106</span>
                        <br/>
                        <a herf="#">服务时间：工作日 9:30-18:30（仅收市话费）</a>
                    </div>
                     <div class="footerRight_re">
                        <div class="selector">
                            <select v-model="currentLanguage" @change="languageChanged()">
                                <option value="1">中文</option>
                                <option value="2">English</option>
                            </select>
                        </div>
                        <div class="selector">
                            <img src="./../../assets/images/footer/Chinese.png">
                        </div>
                        <div class="clear"></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <div class="recordInfo">
            <p>Copyright © {{cYear}} puppyrobot<br/>京ICP备17013342号-4</p>
            
            <!-- puppyrobot.com -->
            <!-- <p>Copyright © {{cYear}} puppyrobot<br/>京ICP备17034662号</p> -->
        </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            currentLanguage: 1,  //中文站默认为1
            cYear: '2018',
        }
    },
    mounted() {
        let date = new Date();
        this.cYear = date.getFullYear().toString();
    },
    methods: {
        languageChanged() {
            if(this.currentLanguage == 1) {
                // if(window.location.host == "test.m.hachismart.com") {
                //     window.location.href = "http://test.m.hachismart.com";
                // }else {
                    window.location.href = "http://m.hachismart.com";
                // }
            } else {
                // if(window.location.host == "test.m.hachismart.com") {
                //     window.location.href = "http://test.m.hachismart.com/en/";
                // }else {
                    window.location.href = "http://m.puppyrobot.com/en/";
                // }
            }
        }

    }
}
</script>


<style lang="scss" scoped>
    $footerHeight: 150px;
    $footerColor: #f1f1f1;

    #pagefooter {
        width: 100%;
        z-index: -1;
        // margin-top: 20px;
        
    }

    .pagefooterTop {
        width: 100%;
        text-align: center;
        background-color: $footerColor;
        font-size: 14px;
    }

    .pagefooterMid {
        width: 1280px;
        margin: 0 auto;
    }

    .pagefooterMid_mobile {
        width: 100%;
    }

    .footerInfo {
        height: $footerHeight;
        width: 100%;
        background-color: $footerColor;
    }

    .footerInfo-mobile {
        width: 100%;
        background-color: $footerColor;
    }

    .recordInfo {
        background-color: white;
        width: 100%;
        font-size: 14px;
    }

    .footerLeft-mobile {
        width: 100%;
        .footerLeft_div {
            width: 33.3%;
            margin-top: 20px;
            // height: 140px;
            float: left;
            text-align: center;
        }

        span {
            font-size: 14px;
            font-weight: bold;
        }
    }

    .footerMid-mobile {
        width: 100%;
        .footerMid_1 {
            width: 100%;
            .footerMid_img {
            width: 100%;
            margin-top: 20px;

            text-align: center;
            }
        }

        img {
            width: 90px;
            height: 90px;
        }
    }

    .footerRight-mobile {
        width: 100%;
        background-color: #f5f5f5;
    }

    a {
        text-decoration-line: none;
        color: black;
        :hover {
            color: #929497;
        }
    }

    .service {
        padding-top: 20px;
        line-height: 25px;
        width: 100%;
        margin-top:20px;
        padding-bottom: 20px;
    }

    .footerRight_re {
        text-align: center;
        // padding-top: 20px;
        margin: 0 auto;
        line-height: 30px;
        height: 30px;
        width: 120px;
        padding-bottom: 20px;
        select {
            cursor: pointer;
            border: none;
            background-color: #f5f5f5;
        }
    }

    .selector {
        float: left;
        img {
            width: 30px;
            margin-left: 10px;
        }
    }

    .clear {
        clear: both;
    }
</style>
