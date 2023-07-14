<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);

const countUp = () => {
  count.value += 1;
};
</script>

<template>
  <div>
    <h1>Hello Nuxt3</h1>
    count: {{ count }}
    <VBtn @click="countUp">カウントアップ</VBtn>
  </div>
</template>
