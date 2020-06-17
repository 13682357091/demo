import Vue from 'vue'
import Router from 'vue-router'
import JobList from './../components/page/JobList'
import JobDetail from './../components/page/JobDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    { path: '/', name: 'JobList', component: JobList},
    { path: '/JobDetail', name: 'JobDetail', component: JobDetail},

  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
  
})
