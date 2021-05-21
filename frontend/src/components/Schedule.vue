<template>
  <table class="scheduleTable">
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
  /* margin: 0;
  padding: 0; */
  font-family: sans-serif;
  box-sizing: border-box;
}

.col {
  width: 55px;
}

/* .schedule {
  display: grid;
  grid-template-areas: 'empty planes' 'time contents';
  grid-template-columns: 100px;
  grid-template-rows: 90px;
  width: 90%;
  height: 90vh;
  margin: 0 auto;
  box-shadow: 0 2px 10px;
  margin-left: 10%;
} */

/* .empty {
  display: grid;
  grid-area: empty;
  border-bottom: 1px solid;
  border-right: 1px solid;
} */

/* .times {
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
} */

/* .Personnel {
  grid-area: time;
  display: grid;
} */

.Personnel > div {
  border-bottom: 1px solid;
  align-items: center;
  border-right: 1px solid;
}

/* .content {
  grid-area: contents;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);
  border-right: 1px solid;
  grid-auto-flow: row;
}

.content > div {
  border-right: 1px solid;
} */

.scheduleTable {
  margin-left: 10vw;
  width: 80%;
  background: #ffffff;
}
/* tr:nth-child(even) {
  background: #ff0000;
}
tr:nth-child(odd) {
  background: #e2e2e2;
} */
</style>
