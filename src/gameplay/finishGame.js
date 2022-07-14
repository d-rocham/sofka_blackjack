import { renderGameResults } from "../renderGame/renderGame";

/**
 * Finishes the game by showing a summary
 * and hiding game buttons
 * @param {string} winner
 */
const finishGame = (winner) => {
	// Show game summary
	const endMessage =
		winner === "player"
			? "Congratulations: YOU WON!"
			: "Too bad. YOU LOST :(";

	renderGameResults(endMessage);

	// Disable buttons
	const gameButtons = document.querySelector(".player-buttons-container");
	gameButtons.classList.add("hidden");
};

export default finishGame;
