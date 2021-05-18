<template>
  <li
    class="calendar-day"
    :class="{
      'calendar-day--not-current': !day.isCurrentMonth,
      'calendar-day--today': isToday
    }"
  >
    <span>{{ label }}</span>

    <div
      v-for="staffCalendar in this.staffCalendarList"
      :key="staffCalendar.page"
    >
      <div
        v-if="
          getCalendarDay(staffCalendar) == label &&
            getCalendarMonth(staffCalendar) == selectedMonth &&
            day.isCurrentMonth
        "
        id="dayItem"
      >
        {{ pad(staffCalendar.start_time) }}:{{
          pad(staffCalendar.start_minute)
        }}
        - {{ pad(staffCalendar.end_time) }}:{{ pad(staffCalendar.end_minute) }}
      </div>
    </div>
  </li>
</template>

<script>
import dayjs from 'dayjs'

export default {
  name: 'CalendarMonthDayItem',
  data: () => ({
    tempDays: [],
    tempMonth: ''
  }),
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
      if (calendar_index.schedule_date != undefined) {
        var str = calendar_index.schedule_date
        var month = str.split('/')
        return month[1]
      }
    },
    getCalendarDay(calendar_index) {
      if (calendar_index.schedule_date != undefined) {
        var str = calendar_index.schedule_date
        var day = str.split('/')
        return day[0]
      }
    },
    pad(d) {
      return d < 10 ? '0' + d.toString() : d.toString()
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

#dayItem {
  font-size: 14px;
  color: blue;
}
</style>
