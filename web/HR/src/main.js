// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios';
import 'babel-polyfill'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// import CKEditor from '@ckeditor/ckeditor5-vue';
import global from './components/common/global'


Vue.use(ElementUI);
// Vue.use(CKEditor);

Vue.config.productionTip = false
Vue.prototype.$http = axios;
Vue.prototype.GLOBAL = global;

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


