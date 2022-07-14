import { startGame, finishGame } from "./gameplay";
import { renderBoard, renderParticipantInfo } from "../renderGame/renderGame";
import { checkGameStatus } from "../utils";

const gameController = () => {
	// Initialize game data structures

	const { sessionPlayer, sessionDealer, sessionDeck } = startGame();

	// Render game board
	renderBoard();

	renderParticipantInfo(sessionPlayer);
	renderParticipantInfo(sessionDealer);

	// TODO: render handCount for each participant

	const gameAfterFirstDeal = checkGameStatus(
		sessionPlayer.cards,
		sessionDealer.cards,
		false
	);

	if (gameAfterFirstDeal.isFinished) {
		finishGame(gameAfterFirstDeal.winner);

		return;
	}

	const playerHitButton = document.querySelector("#hit-button");
	const playerStayButton = document.querySelector("#stay-button");

	playerHitButton.addEventListener("click", () =>
		sessionPlayer.hit(sessionDeck, sessionDealer.cards)
	);
	playerStayButton.addEventListener("click", () =>
		sessionDealer.dealerTurn(sessionDeck, sessionPlayer.cards)
	);
};

export default gameController;
