<template>
  <div class="calendar-date-indicator">{{ selectedMonth }}
    <div>
      Employee: {{emp_name}}
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
.calendar-date-indicator {
  font-size: 24px;
  font-weight: 600;
  color: var(--grey-00);
}
</style>
