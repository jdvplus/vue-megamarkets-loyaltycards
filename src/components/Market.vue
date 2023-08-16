<script setup>
import { useMarketsStore } from '../stores/MarketsStore';
import { storeToRefs } from 'pinia';

const marketsStore = useMarketsStore();
const { getTotalCards } = storeToRefs(marketsStore);

const props = defineProps({
  marketId: Number,
  location: String,
  marketCards: Number,
});

const getPercentage = () => {
  if (!getTotalCards) return 0;
  return ((props.marketCards / getTotalCards) * 100).toFixed(1);
};
</script>

<template>
  <div class="market-box">
    <button id="delete-market-btn" @click="marketsStore.deleteMarket(marketId)">
      x
    </button>
    <p>
      <strong>Market ID: {{ marketId }} </strong>
    </p>
    <p>
      <strong>Location: {{ location }} </strong>
    </p>
    <p>
      <strong>Cards: {{ marketCards }} </strong>
    </p>
    <p>
      <strong>% of total: </strong>
    </p>
    <button id="add-card-btn">Add card</button>
    <button id="delete-card-btn">Delete card</button>
  </div>
</template>
