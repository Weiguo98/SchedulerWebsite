<template>
  <div class="filterBar">
    <functional-calendar
      v-on:choseDay="dateSelected()"
      v-model="calendarData"
      :configs="calendarConfigs"
    ></functional-calendar>
    <ScheduleFilterButton text="Rollercoaster/Game/Area" option_a="Helix" option_b="The Cannon" option_c="Atmosphere"/>
    <ScheduleFilterButton text="Roles" option_a="Operator" option_b="Maintainer" option_c="Cleaner"/>
    <ScheduleFilterButton text="Daily" option_a="Daily" option_b="Weekly" option_c="Monthly"/>
    <b-button id='assignbtn' class="assignbtn" pill variant="success" v-on:click="addRow()"> Assign </b-button>
    <span> Selected: {{ calendarData.selectedDate }}</span>
  </div>
</template>

<script>
import { FunctionalCalendar } from 'vue-functional-calendar'
import ScheduleFilterButton from './ScheduleFilterButton.vue'
import { serverBus } from '../main'

var today = new Date()
var dd = String(today.getDate()).padStart(2, '')
var mm = String(today.getMonth() + 1).padStart(2, '')
var yyyy = today.getFullYear()
today = dd + '/' + mm + '/' + yyyy

export default {
  name: 'ScheduleFilter',
  components: {
    FunctionalCalendar,
    ScheduleFilterButton
  },
  created() {
    this.$root.$refs.ScheduleFilter = this
  },
  data: () => ({
    calendarData: {
    },
    calendarConfigs: {
      isAutoCloseable: 'true',
      dateFormat: 'dd/mm/yyyy',
      placeholder: today,
      isDatePicker: 'true',
      isModal: 'true',
      ref: 'Calendar'
    }
  }),
  props: {
    title: String,
    subtitle: String
  },
  methods: {
    addRow: function () {
      this.$root.$refs.personnel.addRow()
    },
    getSelectedDate: function () {
      return this.data.calendarData.selectedDate
    },
    dateSelected: function () {
      serverBus.$emit('dateSelected', this.calendarData.selectedDate)
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
