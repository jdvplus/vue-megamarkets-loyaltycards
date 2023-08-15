import { defineStore } from 'pinia';

export const useMarketsStore = defineStore('marketsStore', {
  state: () => ({
    totalCards: 0,
    totalMarkets: 0,
    marketList: [],
    lastMarketId: 10000,
    newLocation: '',
  }),
  getters: {
    getTotalCards() {
      return this.totalCards;
    },
    getTotalMarkets() {
      return this.totalMarkets;
    },
  },
  actions: {
    addMarket(location) {
      // ensure that market doesn't already exist in location
      for (let i = 0; i < this.marketList.length; i++) {
        if (this.marketList[i].location === location) {
          alert('A market in this location already exists!');
          return;
        }
      }

      this.totalMarkets += 1; // increment total markets
      this.lastMarketId += 1; // increment last market ID
      this.newLocation = location; // reassign new location

      // create new market object
      const newMarket = {};
      newMarket.totalMarkets = this.totalMarkets;
      newMarket.marketCards = 0;
      newMarket.marketId = this.lastMarketId;
      newMarket.location = location;
      console.log('new market object', newMarket);

      // push new market into marketList array
      this.marketList.push(newMarket);
      console.log('marketList array', this.marketList);
    },
  },
});
