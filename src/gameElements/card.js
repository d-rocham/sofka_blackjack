/* eslint no-constant-condition: 0 */

const generateCard = (cardName, cardSuit) => {
	const getCardValue = (card) => {
		if (card === "A") {
			return undefined;
		}

		return 10;
	};

	return {
		cardName,
		cardSuit,
		cardValue: typeof (cardName === "string")
			? getCardValue(cardName)
			: cardName,
		cardMonetaryValue: typeof (cardName === "string") ? 500 : 100,
	};
};

module.exports = generateCard;
