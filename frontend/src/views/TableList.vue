<template>
  <div class="Staff">
    <div class="container-fluid">
      <div class="row">
        <div class = "col search">
          <input v-model="message" placeholder="Search ..." class = "search">
        </div>

        <div class = "col filter">
          <b-button variant="primary" href="">Filter</b-button>
        </div>

        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive">
            <template slot="header">
              <h4 class="card-title">Staff List</h4>
            </template>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from '../../src/components/Table.vue'
  import Card from '../../src/components/Cards/Card.vue'
  const tableColumns = ['Id', 'Name', 'Position', 'Email', 'Phone', 'Working_hour', 'Remaining_hours']
  
  const tableData = [{
    id: 1,
    name: 'Amir',
    position: 'Operator',
    email: "abc@gmail.com",
    phone: '123456789'
  },
  {
    id: 2,
    name: 'Kuba',
    position: 'Maintanance',
    email: "abc@gmail.com",
    phone: '123456789'
  },
  {
    id: 3,
    name: 'Samin',
    position: 'Operator',
    email: "abc@gmail.com",
    phone: '123456789'
  },
  {
    id: 4,
    name: 'David',
    position: 'Cleaner',
    email: "abc@gmail.com",
    phone: '123456789'
  },
  {
    id: 5,
    name: 'James',
    position: 'Operator',
    email: "abc@gmail.com",
    phone: '123456789'
  }]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
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

</style>
