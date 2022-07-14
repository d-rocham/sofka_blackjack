const renderGameResults = (gameResults) => {
	const resultsDisplay = document.querySelector(".game-results");

	resultsDisplay.classList.remove("hidden");

	resultsDisplay.innerHTML = gameResults;
};

export default renderGameResults;
