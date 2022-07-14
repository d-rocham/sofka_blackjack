/* eslint import/no-cycle: [0] */

import { finishGame } from "../gameplay/gameplay";
import { renderParticipantInfo } from "../renderGame/renderGame";
import { checkGameStatus } from "../utils";

const player = () => {
	const cards = [];

	const participantIdentifier = "player";

	// TODO: remember to add bet

	const hit = (sessionDeck, dealerHand) => {
		const hitCard = sessionDeck.selectRandomCard();
		cards.push(hitCard);

		renderParticipantInfo({ cards, participantIdentifier });

		const gameStatus = checkGameStatus(dealerHand, cards, false);

		if (gameStatus.isFinished) {
			finishGame(gameStatus.winner);
		}
	};

	return {
		cards,
		hit,
		participantIdentifier,
	};
};

export default player;
