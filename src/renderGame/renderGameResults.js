const renderGameResults = (gameResults) => {
	const resultsDisplay = document.querySelector(".game-results");

	resultsDisplay.innerHTML = gameResults;
};

export default renderGameResults;
