import {videoList, videoMore, videoContent} from './../components/axios/api';

export default {
    actions: {
        getVideoList: function() {
            return new Promise((resolve, reject) => {
                videoList().then(res=>{
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

        getVideoMore: function(para) {
            return new Promise((resolve, reject) => {
                videoMore(para.rootState.videoType, para.rootState.pageIndex).then(res=>{
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

        getVideoContent: function(videoId) {
            return new Promise((resolve, reject) => {
                videoContent(videoId.rootState.videoId).then(res=>{
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