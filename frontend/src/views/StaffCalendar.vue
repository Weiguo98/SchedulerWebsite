<template>
<div>
  <CalendarMonth
  :staffCalendarList="this.staffCalendarList"
   />
</div>
</template>

<script>
import { Api } from '@/Api'
import CalendarMonth from '../components/CalendarMonth'

export default {
  name: 'StaffCalendar',
  data: () => ({
    staffCalendarList: [
      {
        data: {
          emp_name: '',
          employee_id: '',
          start_time: '',
          end_time: '',
          schedule_date: '',
        }
      }
    ]
  }),
  components: {
    CalendarMonth
  },
  created () {
    this.getStaffCalendar()
  },
  methods: {
    getStaffCalendar() {
      Api.get('/staffCalender', {
        params: {
          ID: 2
        }
      })
        .then(response => {
          for (var i = 0; i < response.data.length; i++) {
            this.staffCalendarList.push(response.data[i])
          }
          this.staffCalendarList()
        })
        .catch(error => {
          this.errMessage = error
        })
    }
  }
}
</script>

<style></style>
