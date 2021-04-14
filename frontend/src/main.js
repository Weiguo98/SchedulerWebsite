import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import { VBToggle } from 'bootstrap-vue'
import { BSidebar } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.directive('b-toggle', VBToggle)
Vue.component('b-sidebar', BSidebar)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
