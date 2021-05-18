<template>
  <div class="Staff">
    <div class="container-fluid">
      <div class="row">
        <div class="col search">
          <input v-model="search" placeholder="Search for a name..." />
        </div>

        <div class="col filter">
          <select v-on:change="filterMember">
            <option value="all">All</option>
            <option value="Cleaner">Cleaner</option>
            <option value="Operator">Operator</option>
            <option value="Maintainer">Maintainer</option>
          </select>
        </div>

        <div class="col-12 staffheader">
          <h1>Staff List</h1>
        </div>

        <div class="col-12">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Position</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Working Hours</th>
              </tr>
            </thead>

            <tbody>
              <tr
                lass="listid"
                v-for="employee in filteredList"
                :key="employee"
                @click="info(employee)"
                style="cursor: pointer;"
              >
                <th scope="row">{{ employee.emp_id }}</th>
                <td>{{ employee.emp_name }}</td>
                <td>{{ employee.emp_position }}</td>
                <td>{{ employee.emp_email }}</td>
                <td>{{ employee.emp_phone }}</td>
                <td>{{ employee.emp_working_hours }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <b-modal
      v-model="emp_calendar_visible"
      hide-footer="True"
      id="staffCalendar_ID"
      size="xl"
      title="Staff Calendar"
      ref="staffCalendar"
    >
      <StaffCalendar :emp_id="this.emp_calendar.content.emp_id">
      </StaffCalendar>
    </b-modal>
  </div>
</template>
<script>
import { Api } from '@/Api'
import StaffCalendar from './StaffCalendar.vue'

export default {
  data() {
    return {
      tableColumns: [
        'Id',
        'Name',
        'Position',
        'Email',
        'Phone',
        'Working_hour',
        'Remaining_hours'
      ],
      search: '',

      employees1: [],
      copyEmployee: [],
      sets: [1, 2, 3, 4, 5],
      emp_calendar: { content: '' },
      emp_calendar_visible: false
    }
  },
  components: {
    StaffCalendar
  },
  mounted() {
    this.getAllStaff1()
  },
  methods: {
    getAllStaff1() {
      Api.get('/allStaff')
        .then((response) => {
          this.employees1 = response.data
          this.copyEmployee = response.data
        })
        .catch((error) => {
          this.errMessage = error
        })
    },
    filterMember: function (evt) {
      var val = evt.target.value
      if (val === 'all') {
        this.employees1 = this.copyEmployee
      } else {
        this.employees1 = this.copyEmployee.filter(function (e) {
          return e.emp_position === val
        })
      }
    },
    info(index) {
      this.emp_calendar.content = index
      this.emp_calendar_visible = true
    }
  },
  computed: {
    filteredList() {
      return this.employees1.filter((employee) => {
        return employee.emp_name
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    }
  }
}
</script>
<style>
.search {
  text-align: left;
}
.filter {
  text-align: right;
  margin-bottom: 5px;
}

.row {
  margin-top: 10px;
}

.filterbutton {
  background: #e59198 !important;
}

.staffheader {
  color: #e59198 !important;
  display: inline-block;
}
.table {
  color: #e59198 !important;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: #b4e79a !important;
}

</style>
