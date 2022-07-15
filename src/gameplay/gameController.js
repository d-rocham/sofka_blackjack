import { startGame, finishGame } from "./gameplay";
import {
	renderBoard,
	renderParticipantInfo,
	renderInnerHTML,
	changePlayerButtonsStatus,
} from "../renderGame/renderGame";
import { checkGameStatus } from "../utils";

/**
 * Manages the game session through initializing data structures
 * rendering the board and adding event listeners to game buttons.
 * @returns {void}
 */
const gameController = () => {
	// Replace nodes through cloning, to prevent eventListener duplicates
	const playerHitButton = document.querySelector("#hit-button");
	const playerStayButton = document.querySelector("#stay-button");

	const newHitButton = playerHitButton.cloneNode(true);
	const newStayButton = playerStayButton.cloneNode(true);

	playerHitButton.replaceWith(newHitButton);
	playerStayButton.replaceWith(newStayButton);

	// Initialize game data structures

	const { sessionPlayer, sessionDealer, sessionDeck } = startGame();

	// Retrieve past sessions accumulated prize & render them

	const accumulatedPrize = localStorage.getItem(
		"blackjack-acumulated-results"
	);

	renderInnerHTML(".player-acumulated-earnings", accumulatedPrize);

	// Render game board, participants, enable player buttons
	renderBoard();

	renderParticipantInfo(sessionPlayer);
	renderParticipantInfo(sessionDealer);
	changePlayerButtonsStatus(false);

	// Game may end after the first deal

	const gameAfterFirstDeal = checkGameStatus(
		sessionPlayer.cards,
		sessionDealer.cards,
		false
	);

	if (gameAfterFirstDeal.isFinished) {
		finishGame(gameAfterFirstDeal);

		return;
	}

	newHitButton.addEventListener("click", () =>
		sessionPlayer.hit(sessionDeck, sessionDealer.cards)
	);
	newStayButton.addEventListener("click", () =>
		sessionDealer.dealerTurn(sessionDeck, sessionPlayer.cards)
	);
};

export default gameController;
