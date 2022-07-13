const generateCard = (cardName) => {
  const getCardValue = (card) => {
    if (card === "A") {
      return undefined;
    }

    return 10;
  };

  return {
    cardName: cardName,
    cardValue: typeof (cardName === "string")
      ? getCardValue(cardName)
      : cardName,
  };
};

module.exports = generateCard;
