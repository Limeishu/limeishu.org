import * as types from '../mutation-types'
import axios      from 'axios'

const state = {
  creation: {}
}

const getters = {
  creation: state => state.creation
}

const mutations = {

  [types.CREATION] (state, creation) {
    state.creation = creation
  }
}

const actions = {

  async getAllCreation ({ commit }) {
    if (state.creation.length > 0) {
      return state.creation
    }
    let res = await axios.get('https://api.limeishu.org.tw/creation')
    res.data.data.sort((a, b) => { return a.date - b.date })
    commit(types.CREATION, res.data)
    return res.data.data
  },

  async getCreationByID ({ commit }, cid) {
    const res = await axios.get(`https://api.limeishu.org.tw/creation/${cid}`)
    return res.data
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
