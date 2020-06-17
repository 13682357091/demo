import Vue from 'vue'
import Router from 'vue-router'
import PuppyCube from './../components/page/PuppyCube'
// import PuppyCubeS from './../components/page/PuppyCubeS'
import PuppyIndex from './../components/page/PuppyIndex'
import NewsCenter from './../components/page/NewsCenter'
import VideoCenter from './../components/page/VideoCenter'
import VideoDetail from './../components/page/VideoDetail'
import NewsDetail from './../components/page/NewsDetail'
import ContactUS from './../components/page/ContactUS'
import AboutUS from './../components/page/AboutUS'
import LegalNotices from './../components/page/LegalNotices'
import PrivacyProtection from './../components/page/PrivacyProtection'
import TechSpec from './../components/page/TechSpec'
import Questionnaire from './../components/page/Questionnaire'
import Instruction from './../components/page/Instruction'
import InstructionM1 from './../components/page/InstructionM1'
import Support from './../components/page/Support'
import HachiInfinite from './../components/page/HachiInfinite'

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
    { path: '/puppycube', name: 'PuppyCube', component: PuppyCube },
    { path: '/newscenter', name: 'NewsCenter', component: NewsCenter },
    { path: '/videocenter', name: 'VideoCenter', component: VideoCenter },
    { path: '/videodetail', name: 'VideoDetail', component: VideoDetail},
    { path: '/newsdetail', name: 'NewsDetail', component: NewsDetail},
    { path: '/contact', name: 'ContactUS', component: ContactUS},
    { path: '/aboutus', name: 'AboutUS', component: AboutUS},
    { path: '/legalnotices', name: 'LegalNotices', component: LegalNotices},
    { path: '/privacyprotection', name: 'PrivacyProtection', component: PrivacyProtection},
    { path: '/techspec', name: 'TechSpec', component: TechSpec},
    { path: '/questionnaire', name: 'Questionnaire', component: Questionnaire},
    { path: '/instruction', name: 'Instruction', component: Instruction},
    { path: '/support', name: 'Support', component: Support},
    { path: '/hachiinfinite', name: 'HachiInfinite', component: HachiInfinite},
    { path: '/manual', name: 'InstructionM1', component: InstructionM1},
  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  },  
})
