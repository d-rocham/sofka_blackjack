const cardBank = require("./cardBank");

const gameController = () => {
  const sessionDeck = cardBank();

  const randomCard = sessionDeck.selectRandomCard();
};

gameController();
