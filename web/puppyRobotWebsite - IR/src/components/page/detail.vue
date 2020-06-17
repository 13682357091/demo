<template>
    <div id="detail">
        <img v-if="type == 'AIoTPM'" src="./../../assets/images/IR/AIoT_PM.jpg">
        <img v-if="type == 'F_FD'" src="./../../assets/images/IR/F_FD.jpg">
        <img v-if="type == 'F_ASM'" src="./../../assets/images/IR/F_ASM.jpg">
        <img v-if="type == 'SH_Purchaser'" src="./../../assets/images/IR/SH_Purchaser.jpg">
        <img v-if="type == 'AS_TD'" src="./../../assets/images/IR/AS_TD.jpg">
        <img v-if="type == 'SH_JESE'" src="./../../assets/images/IR/SH_JESE.jpg">
        <img v-if="type == 'SH_JMHE'" src="./../../assets/images/IR/SH_JMHE.jpg">
        <img v-if="type == 'SR_NAE'" src="./../../assets/images/IR/SR_NAE.jpg">
        <img v-if="type == 'SH_SEE'" src="./../../assets/images/IR/SH_SEE.jpg">
        <img v-if="type == 'AI_TD'" src="./../../assets/images/IR/AI_TD.jpg">
        <img v-if="type == 'AIoT_EdSales'" src="./../../assets/images/IR/AIoT_EdSales.jpg">
        <img v-if="type == 'SH_SDE'" src="./../../assets/images/IR/SH_SDE.jpg">
        <img v-if="type == 'ALOT_Android_MSDDE'" src="./../../assets/images/IR/ALOT_Android_MSDDE.jpg">
        <img v-if="type == 'SR_BDD'" src="./../../assets/images/IR/SR_BDD.jpg">
        <img v-if="type == 'AS_BDD'" src="./../../assets/images/IR/AS_BDD.jpg">
        <img v-if="type == 'OR_ROSE'" src="./../../assets/images/IR/OR_ROSE.jpg">
        <img v-if="type == 'AS_Sales-VP'" src="./../../assets/images/IR/AS_Sales-VP.jpg">

        <img v-if="type == 'SR_RPM'" src="./../../assets/images/IR/SR_RPM.jpg">

        <img v-if="type == 'AIoT_CM'" src="./../../assets/images/IR/AIoT_CM.jpg">

        <img v-if="type == 'AS_FullStackE'" src="./../../assets/images/IR/AS_FullStackE.jpg">

        <img v-if="type == 'AS_DLAR'" src="./../../assets/images/IR/AS_DLAR.jpg">

        <img v-if="type == 'OR_SDE'" src="./../../assets/images/IR/OR_SDE.jpg">

        <img v-if="type == 'F_TS'" src="./../../assets/images/IR/F_TS.jpg">

        <img v-if="type == 'AS_DE'" src="./../../assets/images/IR/AS_DE.jpg">

        <img v-if="type == 'AIoT_OO'" src="./../../assets/images/IR/AIoT_OO.jpg">

        <img v-if="type == 'SH_AiSTE'" src="./../../assets/images/IR/SH_AiSTE.jpg">

        <img v-if="type == 'SH_SD'" src="./../../assets/images/IR/SH_SD.jpg">
        <img v-if="type == 'SH_KAM'" src="./../../assets/images/IR/SH_KAM.jpg">

            <div class="float_btn">
                <router-link to="/ir">
                    <img src="./../../assets/images/IR/return_index.png">
                </router-link>
                <router-link to="/rewards">
                    <img src="./../../assets/images/IR/rewards.png">
                </router-link>


            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            type : ''
        }
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
    }
}
</script>


<style lang="scss" scoped>

#detail {
    max-width: 500px;
    margin:0 auto;
}
img {
    display: block;
    width: 100%;
}

    .float_btn {
        position: fixed;
        top: 25px;
        right: 20px;
        width: 60px;
    }
</style>
