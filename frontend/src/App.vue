<template>
  <div id="mainapp">
    <div id="nav1">
      <img id="Logo" src="./assets/logo.png" />
      <div id="listitem">
        <li><router-link to="./">Schedule</router-link></li>
        <li><router-link to="/Staff">Staff</router-link></li>
        <li><router-link to="/Calendar">Calendar</router-link></li>
      </div>
    </div>

    <div id="menuplaceholder"></div>
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
@import './styles/style.css';
</style>
