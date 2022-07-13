const generateCard = (cardName) => {
  const getCardValue = (card) => {
    if (card === "A") {
      return undefined;
    }

    return 10;
  };

  console.log(`${cardName} is ${typeof cardName}`);

  return {
    cardName: cardName,
    cardValue: typeof (cardName === "string")
      ? getCardValue(cardName)
      : cardName,
  };
};

module.exports = generateCard;
