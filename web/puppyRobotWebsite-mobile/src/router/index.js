import Vue from 'vue'
import Router from 'vue-router'
import JoinUS from './../components/page/JoinUS'
import LegalNotices from './../components/page/LegalNotices'


import PuppyIndex from './../components/page/M_Index'
import PuppyCube from './../components/page/M_PuppyCube'
import PuppyCubeS from './../components/page/M_PuppyCubeS'
import puppybingo from './../components/page/M_puppybingo'
import puppyauto from './../components/page/M_puppyauto'
import NewsDetail from './../components/page/M_NewsDetail'
import AboutUs from './../components/page/AboutUs'
import Cooperate from './../components/page/Cooperate'
import Contact from './../components/page/Contact'
import NewsCenter from './../components/page/NewsCenter'
import VideoCenter from './../components/page/VideoCenter'
import VideoDetail from './../components/page/VideoDetail'
import AIoT from './../components/page/AIoT'
import Robot from './../components/page/Robot'
import SmartSight from './../components/page/SmartSight'
import Solution from './../components/page/Solution'
import Product from './../components/page/Product'
import Cases from './../components/page/Cases'
import Support from './../components/page/Support'
import Instruction from './../components/page/Instruction'
import InstructionM1 from './../components/page/InstructionM1'
import CampusRecruitment from './../components/page/CampusRecruitment'
import Download from './../components/page/Download'
import Store from './../components/page/Store'
import SiteMap from './../components/page/SiteMap'
import HachiInfinite from './../components/page/HachiInfinite'
import HachiDelight from './../components/page/HachiDelight'

Vue.use(Router)

export default new Router({
  mode: 'history',  
  routes: [
    { path: '/', name: 'PuppyIndex', component: PuppyIndex, meta:{ 
      title: '哈奇智能 （小狗机器人）—puppy cube | hachi delight | hachi bingo ', 
      description: '哈奇智能是北京小狗智能机器人技术有限公司旗下品牌，聚焦于“AI+人居”市场。产品包括：光影魔屏puppy cube，物流机器人hachi delight，健康服务机器人hachi bingo，以及智慧社区，智能家居等智慧空间解决方案。'
    }},
    { path: '/joinus', name: 'JoinUS', component: JoinUS },
    { path: '/legalnotices', name: 'LegalNotices', component: LegalNotices},
    { path: '/puppycube', name: 'PuppyCube', component: PuppyCube, meta:{ 
      title: 'puppy cube-触摸未来,定义AI空间-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: 'puppy cube智能交互不再被屏幕束缚,生活中的每一处都可能成为你的AI入口,puppy cube将任意平面变为触摸界面,提供一个全新的智慧AI空间。'
    }},
    { path: '/cubeX', name: 'PuppyCubeS', component: PuppyCubeS, meta:{ 
      title: 'puppy cube X-触摸未来,定义AI空间-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: 'puppy cube X智能交互不再被屏幕束缚,生活中的每一处都可能成为你的AI入口,puppy cube将任意平面变为触摸界面,提供一个全新的智慧AI空间。'
    }},
    { path: '/hachibingo', name: 'puppybingo', component: puppybingo, meta:{ 
      title: 'hachi bingo-家庭健康守护者-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: 'hachi bingo致力于为智慧家庭提供便捷可靠的健康管理和家庭互联服务。通过激光雷达,双目视觉等多类传感器及仿生交互算法,让hachi bingo真正融入家庭生活。 '
    } },
    { path: '/hachiauto', name: 'puppyauto', component: puppyauto, meta:{ 
      title: 'hachi auto-无人通勤车-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: 'hachi auto为智慧社区提供无人驾驶通勤服务,解决社区"最后一公里"的出行困扰,通过先进的自动驾驶系统和人工智能技术,保障用户享受安全,便利,舒适的出行体验。'
    } },
    { path: '/newsdetail', name: 'NewsDetail', component: NewsDetail},
    { path: '/aboutus', name: 'AboutUs', component: AboutUs, meta:{ 
      title: '关于我们-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: 'hachi拥有国内领先的智能化系统解决方案,智能化社区在全国多个一线城市成功部署运营稳健;凭借成熟的技术方案和运营经验,hachi已经与国内多家地产龙头企业建立了长期战略合作关系。 '
    }},
    { path: '/cooperate', name: 'Cooperate', component: Cooperate, meta:{ 
      title: '商务合作-哈奇智能(小狗机器人)-puppy cube-hachi  delight-hachi bingo', 
      description: '资本背景: 国内知名VC投资; 智慧生态: AIoT、机器人、智能视觉、智慧人居四大业务生态布局; 解决方案: hachi智能化系统解决方案已在多个一线城市成功部署运营专利技术; 专利技术: 国际领先的专利核心技术,拥有专注AI人工智能方向豪华研发团队。'
    }},
    { path: '/contact', name: 'Contact', component: Contact, meta:{ 
      title: '联系方式-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '联系方式: 010-59037583 北京市朝阳区东三环中路63号富力中心709室'
    }},
    { path: '/newscenter', name: 'NewsCenter', component: NewsCenter, meta:{ 
      title: '媒体报道-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '媒体报道: 在这里了解哈奇智能的最新动态'
    }},
    { path: '/videodetail', name: 'VideoDetail', component: VideoDetail},
    { path: '/videoCenter', name: 'VideoCenter', component: VideoCenter, meta:{ 
      title: '视频中心-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '视频中心: 在这里通过视频了解哈奇智能的产品介绍,操作说明等'
    }},
    { path: '/aiot', name: 'AIoT', component: AIoT, meta:{ 
      title: 'AIoT技术-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '哈奇智能AIoT技术通过深度感知技术和分析算法,完成捕捉与互动,基于智能视觉与深度学习,让生活融入未来。 '
    }},
    { path: '/robottech', name: 'Robot', component: Robot, meta:{ 
      title: '机器人技术-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '哈奇智能机器人技术团队正在研发适合于地产及园区场景的无人通勤车和物流机器人,来给人们更高品质,更便利的智慧生活。'
    }},
    { path: '/aisighttech', name: 'SmartSight', component: SmartSight, meta:{ 
      title: '智能视觉技术-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '哈奇智能视觉技术 目标检测,在复杂的场景中,快速,精确的定位人脸/人体等目标位置。'
    }},
    { path: '/hachisolution', name: 'Solution', component: Solution, meta:{ 
      title: '哈奇智慧空间解决方案-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '哈奇智慧空间解决方案,聚焦智慧创新,为你带来安全、舒适、便捷和艺术的高品质居家生活体验。'
    }},
    { path: '/hachiproduct', name: 'Product', component: Product, meta:{ 
      title: '哈奇智能家居产品中心-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '哈奇智能致力于成为国内领先的智慧空间解决方案提供商用智慧住宅科技缔造智慧人居生活。'
    }},
    { path: '/hachicases', name: 'Cases', component: Cases, meta:{ 
      title: '哈奇智能家居应用案例-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '哈奇智能各大解决方案已落地于全国四十多个楼盘和商业中心。每一个,都是骄傲;每一处,都是精典。'
    }},
    { path: '/techsupport', name: 'Support', component: Support, meta:{ 
      title: '技术支持-哈奇智能(小狗机器人)-puppy cube-hachi delight-hachi bingo', 
      description: '技术支持: 哈奇智能随时为您提供帮助'
    }},
    { path: '/support', name: 'Instruction', component: Instruction},
    { path: '/manual', name: 'InstructionM1', component: InstructionM1},
    { path: '/campusrecruitment', name: 'CampusRecruitment', component: CampusRecruitment},
    { path: '/download', name: 'Download', component: Download},
    { path: '/store', name: 'Store', component: Store},
    { path: '/sitemap', name: 'SiteMap', component: SiteMap},
    { path: '/hachiinfinite', name: 'HachiInfinite', component: HachiInfinite},
    { path: '/hachidelight', name: 'HachiDelight', component: HachiDelight, meta:{ 
      title: 'hachi delight-智能物流机器人-哈奇智能（小狗机器人）-puppy cube-hachi bingo-hachi auto', 
      description: 'hachi delight针对社区最后500米末端物流配送的一站式解决方案，应用场景覆盖室内和室外，提供快递、外卖、社区周边超市商品等配送到户的服务。'
    }},
  ],

  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
  
})
