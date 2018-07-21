import Vue          from 'vue'
import Vuex         from 'vuex'

import * as actions from './actions'
import * as getters from './getters'
import mutations    from './mutation-types'

import app          from './modules/app'
import menu         from './modules/menu'
import news         from './modules/news'
import post         from './modules/post'
import docs         from './modules/docs'
import creation     from './modules/creation'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  modules: {
    app,
    menu,
    news,
    post,
    docs,
    creation
  },
  state: {
    user: {},
    toggle: false
  },
  mutations,
  actions,
  getters
})

export default store
