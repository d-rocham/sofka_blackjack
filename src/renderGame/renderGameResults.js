import toggleComponentVisibility from "./toggleComponentVisibility";

const renderGameResults = (gameResults) => {
	const resultsDisplay = document.querySelector(".game-results");

	toggleComponentVisibility(resultsDisplay);

	resultsDisplay.innerHTML = gameResults;
};

export default renderGameResults;
