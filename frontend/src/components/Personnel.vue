<template>
  <div>
    <b-row>
      <div class="left"></div>
      <div class="columns">7:00</div>
      <div class="columns">8:00</div>
      <div class="columns">9:00</div>
      <div class="columns">10:00</div>
      <div class="columns">11:00</div>
      <div class="columns">12:00</div>
      <div class="columns">13:00</div>
      <div class="columns">14:00</div>
      <div class="columns">15:00</div>
      <div class="columns">16:00</div>
      <div class="columns">17:00</div>
      <div class="columns">18:00</div>
      <div class="columns">19:00</div>
      <div class="columns">20:00</div>
      <div class="columns">21:00</div>
      <!-- <b-col class="left"> </b-col>
      <b-col class="left"> </b-col>
      <b-col class="columns">9:00</b-col>
      <b-col class="columns">10:00</b-col>
      <b-col class="columns">9:00</b-col>
      <b-col class="columns">10:00</b-col>
      <b-col class="columns">9:00</b-col>
      <b-col class="columns">10:00</b-col>
      <b-col class="columns">9:00</b-col>
      <b-col class="columns">10:00</b-col>
      <b-col class="columns">9:00</b-col>
      <b-col class="columns">10:00</b-col>
      <b-col class="columns">9:00</b-col>
      <b-col class="columns">10:00</b-col>
      <b-col class="columns">10:00</b-col>
      <b-col class="columns">9:00</b-col>
      <b-col class="columns">10:00</b-col> -->
    </b-row>
    <!-- <b-table-simple>
      <thead>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th class="columns" colspan="2">7:00</th>
        <th class="columns" colspan="2">8:00</th>
        <th colspan="2">9:00</th>
        <th colspan="2">10:00</th>
        <th colspan="2">11:00</th>
        <th colspan="2">12:00</th>
        <th colspan="2">13:00</th>
        <th colspan="2">14:00</th>
        <th colspan="2">15:00</th>
        <th colspan="2">16:00</th>
        <th colspan="2">17:00</th>
        <th colspan="2">18:00</th>
        <th colspan="2">19:00</th>
        <th colspan="2">20:00</th>
        <th colspan="2">21:00</th>
      </thead>
      <b-tbody>
         <tr
          :id="
            personnel.start_time +
              '-' +
              personnel.end_time +
              '-' +
              personnel.employee_id
          "
          v-for="personnel in filteredPersonnelList"
          :key="personnel.page"
          @click="info(personnel)"
        >
          <td id="name" md="1">{{ personnel.emp_name }}</td>
          <td id="name" md="1">{{ personnel.emp_position }}</td>
          <td id="col1" class="columns"></td>
          <div class="timeline"></div> -->
    <!-- <td id="col2"></td>
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
          <td id="col23" class="columns1"></td>
          <td id="col24"></td>
          <td id="col25" class="columns"></td>
          <td id="col26"></td>
          <td id="col27" class="columns"></td>
          <td id="col28"></td>
          <td id="col29" class="columns"></td>
          <td id="col30"></td>  
        </tr>
      </b-tbody>
    </b-table-simple> -->
    <b-row
      :id="
        personnel.start_time +
          '-' +
          personnel.end_time +
          '-' +
          personnel.employee_id
      "
      v-for="personnel in filteredPersonnelList"
      :key="personnel.page"
      @click="info(personnel)"
    >
      <b-col cols="14" class="name"> {{ personnel.emp_name }}</b-col
      >|
      <b-col cols="14" class="name"> {{ personnel.emp_position }}</b-col>
      <div
        class="timeline"
        v-b-popover.hover.right="
          personnel.start_time +
            ':' +
            personnel.start_minute +
            '-' +
            personnel.end_time +
            ':' +
            personnel.end_minute
        "
      ></div>
    </b-row>
    <b-modal
      v-model="delete_e"
      title="Delete schedule"
      ok-variant="danger"
      ok-title="Delete"
      @ok="handle_deleteOK"
    >
      <p class="my-4">
        Do you want to delete
        {{ delete_emp.content.emp_name }} schedule?
      </p>
    </b-modal>
  </div>
</template>

<script>
/*

*/
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
          area: '',
          start_minute: '',
          end_minute: ''
        }
      }
    ],
    filteredPersonnelList: [
      {
        data: {
          emp_name: '',
          employee_id: '',
          start_time: '',
          end_time: '',
          schedule_date: '',
          emp_position: '',
          area: '',
          start_minute: '',
          end_minute: ''
        }
      }
    ],
    message: '',
    errMessage: '',
    dateSelected: today,
    roleSelected: 'All roles',
    areaSelected: 'All Rollercoaster/Game/Area',
    temp: [],
    delete_emp: { content: '' },
    delete_e: false
  }),
  created() {
    this.$root.$refs.personnel = this
    this.getAllPersonnel()
    serverBus.$on('dateSelected', data => {
      this.dateSelected = data
      this.getFilteredPersonnelList()
    })
    serverBus.$on('roleSelected', data => {
      this.roleSelected = data
      this.getFilteredPersonnelList()
    })
    serverBus.$on('areaSelected', data => {
      this.areaSelected = data
      this.getFilteredPersonnelList()
    })
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
      this.personnelList.push(object)
      this.filteredPersonnelList.push(object)
    })
  },
  methods: {
    getAllPersonnel() {
      Api.get('/schedule')
        .then(response => {
          for (i = 0; i < response.data.length; i++) {
            this.personnelList.push(response.data[i])
          }
          this.getFilteredPersonnelList()
        })
        .catch(error => {
          this.errMessage = error
        })
    },
    handle_deleteOK() {
      var employee = {
        name: this.delete_emp.content.emp_name,
        date: this.dateSelected,
        start_time: this.delete_emp.content.start_time,
        end_time: this.delete_emp.content.end_time
      }

      var employeeToDelete
      for (var i = 0; i < this.filteredPersonnelList.length; i++) {
        if (
          this.filteredPersonnelList[i].emp_name === employee.name &&
          this.filteredPersonnelList[i].schedule_date === employee.date &&
          this.filteredPersonnelList[i].start_time === employee.start_time &&
          this.filteredPersonnelList[i].end_time === employee.end_time
        ) {
          employeeToDelete = i
        }
      }

      this.filteredPersonnelList.splice(employeeToDelete, 1)

      Api.post('/del', employee)
        .then(response => {
          this.temp.push(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      this.delete_e = false
      // this.getFilteredPersonnelList()
      // this.updated()
    },
    getFilteredPersonnelList() {
      this.filteredPersonnelList.splice(0, this.filteredPersonnelList.length)
      for (i = 1; i < this.personnelList.length; i++) {
        if (
          this.personnelList[i].schedule_date.toString() ===
            this.dateSelected.toString() &&
          (this.roleSelected.toString() === 'All roles' ||
            this.personnelList[i].emp_position.toString() ===
              this.roleSelected.toString()) &&
          (this.areaSelected.toString() === 'All Rollercoaster/Game/Area' ||
            this.personnelList[i].area.toString() ===
              this.areaSelected.toString())
        ) {
          this.filteredPersonnelList.push(this.personnelList[i])
        }
      }
    },
    fillInTime: function() {
      for (i = 0; i < this.filteredPersonnelList.length; i++) {
        var row = document.getElementById(
          this.filteredPersonnelList[i].start_time +
            '-' +
            this.filteredPersonnelList[i].end_time +
            '-' +
            this.filteredPersonnelList[i].employee_id
        )

        // get the timeline component
        const ttl = row.children[2]

        //stat_min means startminutes
        var stat_min = parseInt(this.filteredPersonnelList[i].start_minute)
        // the left space of the timeline
        var mar_left =
          stat_min + 15 + (this.filteredPersonnelList[i].start_time - 7) * 61
        // width1 means the left of timeline
        var width1 = 61 - stat_min
        // width2 means the main timeline
        var width2 =
          this.filteredPersonnelList[i].end_time -
          this.filteredPersonnelList[i].start_time -
          1
        var width =
          width1 +
          width2 * 61 +
          this.filteredPersonnelList[i].end_minute +
          'px;'
        ttl.style =
          'background-color: #C45891; width:' +
          width.toString() +
          'margin-left:' +
          mar_left.toString() +
          'px;'
        // console.log(ttl.style.width)
      }
    },
    getSelectedDate: function() {
      this.$root.$refs.ScheduleFilter.getSelectedDate()
    },
    info(index) {
      this.delete_emp.content = index
      this.delete_e = true
    }
  },
  mounted() {},
  updated() {
    this.$nextTick(function() {
      this.fillInTime()
    })
  }
}
</script>

<style>
.columns {
  width: 60px;
}
.left {
  width: 190px;
}
.name {
  width: 85px;
  overflow: hidden;
}
.timeline {
  width: 200px;
  background-color: #c40000;
  margin-left: 15px;
}
/* .unbreakable td {
  width: 100% !important;
} */
</style>
