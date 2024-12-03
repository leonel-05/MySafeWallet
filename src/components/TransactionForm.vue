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
  </div>
</template>

<script>
export default {
  props: {
    transactionType: { type: String, required: true },
    coin: { type: String, required: true },
  },
  data() {
    return { amount: 0 };
  },
  methods: {
    submitTransaction() {
      const transaction = {
        type: this.transactionType,
        coin: this.coin,
        amount: this.amount,
      };
      this.$emit("transaction-submitted", transaction);
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
</style>
