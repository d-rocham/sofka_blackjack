import {
	renderGameResults,
	toggleComponentVisibility,
} from "../renderGame/renderGame";

const finishGame = (winner) => {
	const endMessage =
		winner === "player"
			? "Congratulations: YOU WON!"
			: "Too bad. YOU LOST :(";

	renderGameResults(endMessage);

	const gameButtons = document.querySelector(".player-buttons-container");

	toggleComponentVisibility(gameButtons);
};

export default finishGame;
