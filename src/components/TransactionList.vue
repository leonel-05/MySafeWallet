<template>
  <table>
    <thead>
      <tr>
        <th>Moneda</th>
        <th>Tipo</th>
        <th>Monto</th>
        <th>Fecha</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{ transaction.coin }}</td>
        <td>{{ transaction.type }}</td>
        <td>{{ transaction.amount }}</td>
        <td>{{ transaction.date }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    transactions: Array,
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f4f4f4;
}
</style>
