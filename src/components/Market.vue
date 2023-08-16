<script setup>
import { useMarketsStore } from '../stores/MarketsStore';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const marketsStore = useMarketsStore();
const { getTotalCards } = storeToRefs(marketsStore);

const props = defineProps({
  marketId: Number,
  location: String,
  marketCards: Number,
});

const cardPercentage = computed(() => {
  return getTotalCards.value > 0
    ? ((props.marketCards / getTotalCards.value) * 100).toFixed(1)
    : 0;
});
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
      <strong>% of total: {{ cardPercentage }} </strong>
    </p>
    <button id="add-card-btn" @click="marketsStore.addCard(marketId)">
      Add card
    </button>
    <button id="delete-card-btn" @click="marketsStore.deleteCard(marketId)">
      Delete card
    </button>
  </div>
</template>
