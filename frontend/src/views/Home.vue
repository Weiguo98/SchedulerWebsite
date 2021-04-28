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
    <b-container fluid>
      <div class ="mt-3">
      Assigned Endtime:{{subtimeEndVariants}}
      Assigned Starttime:{{subtimeStarttVariants}}
      Department:{{subdepartmentVariant}}
      Employee: {{subemployeeVariant}}
      Zone:{{subzoneVariant}}
      </div>
    </b-container>
    <b-button @click="show=true" variant="primary">Assign employee</b-button>
    <b-modal
      v-model="show"
      title="Assign employees"
      id="modal-xl"
      size="xl"
      ref="my-modal"
      @show = "show_modal"
       @hidden ="resetSelect"
       @ok ="handleOK"
       >
      <b-container fluid>
        <b-row>
          <div class = "space"></div>
        </b-row>
        <b-row class="mb-1">
          <!-- TODO: try with time select or this is okay whatever -->
          <b-col cols="3">Planning work hours</b-col>
          <b-col>
            <b-form-select  v-model="timeStartVariants" :options="timeStVariants">
            </b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="timeEndVariants"
              :options="timeEnVariants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
        <b-row class="mb-1">
          <b-col cols="3">Department Name</b-col>
          <b-col>
            <b-form-select
              v-model="departmentVariant"
              :options="deVariants"
            ></b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="employeeVariant"
              :options="selectEmployees()"
            ></b-form-select>
          </b-col>
        </b-row>
        <div class = "space"></div>
        <b-row class="mb-1">
          <b-col cols="3">Contact Info</b-col>
          <b-col>
            {{select_mail()}}
            {{selemail}}
          </b-col>
          <b-col>
            <b-form-select
              v-model="teleVariant"
              :options="zoVariants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
        <b-row>
          <b-col cols="3">Zone</b-col>
          <b-col>
            <b-form-select
              v-model="zoneVariant"
              :options="zoVariants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <!-- <p class="float-left">Modal Footer Content</p> -->
          <b-button variant = "success" class = "float-right" @click = handleOK()>
          Confirm </b-button>
          <b-button variant="danger" class="float-right" @click="show = false">
          Cancel </b-button>
        </div>
      </template>
    </b-modal>
    <!-- delete employee/s modal -->
    <b-modal
       v-model="delete_emp"
       id="modal-1"
       title="Delete schedule"
       ok-variant ='danger'
       ok-title = 'Delete'
       @ok ="handle_deleteOK">
      <p class = "my-4"> Do you want to delete {{person_name}} schedule?</p>
     </b-modal>
<!--
    <b-modal
      v-model="update"
      title="Update employees"
      id="modal-xl"
      size="xl"
       @show="resetSelect"
       @hidden ="resetSelect"
       @ok ="handle_updateOK"
    >
      <b-container fluid>
        <b-row>
          <div class = "space"></div>
        </b-row>
        <b-row class="mb-1">
          <TODO: try with time select or this is okay whatever -->
          <!-- <b-col cols="3">Planning work hours</b-col>
          <b-col>
            <b-form-select  v-model="timeStartVariants" :options="timeStVariants">
            </b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="timeEndVariants"
              :options="timeEnVariants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
        <b-row class="mb-1">
          <b-col cols="3">Department Name</b-col>
          <b-col>
            <b-form-select
              class="default_class"
              v-model="updepartment_"
              :options = "updepartment"
              disabled
            >
            </b-form-select>
          </b-col>
          <b-col>
            <b-form-select
              v-model="employeeVariant"
              :options="selectEmployees()"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
        <b-row>
          <b-col cols="3">Zone</b-col>
          <b-col>
            <b-form-select
              v-model="zoneVariant"
              :options="zoVariants"
            ></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <div class = "space"></div>
        </b-row>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <p class="float-left">Modal Footer Content</p>
          <b-button variant = "success" class = "float-right" @click = handle_updateOK()>
          Confirm </b-button>
          <b-button variant="danger" class="float-right" @click="update = false">
          Cancel </b-button>
        </div>
      </template>
    </b-modal> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',
  // TODO: time start variants need to be smaller than time end variants
  // TODO: Six options must have values, other wise a warning will pop up.
  data() {
    return {
      message: '',
      employees: '',
      show: false,
      update: false,
      delete_emp: false,
      person_name: 'Jakub',
      person_area: 'Helix',
      // variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      // assign medal variants
      timeStVariants: [{ value: null, text: '--select start time--', disabled: true }, '8.00', '9.00', '10.00', '10.15', '10.30', '10.45',
        '11.00', '11.15', '11.30', '11.45', '12.00'],
      timeEnVariants: [{ value: null, text: '--select end time--', disabled: true }, '8.00', '9.00', '10.00', '10.15', '10.30', '10.45',
        '11.00', '11.15', '11.30', '11.45', '12.00'],
      timeStartVariants: null,
      subtimeStarttVariants: null,
      timeEndVariants: null,
      subtimeEndVariants: null,
      deVariants: [{ value: null, text: '--select department--', disabled: true }, 'Cleaner', 'Operator', 'Security', 'Maintainer'],
      departmentVariant: null,
      subdepartmentVariant: null,
      emVariants: [],
      employeeVariant: null,
      subemployeeVariant: null,
      zoVariants: [{ value: null, text: '--select zone--', disabled: true }, 'AeroSpin', 'Balder', 'Cyklonen', 'Flygis', 'Helix'],
      zoneVariant: null,
      subzoneVariant: null,
      temp: [],
      // update medal variants
      updepartment_: null,
      updepartment: [{ value: null, text: 'selected', disabled: true }],
      mailVariant: null,
      teleVariant: null,
      selemail: null
    }
  },
  mounted() {
    this.getMessage()
    this.getEmployees()
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
    },
    getEmployees() {
      Api.get('/employees').then(response => {
        this.employees = response.data.employees
      }).catch(error => {
        this.employees = error
      })
    },
    selectEmployees() {
      var temp = this.departmentVariant
      var selem = []
      // console.log('first')
      // console.log(temp)
      // console.log(this.employees.rowCount)
      for (var i = 0; i < this.employees.rowCount; i++) {
        if (this.employees.rows[i].emp_position === temp) {
          selem.push(this.employees.rows[i].emp_name)
          // console.log(this.employees.rows[i].employee_name)
        }
      }
      return selem
    },
    checkSelectValidty() {
      var valid = true
      if (this.timeStartVariants == null) {
        valid = false
      }
      return valid
    },
    show_modal() {
    },
    // reset the model to the default value
    resetSelect() {
      this.timeEndVariants = null
      this.timeStartVariants = null
      this.departmentVariant = null
      this.zoneVariant = null
      this.employeeVariant = null
      this.selemail = null
    },
    handleOK() {
      // bvModalEvt.preventDefault()
      this.resetSelect()
      this.show = false
      this.handleSubmit()
    },
    handleSubmit() {
      if (!this.checkSelectValidty()) {
        return
      }
      this.subtimeStarttVariants = this.timeStartVariants
      this.subtimeEndVariants = this.timeEndVariants
      this.subdepartmentVariant = this.departmentVariant
      this.subemployeeVariant = this.employeeVariant
      this.subzoneVariant = this.zoneVariant
      var employee = {
        name: this.subemployeeVariant,
        starttime: this.subtimeStarttVariants,
        endtime: this.subtimeEndVariants,
        zone: this.zoneVariant
      }
      Api.post('/employees/id', employee)
        .then(response => {
          this.temp.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    handle_deleteOK() {
      this.delete_emp = false
      var employee = {
        name: this.person_name
      }
      Api.post('/employees/del', employee)
        .then(response => {
          this.temp.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
    },
    select_mail() {
      var temp = this.employeeVariant
      // console.log('first')
      // var selemail = [{ text: null, disabled: true }]
      // console.log(this.employees.rowCount)
      for (var i = 0; i < this.employees.rowCount; i++) {
        if (this.employees.rows[i].emp_name === temp) {
          this.selemail = this.employees.rows[i].emp_email
          // console.log(this.employees.rows[i].employee_name)
          break
        }
      }
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

.space {
  margin:0;
  padding:0;
  height:30px;
}
.float-right {
  margin-left:5pt;
}

.columns {
  border-right: 1px solid black;
}

#name {
  column-width: 60px;
  overflow: hidden;
}
.table {
  background-color: pink;
}
.default_class{
  background-color: lightgrey;
}
</style>
