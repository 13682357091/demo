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
                        console.log('error...');
                        // return [];
                    }
                }).catch(err=>{
                    console.log(err, 'fail');
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
                        console.log('error...');
                    }
                }).catch(err=>{
                    console.log(err, 'fail');
                    reject(err);
                })
            })
        },
    }
  }