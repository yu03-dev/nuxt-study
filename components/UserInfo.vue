<template>
  <div>
    <h1>ユーザーの情報</h1>
    <p>{{ user }}</p>
    <VBtn @click="handleLogOut"> ログアウト </VBtn>
  </div>
</template>
<script setup lang="ts">
const { user, setUser, logOut } = useFirebaseAuth();

onMounted(() => {
  setUser();
});

const handleLogOut = async () => {
  try {
    if (await logOut()) {
      alert("ログアウトしました");
      return navigateTo("/");
    }
  } catch (error) {
    console.error(error);
  }
  alert("ログアウトできませんでした。");
};
</script>
