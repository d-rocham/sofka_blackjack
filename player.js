const player = () => {
  let playerCards = [];

  // TODO: extract this function.
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
