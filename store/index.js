import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      menuVisible: false,
      layoutDimmed: false
    },
    mutations: {
      showMenu (state) {
        state.menuVisible = true
        state.layoutDimmed = true
      },
      hideMenu (state) {
        state.menuVisible = false
        state.layoutDimmed = false
      }
    }
  })
}

export default createStore
