import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://laboratorio3-f36a.restdb.io/rest",
  headers: { "x-apikey": "60eb09146661365596af552f" },
});

const apiCoins = axios.create({
  baseURL: "http://criptoya.com/api/",
});

export default {
  getCryptoPrices(coin) {
    return apiCoins.get("${coin}/ars");
  },

  postTransaction(userId, type, cryptoCode, amount, money, dateTime) {
    return apiClient.post("/transactions", {
      user_id: userId,
      action: type,
      crypto_code: cryptoCode,
      crypto_amount: amount,
      money: money.toFixed(2),
      datetime: dateTime,
    });
  },

  getUserTransactions(userId) {
    return apiClient.get('/transactions?q={"user_id": "${userId}"}');
  },

  getCurrentPrice(coin) {
    return apiCoins.get("satoshitango/${coin}/ars");
  },

  getTransactionById(transactionId) {
    return apiClient.get("/transactions/${transactionId}");
  },

  deleteTransaction(transactionId) {
    return apiClient.delete("/transactions/${transactionId}");
  },

  updateTransaction(transaction) {
    return apiClient.patch("/transactions/${transaction._id", transaction);
  },
};
