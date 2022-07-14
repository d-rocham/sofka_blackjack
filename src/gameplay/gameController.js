import { startGame, finishGame } from "./gameplay";
import { renderBoard, renderCards } from "../renderGame/renderGame";
import { checkGameStatus } from "../utils";

const gameController = () => {
	// Initialize game data structures

	const { sessionPlayer, sessionDealer, sessionDeck } = startGame();

	// Render game board
	renderBoard();

	renderCards("#dealer-cards", sessionDealer.dealerCards);
	renderCards("#player-cards", sessionPlayer.playerCards);

	// TODO: render handCount for each participant

	const gameAfterFirstDeal = checkGameStatus(
		sessionPlayer.playerCards,
		sessionDealer.dealerCards,
		false
	);

	if (gameAfterFirstDeal.isFinished) {
		// call finish game

		return;
	}

	const playerHitButton = document.querySelector("#hit-button");
	const playerStayButton = document.querySelector("#stay-button");

	playerHitButton.addEventListener("click", () =>
		sessionPlayer.hit(sessionDeck, sessionDealer.dealerCards)
	);
	playerStayButton.addEventListener("click", () =>
		sessionDealer.dealerTurn(sessionDeck)
	);
};

export default gameController;
