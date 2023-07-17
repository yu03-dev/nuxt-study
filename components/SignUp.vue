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

    <v-text-field
      v-model="state.repassword"
      :error-messages="v$.repassword.$errors.map((e) => e.$message)"
      :counter="14"
      type="password"
      label="Confirmation"
      required
      @input="v$.repassword.$touch"
      @blur="v$.repassword.$touch"
    ></v-text-field>

    <div class="form-btn">
      <v-btn class="me-4" @click="handleSignUp"> sign up </v-btn>
      <v-btn @click="clear"> clear </v-btn>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required, sameAs } from "@vuelidate/validators";

const { registerUser } = useFirebaseAuth();

const initialState = {
  email: "",
  password: "",
  repassword: "",
};

const state = reactive({
  ...initialState,
});

const rules = {
  email: { required, email },
  password: { required },
  repassword: { required, sameAsPassword: sameAs(state.password) },
};

const v$ = useVuelidate(rules, state);

const handleSignUp = async () => {
  if (v$.value.$invalid) {
    alert("入力内容に誤りがあります");
    return;
  }
  if (await registerUser(state.email, state.password)) {
    alert("サインアップに成功しました!!!");
    clear();
  } else {
    alert("サインアップに失敗しました");
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
