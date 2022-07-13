const cardBank = require("./cardBank");
const startGame = require("./startGame");

const gameController = () => {
	const sessionDeck = cardBank();

	const { sessionPlayer, sessionDealer } = startGame(sessionDeck);
};

gameController();
