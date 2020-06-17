import {getTopNews, getNormalNews, getNewsDetail} from './../components/axios/api';

export default {
    states:{
        mediaLists: [],
    },
    actions: {
        getTopNewsInfo: function() {
            return new Promise((resolve, reject) => {
                getTopNews().then(res=>{
                    if(res.status == 200) {
                        this.mediaLists = res.data;
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

        getNewsDetailInfo: function(newsId) {
            return new Promise((resolve, reject) => {
                getNewsDetail(newsId.rootState.newsId).then(res=>{
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

        getNormalNewsInfo: function(pages) {
            return new Promise((resolve, reject) => {
                getNormalNews(pages.rootState.pages).then(res=>{
                    if(res.status == 200) {
                        if(!res.data.error){
                            resolve(res.data);
                        } else {
                            resolve('');
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