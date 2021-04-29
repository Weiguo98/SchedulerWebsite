<template>
  <div class="Staff">
    <div class="container-fluid">
      <div class="row">
        <div class = "col search">
          <input v-model="message" placeholder="Search ..." class = "search">
        </div>

        <div class = "col filter">
          <b-button href="" class = "filterbutton">Filter</b-button>
        </div>

        <div class = "col-12 staffheader">
          <h1> Staff List </h1>
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
                  <tr lass = "listid" v-for="employee in this.employees1" :key="employee">
                    <th scope="row">{{employee.emp_id}}</th>
                    <td>{{employee.emp_name}}</td>
                    <td>{{employee.emp_position}}</td>
                    <td>{{employee.emp_email}}</td>
                    <td>{{employee.emp_phone}}</td>
                    <td>{{employee.emp_working_hours}}</td>
                  </tr>
                </tbody>
              </table>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { Api } from '@/Api'

export default {
  data() {
    return {
      tableColumns: ['Id', 'Name', 'Position', 'Email', 'Phone', 'Working_hour', 'Remaining_hours'],
      message: '',

      employees1: '',
      sets: [1, 2, 3, 4, 5]
    }
  },
  mounted() {
    this.getAllStaff1()
  },
  methods: {
    getAllStaff1() {
      Api.get('')
        .then(response => {
          this.employees1 = response.data
          console.log('read employee ok')
          console.log(this.employees1)
          console.log(this.employees1.length)
        })
        .catch(error => {
          this.errMessage = error
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

.row{
  margin-top: 10px;
}

.filterbutton{
  background: #e59198 !important;
}

.staffheader {
   color:#e59198  !important;
    display: inline-block;
}
.table{
  color:#e59198  !important;
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #b4e79a !important;
}

</style>
