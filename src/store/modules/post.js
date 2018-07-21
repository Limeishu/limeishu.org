import * as types from '../mutation-types'
import axios      from 'axios'

const state = {
  post: {}
}

const getters = {
  post: state => state.post
}

const mutations = {

  [types.POST] (state, post) {
    state.post = post
  }
}

const actions = {

  async getAllPost ({ commit }) {
    if (state.post.length > 0) {
      return state.post
    }
    let res = await axios.get('https://api.limeishu.org.tw/post')
    res.data.data.sort((a, b) => { return new Date(a.date).getTime() - new Date(b.date).getTime() }).reverse()
    commit(types.POST, res.data)
    return res.data.data
  },

  async getPostByID ({ commit }, pid) {
    try {
      const res = await axios.get(`https://api.limeishu.org.tw/post/${pid}`)
      if (res.data.result === 0) {
        return res.data
      } else {
        return {code: 404}
      }
    } catch (err) {
      console.log(err)
      return {code: '!'}
    }
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
