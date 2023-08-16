<script setup>
import { useMarketsStore } from '../stores/MarketsStore';
import { storeToRefs } from 'pinia';
import Market from './Market.vue';

const marketsStore = useMarketsStore();
const { marketList } = storeToRefs(marketsStore);
</script>

<template>
  <div class="display-box">
    <h3>Markets</h3>
    <div class="market-box-container" v-for="market in marketList">
      <Market
        :key="market.marketId"
        :marketId="market.marketId"
        :location="market.location"
        :marketCards="market.marketCards"
      />
    </div>
  </div>
</template>

<style scoped>
.display-box {
  overflow: auto;
  padding-top: 10px;
}

.market-box-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
