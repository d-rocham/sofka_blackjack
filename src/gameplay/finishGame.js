import {
	renderGameResults,
	renderAccumulatedPrize,
} from "../renderGame/renderGame";

/**
 * Finishes the game by showing a summary
 * and hiding game buttons
 * @param {string} winner
 */
const finishGame = (winner) => {
	const previousAccumulatedValue =
		localStorage.getItem("blackjack-acumulated-results") || 0;

	const newAccumulaltedValue =
		parseInt(previousAccumulatedValue, 10) + winner.sessionPrize;

	console.log(winner.sessionPrize);

	localStorage.setItem("blackjack-acumulated-results", newAccumulaltedValue);

	// Show game summary
	const endMessage =
		winner.winner === "player"
			? `Congratulations: YOU WON ${winner.sessionPrize}`
			: "Too bad. YOU LOST :(";

	renderAccumulatedPrize(newAccumulaltedValue);

	renderGameResults(endMessage);

	// Disable buttons
	const gameButtons = document.querySelector(".player-buttons-container");
	gameButtons.classList.add("hidden");
};

export default finishGame;
