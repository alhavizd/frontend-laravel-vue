'use strict'

import Vue from 'vue'
import axios from 'axios'
import { getToken, removeToken } from '@/utils/auth'
// import { store } from '@/store/index'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.common['Authorization'] = ''
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    // store.state.loading_axios = true
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  response => response,
  error => {
    const errorError = error.response.data.error.error
    let errArr = errorError
    let string = errArr
    if (typeof errorError !== 'string') {
      string = ''
      errArr = Object.values(errorError)
      for (let index = 0; index < errArr.length; index++) {
        if (index === 0) {
          string += errArr[index]
        } else {
          string += '<br>' + errArr[index]
        }
      }
    }
    const data = error.response.data.error.data
    const statusCode = error.response.data.error.status_code
    const valid = error.response.data.valid
    if (statusCode === 401) {
      removeToken()
      // store.dispatch('remove_token')
      // if (store.state.auth_data && store.state.auth_data.refresh_token) {
      //   const originalRequest = error.config
      //   originalRequest._retry = true
      //   const data = {
      //     client_id: process.env.VUE_APP_CLIENT_ID,
      //     client_secret: process.env.VUE_APP_CLIENT_SECRET,
      //     grant_type: 'refresh_token',
      //     refresh_token: store.state.auth_data.refresh_token,
      //     scope: ''
      //   }
      //   return axios.post('/customer/auth/refreshtoken', data).then(res => {
      //     store.dispatch('save_token', res.data)
      //     error.config.headers['Authorization'] = 'Bearer ' + res.data.access_token
      //     return _axios.request(error.config)
      //   }).catch(() => {
      //     store.state.loading = false
      //     removeToken()
      //     store.dispatch('remove_token')
      //   })
      // } else {
      //   removeToken()
      //   store.dispatch('remove_token')
      // }
    }
    const message = error.response.data.error.message
    // store.state.loading_axios = false
    return Promise.reject({
      statusCode,
      message,
      string,
      data,
      valid
    })
  }
)

Plugin.install = function(Vue) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios
      }
    },
    $axios: {
      get() {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
