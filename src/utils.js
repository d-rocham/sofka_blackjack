const getHandValue = (cards) => {
	cards.reduce((previousValue, currentValue) => previousValue + currentValue);
};

const formatCardHand = (cards) =>
	"".concat(...cards.map((card) => card.printCard()));

export { getHandValue, formatCardHand };
