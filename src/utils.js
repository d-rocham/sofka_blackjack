const getHandValue = (cards) => {
	let handValue = 0;

	for (const card of cards) {
		handValue += card.cardValue;
	}

	return handValue;
};

const formatCardHand = (cards) =>
	"".concat(...cards.map((card) => card.printCard()));

const getHandMonetaryValue = (hand) => {
	let handValue = 0;

	for (const card of hand) {
		handValue += card.cardMonetaryValue;
	}

	return handValue;
};

const checkGameStatus = (playerHand, dealerHand, isFinished) => {
	const checkResult = {
		isFinished,
		winner: null,
		sessionPrize: 0,
	};

	const playerHandValue = getHandValue(playerHand);
	const dealerHandValue = getHandValue(dealerHand);

	// This condition is called only when the dealer's turn is over

	if (checkResult.isFinished) {
		if (playerHandValue > 21) {
			checkResult.winner = "dealer";
			checkResult.sessionPrize = 0;
			return checkResult;
		}

		if (dealerHandValue > 21) {
			checkResult.winner = "player";
			checkResult.sessionPrize =
				playerHandValue === 21
					? 1000 + getHandMonetaryValue(playerHand)
					: getHandMonetaryValue(playerHand);
			return checkResult;
		}

		checkResult.winner =
			playerHandValue > dealerHandValue ? "player" : "dealer";

		return checkResult;
	}

	if (playerHandValue === 21 || dealerHandValue > 21) {
		checkResult.isFinished = true;
		checkResult.winner = "player";
		checkResult.sessionPrize =
			playerHandValue === 21
				? 1000 + getHandMonetaryValue(playerHand)
				: getHandMonetaryValue(playerHand);

		return checkResult;
	}

	if (dealerHandValue === 21 || playerHandValue > 21) {
		checkResult.isFinished = true;
		checkResult.winner = "dealer";
		checkResult.sessionPrize = 0;

		return checkResult;
	}

	return checkResult;
};

export { getHandValue, formatCardHand, checkGameStatus, getHandMonetaryValue };
