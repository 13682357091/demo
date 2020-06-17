import Vue from 'vue'
import Router from 'vue-router'
import Instruction from './../components/page/Instruction'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    { path: '/support', name: 'Instruction', component: Instruction},
  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
  
})
