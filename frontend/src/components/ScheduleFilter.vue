<template>
  <div class="filterBar">
    <functional-calendar
      :placeholder="'Date'"
      :is-date-picker="true"
      :isModal="true"
    ></functional-calendar>
    <ScheduleFilterButton text="Rollercoaster/Game/Area" option_a="Helix" option_b="The Cannon" option_c="Atmosphere"/>
    <ScheduleFilterButton text="Roles" option_a="Operator" option_b="Maintainer" option_c="Cleaner"/>
    <ScheduleFilterButton text="Daily" option_a="Daily" option_b="Weekly" option_c="Monthly"/>
    <b-button id='assignbtn' class="assignbtn" pill variant="success" v-on:click="addRow()"> Assign </b-button>
  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar'
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
  },
  methods: {
    addRow: function () {
      this.$root.$refs.personnel.addRow()
    }
  }
}
</script>

<style>
.filterBar{
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  margin-left: 10%;
  height: 70px;
  border-style: solid;
  border-color: palevioletred;
  border-width: 1px;
  border-right: 0px;
  border-left: 0px;
  margin-bottom: 20px;
}

.assignbtn{
  margin-left: 70px;
}
</style>

// https://www.npmjs.com/package/vue-functional-calendar
