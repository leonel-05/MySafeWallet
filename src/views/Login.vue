<template>
  <div id="login">
    <h1>MySafeWallet</h1>
    <input
      v-model="username"
      placeholder="Ingrese su usuario"
      @keypress.enter="login"
    />
    <button @click="login">Ingresar</button>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { username: "", error: "" };
  },
  methods: {
    login() {
      if (this.username.trim()) {
        this.$store.commit("setUser", this.username);
        this.$router.push("/dashboard");
      } else {
        this.error = "El nombre de usuario es obligatorio. ";
      }
    },
  },
};
</script>

<style scoped>
#login {
  text-align: center;
  margin-top: 10%;
}
input,
button {
  margin: 10px;
}
.error {
  color: red;
}
</style>
