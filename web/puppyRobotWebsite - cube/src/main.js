// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios';
import 'babel-polyfill'

Vue.config.productionTip = false
Vue.prototype.$http = axios;

router.beforeEach((to, from, next) => {
  document.body.scrollTop = 0;
  next()
  });
  
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})


