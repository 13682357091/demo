import Vue from 'vue'
import Vuex from 'vuex'

import newsService from './newsService'
import instructionService from './instructionService'
import storeService from './storeService'
import videoService from './videoService'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    newsService,
    instructionService,
    storeService,
    videoService
  }
})

