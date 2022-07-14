import { renderCards } from "../renderGame/renderGame";
import { checkGameStatus } from "../utils";

const player = () => {
	const playerCards = [];

	// TODO: remember to add bet

	const hit = (sessionDeck, dealerHand) => {
		const hitCard = sessionDeck.selectRandomCard();
		playerCards.push(hitCard);

		renderCards("#player-cards", playerCards);

		const gameStatus = checkGameStatus(dealerHand, playerCards, false);

		if (gameStatus.isFinished) {
			// call finish game
		}
	};

	return {
		playerCards,
		hit,
	};
};

export default player;
