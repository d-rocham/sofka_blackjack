const dealer = () => {
  let dealerCards = [];

  // TODO: extrat this function
  const getHandValue = () => {
    return playerCards.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  return { dealerCards, getHandValue };
};
