<template>
  <div>
    <b-container fluid>
      <div id="subb">
        <b-row class="timehead">
          <div class="left"></div>
          <div class="columns_start">7:00</div>
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
        </b-row>
        <b-row class="table_space"> </b-row>
        <b-row
          class="rowsss"
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
          <div class="name">{{ personnel.emp_name }}</div>
          <div class="name_right">{{ personnel.emp_position }}</div>
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
      </div>
    </b-container>
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
      // console.log('personnel length')
      // console.log(this.personnelList.length)
      // console.log('filtered length')
      // console.log(this.filteredPersonnelList.length)
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
      // console.log('fill in time:')
      // console.log(this.filteredPersonnelList.length)
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
        // console.log(ttl.style)
        //stat_min means startminutes
        var start_min_int = parseInt(this.filteredPersonnelList[i].start_minute)
        // the left space of the timeline
        var mar_left =
          (start_min_int +
            (parseInt(this.filteredPersonnelList[i].start_time) - 7) * 60) /
            15 +
          0.5
        // width1 means the left of timeline
        var width1 = 60 - start_min_int
        // width2 means the main timeline
        var width2 =
          parseInt(this.filteredPersonnelList[i].end_time) -
          parseInt(this.filteredPersonnelList[i].start_time) -
          1
        var width =
          (width1 +
            width2 * 60 +
            parseInt(this.filteredPersonnelList[i].end_minute)) /
          15
        ttl.style =
          'background-color: #457b9d; width:' +
          width.toString() +
          'vw;margin-left:' +
          mar_left.toString() +
          'vw;'
        // console.log('width1:' + width1.toString())
        // console.log('width2:' + width2.toString())
        // console.log('width:' + width.toString())
        // console.log('mar-left:' + mar_left.toString())
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
.columns_start {
  border-left: 1px solid #457b9d;
  border-right: 1px solid #457b9d;
  width: 4vw;
  padding: 0.3vw 0.6vw;
  text-align: center;
}
.columns {
  width: 4vw;
  padding: 0.3vw 0.6vw 0.3vw 0.6vw;
  text-align: center;
  border-right: 1px solid #457b9d !important;
}
.left {
  width: 12.5vw;
}
.timehead {
  margin-bottom: 0.5vw;
}
.name {
  width: 6vw;
  overflow: hidden;
  text-align: center;
}
.name_right {
  width: 6vw;
  overflow: hidden;
  text-align: center;
  border-left: 0.1vw solid #457b9d;
}
.timeline {
  width: 200px;
  background-color: #c40000;
  margin-left: 1vw;
}

.rowsss {
  margin-bottom: 0.5vw;
}

/* .rowsss:nth-of-type(odd) {
  background: #e0e0e0;
} */

.table_space {
  height: 0.1vw;
  background-color: #e0e0e0;
  margin-bottom: 0.5vw;
}

#subb {
  background: #ffffff;
  padding-top: 0.2vw;
  padding-bottom: 0.2vw;
}
</style>
