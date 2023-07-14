<template>
  <form>
    <v-text-field
      v-model="state.name"
      :error-messages="v$.name.$errors.map((e) => e.$message)"
      :counter="10"
      label="Name"
      required
      @input="v$.name.$touch"
      @blur="v$.name.$touch"
    ></v-text-field>

    <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map((e) => e.$message)"
      label="E-mail"
      required
      @input="v$.email.$touch"
      @blur="v$.email.$touch"
    ></v-text-field>

    <v-btn class="me-4" @click="v$.$validate"> submit </v-btn>
    <v-btn @click="clear"> clear </v-btn>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

const initialState = {
  name: "",
  email: "",
};

const state = reactive({
  ...initialState,
});

const rules = {
  name: { required },
  email: { required, email },
};

const v$ = useVuelidate(rules, state);

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>
