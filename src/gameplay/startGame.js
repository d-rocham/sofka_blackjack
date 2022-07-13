const startGame = (gameDeck) => {
	const sessionPlayer = player();
	const sessionDealer = dealer();

	// Assign 2 random cards each
	for (let requiredCards = 0; requiredCards < 2; requiredCards++) {
		const newPlayerCard = gameDeck.selectRandomCard();
		const newDealerCard = gameDeck.selectRandomCard();

		sessionPlayer.playerCards.push(newPlayerCard);
		sessionDealer.dealerCards.push(newDealerCard);
	}

	return {
		sessionPlayer,
		sessionDealer,
	};
};
