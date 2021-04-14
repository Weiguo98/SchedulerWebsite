<template>
  <header>
    <h1> {{title}}</h1>
    <h2> {{subTitle}} </h2>
  </header>
</template>

<script>

export default {
  name: 'Header',
  props: {
    title: String,
    subTitle: String
  },
}

</script>

<style scoped>
  header{
    display: flex;
    justify-content:space-around;
    align-items: center;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin-left: 10%;
    background: EBF1DE;
    min-width: auto;

  }
</style>
