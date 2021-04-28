<template>
  <div>
    <b-dropdown :text="myText">
      <b-dropdown-item
        @click="myText = option_a"
        v-on:click="onClickButton()"
        >{{ option_a }}</b-dropdown-item
      >
      <b-dropdown-item
        @click="myText = option_b"
        v-on:click="onClickButton()"
        >{{ option_b }}</b-dropdown-item
      >
      <b-dropdown-item
        @click="myText = option_c"
        v-on:click="onClickButton()"
        >{{ option_c }}</b-dropdown-item
      >
    </b-dropdown>
  </div>
</template>

<script>
export default {
  name: 'FilterButton',
  props: {
    text: String,
    option_a: String,
    option_b: String,
    option_c: String
  },
  data() {
    return {
      myText: this.text
    }
  },
  methods: {
    onClickButton() {
      this.$emit('clicked', this.myText)
    }
  }
}
</script>

<style></style>
