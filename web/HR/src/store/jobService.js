import {getExecute, postExcute} from './../components/axios/api';

export default {
    actions: {
        GetJob: function(para) {
            var parameters = {
                act: 'job',
                job_id: para.rootState.job_id,
                job: para.rootState.job,
                add_id: para.rootState.add_id,
                dep_id: para.rootState.dep_id,
                fun_id: para.rootState.fun_id,
                usable: para.rootState.usable,
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

        EditJob: function(para) {
            var parameters = {
                act: 'job',
                h: 'save',
                job_id: para.rootState.job_id,
                job: para.rootState.job,
                add_id: para.rootState.add_id,
                dep_id: para.rootState.dep_id,
                fun_id: para.rootState.fun_id,
                usable: para.rootState.usable_num,
                job_des: para.rootState.job_des,
                mail: para.rootState.mail,
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

        AddJob: function(para) {
            var parameters = {
                act: 'job',
                h: 'add',
                job: para.rootState.job,
                add_id: para.rootState.add_id,
                dep_id: para.rootState.dep_id,
                fun_id: para.rootState.fun_id,
                usable: para.rootState.usable_num,
                job_des: para.rootState.job_des,
                mail: para.rootState.mail,
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

        ModifyStatus: function(para) {
            var parameters = {
                act: 'job',
                h: 'up_status',
                job_id: para.rootState.job_id,
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