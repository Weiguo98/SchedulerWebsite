<!--
Primary Color: #EBF1DE
Text Color: #C45891
 -->
<style
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
></style>
<style
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
></style>

<template>
  <div id="mainapp">
    <b-modal id="dialog" hide-footer title="ALERT!" width="80%">
      <span>Need a {{ role }} at {{ location }}</span>
      <br />
      <b-button @click="alert">Assign Employee</b-button>
      <!--<assign></assign>-->
    </b-modal>
    <div id="nav1">
      <img id="Logo" src="./assets/logo.png" />
      <div id="listitem">
        <li><router-link to="./">Schedule</router-link></li>
        <li><router-link to="/Staff">Staff</router-link></li>
        <li><router-link to="/Calendar">Calendar</router-link></li>
        <li
          id="listitens"
          style="font-weight: bold;color: red;"
          @click="openDialog"
        >
          Alert
        </li>
      </div>
      <fab
        main-icon="!"
        main-tooltip="Alerts"
        :enable-rotation="false"
        icon-size="small"
        :position="position"
        :bg-color="bgColor"
        :actions="fabActions"
      ></fab>
    </div>
    <div id="menuplaceholder"></div>
    <router-view />
  </div>
</template>
<script>
import fab from 'vue-fab'
import { serverBus } from './main'
//import assign from './components/Assign.vue'

export default {
  components: {
    fab //,
    //assign
  },
  data: () => ({
    bgColor: 'red',
    position: 'bottom-right',
    fabActions: [
      {
        name: 'cache',
        icon: ''
      }
    ],
    roles: ['cleaner', 'operator', 'maintainer'],
    locations: ['Helix', 'The Cannon', 'Atmosphere'],
    role: 'cleaner',
    location: 'Helix',
    employ_assigned: []
  }),
  computed: {},
  created() {
    // let self = this
    // console.log(self.$refs)
    // console.log(this.assign)
    this.bgColor = 'green'
    serverBus.$on('employeeAssigned', data => {
      var object = {
        emp_name: data.name,
        employee_id: data.id,
        emp_position: data.emp_position,
        schedule_date: data.date,
        start_time: data.starttime,
        end_time: data.endtime,
        area: data.area,
        start_minute: data.startmin,
        end_minute: data.endmin
      }
      this.employ_assigned = object
      this.refreshDialog()
      // console.log(this.employ_assigned)
    })
  },

  methods: {
    alert() {
      // console.log('run alert')
      this.$router.push('./')
      // console.log(this.$root.$refs)
      // console.log(this.$root.$refs.assign.$refs)
      this.$root.$refs.assign.showModal()
      this.closeDialog()
    },

    closeDialog() {
      this.$bvModal.hide('dialog')
    },
    openDialog() {
      this.bgColor = 'red'
      this.randomRole()
      this.randomLocation()
      this.fabActions.push({
        name: this.role + ' at ' + this.location,
        icon: this.role + ' at ' + this.location
      })
      this.$bvModal.show('dialog')
      // console.log(this.fabActions)
    },
    refreshDialog: function() {
      var alertToDelete = 0
      for (var i = 1; i < this.fabActions.length; i++) {
        var assign_message =
          this.employ_assigned.emp_position.toLowerCase() +
          ' at ' +
          this.employ_assigned.area
        // console.log('assign_message' + assign_message)
        // console.log('fabaction_name' + this.fabActions[i].icon)
        if (assign_message === this.fabActions[i].icon) {
          alertToDelete = i
        }
      }
      if (alertToDelete != 0) {
        this.fabActions.splice(alertToDelete, 1)
      }
      if (this.fabActions.length === 1) {
        this.bgColor = 'green'
      }
      // console.log(this.fabActions.length)
      // console.log(alertToDelete)
    },
    randomRole: function() {
      this.role = this.roles[Math.floor(Math.random() * 2)]
    },
    randomLocation: function() {
      this.location = this.locations[Math.floor(Math.random() * 2)]
    }
  }
}
</script>

<style>
@import './styles/style.css';
</style>
