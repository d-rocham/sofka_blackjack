const renderAccumulatedPrize = (accumulatedPrize) => {
	const resultsDisplay = document.querySelector(
		".player-acumulated-earnings"
	);

	resultsDisplay.innerHTML = accumulatedPrize;
};

export default renderAccumulatedPrize;
