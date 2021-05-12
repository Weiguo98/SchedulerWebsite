<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday
    }"
  >
    <span>{{ label }}</span>

    <div v-for="staffCalendar in staffCalendarList"
    :key="staffCalendar.page">
    <div v-if="getCalendarDay(1) == label && getCalendarMonth(1) == selectedMonth">
      {{staffCalendar.schedule_date}}
    </div>
    </div>

  </li>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'CalendarMonthDayItem',

  props: {
    staffCalendarList: [],

    day: {
      type: Object,
      required: true
    },

    isCurrentMonth: {
      type: Boolean,
      default: false
    },

    isToday: {
      type: Boolean,
      default: false
    },
    selectedDate: {
      type: Object,
      required: true
    }
  },
  data: {
    schedule_date: String
  },

  computed: {
    label() {
      return dayjs(this.day.date).format('D')
    },
    selectedMonth() {
      return this.selectedDate.format('M')
    }
  },
  methods: {
    getCalendarMonth(calendar_index) {
      var str = this.staffCalendarList[calendar_index].schedule_date
      var month = str.split("/")
      return month[1]
    },
    getCalendarDay(calendar_index) {
      var str = this.staffCalendarList[calendar_index].schedule_date
      var day = str.split("/")
      return day[0]
    }
  }
}
</script>

<style scoped>
.calendar-day {
  position: relative;
  min-height: 100px;
  font-size: 16px;
  background-color: #fff;
  color: var(--grey-800);
  padding: 5px;
}

.calendar-day > span {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2px;
  width: var(--day-label-size);
  height: var(--day-label-size);
}

.calendar-day--not-current {
  background-color: var(--grey-100);
  color: var(--grey-300);
}

.calendar-day--today {
  padding-top: 4px;
}

.calendar-day--today > span {
  color: #fff;
  border-radius: 9999px;
  background-color: var(--grey-800);
}
</style>
