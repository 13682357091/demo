import Vue from 'vue'
import Vuex from 'vuex'


import carouselImageService from './carouselImageService'
import introService from './introService'
import jobService from './jobService'
import paraService from './paraService'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    carouselImageService,
    introService,
    jobService,
    paraService
  }
})

