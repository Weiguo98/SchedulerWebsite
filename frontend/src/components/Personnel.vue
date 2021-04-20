o<template>
<div>
  <b-button v-on:click="addRow(); fillInTime()"> hej </b-button>
  <div v-for="personnel in personnelList" :key="personnel">
    <b-row :id="personnel.id" >
      <b-col id='name' class='names'>{{personnel.personnelName}} </b-col>
      <b-col id='col1' ref="col1"></b-col>
      <b-col id='col2'></b-col>
      <b-col id='col3'></b-col>
      <b-col id='col4'></b-col>
      <b-col id='col5'></b-col>
      <b-col id='col6'></b-col>
      <b-col id='col7'></b-col>
      <b-col id='col8'></b-col>
      <b-col id='col9'></b-col>
      <b-col id='col10'></b-col>
      <b-col id='col11'></b-col>
      <b-col id='col12'></b-col>
      <b-col id='col13'></b-col>
      <b-col id='col14'></b-col>
      <b-col id='col15'></b-col>
      <b-col id='col16'></b-col>
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
  methods: {
    fillInTime: function () {
      for (var x = this.personnelList[i].startTime; x < this.personnelList[i].endTime; x++) {
        const col = document.getElementById('col' + x)
        col.style = 'background-color: #e3e3e3'
      }
      /*
      var numberOfSiblings = document.getElementById('row').parentElement.childElementCount

      var base = "document.getElementById('row').parentElement"
      for (var y = 0; y < numberOfSiblings; y++) {
        base = base.concat('.nextElementSibling')
      }
      base = base.concat('.firstChild')
      base = base.children[5]
      base.style = 'background-color: #e3e3e3'
      */
      /*
      var test = document.getElementById('row').parentElement.nextElementSibling.firstChild
      console.log(test)
      var test1 = test.children[15]
      test1.style = 'background-color: #e3e3e3'
      */
    },
    addRow: function () {
      var object = {
        id: j,
        personnelName: 'NAME',
        startTime: '1',
        endTime: '3'
      }
      j++
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
