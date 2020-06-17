
<template>
  <div id="contactus">
    <div class="content">
        <div class="contacting">Contacting Puppy</div>
        <div class="textarea">
            <input id='client_name' v-model="clientInfo.name" placeholder="Name" type="text" maxlength="35" />
            <input id='client_email' v-model="clientInfo.email" placeholder="Email Address" type="text" maxlength="50" />
            <br/>
            <textarea id='client_message' v-model="clientInfo.message" placeholder="Message" overflow="hidden" maxlength="5000" />
        </div>
        <div class="sub_5">
            <div v-show="emailError"><div><img src="./../../assets/images/red_circle.png"></div><div class="word_style color_red">Please enter a valid email address.</div></div>
            <div v-show="subscribeSuccess"><div><img src="./../../assets/images/green_circle.png"></div><div class="word_style color_green">Submit success. We will contact with you as soon as possible.</div></div>
        </div>
        <div class="submit" @click="submitClientMessage()">Submit</div>

        <div class="contact_info">
            <div class="info_left">
                <p><span class="title">Distribution & Partnership:</span><span class="con"> overseas@puppyrobot.com</span></p>
                <p><span class="title">Media Inquiries:</span><span class="con"> overseas@puppyrobot.com</span></p>
                <p><span class="title">Customer Support:</span><span class="con"> overseas@puppyrobot.com</span></p>
            </div>
            <div class="colsperate"></div>
            <div class="icon">
                <a href="https://www.facebook.com/puppycubeAI/?modal=admin_todo_tour" target="_blank"><img src="./../../assets/images/contact/facebook.png"></a>
                <a href="https://twitter.com/puppyrobot3" target="_blank"><img src="./../../assets/images/contact/twitter.png"></a>
                <a href="https://www.youtube.com/channel/UCHigMQdlEXhRskshOnjrCYg" target="_blank"><img src="./../../assets/images/contact/youtube.png"></a>
                <a href="https://www.instagram.com/puppycubeai/" target="_blank"><img src="./../../assets/images/contact/ins.png"></a>
            </div>
            <div classs="clear"></div>
        </div>
    </div>
  </div>
</template>

<script>
import {postClientSubmit} from './../axios/api';
export default {
    data() {
        return { 
            clientInfo: {
                name: '',
                email: '',
                message: '',
                type: '1',
            },
            emailError: false,
            subscribeSuccess: false,
        }
    },
    watch: {
        'clientInfo.email' : 'initMsg',
    },

    methods: {
        submitClientMessage: function(){
            if(!this.clientInfo.name){
                this.autoFocus("client_name");
                return;
            }

            if(!this.clientInfo.email){
                this.autoFocus("client_email");
                return;
            } else {
                if(!this.fChkMail(this.clientInfo.email)){
                    this.emailError = true;
                    return;
                }
            }

            if(!this.clientInfo.message){
                this.autoFocus("client_message");
                return;
            }

            var that = this;
            console.log('Save Subscribe...');
            postClientSubmit(this.clientInfo).then(res => {
            if (res.status == 200) {
                this.initClientMsg();
                this.$nextTick(function () {
                  this.subscribeSuccess = true;
                })
                console.log('Save Success...');
            } else {
                this.errMsg = "unknow error";
                console.log('error...');
            }
            }).catch(err => {
            console.log(err, 'fail');
            })
        },

        initClientMsg: function() {
            this.clientInfo.name = '';
            this.clientInfo.email = '';
            this.clientInfo.message = '';
        },

        fChkMail: function(szMail){ 
            szMail=szMail.toLowerCase();
            var szReg=/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/; 
            var bChk=szReg.test(szMail); 
            return bChk; 
        },

        autoFocus: function(elementId){               
            var pFocus = document.getElementById(elementId); 
            pFocus.focus();      
            pFocus.select();      
        },
        initMsg() {
            this.emailError = false;
            this.subscribeSuccess = false;
        }          
    }
}
</script>




<style lang="scss" scoped>
$hachiSMB: 46px;

    .content {
        width: 1280px;
        margin: 0 auto;
    }

    .contacting {
        width: 100%;
        font-size: 40px;
        margin-top: 70px;
        font-family: 'NeutraText-Book';
    }

    .textarea {
        margin-top: 48px;
    }

    #client_name, #client_email {
        width: 471px;
        height: 51px;
        padding-left: 10px;
        margin-left: 15px;
        margin-right: 13px;
        font-size: 20px;
        font-family: 'NeutraText-Book';
    }

    #client_message {
        width: 990px;
        height: 202px;
        margin-top: 45px;
        margin-bottom: 10px;
        padding-left: 10px;
        padding-top: 5px;
        font-size: 20px;
        font-family: 'NeutraText-Book';
        resize: none;
    }

    .submit {
        width: 165px;
        height: 50px;
        font-family: 'NeutraText-Book';
        font-size: 22px;
        background-color: #494949;
        margin: 0 auto;
        line-height: 50px;
        color: white;
        border-radius:3px 3px 3px 3px;
        -webkit-box-shadow: 0px 0px 15px #aaa7a7;//（这是专对火狐浏览器的支持而设置的）
        -moz-box-shadow: 0px 0px 15px #aaa7a7;//（这是对Safari和Chrome浏览器而设置的）
        box-shadow: 0px 0px 15px #aaa7a7;
        cursor: pointer;
    }

    .contact_info {
        padding-top: 95px;
        padding-bottom: 80px;
        width: 990px;
        margin: 0 auto;
        height: 160px;
        .info_left{
            width: 495px;
            float: left;
        }

        .title {
            font-family: 'NeutraText-Bold';
            font-size: 20px;
        }
        .con {
            font-family: 'NeutraText-Book';
            font-size: 20px;
        }

        .colsperate {
            width: 29px;
            height: 160px;
            border-right: 2px solid #a0a0a0;
            float: left;
        }

        .icon {
            width: 460px;
            height: 108px;
            float: left;
            margin-top: 52px;
            img {
                margin-left: 19px;
                margin-right: 19px;
            }
        }
    }

    .clear {
        clear: both;
    }

    
.sub_5 {
  width: 1004px;
  height: 50px;
  text-align: left;
  margin: 0 auto;
  padding-top: 5px;
  img {
    margin-top: -200px;
  }
  div {
    float: left;
  }
  .word_style {
    font-size: 20px;
    font-family: "NeutraText-Book";
    line-height: 20px;
    margin-left: 10px;
  }

  .color_red {
    color: #d70519;
  }

  .color_green {
    color: #23b506;
  }
}

</style>
