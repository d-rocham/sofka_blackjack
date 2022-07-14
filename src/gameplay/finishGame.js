import { renderGameResults } from "../renderGame/renderGame";

const finishGame = (winner) => {
	if (winner === "player") {
		renderGameResults("Congratulations: YOU WON!");
		return;
	}

	renderGameResults("Too bad. YOU LOST :(");
};

export default finishGame;
