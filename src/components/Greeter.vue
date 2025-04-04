<template>
  <button @click="handleClick" data-test="greeter-button">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: 'Click Me'
    }
  },
  methods: {
    handleClick() {
      console.log(this.message)
    }
  }
}
</script>

<style scoped>
button {
  cursor: pointer;
  padding: 8px 16px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
