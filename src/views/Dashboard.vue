<template>
  <div>
    <Navbar />
    <h1>Hola, {{ $store.state.user }} 👋</h1>
    <section>
      <h2>Tu Balance</h2>
      <div class="balances">
        <BalanceCard
          v-for="(balance, coin) in $store.state.balances"
          :key="coin"
          :coinName="coin"
          :balance="balance"
          :price="$store.state.prices[coin]"
        />
      </div>
    </section>
    <section>
      <TransitionList :transaction="$store.state.transactions" />
    </section>
  </div>
</template>
