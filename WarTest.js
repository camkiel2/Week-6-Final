const { expect } = require('chai');
const { Deck } = require('./Week6Project.js'); 

describe('Deck', () => {
  describe('#shuffleDeck()', () => {
    it('should return a shuffled deck of cards', () => {
      const deck = new Deck();
      deck.createDeck();

      
      const originalDeckOrder = deck.cards.map(card => `${card.suit} ${card.name}`);

      
      const shuffledDeck = deck.shuffleDeck();

      
      expect(shuffledDeck).to.have.lengthOf(deck.cards.length);

      r
      const shuffledDeckOrder = shuffledDeck.map(card => `${card.suit} ${card.name}`);
      expect(shuffledDeckOrder.sort()).to.deep.equal(originalDeckOrder.sort());
      expect(shuffledDeckOrder).to.not.deep.equal(originalDeckOrder);
    });
  });
});

