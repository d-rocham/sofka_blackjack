/* eslint import/no-cycle: [0] */

import { finishGame } from "../gameplay/gameplay";
import { renderParticipantInfo } from "../renderGame/renderGame";
import { checkGameStatus } from "../utils";

/**
 * Factory function to build a dealer object
 * @returns {object} a player object
 */
const player = () => {
	const cards = [];

	const participantIdentifier = "player";

	const hit = (sessionDeck, dealerHand) => {
		const hitCard = sessionDeck.selectRandomCard();
		cards.push(hitCard);

		renderParticipantInfo({ cards, participantIdentifier });

		const gameStatus = checkGameStatus(cards, dealerHand, false);

		if (gameStatus.isFinished) {
			finishGame(gameStatus);
		}
	};

	return {
		cards,
		hit,
		participantIdentifier,
	};
};

export default player;
