/* eslint import/no-cycle: [0] */
import { finishGame } from "../gameplay/gameplay";
import { renderParticipantInfo } from "../renderGame/renderGame";
import { checkGameStatus, getHandValue } from "../utils";

/**
 * Factory function to build a dealer object
 * @returns {object} a dealer object
 */
const dealer = () => {
	const cards = [];

	const participantIdentifier = "dealer";

	const dealerTurn = (sessionDeck, playerHand) => {
		let currentHandValue = getHandValue(cards);

		while (currentHandValue < 17) {
			const newCard = sessionDeck.selectRandomCard();
			cards.push(newCard);

			currentHandValue = getHandValue(cards);
			renderParticipantInfo({ cards, participantIdentifier });
		}

		// Once dealer hits 17 or more, game is finished and hands must be reviewed

		const gameStatus = checkGameStatus(playerHand, cards, true);

		finishGame(gameStatus);
	};

	return { cards, dealerTurn, participantIdentifier };
};

export default dealer;
