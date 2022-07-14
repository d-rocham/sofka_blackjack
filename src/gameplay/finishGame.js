import { renderGameResults } from "../renderGame/renderGame";

const finishGame = (winner) => {
	const endMessage =
		winner === "player"
			? "Congratulations: YOU WON!"
			: "Too bad. YOU LOST :(";

	renderGameResults(endMessage);
};

export default finishGame;
