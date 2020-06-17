import {getExecute, postExcute} from './../components/axios/api';

export default {
    actions: {
        GetCarouselImage: function(para) {
            var parameters = {
                act: 'carousel',
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

        SaveCarouselImage: function(para) {
            var parameters = {
                act: 'carousel',
                h: 'save',
                carousel_id: para.rootState.carousel_id,
                order_num: para.rootState.order_num,
                img_id: para.rootState.img_id,
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

        AddCarouselImage: function(para) {
            var parameters = {
                act: 'carousel',
                h: 'add',
                order_num: para.rootState.order_num,
                img_id: para.rootState.img_id,
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

        DelCarouselImage: function(para) {
            var parameters = {
                act: 'carousel',
                h: 'del',
                carousel_id: para.rootState.carousel_id,
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
    }
  }