import { renderCards } from "../renderGame/renderGame";
import { getHandValue } from "../utils";

const player = () => {
	const playerCards = [];

	const hit = (sessionDeck) => {
		const hitCard = sessionDeck.selectRandomCard();
		playerCards.push(hitCard);

		renderCards("#player-cards", playerCards);

		const getHandValueForHit = getHandValue(playerCards);

		if (getHandValueForHit > 21) {
			// call finishGame(playerWon)
			// TODO: how to distinguish between player won, dealer won or tie
		}

		if (getHandValueForHit === 21) {
			// call finishGame(playerWon)
		}
	};

	return {
		playerCards,
		hit,
	};
};

export default player;
