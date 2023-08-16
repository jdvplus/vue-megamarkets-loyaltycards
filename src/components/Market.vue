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

<style scoped>
.market-box {
  padding: 5px 5px 5px 8px;
  width: 45%;
  margin: 15px 10px 13px 10px;
  float: left;
  /* font-size: 0.8em; */
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  background-color: #6300eec5;
  border-radius: 5px;
}

.market-box p,
.market-box p strong {
  color: white;
  line-height: 1.3em;
}

#delete-market-btn {
  display: flex;
  float: right;
  border: none;
  margin-top: -10px;
  background-color: transparent;
  padding-top: 0px;
  margin-right: auto;
  font-size: 25px;
  font-weight: 400;
  text-shadow: -1px -1px 0 #f5f5f5, 1px -1px 0 #f5f5f5, -1px 1px 0 #f5f5f5,
    1px 1px 0 #f5f5f5;
}

#add-card-btn {
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  text-transform: lowercase;
  height: 20px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
}

#add-card-btn:focus {
  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

#add-card-btn:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  transform: translateY(-2px);
}

#add-card-btn:active {
  box-shadow: #d6d6e7 0 3px 7px inset;
  transform: translateY(2px);
}

#delete-card-btn {
  align-items: center;
  appearance: none;
  background-color: #fcfcfd;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395a;
  cursor: pointer;
  display: inline-flex;
  font-family: 'JetBrains Mono', monospace;
  text-transform: lowercase;
  height: 20px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 10px;
  padding-right: 10px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 18px;
}

#delete-card-btn:focus {
  box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
}

#delete-card-btn:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  transform: translateY(-2px);
}

#delete-card-btn:active {
  box-shadow: #d6d6e7 0 3px 7px inset;
  transform: translateY(2px);
}
</style>
