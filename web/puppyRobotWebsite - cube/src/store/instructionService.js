import {getInstructionMenuList, getInstructionContent} from './../components/axios/api';

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
    }
  }