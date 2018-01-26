import * as types from '../mutation-types'

const state = {
  device: {
    isMobile: false,
    isTablet: false
  },
  navbar: {
    opened: false
  },
  effect: {
    translate3d: true
  },
  language: ['en-US', 'zh-TW', 'ja'].find(e => { return e === window.navigator.language }) ? window.navigator.language : 'en-US'
}

const getters = {
  language: state => state.language
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_NAVBAR] (state, opened) {
    state.navbar.opened = opened
  }
}

const actions = {
  async toggleNavbar ({ commit },
  opened) {
    commit(types.TOGGLE_NAVBAR, opened)
  },

  async toggleDevice ({ commit },
  device) {
    commit(types.TOGGLE_DEVICE, device)
  },

  expandMenu ({ commit },
    menuItem) {
    if (menuItem) {
      menuItem.expanded = menuItem.expanded || false
      commit(types.EXPAND_MENU, menuItem)
    }
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
