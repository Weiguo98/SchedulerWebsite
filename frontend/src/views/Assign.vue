<template>
  <div>
      <!-- <b-container fluid>
      <div class ="mt-3">
      Assigned Endtime:{{subtimeEndVariants}}
      Assigned Starttime:{{subtimeStarttVariants}}
      Department:{{subdepartmentVariant}}
      Employee: {{subemployeeVariant}}
      Zone:{{subzoneVariant}}
      </div>
    </b-container> -->
    <b-button @click="show=true" variant="primary">Assign employee</b-button>
    <b-modal
      v-model="show"
      title="Assign employees"
      id="modal-xl"
      size="xl"
      ref="my-modal"
      @show = "resetSelect"
       @hidden ="resetSelect"
       @ok ="handleOK"
       >
      <b-container fluid>
          <b-row class="mb-1">
          <b-col cols="3">Date</b-col>
          <b-col>
              {{dateDateVariants}}
            <!-- <b-form-select  v-model="dateVariants" :options="dateDateVariants">
            </b-form-select> -->
          </b-col>
          <b-col>

          </b-col>

          </b-row>

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
          </b-col>
          <b-col>
            {{select_tel()}}
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
  </div>
</template>
<script>
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
      dateDateVariants: '29/4/2021',
      timeStVariants: [{ value: null, text: '--select start time--', disabled: true }, '7.00', '8.00', '9.00', '10.00', '11.00', '12.00', '13.00',
        '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00'],
      timeEnVariants: [{ value: null, text: '--select end time--', disabled: true }, '7.00', '8.00', '9.00', '10.00', '11.00', '12.00', '13.00',
        '14.00', '15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00'],
      dateVariants: null,
      subdateVariants: null,
      timeStartVariants: null,
      subtimeStarttVariants: null,
      timeEndVariants: null,
      subtimeEndVariants: null,
      deVariants: [{ value: null, text: '--select department--', disabled: true }, 'Cleaner', 'Operator', 'Maintainer'],
      departmentVariant: null,
      subdepartmentVariant: null,
      emVariants: [],
      employeeVariant: null,
      subemployeeVariant: null,
      zoVariants: [{ value: null, text: '--select zone--', disabled: true }, 'Helix', 'Atmosphere', 'The Cannon'],
      zoneVariant: null,
      subzoneVariant: null,
      temp: [],
      // update medal variants
      updepartment_: null,
      updepartment: [{ value: null, text: 'selected', disabled: true }]
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
      this.dateVariants = null
      this.timeEndVariants = null
      this.timeStartVariants = null
      this.departmentVariant = null
      this.zoneVariant = null
      this.employeeVariant = null
      this.selemail = null
    },
    handleOK() {
      // bvModalEvt.preventDefault()
      this.show = false
      this.handleSubmit()
    },
    handleSubmit() {
      if (!this.checkSelectValidty()) {
        return
      }

      this.subdateVariants = this.dateVariants
      this.subtimeStarttVariants = this.timeStartVariants
      this.subtimeEndVariants = this.timeEndVariants
      this.subdepartmentVariant = this.departmentVariant
      this.subemployeeVariant = this.employeeVariant
      this.subzoneVariant = this.zoneVariant
      var employee = {
        name: this.subemployeeVariant,
        date: this.subdateVariants,
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
      var selemail = null
      // console.log('first')
      // var selemail = [{ text: null, disabled: true }]
      // console.log(this.employees.rowCount)
      for (var i = 0; i < this.employees.rowCount; i++) {
        if (this.employees.rows[i].emp_name === temp) {
          selemail = this.employees.rows[i].emp_email
          // console.log(this.employees.rows[i].employee_name)
          break
        }
      }
      return selemail
    },
    select_tel() {
      var temp = this.employeeVariant
      var seletel = null
      // console.log('first')
      // var selemail = [{ text: null, disabled: true }]
      // console.log(this.employees.rowCount)
      for (var i = 0; i < this.employees.rowCount; i++) {
        if (this.employees.rows[i].emp_name === temp) {
          seletel = this.employees.rows[i].emp_phone
          // console.log(this.employees.rows[i].employee_name)
          break
        }
      }
      return seletel
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
