import * as types from '../mutation-types'
import axios      from 'axios'

const state = {
  news: {}
}

const getters = {
  news: state => state.news
}

const mutations = {

  [types.NEWS] (state, news) {
    state.news = news
  }
}

const actions = {

  async getAllNews ({ commit }) {
    if (state.news.length > 0) {
      return state.news
    }
    let res = await axios.get('https://api.limeishu.org.tw/news')
    res.data.data.sort((a, b) => { return new Date(a.date).getTime() - new Date(b.date).getTime() }).reverse()
    commit(types.NEWS, res.data)
    return res.data.data
  },

  async getNewsByID ({ commit }, nid) {
    const res = await axios.get(`https://api.limeishu.org.tw/news/${nid}`)
    return res.data
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
