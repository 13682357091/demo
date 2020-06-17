<template>
    <div>
        <div class="title">人事信息发布系统</div>

        <div class="login_container">
            <div class="lc1">账号密码登录</div>
            <div :class="username_exist?'lc2':'lc2 input_none'">
                <input id="username" class="input1"  @blur="input_blur('username')" type="text" v-model="username" placeholder="请输入账号" maxlength="13"/>
            </div>
            <div :class="password_exist?'lc3':'lc3 input_none'">
                <input id="password" class="input1" @keyup.enter.native="login()" @blur="input_blur('password')" type="password" v-model="password" placeholder="请输入密码" maxlength="13"/>
            </div>

            <div class="btn_login">
                <el-button class="btn" type="primary" v-loading.fullscreen.lock="login_btn_disabled" @click="login()">
                    登录
                </el-button>
            </div>
        </div>
    </div>
</template>

<script>
let _ = require('lodash');
export default {
    data(){
        return{
            username: '',
            password: '',
            username_exist: true,
            password_exist: true,  //默认没有填的时候认为有值
            login_btn_disabled: false,
        }
    },

    methods: {
        login(){
            let _this = this;
            this.login_btn_disabled = true;
            if(this.username && this.password){
                this.$store.state.username = this.username;
                this.$store.state.password = this.password;
                this.$store.dispatch('Login').then((result)=> { 
                    if(window.localStorage && result){
                        var storage = window.localStorage;
                        storage["token"] = result.token_type + " " + result.access_token;
                        storage["username"] = this.username;
                    }
                    this.login_btn_disabled = false;
                    this.$router.push({path:'/CarouselImage'});
                    return false;
                }).catch(err=>{
                    this.login_btn_disabled = false;
                    if(_.includes(err.toString(),'status code 401')) {
                        this.$message.error('用户名或密码输入错误，请重新输入。');
                        document.querySelector("#password").select();
                    } else {
                        this.$message.error('Network Error');
                    }
                    
                }); 
            } else {
                this.login_btn_disabled = false;
                if(!this.password) {
                    this.password_exist = false;
                    document.querySelector("#password").focus();
                }

                if(!this.username) {
                    this.username_exist = false;
                    document.querySelector("#username").focus();
                }
            }
        },

        input_blur(controlname) {
            if(controlname == 'username') {
                if(!this.username) {
                    this.username_exist = false;
                } else {
                    this.username_exist = true;
                }
            } else {
                if(!this.password) {
                    this.password_exist = false;
                } else {
                    this.password_exist = true;
                }
            }
        }
    }
}
</script>



<style lang="scss" scoped>
.title{
    white-space: nowrap;
    text-shadow: 2px 2px 5px rgba(51, 51, 51, 0.647058823529412);
    font-weight: 650;
    font-style: normal;
    font-size: 28px;
    color: #1E1E1E;
    margin-top: 100px;
    margin-bottom: 50px;
}

.login_container {
    width: 444px;
    height: 577px;
    background: inherit;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.349019607843137);
    -webkit-box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.349019607843137);
    box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.349019607843137);
    margin: 0 auto;
    position: relative;
}

.lc1 {
    position: absolute;
    left: 81px;
    top: 59px;
    width: 121px;
    height: 24px;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
}

.lc2 {
    position: absolute;
    left: 85px;
    top: 122px;
    width: 276px;
    height: 42px;
    border-bottom: 1px solid rgb(200, 200, 200);
}

.input1 {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 276px;
    height: 42px;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    text-decoration: none;
    text-align: left;
    border-color: transparent;
    background-color: transparent !important;
    outline-style: none;
    font-size: 16px; 
    // color: rgb(153, 153, 153); 
    text-align: left;
}

.input_none {
    border-bottom: 1px solid red !important;
}

.lc3 {
    position: absolute;
    left: 85px;
    top: 191px;
    width: 276px;
    height: 42px;
    border-bottom: 1px solid #c8c8c8;
}

input {
    padding: 1px 0px 0px 0px;
    box-sizing: border-box;
}

.btn_login {
    position: absolute;
    left: 78px;
    top: 268px;
    width: 290px;
    height: 40px;
}

.btn {
    width: 100%;
    height: 40px;
    font-size: 16px;
    background: inherit;
    background-color: rgba(24, 144, 255, 1);
    border: none;
    border-radius: 20px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #FFFFFF;
    font-family: 'Arial Normal', 'Arial';
    font-weight: 400;
    cursor: pointer;
}

</style>
