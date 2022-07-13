const generateCard = require("./card");

require("./card")();

const cardBank = (cards) => {
  const CARDS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];

  const createDeck = () => {
    let deck = [];

    // Acount for a a standard, 52-card deck
    for (let currentSet = 0; currentSet < 5; currentSet++) {
      deck = CARDS.map((card) => generateCard(card));
    }

    return deck;
  };

  const selectRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * bankCards.length);
    const randomCard = bankCards(randomIndex);

    // Select a random card & remove it from the deck.
    randomCard = bankCards.splice(randomIndex, 1);

    return randomCard;
  };

  return {
    cardsDeck: createDeck(),
    selectRandomCard,
  };
};

module.exports = cardBank;
