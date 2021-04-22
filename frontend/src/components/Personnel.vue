<template>
  <tbody>
      <tr :id="personnel.id" v-for="personnel in personnelList" :key="personnel">
        <td id='name' md='1'>{{personnel.personnelName}}</td>
        <td id='name' md='1'>{{personnel.role}}</td>
        <td id='col1' class='columns'></td><td id='col2'></td>
        <td id='col3' class='columns'></td><td id='col4'></td>
        <td id='col5' class='columns'></td><td id='col6'></td>
        <td id='col7' class='columns'></td><td id='col8'></td>
        <td id='col9' class='columns'></td><td id='col10'></td>
        <td id='col11' class='columns'></td><td id='col12'></td>
        <td id='col13' class='columns'></td><td id='col14'></td>
        <td id='col15' class='columns'></td><td id='col16'></td>
        <td id='col17' class='columns'></td><td id='col18'></td>
        <td id='col19' class='columns'></td><td id='col20'></td>
        <td id='col21' class='columns'></td><td id='col22'></td>
        <td id='col23' class='columns'></td><td id='col24'></td>
        <td id='col25' class='columns'></td><td id='col26'></td>
        <td id='col27' class='columns'></td><td id='col28'></td>
        <td id='col29' class='columns'></td><td id='col30'></td>
      </tr>
  </tbody>
</template>

<script>
var i = 0
var j = 3

export default {
  name: 'personnel',
  data: function () {
    return {
      personnelList: [{
        id: '1',
        personnelName: 'Henrik.T',
        startTime: '8',
        endTime: '9',
        role: 'Operator'
      }, {
        id: '2',
        personnelName: 'Henrik.L',
        startTime: '9',
        endTime: '13',
        role: 'Cleaner'
      }]
    }
  },
  created() {
    this.$root.$refs.personnel = this
  },
  methods: {
    fillInTime: function () {
      for (i = 0; i < this.personnelList.length; i++) {
        var row = document.getElementById(this.personnelList[i].id)
        for (var x = (this.personnelList[i].startTime - 5.5) * 2; x < (this.personnelList[i].endTime - 5.5) * 2; x++) {
          const col = row.children[x]
          col.style = 'background-color: #C45891'
        }
      }
    },
    addRow: function () {
      var object = {
        id: j,
        personnelName: 'NAME',
        startTime: '14',
        endTime: '17',
        role: 'Maintainer'
      }
      j++
      this.personnelList.push(object)
      this.personnelName = ''
      this.startTime = ''
      this.endTime = ''
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.fillInTime()
    })
  },
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
</style>
