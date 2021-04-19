<template>
  <b-row>
    <b-col id='name' class='names'>{{personellName}}</b-col>
    <b-col id='1' style="background-color: #e3e3e3"></b-col>
    <b-col id='2' style="background-color: #e3e3e3"></b-col>
    <b-col id='3' style="background-color: #e3e3e3"></b-col>
    <b-col id='4' style="background-color: #e3e3e3"></b-col>
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
</template>

<script>

export default {
  name: 'personell',
  props: {
    personellName: String,
    start: Number,
    end: Number
  },
  data:{

  },
  methods: {

  }

}
</script>

<style>
.names {
  margin-right: 60px;
}
</style>
