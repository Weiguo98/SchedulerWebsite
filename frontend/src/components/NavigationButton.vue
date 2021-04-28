<template>
  <router-link :to="toPage" tag="b-button"> {{ page }}</router-link>
</template>

<script>
export default {
  props: {
    page: String,
    toPage: String
  }
}
</script>
