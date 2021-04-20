<template>
  <b-container>
  <b-row>
    <b-col></b-col>
    <b-col>6AM</b-col>
    <b-col>7AM</b-col>
    <b-col>8AM</b-col>
    <b-col>9AM</b-col>
    <b-col>10AM</b-col>
    <b-col>11AM</b-col>
    <b-col>12AM</b-col>
    <b-col>1PM</b-col>
    <b-col>2PM</b-col>
    <b-col>3PM</b-col>
    <b-col>4PM</b-col>
    <b-col>5PM</b-col>
    <b-col>6PM</b-col>
    <b-col>7PM</b-col>
    <b-col>8PM</b-col>
  </b-row>
  <Personnel> </Personnel>
</b-container>
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
*{
  margin:0;
  padding:0;
  font-family: sans-serif;
  box-sizing: border-box;
}

.schedule {
  display: grid;
  grid-template-areas: "empty planes" "time contents";
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
  background-color: #EBF1DE;
  grid-template-columns: repeat(8,1fr);
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
  grid-template-columns: repeat(8,1fr);
  border-right: 1px solid;
  grid-auto-flow: row;
}

.content > div {
  border-right: 1px solid;
}

</style>
