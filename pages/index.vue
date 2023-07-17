<script setup lang="ts"></script>

<template>
  <div class="container">
    <h1>Hello Nuxt.js!!</h1>
    <p>Let's sign in</p>
    <SignIn />
    <p>新規登録はこちらから↓</p>
    <nuxt-link to="/signup"> 新規登録ページへのリンク </nuxt-link>
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
