<template>
  <div>
    <NavigationMenu title="Planner's App" subtitle="Team 7" >
    </NavigationMenu>
    <Header title='Schedule'/>
    <ScheduleFilter/>
    <Schedule/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Header from '../components/Header.vue'
import Schedule from '../components/Schedule.vue'
import NavigationMenu from '../components/NavigationMenu.vue'
import ScheduleFilter from '../components/ScheduleFilter.vue'

export default {
  name: 'home',
  components: {
    Header,
    Schedule,
    NavigationMenu,
    ScheduleFilter
  },
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.getMessage()
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>
.container2 {
  background-color:  green;
  float:left
}
</style>
