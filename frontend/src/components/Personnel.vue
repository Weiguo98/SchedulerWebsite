<template>
<div>
  <b-button v-on:click="addRow(); fillInTime()"> hej </b-button>
  <div v-for="personnel in personnelList" :key="personnel">
    <b-row>
      <b-col id='name' class='names'>{{personnel.personnelName}} </b-col>
      <b-col id='col1' ref="col1"></b-col>
      <b-col id='2'></b-col>
      <b-col id='3'></b-col>
      <b-col id='4'></b-col>
      <b-col id='5'></b-col>
      <b-col id='6'></b-col>
      <b-col id='7'></b-col>
      <b-col id='8'></b-col>
      <b-col id='9'></b-col>
      <b-col id='10'></b-col>
      <b-col id='11'></b-col>
      <b-col id='12'></b-col>
      <b-col id='13'></b-col>
      <b-col id='14'></b-col>
      <b-col id='15'></b-col>
      <b-col id='16'></b-col>
    </b-row>
  </div>
</div>
</template>

<script>

export default {
  name: 'personnel',
  data: function () {
    return {
      personnelList: [{
        personnelName: 'Henrik.T',
        startTime: '1',
        endTime: '3'
      }, {
        personnelName: 'Henrik.L',
        startTime: '5',
        endTime: '8'
      }]
    }
  },
  methods: {
    fillInTime: function () {
      var j = 0
      for (j = this.startTime; this.startTime < this.endTime; j++) {
        console.log('PATRIK')
        const col = document.getElementById('col' + this.startTime)
        col.style = 'background-color: #e3e3e3'
      }
    },
    addRow: function () {
      var object = {
        personnelName: 'NAME',
        startTime: '1',
        endTime: '3'
      }
      this.personnelList.push(object)
      this.personnelName = ''
      this.startTime = ''
      this.endTime = ''
    }
  }
}
</script>

<style>

</style>
