<script setup>
import TotalsDisplay from './components/TotalsDisplay.vue';
import MarketsContainer from './components/MarketsContainer.vue';
</script>

<template>
  <main>
    <h1 id="header">MegaMarket Loyalty Cards</h1>
    <TotalsDisplay />
    <MarketsContainer />
  </main>
</template>

<style scoped>
main {
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
  box-shadow: 10px 15px 39px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #e0e0cef3;
}

h1 {
  text-shadow: -1px -1px 0 #f5f5f5, 1px -1px 0 #f5f5f5, -1px 1px 0 #f5f5f5,
    1px 1px 0 #f5f5f5;
}

#header {
  text-align: center;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}
</style>
