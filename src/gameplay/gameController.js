import { startGame, finishGame } from "./gameplay";
import { renderBoard, renderCards } from "../renderGame/renderGame";

const gameController = () => {
	// Initialize game data structures

	const { sessionPlayer, sessionDealer, sessionDeck } = startGame();

	// Render game board
	renderBoard();

	renderCards("#dealer-cards", sessionDealer.dealerCards);
	renderCards("#player-cards", sessionPlayer.playerCards);

	const playerHitButton = document.querySelector("#hit-button");
	const playerStayButton = document.querySelector("#stay-button");

	playerHitButton.addEventListener("click", () =>
		sessionPlayer.hit(sessionDeck)
	);
	playerStayButton.addEventListener("click", () =>
		sessionDealer.dealerTurn(sessionDeck)
	);

	// Gameplay loop
};

export default gameController;
