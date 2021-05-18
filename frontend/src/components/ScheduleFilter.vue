<template>
  <div class="filterBar">
    <functional-calendar
      v-on:choseDay="dateSelected()"
      v-model="calendarData"
      :configs="calendarConfigs"
    ></functional-calendar>
    <ScheduleFilterButton
      @clicked="onClickAreaButton"
      text="All Rollercoaster/Game/Area"
      option_default="All Rollercoaster/Game/Area"
      option_a="Helix"
      option_b="The Cannon"
      option_c="Atmosphere"
    />
    <ScheduleFilterButton
      @clicked="onClickRoleButton"
      text="All roles"
      option_default="All roles"
      option_a="Operator"
      option_b="Maintainer"
      option_c="Cleaner"
    />
    <b-button
      id="assignbtn"
      class="assignbtn"
      pill
      variant="success"
      v-on:click="showModal()"
    >
      Assign Employee
    </b-button>

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
    calendarData: {},
    calendarConfigs: {
      isAutoCloseable: 'true',
      dateFormat: 'dd/mm/yyyy',
      placeholder: today,
      isDatePicker: 'true',
      isModal: 'true',
      ref: 'Calendar'
    },
    roleSelected_var: '',
    areaSelected_var: ''
  }),
  props: {
    title: String,
    subtitle: String
  },
  methods: {
    showModal: function() {
      this.$root.$refs.assign.showModal()
    },
    addRow: function() {
      this.$root.$refs.personnel.addRow()
    },
    dateSelected: function() {
      serverBus.$emit('dateSelected', this.calendarData.selectedDate)
    },
    roleSelected: function() {
      serverBus.$emit('roleSelected', this.roleSelected_var)
    },
    onClickRoleButton(value) {
      this.roleSelected_var = value
      this.roleSelected()
    },
    areaSelected: function() {
      serverBus.$emit('areaSelected', this.areaSelected_var)
    },
    onClickAreaButton(value) {
      this.areaSelected_var = value
      this.areaSelected()
    }
  }
}
</script>

<style>
.filterBar {
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

.assignbtn {
  margin-left: 70px;
}
</style>

// https://www.npmjs.com/package/vue-functional-calendar
