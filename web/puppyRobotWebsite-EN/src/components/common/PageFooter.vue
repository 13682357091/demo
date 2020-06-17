<template>
  <div id="pagefooter">
      <div class="pagefooterTop">
        <div class="pagefooterMid">
            <div class="footerInfo">
                <div class="footerLeft">
                    <div class="footerLeft_div">
                        <span>Product</span>
                        <div class="underline"></div>
                        <div class="sub_title">
                            <router-link to="/puppycube">
                            <a href="" class="a_hover" target="_blank">Puppy Cube</a>
                            </router-link>
                        </div>
                        <div class="sub_title">
                            <router-link to="/hachiinfinite">
                            <a href="" class="a_hover" target="_blank">Hachi Infinite</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="footerLeft_div">
                        <span>Learn More</span>
                        <div class="underline"></div>
                         <div class="sub_title">
                            <router-link to="/newscenter">
                                <a herf="#">Newsroom</a>
                            </router-link>
                        </div>
                        <div class="sub_title">
                            <router-link to="/aboutus">
                                <a herf="#">About us</a>
                            </router-link>
                        </div>
                        <div class="sub_title">
                            <router-link to="/contact">
                                <a herf="#">Contact us</a>
                            </router-link>
                        </div>
                    </div>
                    <div class="footerLeft_div">
                        <span>Support</span>
                        <div class="underline"></div>
                        <div class="sub_title">
                            <router-link to="/support?type=FAQ">
                                <a herf="#">FAQ</a>
                            </router-link>
                        </div>
                        <div class="sub_title">
                            <router-link to="/support?type=documents">
                                <a herf="#">Download Center</a>
                            </router-link>
                        </div>
                        <div class="sub_title">
                            <router-link to="/support?type=ProcessWarranty">
                                <a herf="#">Process Warranty</a>
                            </router-link>
                        </div>
                        <div class="sub_title">
                            <router-link to="/support?type=LegalNotice">
                                <a herf="#">Legal Notice</a>
                            </router-link>
                        </div>
                        <div class="sub_title">
                            <router-link to="/support?type=PrivacyPolicy">
                                <a herf="#">Privacy Policy</a>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="footerMid">
                    <!-- <img src="./../../assets/images/logo_black.png"> -->
                </div>
            
                <div class="footerRight">
                    <div class="contact">Contact Customer Service<br/>service@puppyrobot.com</div>
                    <div>
                    <a href="https://www.facebook.com/puppycubeAI/?modal=admin_todo_tour" target="_blank"><img src="./../../assets/images/footer/facebook.png"></a>
                    <a href="https://twitter.com/puppycubeai" target="_blank"><img src="./../../assets/images/footer/twitter.png"></a>
                    <a href="https://www.instagram.com/puppycubeai/" target="_blank"><img src="./../../assets/images/footer/instagram.png"></a>
                    <a href="https://www.youtube.com/channel/UCHigMQdlEXhRskshOnjrCYg" target="_blank"><img src="./../../assets/images/footer/Youtube.png"></a>
                    
                    </div>
                </div>

            </div>
        </div>
      </div>
    <div class="recordInfo">
        <div class="footerLeft_re"></div>
        <div class="footerMid_re">Copyright © {{cYear}} puppyrobot. All rights reserved.</div>
        <!-- <div class="footerRight_re">
            <div class="selector">
                <img src="./../../assets/images/footer/english.png">
            </div>
            <div class="selector">
                <select v-model="currentLanguage" @change="languageChanged()">
                    <option value="1">中文</option>
                    <option value="2">English</option>
                </select>
            </div>
           
        </div> -->
        
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
    mounted() {
        let date = new Date();
        this.cYear = date.getFullYear().toString();
    },
    methods: {
        languageChanged() {
            if(this.currentLanguage == 1) {
                // if(window.location.host == "test.hachismart.com") {
                //     window.location.href = "http://test.hachismart.com";
                // }else {
                    window.location.href = "http://www.hachismart.com";
                // }
            } else {
                // if(window.location.host == "test.hachismart.com") {
                //     window.location.href = "http://test.hachismart.com/en/";
                // }else {
                    window.location.href = "http://www.puppyrobot.com/en/";
                // }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
    $footerHeight: 260px;
    $footerColor: #f1f1f1;

    #pagefooter {
        width: 100%;
        z-index: -1;
        font-size: 14px;
        background-color: #f1f1f1;
        // margin-top: 20px;
        
    }

    .pagefooterTop {
        width: 100%;
        text-align: center;
        background-color: $footerColor;
        height: 312px;
    }

    .pagefooterMid {
        width: 1280px;
        margin: 0 auto;
    }

    .footerInfo {
        height: $footerHeight;
        width: 100%;
        background-color: $footerColor;
        padding-top: 50px;
        box-sizing: border-box;
    }

    .recordInfo {
        background-color: #f1f1f1;
        height: 80px;
        font-size: 12px;
        width: 1280px;
        margin: 0 auto;
        position: relative;
        line-height: 80px;
        border-top: 1px solid #d6d6d6;
    }

    .footerLeft_re,.footerRight_re {
        width: 30%;
        height: 80px;
        text-align: right;
        float: left;
        line-height: 80px;
        img {
            // margin-top: 25px;
            margin-bottom: -10px;
        }

        select {
            cursor: pointer;
            border: none;
            margin-right: 15px;
        }
    }

    .footerMid_re {
        width: 40%;
        height: 80px;
        float: left;
        font-size: 14px;
        font-family: "Microsoft YaHei";
    }

    .selector {
        float: right;
        line-height: 80px;
        background-color: #f1f1f1;
    }

    .footerLeft {
        // height: $footerHeight;
        float: left;
        width: 690px;
        .footerLeft_div {
            width: 150px;
            height: 140px;
            float: left;
            text-align: left;
            padding-right: 80px;
        }

        span {
            padding-top: 50px;
            font-family: "Microsoft YaHei";
            font-size: 22px;
        }

        .underline {
            width: 138px;
            height: 2px;
            background-color: #000000;
            margin-top: 2px;
        }

        .sub_title {
            margin-top: 10px;
            font-size: 16px;
            font-weight: lighter;
            font-family: "Microsoft YaHei";
            a:hover{
                color: #929497;
            }
        }
    }

    .footerMid {
        float: left;
        width: 20%;


        .footerMid_1 {
            width: 100%;

            .footerMid_img {
            width: 100%;
            margin-top: 20px;
            height:140px;
            float: left;
            text-align: center;
            }
        }
    }

    .footerRight {
        // height: $footerHeight;
        float: right;
        text-align: left;
        font-size: 16px;
        font-weight: lighter;
        font-family: "Microsoft YaHei";
        .contact {
            margin-top: 50px;
            margin-bottom: 15px;
        }

        img {
            margin-right: 30px;
            cursor: pointer;
        }
        
    }

    a {
        text-decoration-line: none;
        color: black;
    }

    .service {
        // padding-top: 20px;
        line-height: 25px;
    }

    a:link{text-decoration:none;}
    a:visited{text-decoration:none;}
    a:active{text-decoration:none;}
</style>
