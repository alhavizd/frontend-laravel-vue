import Cookies from 'js-cookie'

const TokenKey = process.env.VUE_APP_COOKIE_KEY + '_AD'

export function getToken() {
  return Cookies.getJSON(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 1 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
