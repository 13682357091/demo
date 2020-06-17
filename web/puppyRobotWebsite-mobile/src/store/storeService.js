import {getProvinceList, getStoreOfProvince} from './../components/axios/api';

export default {
    actions: {
        getProvinceList: function() {
            return new Promise((resolve, reject) => {
                getProvinceList().then(res=>{
                    if(res.status == 200) {
                        if(!res.data.error){
                            resolve(res.data);
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

        getStoreOfProvince: function(provinceId) {
            return new Promise((resolve, reject) => {
                getStoreOfProvince(provinceId.rootState.provinceId).then(res=>{
                    if(res.status == 200) {
                        if(!res.data.error){
                            resolve(res.data);
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