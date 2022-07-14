import { renderCards } from "../renderGame/renderGame";
import { getHandValue } from "../utils";

const dealer = () => {
	const dealerCards = [];

	const dealerTurn = (sessionDeck) => {
		let currentHandValue = getHandValue(dealerCards);

		while (currentHandValue < 17) {
			const newCard = sessionDeck.selectRandomCard();
			dealerCards.push(newCard);

			currentHandValue = getHandValue(dealerCards);
			renderCards("#dealer-cards", dealerCards);
		}

		// TODO: move checks below to checkGameStatus. Add playerHand as parameter to this function

		if (currentHandValue === 21) {
			// Call finishGame(dealerWon)
		}

		if (currentHandValue > 21) {
			// Call finishGame(dealerLost)
		}

		// Check who has the highest score between dealer & player
	};

	return { dealerCards, dealerTurn };
};

export default dealer;
