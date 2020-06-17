import Vue from 'vue'
import Router from 'vue-router'
import Instruction from './../components/page/Instruction'

Vue.use(Router)

function getAbsolutePath() {
  let path = location.pathname;
  return path.substring(0, path.lastIndexOf('/') + 1)
}

export default new Router({
  mode: 'history',  
  base: getAbsolutePath(),
  routes: [
    { path: '/support', name: 'Instruction', component: Instruction},
  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
  
})
