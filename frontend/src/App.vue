<!--
Primary Color: #EBF1DE
Text Color: #C45891
 -->
<template>
  <div id="app">
    <div id="nav1">
      <h1 id="Logo">Planner's App</h1>
      <li id="listitens"><router-link to="./Home">Schedule</router-link></li>
      <li id="listitens"><router-link to="/Staff">Staff</router-link></li>
      <li id="listitens"><router-link to="/Calendar">Calendar</router-link></li>
    </div>
    <div id="hiddenmenu"></div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #c45891;
  background-color: #ebf1de;
}
/*
#nav a.router-link-exact-active {
  color: #42b983;
  }
*/

#nav1 {
  width: 100%;
  background-color: #9ee27c;
  z-index: 99;
  position: fixed;
  padding: 20px 0;
  text-align: center;
  padding-right: 60px;
}

#hiddenmenu {
  width: 100%;
  padding: 35px;
  background-color: #9ee27c;
  z-index: 99;
}

#nav1 a {
  font-weight: bold;
  color: #e59198;
}

#nav1 a.router-link-exact-active {
  padding: 30px 50px;
  color: #ffffff;
  background-color: #e59198;
}
#listitens {
  display: inline;
  padding-right: 50px;
  font-size: 15px;
}

#Logo {
  font-size: 20px;
  float: left;
  position: relative;
  padding-left: 10px;
  color: #e59198;
}
</style>
