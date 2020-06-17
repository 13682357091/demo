import {getInstructionMenuList, getInstructionContent,getInstructionMenuListM1, getInstructionContentM1} from './../components/axios/api';

export default {
    actions: {
        getInstructionMenu: function() {
            return new Promise((resolve, reject) => {
                getInstructionMenuList().then(res=>{
                    if(res.status == 200) {
                        if(!res.data.error){
                            resolve(res.data.data);
                        }
                    } else {
                        console.log('错误...');
                        // return [];
                    }
                }).catch(err=>{
                    console.log(err, '失败');
                    reject(err);
                })
            })
        },

        getInstruction: function(nid) {
            return new Promise((resolve, reject) => {
                getInstructionContent(nid.rootState.nid).then(res=>{
                    if(res.status == 200) {
                        if(!res.data.error){
                            resolve(res.data.data);
                        }
                    } else {
                        console.log('错误...');
                    }
                }).catch(err=>{
                    console.log(err, '失败');
                    reject(err);
                })
            })
        },
        getInstructionMenuM1: function(para) {
            return new Promise((resolve, reject) => {
                let menuId = para.rootState.menuId;
                getInstructionMenuListM1(menuId).then(res=>{
                    console.log(res);
                    if(res.status == 200) {
                        if(res.data.status == 'success'){
                            resolve(res.data.list);
                        }
                    } else {
                        console.log('错误...');
                        // return [];
                    }
                }).catch(err=>{
                    console.log(err, '失败');
                    reject(err);
                })
            })
        },

        getInstructionM1: function(node_id) {
            console.log(node_id);
            return new Promise((resolve, reject) => {
                getInstructionContentM1(node_id.rootState.node_id).then(res=>{
                    // console.log(res);
                    if(res.status == 200) {
                        if(res.data.status == 'success'){
                            resolve(res.data.info);
                        } else {
                            resolve(res.data.message);
                        }
                    } else {
                        console.log('错误...');
                    }
                }).catch(err=>{
                    console.log(err, '失败');
                    reject(err);
                })
            })
        },
    }
  }