const getHandValue = (cards) => {
	cards.reduce((previousValue, currentValue) => previousValue + currentValue);
};

const formatCardHand = (cards) => {
	const cardString = "";

	return cardString.concat(...cards.map((card) => card.printCard()));
};

export { getHandValue, formatCardHand };
