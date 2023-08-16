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

<style scoped>
#market-creator button {
  align-items: center;
  appearance: none;
  border-radius: 4px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 1px -2px, rgba(0, 0, 0, 0.14) 0 2px 2px 0,
    rgba(0, 0, 0, 0.12) 0 1px 5px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  height: 36px;
  justify-content: center;
  letter-spacing: 0.0892857em;
  line-height: normal;
  min-width: 64px;
  outline: none;
  overflow: visible;
  padding: 0 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: lowercase;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  will-change: transform, opacity;
}

#market-creator button:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0,
    rgba(0, 0, 0, 0.12) 0 1px 10px 0;
}

#market-creator button:disabled {
  background-color: rgba(0, 0, 0, 0.12);
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 0, rgba(0, 0, 0, 0.14) 0 0 0 0,
    rgba(0, 0, 0, 0.12) 0 0 0 0;
  color: rgba(0, 0, 0, 0.37);
  cursor: default;
  pointer-events: none;
}

#market-creator button:not(:disabled) {
  background-color: #6200ee;
}

#market-creator button:focus {
  box-shadow: rgba(0, 0, 0, 0.2) 0 2px 4px -1px, rgba(0, 0, 0, 0.14) 0 4px 5px 0,
    rgba(0, 0, 0, 0.12) 0 1px 10px 0;
}

#market-creator button:active {
  box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px -3px,
    rgba(0, 0, 0, 0.14) 0 8px 10px 1px, rgba(0, 0, 0, 0.12) 0 3px 14px 2px;
  background: #a46bf5;
}

input {
  margin: 10px;
  padding: 6px 12px;
  font-size: 16px;
  font-weight: 400;
  /* line-height: 1.5; */
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  appearance: none;
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

input:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
}
</style>
