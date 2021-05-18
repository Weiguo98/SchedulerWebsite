<template>
  <div id="calendar">
    <CalendarMonth :staffCalendarList="this.event_list" />
  </div>
</template>

<script>
import CalendarMonth from '../components/CalendarMonth'

export default {
  name: 'App',

  components: {
    CalendarMonth
  },
  data: () => ({
    event_list: [
      {
        data: {
          emp_name: '',
          employee_id: '',
          start_time: '',
          end_time: '',
          schedule_date: ''
        }
      }
    ]
  }),
  created() {
    var dummy = {
      emp_name: '',
      employee_id: '',
      start_time: '',
      end_time: '',
      schedule_date: ''
    }
    this.event_list.push(dummy)
  }
}
</script>

<style>
@import '../styles/style.css';
</style>
