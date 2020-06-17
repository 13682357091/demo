import Vue from 'vue'
import Router from 'vue-router'
import JoinUS from './../components/page/JoinUS'
import LegalNotices from './../components/page/LegalNotices'
import PrivacyProtection from './../components/page/PrivacyProtection'

import PuppyIndex from './../components/page/M_Index'
import PuppyCube from './../components/page/M_PuppyCube'
import PuppyCubeS from './../components/page/M_PuppyCubeS'
import NewsDetail from './../components/page/M_NewsDetail'
import AboutUs from './../components/page/AboutUs'
import Contact from './../components/page/Contact'
import NewsCenter from './../components/page/NewsCenter'
import VideoCenter from './../components/page/VideoCenter'
import TechSpec from './../components/page/TechSpec'
import Instruction from './../components/page/Instruction'
import HachiInfinite from './../components/page/HachiInfinite'
import M1techspec from './../components/page/M1_techspec'

Vue.use(Router)

function getAbsolutePath() {
  let path = location.pathname;
  return path.substring(0, path.lastIndexOf('/') + 1)
}

export default new Router({
  mode: 'history',  
  base: getAbsolutePath(),
  routes: [
    { path: '/', name: 'PuppyIndex', component: PuppyIndex },
    { path: '/joinus', name: 'JoinUS', component: JoinUS },
    { path: '/legalnotices', name: 'LegalNotices', component: LegalNotices},
    { path: '/privacyprotection', name: 'PrivacyProtection', component: PrivacyProtection},
    { path: '/puppycube', name: 'PuppyCube', component: PuppyCube },
    { path: '/puppycubes', name: 'PuppyCubeS', component: PuppyCubeS },
    { path: '/newsdetail', name: 'NewsDetail', component: NewsDetail},
    { path: '/aboutus', name: 'AboutUs', component: AboutUs},
    { path: '/contact', name: 'Contact', component: Contact},
    { path: '/newscenter', name: 'NewsCenter', component: NewsCenter},
    { path: '/videoCenter', name: 'VideoCenter', component: VideoCenter},
    { path: '/techspec', name: 'TechSpec', component: TechSpec},
    { path: '/instruction', name: 'Instruction', component: Instruction},
    { path: '/hachiinfinite', name: 'HachiInfinite', component: HachiInfinite},
    { path: '/m1Techspec', name: 'M1techspec', component: M1techspec}
  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
  
})
