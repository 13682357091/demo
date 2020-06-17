<template>
  <div id="support">
      <div class="main">
          <div class="type_title">
                <div class="title" v-if="type=='documents'">Download Center</div>
                <div class="title" v-if="type=='FAQ'">FAQ
                    <div class="sub_title">Frequently Asked Questions</div>
                </div>
                <div class="title" v-if="type=='ProcessWarranty'">Process Warranty</div>
                <div class="title" v-if="type=='LegalNotice'">Legal Notice</div>
                <div class="title" v-if="type=='PrivacyPolicy'">Privacy Policy</div>
          </div>
          <div class="support_content">
              <div class="support_left">
                  <router-link to="/support?type=FAQ"><div :class="type=='FAQ'?'current_type cursor':'cursor'" >FAQ</div></router-link>
                  <router-link to="/support?type=documents"><div :class="type=='documents'?'current_type cursor':'cursor'">Documents</div></router-link>
                  <router-link to="/support?type=ProcessWarranty"><div :class="type=='ProcessWarranty'?'current_type cursor':'cursor'">Process Warranty</div></router-link>
                  <router-link to="/support?type=LegalNotice"><div :class="type=='LegalNotice'?'current_type cursor':'cursor'">Legal Notice</div></router-link>
                  <router-link to="/support?type=PrivacyPolicy"><div :class="type=='PrivacyPolicy'?'current_type cursor':'cursor'">Privacy Policy</div></router-link>

              </div>

              <div class="support_right">
                  <s-f-a-q v-if="type=='FAQ'"></s-f-a-q>
                  <s-documents v-if="type=='documents'"></s-documents>
                  <s-process-warranty v-if="type=='ProcessWarranty'"></s-process-warranty>
                  <s-legal-notice v-if="type=='LegalNotice'"></s-legal-notice>
                  <s-privacy-policy v-if="type=='PrivacyPolicy'"></s-privacy-policy>
              </div>
              <div class="clear"></div>
          </div>
      </div>
  </div>
</template>

<script>
import sFAQ from './support/FAQ'
import sDocuments from './support/Documents'
import sProcessWarranty from './support/ProcessWarranty'
import sLegalNotice from './support/LegalNotice'
import sPrivacyPolicy from './support/PrivacyPolicy'
export default {
    data() {
        return {
            type: 'documents',
        }
    },

    components: {
        sFAQ,
        sDocuments,
        sProcessWarranty,
        sLegalNotice,
        sPrivacyPolicy
    },

    mounted(){
        this.type = this.GetQueryString('type');
    },
    watch: {
        // 监听路由参数发生变化，重新加载页面
        "$route": "refreshType"
    },

    methods: {
        GetQueryString: function(name){
            var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if(r!=null) {
                return  unescape(r[2]);
            }else { 
                return null;
            }
        },
        refreshType: function() {
            this.type = this.GetQueryString('type');
        },
        changeCurrType: function(currType) {
            this.type = currType;
        }
    }
}
</script>
<style lang="scss" scoped>
    #support {
        width: 100%;
        background-color: #fafafa;
    }

    .main {
        width: 1080px;
        margin: 0 auto;
    }

    .type_title {
        width: 100%;
        height: 148px;
        
        font-family: "NeutraText-Book";
        .title {
            padding-top: 50px;
            font-size: 40px;
            text-align: right;
        }

        .sub_title {
            margin-top: -5px;
            font-size: 20px;
            text-align: right;
        }
    }

    .support_content {
        padding-bottom: 40px;
    }

    .support_left {
        width: 352px;
        height: 303px;
        background-color: white;
        font-size: 22px;
        font-family: "NeutraText-Book";
        padding-top: 17px;
        padding-bottom: 17px;
        float: left;
        div {
            width: 100%;
            height: 50px;
            line-height: 50px;
        }

        .current_type {
            background-color: #f0f0f0;
        }

        .cursor {
            cursor:pointer;
        }
    }

    .support_right {
        width: 641px;
        min-height: 500px;
        padding: 30px 30px 30px 30px;
        margin-left: 25px;
        float: left;
        background-color: white;

    }

    .clear {
        clear: both;
    }

    a {
        color: black;
        text-decoration-line: none;
    }

</style>