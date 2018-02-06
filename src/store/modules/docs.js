import axios      from 'axios'

const actions = {

  async getDocsByType ({ commit }, type) {
    const res = await axios.get(`https://api.limeishu.org.tw/docs/${type}`)
    return res.data.data
  }

}

export default {
  actions
}
