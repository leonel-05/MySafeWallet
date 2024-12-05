<template>
  <div>
    <h3>Historial de Movimientos</h3>
    <table>
      <thead>
        <tr>
          <th>Moneda</th>
          <th>Tipo</th>
          <th>Monto</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="transaction in transactions" :key="transaction._id">
          <td>{{ transaction.crypto_code }}</td>
          <td>{{ transaction.action === "purchase" ? "Compra" : "Venta" }}</td>
          <td>{{ transaction.crypto_amount }}</td>
          <td>{{ formatDate(transaction.datetime) }}</td>
          <td>
            <button @click="deleteTransaction(transaction._id)">
              Eliminar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";

export default {
  props: {
    transactions: { type: Array, Required: true },
  },
  methods: {
    async deleteTransaction(transactionId) {
      try {
        await ApiService.deleteTransaction(transactionId);
        this.$emit("transaction-delete", transactionId);
      } catch (error) {
        console.error("Error al eliminar la transacción:", error);
        alert("Ocurrio un error al eliminar la transacción. ");
      }
    },
    formatDate(datetime) {
      const date = new Date(datetime);
      return date.toLocaleDateString();
    },
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

button {
  background-color: #ff6666;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #ff4d4d;
}
</style>
