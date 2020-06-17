import {getExecute, postExcute} from './../components/axios/api';

export default {
    actions: {
        GetParaList: function(para) {
            var parameters = {
                act: 'param',
                type_id: para.rootState.type_id,
                usable: para.rootState.usable,
                val: para.rootState.val,
                page: para.rootState.currentPage,
                size: para.rootState.pageSize,
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

        AddParam: function(para) {
            var parameters = {
                act: 'param',
                h: 'add',
                type_id: para.rootState.type_id,
                val: para.rootState.val,
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

        UpdateParam: function(para) {
            var parameters = {
                act: 'param',
                h: 'save',
                param_id: para.rootState.param_id,
                type_id: para.rootState.type_id,
                val: para.rootState.val,
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

        ModifyParamStatus: function(para) {
            var parameters = {
                act: 'param',
                h: 'up_status',
                param_id: para.rootState.param_id,
                usable: para.rootState.usable_num,
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