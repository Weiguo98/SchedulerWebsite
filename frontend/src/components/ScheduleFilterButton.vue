<template>
  <div>
    <b-dropdown :text="text">
    <b-dropdown-item @click="text = option_a">{{option_a}}</b-dropdown-item>
    <b-dropdown-item @click="text = option_b">{{option_b}}</b-dropdown-item>
    <b-dropdown-item @click="text = option_c">{{option_c}}</b-dropdown-item>
  </b-dropdown>
  </div>
</template>

<script>
export default {
  name: "FilterButton",
  props: {

    text: String,
    option_a: String,
    option_b: String,
    option_c: String
  }
}
</script>

<style>

</style>
