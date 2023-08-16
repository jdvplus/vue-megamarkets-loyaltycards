<script setup>
import MarketCreator from './MarketCreator.vue';
import MarketsDisplay from './MarketsDisplay.vue';
</script>

<template>
  <div class="inner-box" id="market-section">
    <MarketCreator />
    <MarketsDisplay />
  </div>
</template>

<style scoped>
.inner-box {
  padding: 10px;
  width: 95%;
  margin: 15px auto;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  background-color: rgba(49, 185, 160, 0.869);
  border-radius: 5px;
}
</style>
