import Vue from 'vue'
import Router from 'vue-router'
import IR from './../components/page/IR'
import Rewards from './../components/page/rewards'
import Detail from './../components/page/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    { path: '/ir', name: 'IR', component: IR},
    { path: '/rewards', name: 'Rewards', component: Rewards},
    { path: '/detail', name: 'Detail', component: Detail},
  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
  
})
