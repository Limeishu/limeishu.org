import * as types from '../mutation-types'

const state = {
  device: {
    isMobile: false,
    isTablet: false
  },
  navbar: {
    opened: false,
    hidden: false
  },
  effect: {
    translate3d: true
  },
  language: ['en', 'zh', 'ja', 'ko'].find(e => { return e === window.navigator.language.split('-')[0] }) ? window.navigator.language.split('-')[0] : 'en',
  title: {
    'en': 'The Li Mei-Shu Memorial Gallery',
    'zh': '李梅樹紀念館',
    'ja': '李梅樹記念館',
    'ko': '李梅樹 기념관'
  }
}

const getters = {
  language: state => state.language,
  title: state => state.title[state.language]
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    state.device.isMobile = device === 'mobile'
    state.device.isTablet = device === 'tablet'
  },

  [types.TOGGLE_NAVBAR] (state, status) {
    state.navbar.opened = typeof status.opened !== 'undefined' ? status.opened : state.navbar.opened
    state.navbar.hidden = typeof status.hidden !== 'undefined' ? status.hidden : state.navbar.hidden
  },

  [types.LANGUAGE] (state, lang) {
    state.language = lang
  }
}

const actions = {

  async changeLang ({ commit },
  lang) {
    commit(types.LANGUAGE, lang)
  },

  async toggleNavbar ({ commit },
  status) {
    commit(types.TOGGLE_NAVBAR, status)
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
