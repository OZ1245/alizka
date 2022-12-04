import { createStore } from 'vuex'
import './modules/posts.js'

export default createStore({
  state: {
    menuIsOpen: false
  },
  getters: {
    getMenuState({ menuIsOpen }) { return menuIsOpen },
  },
  mutations: {
    SET_MENU_STATE(state, value) {
      state.menuIsOpen = value
    }
  },
  actions: {
    toggleMenu({ getters, commit }) {
      commit('SET_MENU_STATE', !getters.getMenuState)
    }
  },
  modules: {
  }
})
