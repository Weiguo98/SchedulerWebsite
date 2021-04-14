<template>
  <div>
    <Header title='Planner Application' subTitle="Team 7"/>
    <Schedule/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Header from '../components/Header.vue'
import Schedule from '../components/Schedule.vue'

export default {
  name: 'home',
  components: {
    Header,
    Schedule
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
