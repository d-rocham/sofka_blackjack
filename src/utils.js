const getHandValue = (cards) => {
	let handValue = 0;

	for (const card of cards) {
		handValue += card.cardValue;
	}

	return handValue;
};

const formatCardHand = (cards) =>
	"".concat(...cards.map((card) => card.printCard()));

const checkGameStatus = (playerHand, dealerHand) => {
	// TODO: bolierplate temporary code. To implement

	const isFinished = true;
	const winner = "player";

	return { isFinished, winner };
};

export { getHandValue, formatCardHand };
