import Vue          from 'vue'
import Vuex         from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations    from './mutation-types'

import app          from './modules/app'
import menu         from './modules/menu'

Vue.use(Vuex)

const available = ['en-US', 'zh-TW', 'ja']

const store = new Vuex.Store({
  strict: true,
  modules: {
    app,
    menu
  },
  state: {
    language: available.find(e => { return e === window.navigator.language }) ? window.navigator.language : 'en-US',
    user: {},
    toggle: false
  },
  mutations,
  actions,
  getters
})

export default store
