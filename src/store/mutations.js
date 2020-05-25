const mutations = {
  SET_TOKEN(state, token) {
    state.auth_data = token
  },
  TOKEN_FAILURE(state) {
    state.auth_data = null
  }
}
export default mutations
