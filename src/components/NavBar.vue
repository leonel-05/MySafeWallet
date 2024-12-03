<template>
  <nav class="navbar">
    <router-link to="/dashboard">Inicio</router-link>
    <router-link to="/buy">Comprar</router-link>
    <router-link to="/sell">Vender</router-link>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #333;
  color: white;
  padding: 10px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 16px;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
