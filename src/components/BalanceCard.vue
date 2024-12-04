<template>
  <div class="card">
    <h3>{{ coinName }}</h3>
    <p>Balance: {{ balance }}</p>
    <p>Precio: ${{ price.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    coinName: String,
    balance: Number,
    price: Number,
  },
};
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: center;
  width: 150px;
}
</style>
