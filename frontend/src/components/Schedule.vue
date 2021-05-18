<template>
  <table class="scheduleTable">
    <!-- <thead>
      <th></th>
      <th></th>
      <th colspan="2">7:00</th>
      <th colspan="2">8:00</th>
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
    </thead> -->
    <Personnel> </Personnel>
  </table>
</template>

<script>
import Personnel from './Personnel.vue'

export default {
  components: {
    Personnel
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}

.col {
  width: 55px;
}

.schedule {
  display: grid;
  grid-template-areas: 'empty planes' 'time contents';
  grid-template-columns: 100px;
  grid-template-rows: 90px;
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  box-shadow: 0 2px 10px;
  margin-left: 10%;
}

.empty {
  display: grid;
  grid-area: empty;
  border-bottom: 1px solid;
  border-right: 1px solid;
}

.times {
  display: grid;
  text-transform: uppercase;
  grid-area: planes;
  font-size: 12px;
  background-color: #aeff00;
  grid-template-columns: repeat(8, 1fr);
  border-bottom: 1px solid;
}

.times > div {
  display: grid;
  align-items: center;
  border-right: 1px solid;
}

.Personnel {
  grid-area: time;
  display: grid;
}

.Personnel > div {
  display: grid;
  border-bottom: 1px solid;
  align-items: center;
  border-right: 1px solid;
}

.content {
  grid-area: contents;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);
  border-right: 1px solid;
  grid-auto-flow: row;
}

.content > div {
  border-right: 1px solid;
}

.scheduleTable {
  margin-left: 150px;
  width: 80%;
}
</style>
