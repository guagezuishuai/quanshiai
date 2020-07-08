import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menuActive: '1'
  },
  mutations: {
    menuActiveChange:function(state, index) {
      state.menuActive = index;
    }
  },
  actions: {
  },
  modules: {
  }
})
