<template>
  <div id="login">
    <h1>MySafeWallet</h1>
    <div class="form-container">
      <input
        v-model="username"
        type="text"
        placeholder="Ingrese su nombre de usuario"
        @keypress.enter="login"
      />
      <button @click="login">Ingresar</button>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      if (this.username.trim()) {
        //Establece el usuario en Vuex y redirige a dashboard
        this.$store.commit("setUser", this.username);
        this.$router.push("/dashboard");
      } else {
        this.errorMessage = "El nombre del usuario no puede estar vacío";
      }
    },
  },
};
</script>

<style scoped>
#login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form-container {
  display: flex;
  flex-direction: column;
  width: 300px;
}

input,
button {
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  font-size: 14px;
}
</style>
