<template>
  <div>
    <b-jumbotron header="Agile Development Processes Frontend" lead="Welcome to Your Frontend Vue.js App">
      <p>Message from the server: {{ message }}</p>
      <b-button variant="primary" href="/camels">List Camels</b-button>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col><h1>Responsive BootstrapVue: <a href="https://bootstrap-vue.js.org/docs/components/layout/">Layout and Grid System</a></h1></b-col>
      </b-row>
      <!-- Mobile (< 768px): stack columns by making one half-width and one full-width
           Desktop (>= 768px): keep both columns in same row in 4:8 ratio -->
      <b-row>
        <b-col class="example-col" cols="6" md="4">Message from the server</b-col>
        <b-col class="example-col" cols="12" md="8">{{ employees}}</b-col>
      </b-row>
    </b-container>
    <b-container>
     <tbody>
      <tr class = 'table' @click="delete_emp=true">
        <td id='name' md='1'>{{person_name}}</td>
        <td id='name' md='1'>{{person_area}}</td>
        <td id='col1' class='columns'></td><td id='col2'></td>
        <td id='col3' class='columns'></td><td id='col4'></td>
        <td id='col5' class='columns'></td><td id='col6'></td>
        <td id='col7' class='columns'></td><td id='col8'></td>
        <td id='col9' class='columns'></td><td id='col10'></td>
        <td id='col11' class='columns'></td><td id='col12'></td>
        <td id='col13' class='columns'></td><td id='col14'></td>
        <td id='col15' class='columns'></td><td id='col16'></td>
        <td id='col17' class='columns'></td><td id='col18'></td>
        <td id='col19' class='columns'></td><td id='col20'></td>
        <td id='col21' class='columns'></td><td id='col22'></td>
        <td id='col23' class='columns'></td><td id='col24'></td>
        <td id='col25' class='columns'></td><td id='col26'></td>
        <td id='col27' class='columns'></td><td id='col28'></td>
        <td id='col29' class='columns'></td><td id='col30'></td>
      </tr>
  </tbody>
    </b-container>
  <Assign></Assign>
    <b-modal
       v-model="delete_emp"
       id="modal-1"
       title="Delete schedule"
       ok-variant ='danger'
       ok-title = 'Delete'
       @ok ="handle_deleteOK">
      <p class = "my-4"> Do you want to delete {{person_name}} schedule?</p>
     </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import Assign from './Assign.vue'

export default {
  name: 'home',
  components: {
    Assign
  },
  // TODO: time start variants need to be smaller than time end variants
  // TODO: Six options must have values, other wise a warning will pop up.
  data() {
    return {
      message: '',
      // employees: '',
      // show: false,
      // update: false,
      delete_emp: false,
      person_name: 'Jakub',
      person_area: 'Helix'
    }
  },
  mounted() {
    // this.getMessage()
    // this.getEmployees()
  },
  methods: {
    getMessage() {
      Api.get('/')
        .then(response => {
          this.message = response.data.message
        })
        .catch(error => {
          this.message = error
        })
    }
  }

}
</script>

<style>
.example-col {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: whitesmoke;
  border: 2px solid lightgray;
}
</style>
