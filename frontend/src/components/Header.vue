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
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
</style>
