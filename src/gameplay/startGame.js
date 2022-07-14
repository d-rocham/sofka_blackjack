/* eslint import/no-cycle: [0] */

import { player, dealer } from "../gameParticipants/gameParticipants";
import { cardBank } from "../gameElements/gameElements";

const startGame = () => {
	// Prior to start a game, make sure that .game-results is hidden
	const resultsDisplay = document.querySelector(".game-results");
	if (!resultsDisplay.classList.contains("hidden")) {
		resultsDisplay.classList.add("hidden");
	}

	const sessionDeck = cardBank();

	const sessionPlayer = player();
	const sessionDealer = dealer();

	// Assign the first 2 random for each participant
	for (let requiredCards = 0; requiredCards < 2; requiredCards += 1) {
		const newPlayerCard = sessionDeck.selectRandomCard();
		const newDealerCard = sessionDeck.selectRandomCard();

		sessionPlayer.cards.push(newPlayerCard);
		sessionDealer.cards.push(newDealerCard);
	}

	return {
		sessionPlayer,
		sessionDealer,
		sessionDeck,
	};
};

export default startGame;
