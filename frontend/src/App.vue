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
  <div id="app">
    <b-modal id="dialog" hide-footer title="ALERT!" width="80%">
      <span>Need a {{ role }} at {{ location }}</span>
      <br />
      <b-button @click="alert">Assign Employee</b-button>
      <!--<assign></assign>-->
    </b-modal>
    <div id="nav1">
      <h1 id="Logo">Planner's App</h1>
      <li id="listitens"><router-link to="./">Schedule</router-link></li>
      <li id="listitens"><router-link to="/Staff">Staff</router-link></li>
      <li id="listitens"><router-link to="/Calendar">Calendar</router-link></li>
      <li
        id="listitens"
        style="font-weight: bold;color: red;"
        @click="openDialog"
      >
        Alert
      </li>
      <fab
        main-icon='!'
        main-tooltip="Alerts"
        :enable-rotation="false"
        icon-size="small"
        :position="position"
        :bg-color="bgColor"
        :actions="fabActions"
        ></fab>
    </div>
    <div id="hiddenmenu"></div>
    <router-view />
  </div>
</template>
<script>
import fab from 'vue-fab'
//import assign from './components/Assign.vue'

export default {
  components: {
    fab//,
    //assign
  },
  data: () => ({
    bgColor: 'red',
    position: 'bottom-right',
    fabActions: [
      {
        name: '',
        icon: ''
      }
    ],
    roles: ['cleaner', 'operator', 'maintainer'],
    locations: ['Helix', 'The Cannon', 'Atmosphere'],
    role: 'cleaner',
    location: 'Helix'
  }),
  computed: {},
  created() {
    let self = this
    console.log(self.$refs)
    console.log(this.assign)
  },

  methods: {
    alert() { 
      this.$router.push('./')
      console.log(this.$root.$refs)
      console.log(this.$root.$refs.assign.$refs)
      this.$root.$refs.assign.show = true
      this.$root.$refs.assign.showModal()
      this.closeDialog()
    },
  
    closeDialog() {
      this.$bvModal.hide('dialog')
    },
    openDialog() {
      this.randomRole()
      this.randomLocation()
      this.fabActions.push({
        name: this.role + ' at ' + this.location,
        icon: this.role + ' at ' + this.location
      })
      this.$bvModal.show('dialog')
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
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c45891;
  background-color: #ebf1de;
}
/*
#nav a.router-link-exact-active {
  color: #42b983;
  }
*/

#nav1 {
  width: 100%;
  background-color: #9ee27c;
  z-index: 99;
  position: fixed;
  padding: 20px 0;
  text-align: center;
  padding-right: 60px;
}

#hiddenmenu {
  width: 100%;
  padding: 35px;
  background-color: #9ee27c;
  z-index: 99;
}

#nav1 a {
  font-weight: bold;
  color: #e59198;
}

#nav1 a.router-link-exact-active {
  padding: 30px 50px;
  color: #ffffff;
  background-color: #e59198;
}
#listitens {
  display: inline;
  padding-right: 50px;
  font-size: 15px;
}

#Logo {
  font-size: 20px;
  float: left;
  position: relative;
  padding-left: 10px;
  color: #e59198;
}
</style>
