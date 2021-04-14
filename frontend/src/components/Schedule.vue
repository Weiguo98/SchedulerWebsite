<template>
  <div class='calendar-container'>
      <div class='calendar'>
        <div class='empty'></div>
        <div class="times">
          <b-col>
            <div> 5 AM </div>
          </b-col>
          <b-col>
            <div> 6 AM </div>
          </b-col>
          <b-col>
            <div> 7 AM </div>
          </b-col>
          <b-col>
            <div> 8 AM </div>
          </b-col>
          <b-col>
            <div> 9 AM </div>
          </b-col>
          <b-col>
            <div> 10 AM </div>
          </b-col>
          <b-col>
            <div> 11 AM </div>
          </b-col>
          <b-col>
            <div> 12 AM </div>
          </b-col>
        </div>
        <div class="personell">
          <div id="1">Personell 1</div>
          <div id="2">Personell 2</div>
          <div id="3">Personell 3</div>
          <div id="4">Personell 4</div>
          <div id="5">Personell 5</div>
        </div>
        <div class="content">
          <button id="1" onclick="myFunction()"> </button>
          <button id="2"> </button>
          <button id="3"> </button>
          <button id="4"> </button>
          <button id="5"> </button>
          <button id="6"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="7"> </button>
          <button id="10"> </button>
        </div>
      </div>
    </div>
</template>


<style>
*{
  margin:0;
  padding:0;
  font-family: sans-serif;
  box-sizing: border-box;
}

.calendar {
  display: grid;
  grid-template-areas: "empty planes" "time contents";
  grid-template-columns: 100px;
  grid-template-rows: 90px;
  width: 95vw;
  height: 70vh;
  margin: 0 auto;
  box-shadow: 0 2px 10px;
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

.personell {
  grid-area: time;
  display: grid;

}

.personell > div {
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
