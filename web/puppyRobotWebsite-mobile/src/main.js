// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios';
import 'babel-polyfill'
import ba from 'vue-ba'
Vue.use(ba, "8b300ea55036a91020ec3a30b3b4ccfb");
Vue.use(ba, { siteId: "8b300ea55036a91020ec3a30b3b4ccfb" });
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.use(ElementUI);


router.beforeEach((to, from, next) => {

  if(to.path != '/newsdetail' && to.path != '/videodetail') {
    //路由发生变化修改页面title
    if(to.meta.title) {
      document.title = to.meta.title;
    }
    //路由发生变化修改页面description
    if(to.meta.description) {
      document.querySelector('meta[name="Description"]').setAttribute('content', to.meta.description);
    }
  }

  // 统计代码
  if (to.path) {
    if (window._hmt) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath]);
    }
  }

  document.body.scrollTop = 0;

  next();

  });

  router.afterEach( ( to, from, next ) => {
    setTimeout(()=>{
      // var_hmt = _hmt || [];
      (function() {
       //每次执行前，先移除上次插入的代码
       document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
       var hm = document.createElement("script");
       hm.src ="https://hm.baidu.com/hm.js?8b300ea55036a91020ec3a30b3b4ccfb";
       hm.id ="baidu_tj"
       var s = document.getElementsByTagName("script")[0];
       s.parentNode.insertBefore(hm, s);
      })();
    },0);
   } );
  
    // GA初始化
// if (process.env.GA) {
//   Vue.use(VueAnalytics, {
//     id: process.env.GA, // 从配置中读取
//     disableScriptLoader: true, // 必须在html中完成初始化，这里显式禁止去下载ga脚本
//     router, // 确保路由切换时可以自动统计
//     autoTracking: {
//       pageviewOnLoad: false // 当通过网址进来时已经GA在初始化时就发起一次pageview的统计，这里不要重复统计
//     }
//   })
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


