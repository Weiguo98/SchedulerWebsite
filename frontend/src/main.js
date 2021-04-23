import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FunctionalCalendar from 'vue-functional-calendar'

Vue.use(BootstrapVue)

Vue.use(FunctionalCalendar, {
  dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
