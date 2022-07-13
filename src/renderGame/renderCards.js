import { formatCardHand } from "../utils";

const renderCards = (targetID, cardsToRender) => {
	const targetContainer = document.querySelector(targetID);

	// console.log(cardsToRender);

	targetContainer.innerHTML = formatCardHand(cardsToRender);
};

export default renderCards;
