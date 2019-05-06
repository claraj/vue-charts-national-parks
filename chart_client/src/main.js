import Vue from 'vue'
import App from './App.vue'
import parkService from './service/parkService'

Vue.config.productionTip = false

Vue.prototype.$parkService = parkService

new Vue({
  render: h => h(App),
}).$mount('#app')
