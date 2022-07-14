import {
	renderGameResults,
	toggleComponentVisibility,
} from "../renderGame/renderGame";

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
	toggleComponentVisibility(gameButtons);

	// Since the disabled buttons are just hidden, but not removed from the DOM,
	// there's no need to call element.removeEventListener();
};

export default finishGame;
