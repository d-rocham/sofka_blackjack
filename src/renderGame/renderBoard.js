import toggleComponentVisibility from "./toggleComponentVisibility";

const renderBoard = () => {
	const gameBoard = document.querySelector(".board-container");
	toggleComponentVisibility(gameBoard);
};

export default renderBoard;
