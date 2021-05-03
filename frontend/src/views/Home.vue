<template>
  <div>
    <Header title="Schedule" />
    <Assign />
    <ScheduleFilter />
    <Schedule />
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Header from '../components/Header.vue'
import Schedule from '../components/Schedule.vue'
import ScheduleFilter from '../components/ScheduleFilter.vue'
import Assign from '../components/Assign.vue'

export default {
  name: 'home',
  components: {
    Header,
    Schedule,
    ScheduleFilter,
    Assign
  },
  // TODO: time start variants need to be smaller than time end variants
  // TODO: Six options must have values, other wise a warning will pop up.
  /* data() {
    return {
      message: '',
      // employees: '',
      // show: false,
      // update: false,
      delete_emp: false,
      person_name: 'Jakub',
      person_area: 'Helix'
    }
  }, */
  data: () => ({
    employees: [
      {
        data: {
          employee_id: '',
          employee_name: '',
          role: ''
        }
      }
    ],
    message: '',
    errMessage: ''
  }),
  mounted() {
    this.getAllStaff()
    // this.getMessage()
    // this.getEmployees()
  },
  methods: {
    getAllStaff() {
      Api.get('/allstaff')
        .then((response) => {
          this.employees.data = response.data
        })
        .catch((error) => {
          this.errMessage = error
        })
    }
  }
}
</script>

<style>
.container2 {
  background-color: green;
  float: left;
}
</style>
