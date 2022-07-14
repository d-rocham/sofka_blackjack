const getHandValue = (cards) => {
	let handValue = 0;

	for (const card of cards) {
		handValue += card.cardValue;
	}

	return handValue;
};

const formatCardHand = (cards) =>
	"".concat(...cards.map((card) => card.printCard()));

const checkGameStatus = (playerHand, dealerHand, isFinished) => {
	console.log("checkGameStatus has been called");
	console.log(`isFinished: ${isFinished}`);
	const checkResult = {
		isFinished,
		winner: null,
	};

	const playerHandValue = getHandValue(playerHand);
	const dealerHandValue = getHandValue(dealerHand);

	// This condition is called only when the dealer's turn is over

	console.log(`player hand:${playerHandValue}`);
	console.log(`dealer hand: ${dealerHandValue}`);

	if (checkResult.isFinished) {
		if (playerHandValue > 21) {
			checkResult.winner = "dealer";
			return checkResult;
		}

		if (dealerHandValue > 21) {
			checkResult.winner = "player";
			return checkResult;
		}

		checkResult.winner =
			playerHandValue > dealerHandValue ? "player" : "dealer";

		return checkResult;
	}

	if (playerHandValue === 21 || dealerHandValue > 21) {
		console.log("called player");
		checkResult.isFinished = true;
		checkResult.winner = "player";

		return checkResult;
	}

	if (dealerHandValue === 21 || playerHandValue > 21) {
		console.log("called dealer");
		checkResult.isFinished = true;
		checkResult.winner = "dealer";

		return checkResult;
	}

	return checkResult;
};

export { getHandValue, formatCardHand, checkGameStatus };
