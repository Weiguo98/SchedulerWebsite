<template>
  <div>
    <b-modal
      v-model="this.show"
      title="Assign employees"
      id="modal-xl"
      size="xl"
      ref="my-modal"
      @ok="handleOK"
    >
      <b-container fluid>
        <b-row>
          <div class="space"></div>
        </b-row>
        <b-row class="mb-1">
          <b-col cols="3">Planning work hours</b-col>

          <b-col class="form_sel">
            <b-form-select
              v-model="timeStartVariants"
              :options="timeStVariants"
            >
            </b-form-select> </b-col
          >:
          <b-col>
            <b-form-select
              v-model="minuteStartVariants"
              :options="minuteStVariants"
            >
            </b-form-select>
          </b-col>

          <b-col> </b-col>
          <b-col>
            <b-form-select
              v-model="timeEndVariants"
              :options="timeEnVariants"
            ></b-form-select> </b-col
          >:
          <b-col>
            <b-form-select
              v-model="minuteEndVariants"
              :options="minuteEnVariants"
            >
            </b-form-select>
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
      delete_emp: false,
      dateDateVariants: today,
      timeStVariants: [
        { value: null, text: 'start time', disabled: true },
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21'
      ],
      minuteStVariants: [
        { value: null, text: 'start minute', disabled: true },
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44',
        '45',
        '46',
        '47',
        '48',
        '49',
        '50',
        '51',
        '52',
        '53',
        '54',
        '55',
        '56',
        '57',
        '58',
        '59'
      ],
      timeEnVariants: [
        { value: null, text: 'end time', disabled: true },
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21'
      ],
      minuteEnVariants: [
        { value: null, text: 'end minute', disabled: true },
        '00',
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36',
        '37',
        '38',
        '39',
        '40',
        '41',
        '42',
        '43',
        '44',
        '45',
        '46',
        '47',
        '48',
        '49',
        '50',
        '51',
        '52',
        '53',
        '54',
        '55',
        '56',
        '57',
        '58',
        '59'
      ],
      dateVariants: null,
      timeStartVariants: null,
      minuteStartVariants: null,
      timeEndVariants: null,
      minuteEndVariants: null,
      deVariants: [
        { value: null, text: '--select department--', disabled: true },
        'Cleaner',
        'Operator',
        'Maintainer'
      ],
      departmentVariant: null,
      emVariants: [],
      employeeVariant: null,
      zoVariants: [
        { value: null, text: '--select zone--', disabled: true },
        'Helix',
        'Atmosphere',
        'The Cannon'
      ],
      zoneVariant: null,
      temp: []
    }
  },
  created() {
    this.$root.$refs.assign = this
    serverBus.$on('dateSelected', data => {
      this.dateDateVariants = data
    })
  },
  mounted() {
    this.getEmployees()
  },
  methods: {
    getEmployees() {
      Api.get('/allStaff')
        .then(response => {
          var i
          for (i = 0; i < response.data.length; i++) {
            this.personnelList.push(response.data[i])
          }
        })
        .catch(error => {
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
      this.minuteStartVariants = null
      this.minuteEndVariants = null
    },
    handleOK() {
      // bvModalEvt.preventDefault()
      this.closeModal()
      this.handleSubmit()
    },
    handleSubmit() {
      var employee = {
        id: this.getEmployeeId(),
        name: this.employeeVariant,
        starttime: this.timeStartVariants,
        endtime: this.timeEndVariants,
        emp_position: this.departmentVariant,
        date: this.dateDateVariants,
        area: this.zoneVariant,
        startmin: this.minuteStartVariants,
        endmin: this.minuteEndVariants
      }
      console.log(employee)
      if(parseInt(employee.starttime) >= parseInt(employee.endtime)) {
        alert('Start hour of the shift have to be less than or equal to the end hour')
        this.showModal()
      } else {
      serverBus.$emit('employeeAssigned', employee)
      Api.post('/schedule', employee)
        .then(response => {
          this.temp.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      }
      // return true
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
      for (var i = 0; i < this.personnelList.length; i++) {
        if (this.personnelList[i].emp_name === temp) {
          selemail = this.personnelList[i].emp_email
          break
        }
      }
      return selemail
    },
    select_tel() {
      var temp = this.employeeVariant
      var seletel = null
      for (var i = 0; i < this.personnelList.length; i++) {
        if (this.personnelList[i].emp_name === temp) {
          seletel = this.personnelList[i].emp_phone
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

.default_class {
  background-color: lightgrey;
}
.form_sel {
  margin-bottom: 2px;
}
</style>
