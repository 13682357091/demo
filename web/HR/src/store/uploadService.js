import {postExcute} from './../components/axios/api';

export default {
    actions: {
    
        ImageUpload: function(para) {
            var parameters = {
                act: 'carousel',
                data: para.rootState.image,
                _: Date.parse(new Date())
            }

            return new Promise((resolve, reject) => {
                postExcute(parameters).then(res=>{
                    if(res.status == 200) {
                        resolve(res.data);
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