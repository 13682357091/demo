import {getInstructionMenuList, getInstructionContent} from './../components/axios/api';

export default {
    actions: {
        getInstructionMenu: function(para) {
            return new Promise((resolve, reject) => {
                let menuId = para.rootState.menuId;
                getInstructionMenuList(menuId).then(res=>{
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

        getInstruction: function(node_id) {
            return new Promise((resolve, reject) => {
                getInstructionContent(node_id.rootState.node_id).then(res=>{
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