import startGame from "./startGame";

const gameController = () => {
	const { sessionPlayer, sessionDealer, sessionDeck } = startGame();
};

export default gameController;
