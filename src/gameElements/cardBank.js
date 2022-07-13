import generateCard from "./card";

const cardBank = () => {
	const CARDS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];
	const SUITS = ["♣", "♦", "♥", "♠"];

	// Immediately Invoked Function Expression. Only one deck is required
	const cardsDeck = (() => {
		let deck = [];

		for (let suit of SUITS) {
			deck.push(CARDS.map((card) => generateCard(card)));
		}

		return deck;
	})();

	const selectRandomCard = () => {
		let randomIndex = Math.floor(Math.random() * cardsDeck.length);
		let randomCard = cardsDeck[randomIndex];

		// Select a random card & remove it from the deck.
		randomCard = cardsDeck.splice(randomIndex, 1);

		return randomCard;
	};

	return {
		cardsDeck,
		selectRandomCard,
	};
};
