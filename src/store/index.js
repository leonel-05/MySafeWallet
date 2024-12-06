import { createStore } from "vuex";
import ApiService from "@/services/ApiService";

export default createStore({
  state: {
    user: null,
    balances: { BTC: 0, ETH: 0, USDT: 0 },
    prices: { BTC: 0, ETH: 0, USDT: 0 },
    transactions: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setPrices(state, prices) {
      state.prices = prices;
    },
    addTransaction(state, transaction) {
      state.transactions.push(transaction);
    },
  },
  actions: {
    async fetchPrices({ commit }) {
      const response = await ApiService.getCryptoPrices();
      commit("setPrices", response.date);
    },
    async executeTransaction({ commit }, transaction) {
      await ApiService.postTransaction(transaction);
      commit("addTransaction", transaction);
    },
  },
});
