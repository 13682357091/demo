<template>
  <div id="pagefooter">
      <div class="pagefooterTop">
        <div class="pagefooterMid_mobile'">
            <div class="footerInfo-mobile">
                <div class="puppy_logo">
                    <img src="./../../assets/images/logo.png">
                </div>
                <div class="footerLeft-mobile">
                    <div class="footerLeft_div">
                        <span>Product</span>
                        <!-- <div>
                            <a href="https://www.touchofmodern.com/sales/puppyrobot/puppy-cube-touchscreen-projector" target="_blank">Touch of Modern</a>
                        </div> -->
                        <div>
                            <router-link to="/puppycube">
                                <a herf="#">Puppy Cube</a>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/hachiinfinite">
                                <a herf="#">Hachi Infinite</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="footerLeft_div">
                        <span>Site map</span>
                        <div>
                            <router-link to="/legalnotices">
                                <a herf="#">Legal Notice</a>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/privacyprotection">
                                <a herf="#">Privacy Policy</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="footerLeft_div">
                        <span>About puppy</span>
                        <div>
                            <router-link to="/aboutus">
                                <a herf="#">About us</a>
                            </router-link>
                        </div>
                        <div>
                            <router-link to="/contact">
                                <a herf="#">Contact us</a>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="footerRight-mobile">
                    <a href="https://www.instagram.com/puppycubeai/" target="_blank"><img src="./../../assets/images/footer/instagram.png"></a>
                    <!-- <a href="" target="_blank"><img src="./../../assets/images/footer/Youtube.png"></a> -->
                    <a href="https://www.facebook.com/puppycubeAI/?modal=admin_todo_tour" target="_blank"><img src="./../../assets/images/footer/facebook.png"></a>
                    <a href="https://twitter.com/puppyrobot3" target="_blank"><img src="./../../assets/images/footer/twitter.png"></a>
                    <!-- <div class="footerRight_re">
                        <div class="selector">
                            <select v-model="currentLanguage" @change="languageChanged()">
                                <option value="1">中文</option>
                                <option value="2">English</option>
                            </select>
                        </div>
                        <div class="selector">
                            <img src="./../../assets/images/footer/english.png">
                        </div>
                        <div class="clear"></div>
                    </div> -->
                </div>
            </div>
        </div>
      </div>
        <div class="recordInfo">
            <p>Copyright © {{cYear}} puppyrobot</p>
        </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            currentLanguage: 2,  //英文站默认为2
            cYear: '2018',
        }
    },
    mounted(){
        let date = new Date();
        this.cYear = date.getFullYear().toString();
    },
    methods: {
        languageChanged() {
            if(this.currentLanguage == 1) {
                if(window.location.host == "test.m.puppyrobot.com") {
                    window.location.href = "http://test.m.puppyrobot.com";
                }else {
                    window.location.href = "http://m.puppyrobot.com";
                }
            } else {
                if(window.location.host == "test.m.puppyrobot.com") {
                    window.location.href = "http://test.m.puppyrobot.com/en/";
                }else {
                    window.location.href = "http://m.puppyrobot.com/en/";
                }
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

    .puppy_logo {
      height: 80px;
      background-color: black;
      box-sizing: border-box;
      img {
          width: 72px;
          margin-top: 13px;
      }
    }

    .recordInfo {
        background-color: white;
        width: 100%;
        font-size: 12px;
    }

    .footerLeft-mobile {
        height: 180px;
        width: 100%;
        .footerLeft_div {
            width: 33.3%;
            padding-top: 40px;
            padding-left: 20px;
            box-sizing: border-box;
            float: left;
            text-align: left;
            font-size: 12px;
            div {
                margin-top: 25px;
            }
        }

        span {
            font-size: 12px;
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
            height:140px;

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
        padding-top: 35px;
        padding-bottom: 35px;

        img {
            width: 35px;
            margin-left: 12.5px;
            margin-right: 12.5px;
        }
        
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
    }

    .footerRight_re {
        text-align: center;
        padding-top: 20px;
        margin: 0 auto;
        line-height: 30px;
        height: 30px;
        width: 125px;
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
        }
    }

    .clear {
        clear: both;
    }
</style>
