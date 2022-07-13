const player = () => {
  let playerCards = [];

  const getHandValue = () => {
    return playerCards.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  return {
    playerCards,
    getHandValue,
  };
};
