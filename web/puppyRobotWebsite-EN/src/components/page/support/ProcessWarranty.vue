<template>
    <div id="processwarranty">
        <div class="title">
            How it works
        </div>
        <div class="content">
            This page is for all users to reach out to us when you have issues with your product or to quickly help resolve any other issue you’re experiencing. We apologize in advance for whatever inconvenience may have caused.
            <br/><br/><span>Order ID:</span> You can find this in the order history of the account the purchase was made through.
            <br/><br/><span>Serial Number:</span> The Serial No. can be found on the bottom of the package  It’s located on a sticker look like: <span>PT01M10118360044</span>
        </div>
        <div class="title_2">
            Amazon
        </div>
        <div class="title_3">
            Contact Information
        </div>
        <div class="clientinfo_block">
            <div class="block_part">
                <div class="star_1">*</div>
                <div class="attri">Contact Name</div>
                <div class="txtbox">
                    <input id='name' v-model="clientInfo.name" type="text" maxlength="35" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="block_part bp_margin">
                <div class="star_1">*</div>
                <div class="attri">Email Address</div>
                <div class="txtbox">
                    <input id='email' v-model="clientInfo.email" type="text" maxlength="50" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>

        <div class="title_3">
            Order Information
        </div>
        <div class="clientinfo_block">
            <div class="block_part">
                <div class="star_1">*</div>
                <div class="attri">Order ID</div>
                <div class="txtbox">
                    <input id='order_id' v-model="clientInfo.order_id" type="text" maxlength="20" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="block_part bp_margin">
                <div class="star_1">*</div>
                <div class="attri">Serial Number</div>
                <div class="txtbox">
                    <input id='serial_number' v-model="clientInfo.serial_number" type="text" maxlength="20" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>

        <div class="title_3">
            Current Address
        </div>
        <div class="clientinfo_block">
            <div class="block_part">
                <div class="star_1">*</div>
                <div class="attri">Address Line 1</div>
                <div class="txtbox">
                    <input id='address_line_1' v-model="clientInfo.address_line_1" type="text" maxlength="70" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="block_part bp_margin">
                <div class="attri">Address Line 2</div>
                <div class="txtbox">
                    <input id='address_line_2' v-model="clientInfo.address_line_2" type="text" maxlength="70" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="clientinfo_block">
            <div class="block_part">
                <div class="star_1">*</div>
                <div class="attri">City</div>
                <div class="txtbox">
                    <input id='city' v-model="clientInfo.city" type="text" maxlength="30" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="block_part bp_margin">
                <div class="star_1">*</div>
                <div class="attri">State/Territory</div>
                <div class="txtbox">
                    <input id='state' v-model="clientInfo.state" type="text" maxlength="30" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="clientinfo_block">
            <div class="block_part">
                <div class="star_1">*</div>
                <div class="attri">Country</div>
                <div class="txtbox">
                    <input id='country' v-model="clientInfo.country" type="text" maxlength="30" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="block_part bp_margin">
                <div class="star_1">*</div>
                <div class="attri">Zip Code</div>
                <div class="txtbox">
                    <input id='zipcode' v-model="clientInfo.zipcode" type="text" maxlength="10" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="clientinfo_block">
            <div class="block_part">
                <div class="star_1">*</div>
                <div class="attri">Phone number</div>
                <div class="txtbox">
                    <input id='phone_number' v-model="clientInfo.phone_number" type="text" maxlength="15" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="clientinfo_block">
            <div class="block_part">
                <div class="star_1">*</div>
                <div class="attri">Issue Details</div>
                <div class="txtbox">
                    <textarea id='issue_details' v-model="clientInfo.issue_details" type="text" maxlength="5000" />
                </div>
                <div class="clear"></div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="margin_top_40">
            <div class="submit " @click="SubmitWarranty()">
                Submit
            </div>
        </div>
    </div>
</template>
<script>
import {postClientSubmit} from './../../axios/api';
export default {
    data() {
        return {
            clientInfo: {
                name:'',
                email:'',
                order_id:'',
                serial_number:'',
                address_line_1: '',
                address_line_2: '',
                city: '',
                state: '',
                country: '',
                zipcode: '',
                phone_number: '',
                issue_details: '',
                type: '2',
            }
        }
    },

    methods: {
        SubmitWarranty: function() {
            if(!this.clientInfo.name){
                this.autoFocus("name");
                return;
            }

            if(!this.clientInfo.email){
                this.autoFocus("email");
                return;
            } else {
                if(!this.fChkMail(this.clientInfo.email)){
                    this.errMsg = "Please enter a valid email address.";
                    alert(this.errMsg);
                    return;
                }
            }

            if(!this.clientInfo.order_id){
                this.autoFocus("order_id");
                return;
            }

            if(!this.clientInfo.serial_number){
                this.autoFocus("serial_number");
                return;
            }

            if(!this.clientInfo.address_line_1){
                this.autoFocus("address_line_1");
                return;
            }

            if(!this.clientInfo.city){
                this.autoFocus("city");
                return;
            }

            if(!this.clientInfo.state){
                this.autoFocus("state");
                return;
            }

            if(!this.clientInfo.country){
                this.autoFocus("country");
                return;
            }

            if(!this.clientInfo.zipcode){
                this.autoFocus("zipcode");
                return;
            }

            if(!this.clientInfo.phone_number){
                this.autoFocus("phone_number");
                return;
            }

            if(!this.clientInfo.issue_details){
                this.autoFocus("issue_details");
                return;
            }

            var that = this;
            console.log('Save Warranty...');
            postClientSubmit(this.clientInfo).then(res => {
            if (res.status == 200) {
                alert('Ticket submit success.');
                this.initWarranty();
                console.log('Save Success...');
            } else {
                this.errMsg = "unknow error";
                console.log('error...');
            }
            }).catch(err => {
            console.log(err, 'fail');
            })
        },

        initWarranty: function() {
            this.clientInfo.name='';
            this.clientInfo.email='';
            this.clientInfo.order_id='';
            this.clientInfo.serial_number='';
            this.clientInfo.address_line_1='';
            this.clientInfo.address_line_2='';
            this.clientInfo.city='';
            this.clientInfo.state='';
            this.clientInfo.country='';
            this.clientInfo.zipcode='';
            this.clientInfo.phone_number='';
            this.clientInfo.issue_details='';
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
        }       
    }
}
</script>



<style lang="scss" scoped>
#processwarranty {
    text-align: left;
    font-family: "NeutraText-Book";
    margin-bottom: 20px;
}

.title {
    font-size: 36px;
}

.title_2 {
    font-size: 30px;
    margin-top: 90px;
    margin-bottom: 17px;
}

.title_3 {
    font-size: 26px;
    margin-top: 53px;
}

.content {
    font-size: 20px;
    span{
        font-family: "NeutraText-Bold";
    }
    margin-top: 60px;
}

.clientinfo_block {
    margin-top: 30px;
}

.block_part {
    float: left;
}

.bp_margin {
    margin-left: 20px;
}

.star_1 {
    color: red;
    font-size: 30px;
    margin-left: -15px;
    float: left;
}

.attri {
    font-size: 20px;
}

.txtbox {
    input {
        width: 300px;
        height: 36px;
        font-size: 20px;
        margin-top: 5px;
        font-family: "NeutraText-Book";
        padding-left: 5px;
        line-height: 20px;
    }

    textarea {
        width: 633px;
        height: 176px;
        resize: none;
        font-size: 20px;
        margin-top: 5px;
        font-family: "NeutraText-Book";
        padding-left: 5px;
    }
}

.margin_top_40 {
    margin-top: 40px;
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
    text-align: center;
}

.clear {
    clear: both;
}
</style>

