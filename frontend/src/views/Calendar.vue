<template>
  <div id="calendar">
    <CalendarMonth />
  </div>
</template>

<script>
import CalendarMonth from '../components/CalendarMonth'

export default {
  name: 'App',

  components: {
    CalendarMonth
  }
}
</script>

<style>
#calendar {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e59198;
  margin-top: 60px;
}

body {
  font-family: sans-serif;
  font-weight: 100;
  --grey-100: #d4f5d7;
  --grey-200: #9ee27c;
  --grey-300: #9ee27c;
  --grey-800: #e59198;
  --grid-gap: 1px;
  --day-label-size: 20px;
}

ol,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

.calendar-month-header {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 10px;
}
</style>
