<script setup>
import { useMarketsStore } from '../stores/MarketsStore';
import { ref } from 'vue';

const marketsStore = useMarketsStore();

const newMarket = ref('');

const addMarket = () => {
  if (newMarket.value.length) {
    marketsStore.addMarket(newMarket.value);
    newMarket.value = '';
  } else {
    alert('Please input a location!');
  }
};
</script>

<template>
  <div id="market-creator">
    <h3>Create new market</h3>
    <form @submit.prevent="addMarket">
      <label for="locations">Locations:</label>
      <input
        name="locations"
        id="location-input"
        placeholder="e.g. New York, NY"
        v-model="newMarket"
      />
      <button id="add-market-btn">Add market</button>
    </form>
  </div>
</template>
