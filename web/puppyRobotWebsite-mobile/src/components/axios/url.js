// export default {
//     Hallowmas:'/api',
//     //接口代理配置
//   }
  
export default {
    orderProduct: `http://bbs.hachismart.com/api/order/`,
    getNewsInfo: `http://cms.hachismart.com/restful/api/`,
    getInstruction: `http://cms.hachismart.com/restful/service/`,
    getStoreOfProvince: `http://cms.hachismart.com/api/dealer/`,
    video: `http://cms.hachismart.com/api/video/`,
    getManual: `http://api.puppyrobot.com/manual/api`,
}
  
  //也可以像下面这样，区分环境或者区分服务器等等
  // let service = 'dev';
  // // let service = 'prod';
  // let api = '';
  // if (service === 'dev') {
  //   /**dev开发**/
  //   api = '/stomatology/patient';
  // } else if (service === 'prod') {
  //   /**prod部署**/
  //   api = '/proxy/client';
  // }
  //
//   export default {
//     /**个人中心start**/
//     //1 获取c端个人信息 POST /wx/getClientInfo
//     getClientInfo: `${api}/wx/getClientInfo`,
//     //2 获取手机注册验证码 POST /wx/getClientRegisterCode
//     getClientRegisterCode: `${api}/wx/getClientRegisterCode`,
//     //3 绑定手机号 POST /wx/clientBindMobile
//     clientBindMobile: `${api}/wx/clientBindMobile`,
//     /**个人中心end**/
  
//   }