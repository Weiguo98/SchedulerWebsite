<template>
  <div id="mainapp">
    <div id="nav1">
      <img id = "Logo" src="./assets/logo.png" />
      <div id = "listitem">
        <li ><router-link to="./">Schedule</router-link></li>
        <li ><router-link to="/Staff">Staff</router-link></li>
        <li ><router-link to="/Calendar">Calendar</router-link></li>
      </div>
    </div>
  
    <div id="menuplaceholder"></div>
    <router-view />
  </div>
</template>



<style> 
@import './styles/style.css';
</style>
