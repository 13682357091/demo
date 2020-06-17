// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios';
import 'babel-polyfill'
import VueAnalytics from 'vue-analytics'
import './styles/index.less'
// import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  next()
  });

    // GA初始化
if (process.env.GA) {
  Vue.use(VueAnalytics, {
    id: process.env.GA, // 从配置中读取
    disableScriptLoader: true, // 必须在html中完成初始化，这里显式禁止去下载ga脚本
    router, // 确保路由切换时可以自动统计
    autoTracking: {
      pageviewOnLoad: false // 当通过网址进来时已经GA在初始化时就发起一次pageview的统计，这里不要重复统计
    }
  })
}

// Vue.use(VueLazyLoad,{
//   error:'./static/error.png',
//   loading:'./static/loading.png'
// })
  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


