<template>
  <div id="app">
    <div id="nav">
        <h1 id = "Logo">Planner's App</h1>
        <li><router-link to="/">Schedule</router-link></li>
        <li><router-link to="/TableList">Staff</router-link></li>
        <li><router-link to="/Staff">Calendar</router-link> </li>
    </div>
    <div id="hiddenmenu">
    </div>
      <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Roboto','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}
#nav {
  width: 100%;
  background-color: #9ee27c ;
  z-index:99;
  position: fixed;
  padding: 20px 0;
  text-align: center;
  padding-right: 60px;
  
}

#hiddenmenu {

  width: 100%;
  padding: 20px;
  background-color: #FADADD ;
  z-index:99;
}

#nav a {
  font-weight: bold;
  color:#e59198 ;
  
}

#nav a.router-link-exact-active {
  padding: 30px 50px;
  color: #ffffff;
  background-color: #e59198 ;
}
li {

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
