const cardBank = require("./cardBank");
const startGame = require("./startGame");

const gameController = () => {
  const sessionDeck = cardBank();

  console.log(`Lenght of session deck is ${sessionDeck.cardsDeck.length}`);

  const { sessionPlayer, sessionDealer } = startGame(sessionDeck);

  console.log(sessionPlayer.playerCards);
  console.log(sessionDealer.dealerCards);

  console.log(`Lenght of session deck is ${sessionDeck.cardsDeck.length}`);
};

gameController();
