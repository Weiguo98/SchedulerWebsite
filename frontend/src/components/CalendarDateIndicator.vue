<template>
  <div class="calendar-date-indicator">{{ selectedMonth }}
    <div id="calendar-header">
      <div>
        Employee: {{emp_name}}
      </div>
      <div>
        Remaining Hours: 10 h (dummy)
      </div>
      <div>
        Maximum Hours: 120 h (dummy)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    emp_name: String,
    selectedDate: {
      type: Object,
      required: true
    }
  },

  computed: {
    selectedMonth() {
      return this.selectedDate.format('MMMM YYYY')
    }
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
