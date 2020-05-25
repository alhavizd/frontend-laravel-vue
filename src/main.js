import Vue from 'vue'
import { store } from './store/index'
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
