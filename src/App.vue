<template>
  <main>
    <div id="greeter"></div>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

  onMounted(() => {
    window.Greeter.init('#greeter', {
      message: 'Welcome to the Todo App!',
      buttonText: 'Say Hello'
    })
  })
</script>

<style scoped>
</style>
