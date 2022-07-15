/**
 * Renders board by toggling the hidden class in the relevan node.
 */
const renderBoard = () => {
	const gameBoard = document.querySelector(".board-container");
	gameBoard.classList.remove("hidden");

	const gameButtons = document.querySelector(".player-buttons-container");
	gameButtons.classList.remove("hidden");
};

export default renderBoard;
