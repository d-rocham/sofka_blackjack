import {
	renderInnerHTML,
	changePlayerButtonsStatus,
} from "../renderGame/renderGame";

/**
 * Finishes the game by showing a summary
 * and hiding game buttons
 * @param {object} winner winner object, including session results
 */
const finishGame = (winner) => {
	const previousAccumulatedValue =
		localStorage.getItem("blackjack-acumulated-results") || 0;

	const newAccumulaltedValue =
		parseInt(previousAccumulatedValue, 10) + winner.sessionPrize;

	localStorage.setItem("blackjack-acumulated-results", newAccumulaltedValue);

	// Show game summary
	const endMessage =
		winner.winner === "player"
			? `Congratulations: YOU WON ${winner.sessionPrize}`
			: "Too bad. YOU LOST :(";

	renderInnerHTML(".player-acumulated-earnings", newAccumulaltedValue);

	renderInnerHTML(".game-results", endMessage);

	// Disable buttons
	changePlayerButtonsStatus(true);
};

export default finishGame;
