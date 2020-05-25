import { setToken, removeToken } from '@/utils/auth'

const actions = {
  save_token({ commit }, data) {
    if (data !== '') {
      commit('SET_TOKEN', data)
      setToken(data.access_token)
    } else {
      commit('TOKEN_FAILURE')
    }
  },
  remove_token({ commit }) {
    commit('SET_TOKEN', null)
    removeToken()
  }
}
export default actions
