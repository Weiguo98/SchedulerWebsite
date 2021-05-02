<template>
  <tbody>
    <tr
      :id="personnel.employee_id"
      v-for="personnel in filteredPersonnelList"
      :key="personnel.page"
      @click="showDeleteModal()"
    >
      <td id="name" md="1">{{ personnel.emp_name }}</td>
      <td id="name" md="1">{{ personnel.emp_position }}</td>
      <td id="col1" class="columns"></td>
      <td id="col2"></td>
      <td id="col3" class="columns"></td>
      <td id="col4"></td>
      <td id="col5" class="columns"></td>
      <td id="col6"></td>
      <td id="col7" class="columns"></td>
      <td id="col8"></td>
      <td id="col9" class="columns"></td>
      <td id="col10"></td>
      <td id="col11" class="columns"></td>
      <td id="col12"></td>
      <td id="col13" class="columns"></td>
      <td id="col14"></td>
      <td id="col15" class="columns"></td>
      <td id="col16"></td>
      <td id="col17" class="columns"></td>
      <td id="col18"></td>
      <td id="col19" class="columns"></td>
      <td id="col20"></td>
      <td id="col21" class="columns"></td>
      <td id="col22"></td>
      <td id="col23" class="columns"></td>
      <td id="col24"></td>
      <td id="col25" class="columns"></td>
      <td id="col26"></td>
      <td id="col27" class="columns"></td>
      <td id="col28"></td>
      <td id="col29" class="columns"></td>
      <td id="col30"></td>
    </tr>
  </tbody>

</template>



<script>

import { Api } from '@/Api'
import { serverBus } from '../main'
var i = 0

var today = new Date()
var dd = String(today.getDate()).padStart(2, '')
var mm = String(today.getMonth() + 1).padStart(2, '')
var yyyy = today.getFullYear()
today = dd + '/' + mm + '/' + yyyy

export default {
  name: 'personnel',
  data: () => ({
    personnelList: [
      {
        data: {
          emp_name: '',
          employee_id: '',
          delete_emp: false,
          start_time: '',
          end_time: '',
          schedule_date: '',
          emp_position: '',
          area: ''
        }
      }
    ],
    filteredPersonnelList: [
      {
        data: {
          emp_name: '',
          employee_id: '',
          start_time: '',
          delete_emp: false,
          end_time: '',
          schedule_date: '',
          emp_position: '',
          area: ''
        }
      }
    ],
    message: '',
    errMessage: '',
    dateSelected: today,
    roleSelected: 'All roles',
    areaSelected: 'All Rollercoaster/Game/Area',
    temp: []
  }),
  created() {
    this.$root.$refs.personnel = this
    this.getAllPersonnel()
    serverBus.$on('dateSelected', (data) => {
      this.dateSelected = data
      this.getFilteredPersonnelList()
    })
    serverBus.$on('roleSelected', (data) => {
      this.roleSelected = data
      this.getFilteredPersonnelList()
    })
    serverBus.$on('areaSelected', (data) => {
      this.areaSelected = data
      this.getFilteredPersonnelList()
    })
    serverBus.$on('employeeAssigned', (data) => {
      var object = {
        emp_name: data.name,
        employee_id: data.id,
        emp_position: data.emp_position,
        schedule_date: data.date,
        start_time: data.starttime,
        end_time: data.endtime,
        area: data.area
      }
      this.filteredPersonnelList.push(object)
    })
  },
  methods: {
    getAllPersonnel() {
      Api.get('/schedule')
        .then((response) => {
          for (i = 0; i < response.data.length; i++) {
            this.personnelList.push(response.data[i])
          }
          this.getFilteredPersonnelList()
        })
        .catch((error) => {
          this.errMessage = error
        })
    },
    showDeleteModal: function() {
      console.log('hej')
    },
    handle_deleteOK() {
      this.filteredPersonnelList.delete_emp = false
      var employee = {
        name: this.filteredPersonnelList.emp_name
      }
      Api.post('/del', employee)
        .then((response) => {
          this.temp.push(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getFilteredPersonnelList() {
      this.filteredPersonnelList.splice(0, this.filteredPersonnelList.length)
      for (i = 1; i < this.personnelList.length; i++) {
        if (
          this.personnelList[i].schedule_date.toString() ===
            this.dateSelected.toString() &&
          (this.roleSelected.toString() == 'All roles' ||
            this.personnelList[i].emp_position.toString() ===
              this.roleSelected.toString()) &&
          (this.areaSelected.toString() == 'All Rollercoaster/Game/Area' ||
            this.personnelList[i].area.toString() ===
              this.areaSelected.toString())
        ) {
          this.filteredPersonnelList.push(this.personnelList[i])
        }
      }
    },
    fillInTime: function () {
      for (i = 0; i < this.filteredPersonnelList.length; i++) {
        var row = document.getElementById(
          this.filteredPersonnelList[i].employee_id
        )
        for (
          var x = (this.filteredPersonnelList[i].start_time - 5.5) * 2;
          x < (this.filteredPersonnelList[i].end_time - 5.5) * 2;
          x++
        ) {
          const col = row.children[x]
          col.style = 'background-color: #C45891'
        }
      }
    },
    getSelectedDate: function () {
      this.$root.$refs.ScheduleFilter.getSelectedDate()
    }
  },
  mounted() {},
  updated() {
    this.$nextTick(function () {
      this.fillInTime()
    })
  }
}
</script>

<style>
.columns {
  border-right: 1px solid black;
}

#name {
  column-width: 60px;
  overflow: hidden;
}

.unbreakable td{
    width: 100% !important;
}

</style>
