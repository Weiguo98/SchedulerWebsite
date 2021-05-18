<template>
  <div class="calendar-date-indicator">
    <div id="calendar-header">
      {{this.selectedDate.format('MMMM YYYY')}}
      <div>Employee: {{ emp_name }}</div>
      <div>
        Remaining Hours:  {{this.totalWorkingHours != 0 ? this.emp_max - this.totalWorkingHours : ""}} h
      </div>
      <div>
        Maximum Hours: {{this.emp_max}} h
      </div>
    </div>
  </div>
</template>

<script>
import { Api } from '@/Api'
import dayjs from 'dayjs'

export default {
  props: {
    emp_name: String,
    emp_id: Number,
    emp_max: Number,
    selectedDate: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      totalWorkingHours: 0,
      month: '',
      year : '',
      days: ''
    }
  },
  methods: {
    getRemainingHours() {
      this.month = this.selectedDate.format('MM')
      this.year = this.selectedDate.format('YYYY')
      this.days = dayjs(this.selectedDate).daysInMonth()
      Api.get('/totalWorkingHours', {
        params: {
          ID: this.emp_id,
          startDate: this.year + '/' + this.month + '/01',
          endDate: this.year + '/' + this.month + "/" + this.days,
        }
      })
        .then((response) => {
          this.totalWorkingHours = response.data[0].sum
        })
        .catch((error) => {
          console.log(error)
          this.errMessage = error
        })
        
    },
  },
  mounted() {
    this.getRemainingHours()
  },
  updated() {
    this.getRemainingHours()
  }
}
</script>

<style scoped>

#calendar-header {
  font-size: 16px;
}

.calendar-date-indicator {
  font-size: 24px;
  font-weight: 600;
  color: var(--grey-00);
}
</style>
