import { startGame, finishGame } from "./gameplay";
import {
	renderBoard,
	renderParticipantInfo,
	renderAccumulatedPrize,
} from "../renderGame/renderGame";
import { checkGameStatus } from "../utils";

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

	// Retrieve past sessions accumulated prize

	const accumulatedPrize = localStorage.getItem(
		"blackjack-acumulated-results"
	);

	renderAccumulatedPrize(accumulatedPrize);

	// TODO: renderAccumulatedPrize

	// Render game board
	renderBoard();

	renderParticipantInfo(sessionPlayer);
	renderParticipantInfo(sessionDealer);

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
