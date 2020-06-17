import Vue from 'vue'
import Router from 'vue-router'
import Login from './../components/page/Login'
import CarouselImage from './../components/page/CarouselImage'
import JobMgr from './../components/page/JobMgr'
import ParaMgr from './../components/page/ParaMgr'
import CompanyIntro from './../components/page/CompanyIntro'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    { path: '/', name: 'Login', component: Login},
    { path: '/CarouselImage', name: 'CarouselImage', component: CarouselImage},
    { path: '/JobMgr', name: 'JobMgr', component: JobMgr},
    { path: '/ParaMgr', name: 'ParaMgr', component: ParaMgr},
    { path: '/CompanyIntro', name: 'CompanyIntro', component: CompanyIntro},

  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
  
})
