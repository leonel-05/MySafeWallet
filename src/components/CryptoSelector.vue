<template>
  <div>
    <label for="coin-select">Selecciona una moneda:</label>
    <select id="coin-select" v-model="selectdCoin" @change="emitSelection">
      <option disabled value="">Selecciona...</option>
      <option v-for="coin in coins" :key="coin" :value="coin">
        {{ coin }} - ${{ prices[coin] }}
      </option>
    </select>
  </div>
</template>

<script>
import ApiService from "@/services/ApiService";

export default {
  data() {
    return {
      selectdCoin: "",
      prices: {},
    };
  },
  props: {
    coins: {
      type: Array,
      default: () => ["btc", "eth", "usdc"],
    },
  },
  mounted() {
    this.fetchPrices();
  },
  methods: {
    async fetchPrices() {
      for (const coin of this.coins) {
        try {
          const response = await ApiService.getCurrentPrice(coin);
          this.prices[coin] = response.data.totalBid || "N/A";
        } catch (error) {
          console.error("Error al obtener precio de ${coin}:", error);
          this.prices[coin] = "Error";
        }
      }
    },
  },
  emitSelection() {
    this.$emit("coin-selected", this.selectdCoin);
  },
};
</script>

<style scoped>
select {
  padding: 10px;
  margin: 10px 0;
}
</style>
