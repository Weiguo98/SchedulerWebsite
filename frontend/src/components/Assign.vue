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
    <b-modal
      v-model="this.show"
      title="Assign employees"
      id="modal-xl"
      size="xl"
      ref="my-modal"
      @ok="handleOK"
    >
      <b-container fluid>
        <b-row class="mb-1">
          <b-col cols="3">Date</b-col>
          <b-col>
            {{ dateDateVariants }}
            <!-- <b-form-select  v-model="dateVariants" :options="dateDateVariants">
            </b-form-select> -->
          </b-col>
          <b-col> </b-col>
        </b-row>

        <b-row>
          <div class="space"></div>
        </b-row>
        <b-row class="mb-1">
          <!-- TODO: try with time select or this is okay whatever -->
          <b-col cols="3">Planning work hours</b-col>
          <b-col>
            <b-form-select
              v-model="timeStartVariants"
              :options="timeStVariants"
            >
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
          <div class="space"></div>
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
        <div class="space"></div>
        <b-row class="mb-1">
          <b-col cols="3">Contact Info</b-col>
          <b-col>
            {{ select_mail() }}
          </b-col>
          <b-col>
            {{ select_tel() }}
          </b-col>
        </b-row>
        <b-row>
          <div class="space"></div>
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
          <div class="space"></div>
        </b-row>
      </b-container>
      <template #modal-footer>
        <div class="w-100">
          <!-- <p class="float-left">Modal Footer Content</p> -->
          <b-button variant="success" class="float-right" @click="handleOK()">
            Confirm
          </b-button>
          <b-button variant="danger" class="float-right" @click="closeModal()">
            Cancel
          </b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
import { Api } from '@/Api'
import { serverBus } from '../main'

var today = new Date()
var dd = String(today.getDate()).padStart(2, '')
var mm = String(today.getMonth() + 1).padStart(2, '')
var yyyy = today.getFullYear()
today = dd + '/' + mm + '/' + yyyy

export default {
  name: 'assign',
  // TODO: time start variants need to be smaller than time end variants
  // TODO: Six options must have values, other wise a warning will pop up.
  data() {
    return {
      personnelList: [
        {
          data: {
            emp_name: '',
            emp_id: '',
            delete_emp: false,
            start_time: '',
            end_time: '',
            schedule_date: '',
            emp_position: '',
            area: ''
          }
        }
      ],
      message: '',
      employees: '',
      show: false,
      update: false,
      delete_emp: false,
      person_name: 'Jakub',
      person_area: 'Helix',
      // variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
      // assign medal variants
      dateDateVariants: today,
      timeStVariants: [
        { value: null, text: '--select start time--', disabled: true },
        '7.00',
        '8.00',
        '9.00',
        '10.00',
        '11.00',
        '12.00',
        '13.00',
        '14.00',
        '15.00',
        '16.00',
        '17.00',
        '18.00',
        '19.00',
        '20.00',
        '21.00'
      ],
      timeEnVariants: [
        { value: null, text: '--select end time--', disabled: true },
        '7.00',
        '8.00',
        '9.00',
        '10.00',
        '11.00',
        '12.00',
        '13.00',
        '14.00',
        '15.00',
        '16.00',
        '17.00',
        '18.00',
        '19.00',
        '20.00',
        '21.00'
      ],
      dateVariants: null,
      subdateVariants: null,
      timeStartVariants: null,
      subtimeStarttVariants: null,
      timeEndVariants: null,
      subtimeEndVariants: null,
      deVariants: [
        { value: null, text: '--select department--', disabled: true },
        'Cleaner',
        'Operator',
        'Maintainer'
      ],
      departmentVariant: null,
      subdepartmentVariant: null,
      emVariants: [],
      employeeVariant: null,
      subemployeeVariant: null,
      zoVariants: [
        { value: null, text: '--select zone--', disabled: true },
        'Helix',
        'Atmosphere',
        'The Cannon'
      ],
      zoneVariant: null,
      subzoneVariant: null,
      temp: [],
      // update medal variants
      updepartment_: null,
      updepartment: [{ value: null, text: 'selected', disabled: true }]
    }
  },
  created() {
    this.$root.$refs.assign = this
    serverBus.$on('dateSelected', (data) => {
      this.dateDateVariants = data
    })
  },
  mounted() {
    this.getEmployees()
  },
  methods: {
    getEmployees() {
      Api.get('/allStaff')
        .then((response) => {
          var i
          for (i = 0; i < response.data.length; i++) {
            this.personnelList.push(response.data[i])
          }
        })
        .catch((error) => {
          this.employees = error
        })
    },
    selectEmployees() {
      var temp = this.departmentVariant
      var selem = []
      // console.log('first')
      // console.log(temp)
      // console.log(this.employees.rowCount)
      for (var i = 0; i < this.personnelList.length; i++) {
        if (this.personnelList[i].emp_position === temp) {
          selem.push(this.personnelList[i].emp_name)
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
    showModal() {
      this.$refs['my-modal'].show()
      this.resetSelect()
    },
    closeModal() {
      this.$refs['my-modal'].hide()
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
      this.closeModal()
      this.handleSubmit()
    },
    handleSubmit() {
      /*
      if (!this.checkSelectValidty()) {
        return
      }
      */

      this.subdateVariants = this.dateVariants
      this.subtimeStarttVariants = this.timeStartVariants
      this.subtimeEndVariants = this.timeEndVariants
      this.subdepartmentVariant = this.departmentVariant
      this.subemployeeVariant = this.employeeVariant
      this.subzoneVariant = this.zoneVariant
      // Need to add more attributes to employee. E.g. the test variable below
      /*
      var employee = {
        name: this.subemployeeVariant,
        date: this.subdateVariants,
        starttime: this.subtimeStarttVariants,
        endtime: this.subtimeEndVariants,
        zone: this.zoneVariant
      }
      */
      var employee = {
        id: this.getEmployeeId(),
        name: this.subemployeeVariant,
        starttime: this.subtimeStarttVariants,
        endtime: this.subtimeEndVariants,
        emp_position: this.subdepartmentVariant,
        date: this.dateDateVariants,
        area: this.zoneVariant
      }

      serverBus.$emit('employeeAssigned', employee)

      Api.post('/schedule', employee)
        .then((response) => {
          this.temp.push(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getEmployeeId() {
      var i
      for (i = 0; i < this.personnelList.length; i++) {
        if (this.personnelList[i].emp_name === this.employeeVariant) {
          return this.personnelList[i].emp_id
        }
      }
    },
    select_mail() {
      var temp = this.employeeVariant
      var selemail = null
      // console.log('first')
      // var selemail = [{ text: null, disabled: true }]
      // console.log(this.employees.rowCount)
      for (var i = 0; i < this.personnelList.length; i++) {
        if (this.personnelList[i].emp_name === temp) {
          selemail = this.personnelList[i].emp_email
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
      for (var i = 0; i < this.personnelList.length; i++) {
        if (this.personnelList[i].emp_name === temp) {
          seletel = this.personnelList[i].emp_phone
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
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: whitesmoke;
  border: 2px solid lightgray;
}

.space {
  margin: 0;
  padding: 0;
  height: 30px;
}
.float-right {
  margin-left: 5pt;
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
.default_class {
  background-color: lightgrey;
}
</style>
