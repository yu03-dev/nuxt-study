<script setup lang="ts">
// const runtimeConfig = useRuntimeConfig();

// console.log(runtimeConfig);
</script>

<template>
  <div class="container">
    <h1>Hello Nuxt.js!!</h1>
    <p>Let's sign up</p>
    <Form />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container h1,
p {
  margin: 1rem 0;
}
</style>
