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
      newMarket.marketCards = 0;
      newMarket.marketId = this.lastMarketId;
      newMarket.location = location;
      console.log('new market object', newMarket);

      // push new market into marketList array
      this.marketList.push(newMarket);
      console.log('marketList array', this.marketList);
    },
    deleteMarket(id) {
      // iterate through marketList array
      this.marketList.forEach((market) => {
        // check if market ID matches arg
        if (market.marketId === id) {
          this.totalCards -= market.marketCards; // subtract market cards from total cards
          this.totalMarkets -= 1; // decrement total markets
        }
      });

      // delete market from marketList array
      this.marketList = this.marketList.filter(
        (market) => market.marketId !== id
      );
      console.log('marketList array after deleting market', this.marketList);
    },
    addCard(id) {
      // iterate through marketList array
      this.marketList.forEach((market) => {
        // check if market ID matches arg
        if (market.marketId === id) {
          market.marketCards += 1; // increment market cards
          this.totalCards += 1; // increment total cards
        }
      });
    },
    deleteCard(id) {
      // iterate through marketList array
      for (let i = 0; i < this.marketList.length; i++) {
        // check if market ID matches arg
        if (this.marketList[i].marketId === id) {
          // if there are no cards to delete, send alert & return
          if (!this.marketList[i].marketCards) {
            alert('There are no cards to delete!');
            return;
          }

          this.marketList[i].marketCards -= 1; // decrement market cards
          this.totalCards -= 1; // decrement total cards
        }
      }
    },
  },
});
