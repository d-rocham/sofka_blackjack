const player = () => {
  const playerCards = [];

  const getHandValue = () => {
    return playerCards.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };
};
