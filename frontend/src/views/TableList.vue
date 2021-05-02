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
                body-classes="table-full-width table-responsive"
          >
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
  const tableColumns = ['Id', 'Name', 'Position', 'Worked', 'Remaining']
  const tableData = [{
    id: 1,
    name: 'Amir',
    position: 'Operator',
    worked: "20",
    remaining: '20'
  },
  {
    id: 2,
    name: 'Kuba',
    position: 'Maintanance',
    worked: "5",
    remaining: '25'
  },
  {
    id: 3,
    name: 'Samin',
    position: 'Operator',
    worked: "25",
    remaining: '15'
  },
  {
    id: 4,
    name: 'David',
    position: 'Cleaner',
    worked: "35",
    remaining: '5'
  },
  {
    id: 5,
    name: 'James',
    position: 'Operator',
    worked: "40",
    remaining: '0'
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
