import {getExecute, postExcute} from './../components/axios/api';

export default {
    actions: {
        GetCompanyIntro: function(para) {
            var parameters = {
                _: Date.parse(new Date())
            }
            return new Promise((resolve, reject) => {
                getExecute(parameters).then(res=>{
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

        UpdateCompanyIntro: function(para) {
            var parameters = {
                h: 'save',
                profile_id: para.rootState.profile_id,
                profile: para.rootState.profile,
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

        AddCompanyIntro: function(para) {
            var parameters = {
                h: 'add',
                profile: para.rootState.profile,
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