const generateCard = require("./card");

require("./card")();

const cardBank = (cards) => {
  const CARDS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];

  // Immediately Invoked Function Expression. Only one deck is required
  const cardsDeck = (() => {
    let deck = [];
    CARDS.map((card) => deck.push(generateCard(card)));

    return deck;
  })();

  const selectRandomCard = () => {
    let randomIndex = Math.floor(Math.random() * cardsDeck.length);
    let randomCard = cardsDeck[randomIndex];

    // Select a random card & remove it from the deck.
    randomCard = cardsDeck.splice(randomIndex, 1);

    return randomCard;
  };

  return {
    cardsDeck,
    selectRandomCard,
  };
};

module.exports = cardBank;
