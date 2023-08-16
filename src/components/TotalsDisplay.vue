<script setup>
import { useMarketsStore } from '../stores/MarketsStore';
import { storeToRefs } from 'pinia';

const marketsStore = useMarketsStore();
const { getTotalCards, getTotalMarkets } = storeToRefs(marketsStore);
</script>

<template>
  <div class="inner-box" id="totals">
    <p>
      <label for="total-cards">Total Cards: </label>
      <span id="total-cards">{{ getTotalCards }}</span>
    </p>
    <p>
      <label for="total-markets">Total Markets: </label>
      <span id="total-markets">{{ getTotalMarkets }}</span>
    </p>
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

#totals {
  line-height: 1.5em;
}

#totals p {
  text-transform: uppercase;
  font-size: 1.3em;
  line-height: 1.5em;
}
</style>
