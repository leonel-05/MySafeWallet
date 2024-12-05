<template>
  <div>
    <h3>
      {{ transactionType === "buy" ? "Comprar" : "Vender" }} Criptomonedas
    </h3>
    <label>Moneda:</label>
    <p>{{ coin }}</p>
    <label>Monto en USD:</label>
    <input type="number" v-model="amount" />
    <button @click="submitTransaction">Confirmar</button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";

export default {
  props: {
    transactionType: { type: String, required: true },
    coin: { type: String, required: true },
  },
  data() {
    return {
      amount: 0,
      errorMessage: "",
    };
  },
  methods: {
    async submitTransaction() {
      if (this.amount <= 0) {
        this.errorMessage = "El monto debe ser mayor a 0. ";
        return;
      }
      try {
        const userId = this.$store.state.user;
        const response = await ApiService.postTransaction(
          userId,
          this.transactionType === "buy" ? "purchase" : "sale",
          this.coin,
          this.amount,
          this.amount * 100000,
          new Date().toISOString()
        );
        console.log("Transacción registrada:", response.data);
        this.$emit("transaction-success", response.data);
      } catch (error) {
        console.error("Error al registrar la transacción:", error);
        this.errorMessage = "Ocurrio un error al registrar la transacción. ";
      }
    },
  },
};
</script>

<style scoped>
input,
button {
  margin: 10px;
  padding: 8px;
  font-size: 16px;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
