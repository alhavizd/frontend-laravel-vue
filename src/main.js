import Vue from 'vue'
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
