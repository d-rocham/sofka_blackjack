const gameController = () => {
	const sessionDeck = cardBank();

	const { sessionPlayer, sessionDealer } = startGame(sessionDeck);
};

gameController();
