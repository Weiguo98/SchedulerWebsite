import Vue from 'vue'
import Router from 'vue-router'
import DailySchedule from './views/DailySchedule.vue'
import Staff from './views/Staff.vue'
import Calendar from './views/Calendar.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: DailySchedule
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/Staff',
      name: 'Staff',
      component: Staff
    }
  ]
})
