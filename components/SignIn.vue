<template>
  <form class="form">
    <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map((e) => e.$message)"
      label="E-mail"
      required
      @input="v$.email.$touch"
      @blur="v$.email.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.password"
      :error-messages="v$.password.$errors.map((e) => e.$message)"
      :counter="14"
      type="password"
      label="Password"
      required
      @input="v$.password.$touch"
      @blur="v$.password.$touch"
    ></v-text-field>

    <div class="form-btn">
      <v-btn class="me-4" @click="handleSubmit"> sign in </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const { signIn } = useFirebaseAuth();

const initialState = {
  email: "",
  password: "",
};

const state = reactive({
  ...initialState,
});

const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, state);

const handleSubmit = async () => {
  if (await !v$.value.$validate) {
    alert("入力内容に誤りがあります");
    return;
  }
  if (await signIn(state.email, state.password)) {
    alert("ログインしました!");
    clear();
    return navigateTo("/user");
  } else {
    alert("ログインに失敗しました");
  }
};

const clear = () => {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
};
</script>

<style scoped>
.form {
  width: 50%;
  margin: 0 auto;
}
.form-btn {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
</style>
