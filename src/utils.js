const getHandValue = (cards) => {
  return cards.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
};

module.exports = getHandValue;
