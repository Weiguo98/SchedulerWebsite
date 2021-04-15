<template>
  <div class="border">
    <b-dropdown text="Date">
      <functional-calendar
        :is-date-picker="true"
      ></functional-calendar>
    </b-dropdown>
      <ScheduleFilterButton text="Rollercoaster/Game/Area" option_a="Helix" option_b="The Cannon" option_c="Atmosphere"/>
      <ScheduleFilterButton text="Roles" option_a="Operator" option_b="Maintainer" option_c="Cleaner"/>
      <ScheduleFilterButton text="Daily" option_a="Daily" option_b="Weekly" option_c="Monthly"/>
  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar';
import ScheduleFilterButton from './ScheduleFilterButton.vue'

export default {
  name: 'ScheduleFilter',
  components: {
    FunctionalCalendar,
    ScheduleFilterButton
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
  justify-content: start;
  align-items: center;
  flex-direction: row;
  margin-left: 10%;
  height: 70px;

}

</style>

// https://www.npmjs.com/package/vue-functional-calendar
