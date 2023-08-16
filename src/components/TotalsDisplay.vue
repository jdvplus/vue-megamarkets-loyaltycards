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
