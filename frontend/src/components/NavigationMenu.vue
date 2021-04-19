<template>
  <div class='navigationMenu'>
    <div class='planner_app'>
      {{title}} <br>
    </div>
    <div style="font-size: 20px">
      {{subtitle}}
    </div>
    <div class='page_buttons'>
      <NavigationButton page="Schedule" toPage="/camels"/>
    </div>
    <div class='page_buttons'>
      <NavigationButton page="Calendar" toPage="/camels"/>
    </div>
    <div class='page_buttons'>
      <NavigationButton page="Staff" toPage="/camels"/>
    </div>
  </div>
</template>

<script>
import NavigationButton from '../components/NavigationButton.vue'

export default {
  name: 'NavigationMenu',
  components: {
    NavigationButton
  },
  props: {
    title: String,
    subtitle: String
  }
}
</script>

<style>

.navigationMenu {
  display: flex;
  flex-direction: column;
  position: absolute;
  float: left;
  left: 0px;
  width: 10%;
  min-width: 110px;
}

.planner_app{
  display: flex;
  justify-content: center;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 34px;
  background-color: EBF1DE;
  min-height: 8%;
  font-weight: bold;
}

.page_buttons{
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
