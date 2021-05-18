<template>
  <div class="calendar-date-indicator">
    <div id="calendar-header">
      <div style="font-size: 28px">
        {{ this.selectedDate.format('MMMM YYYY') }}
      </div>
      <div>Employee: {{ emp_name }}</div>
      <div>
        <div
          v-if="
            this.totalWorkingMinutes > 0 &&
            this.emp_max - this.totalWorkingHours > 0
          "
        >
          Remaining time:
          {{
            this.totalWorkingHours != 0
              ? this.emp_max - this.totalWorkingHours - 1
              : this.emp_max
          }}
          h
          {{
            this.totalWorkingMinutes != 0 ? 60 - this.totalWorkingMinutes : ''
          }}
          minutes
        </div>
        <div
          v-if="
            this.totalWorkingMinutes > 0 &&
            this.emp_max - this.totalWorkingHours < 0
          "
        >
          Remaining time:
          {{
            this.totalWorkingHours != 0
              ? this.emp_max - this.totalWorkingHours
              : this.emp_max
          }}
          h
          {{ this.totalWorkingMinutes != 0 ? this.totalWorkingMinutes : '' }}
          minutes
        </div>
        <div v-if="this.totalWorkingMinutes <= 0">
          Remaining time:
          {{
            this.totalWorkingHours != 0
              ? this.emp_max - this.totalWorkingHours
              : this.emp_max
          }}
          h
          {{ this.totalWorkingMinutes != 0 ? this.totalWorkingMinutes : '' }}
        </div>
      </div>
      <div>Maximum time: {{ this.emp_max }} h</div>
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
    }
  },
  data() {
    return {
      totalWorkingHours: 0,
      totalWorkingMinutes: 0,
      month: '',
      year: '',
      days: ''
    }
  },
  methods: {
    getRemainingHours() {
      var result_hours = 0
      var result_minutes = 0
      this.month = this.selectedDate.format('MM')
      this.year = this.selectedDate.format('YYYY')
      this.days = dayjs(this.selectedDate).daysInMonth()
      Api.get('/totalWorkingHours', {
        params: {
          ID: this.emp_id,
          startDate: this.year + '/' + this.month + '/01',
          endDate: this.year + '/' + this.month + '/' + this.days
        }
      })
        .then((response) => {
          for (var i = 0; i < response.data.length; i++) {
            result_hours = result_hours + parseInt(response.data[i].hours)
            result_minutes = result_minutes + parseInt(response.data[i].minutes)
          }
          while (result_minutes >= 60) {
            result_minutes -= 60
            result_hours += 1
          }
          this.totalWorkingHours = result_hours
          this.totalWorkingMinutes = result_minutes
        })
        .catch((error) => {
          console.log(error)
          this.errMessage = error
        })
    }
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
