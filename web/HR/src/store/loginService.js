import {login} from './../components/axios/api';

export default {
    actions: {
        Login: function(para) {
            return new Promise((resolve, reject) => {
                login(para.rootState.username, para.rootState.password).then(res=>{
                    if(res.status == 200) {
                        if(!res.data.error){
                            resolve(res.data);
                        } else {
                            console.log(res.data.error);
                        }
                    } else {
                        console.log('错误...');
                    }
                }).catch(err=>{
                    reject(err);
                })
            })
        },
    }
  }