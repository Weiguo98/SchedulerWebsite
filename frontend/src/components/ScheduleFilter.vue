<template>
  <div class="border">
    <div>
      <functional-calendar
          :placeholder="'Date'"
          :is-modal="true"
          :is-date-picker="true"
        ></functional-calendar>
    </div>

  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar';

export default {
  name: 'ScheduleFilter',
  components: {
    FunctionalCalendar
  },
  props: {
    title: String,
    subtitle: String
  }
}
</script>


<style>
.border{
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  height: 70px;
}

</style>

// https://www.npmjs.com/package/vue-functional-calendar
