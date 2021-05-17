<template>
  <div class="calendar-date-indicator">
    {{ selectedMonth }}
    <div id="calendar-header">
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
    }
  },
  computed: {
    selectedMonth() {
      return this.selectedDate.format('MMMM YYYY')
    }
  },
  methods: {
    getRemainingHours() {
      Api.get('/totalWorkingHours', {
        params: {
          ID: this.emp_id,
          startDate: "01/05/2021",
          endDate: "30/05/2021",
        }
      })
        .then((response) => {
          this.totalWorkingHours = response.data[0].sum
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
