/* eslint import/no-cycle: [0] */

import { finishGame } from "../gameplay/gameplay";
import { renderParticipantInfo } from "../renderGame/renderGame";
import { checkGameStatus } from "../utils";

const player = () => {
	const cards = [];

	const participantIdentifier = "player";

	// TODO: remember to add bet

	const hit = (sessionDeck, dealerHand) => {
		console.log("CLICKED");
		const hitCard = sessionDeck.selectRandomCard();
		cards.push(hitCard);

		console.log("PLAYER CARDS:");
		console.log(cards);

		renderParticipantInfo({ cards, participantIdentifier });

		const gameStatus = checkGameStatus(cards, dealerHand, false);

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
