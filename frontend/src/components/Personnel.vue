o<template>
<div>
  <div v-for="personnel in personnelList" :key="personnel">
    <b-row :id="personnel.id" >
      <b-col id='name' class='columns' md='1'>{{personnel.personnelName}} </b-col>
      <b-col id='col1' class='columns'></b-col>
      <b-col id='col2' class='columns'></b-col>
      <b-col id='col3' class='columns'></b-col>
      <b-col id='col4' class='columns'></b-col>
      <b-col id='col5' class='columns'></b-col>
      <b-col id='col6' class='columns'></b-col>
      <b-col id='col7' class='columns'></b-col>
      <b-col id='col8' class='columns'></b-col>
      <b-col id='col9' class='columns'></b-col>
      <b-col id='col10' class='columns'></b-col>
      <b-col id='col11' class='columns'></b-col>
      <b-col id='col12' class='columns'></b-col>
      <b-col id='col13' class='columns'></b-col>
      <b-col id='col14' class='columns'></b-col>
      <b-col id='col15' class='columns'></b-col>
      <b-col id='col16' class='columns'></b-col>
    </b-row>
  </div>
</div>
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
        startTime: '3',
        endTime: '9'
      }, {
        id: '2',
        personnelName: 'Henrik.L',
        startTime: '5',
        endTime: '8'
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
        for (var x = this.personnelList[i].startTime; x < this.personnelList[i].endTime; x++) {
          const col = row.children[x]
          col.style = 'background-color: #C45891'
        }
      }
    },
    addRow: function () {
      var object = {
        id: j,
        personnelName: 'NAME',
        startTime: '2',
        endTime: '7'
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
