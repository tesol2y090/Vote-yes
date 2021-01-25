import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const state = () => ({
  current_slide: 0,
})

export const mutations = {
  CURRENT_SLIDE(state:any, payload:any) {
    state.current_slide = payload
  },
}

export const actions = {
  setCurrentSlide({ commit }:any, payload:any) {
    commit('CURRENT_SLIDE', payload)
  },
}
