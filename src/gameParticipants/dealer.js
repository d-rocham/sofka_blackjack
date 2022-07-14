import { renderCards } from "../renderGame/renderGame";
import { checkGameStatus, getHandValue } from "../utils";

const dealer = () => {
	const dealerCards = [];

	const dealerTurn = (sessionDeck, playerHand) => {
		let currentHandValue = getHandValue(dealerCards);

		while (currentHandValue < 17) {
			const newCard = sessionDeck.selectRandomCard();
			dealerCards.push(newCard);

			currentHandValue = getHandValue(dealerCards);
			renderCards("#dealer-cards", dealerCards);
		}

		// Once dealer hits 17 or more, game is finished and hands must be reviewed

		const gameStatus = checkGameStatus(playerHand, dealerCards, true);

		// TODO: call finishGame.
	};

	return { dealerCards, dealerTurn };
};

export default dealer;
