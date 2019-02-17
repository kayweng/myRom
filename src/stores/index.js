import Vue from 'vue'
import Vuex from 'vuex'
import monster from './monster/index'
import actions from './actions'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    monster
  },
  actions
})
