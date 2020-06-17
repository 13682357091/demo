import {postExcute} from './../components/axios/api';

const MyUploadAdapter = class  {
    constructor( loader ) {
        // The file loader instance to use during the upload.
        this.loader = loader;
    }
    
    async upload() {
        let imageFile = await this.loader.file;
        return new Promise((resolve, reject) => {
            this.getBase64(imageFile).then(res => {
                let temp = _.split(res,',')[1];
                var parameters = {
                    act: 'icon',
                    data: temp,
                    _: Date.parse(new Date())
                }
            
                postExcute(parameters).then(res=>{
                    if(res.status == 200) {
                        if(res.data.status == "success"){
                            let resData = res.data;
                            resData.default = resData.src;
                            resolve(resData);
                        }
                    } else {
                        console.log('错误...');
                    }
                }).catch(err=>{
                    reject(err);
                })
            });
        });
      }

    getBase64(file) {
        return new Promise(function (resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        reader.onload = function () {
            imgResult = reader.result;
        };
        reader.onerror = function (error) {
            reject(error);
        };
        reader.onloadend = function () {
            resolve(imgResult);
        };
        });
    }
}

export default MyUploadAdapter