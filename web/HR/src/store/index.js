import Vue from 'vue'
import Vuex from 'vuex'

import loginService from './loginService'
import carouselImageService from './carouselImageService'
import introService from './introService'
import jobService from './jobService'
import uploadService from './uploadService'
import paraService from './paraService'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loginService,
    carouselImageService,
    introService,
    jobService,
    uploadService,
    paraService
  }
})

