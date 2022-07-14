import { formatCardHand } from "../utils";

const renderCards = (targetID, cardsToRender) => {
	const targetContainer = document.querySelector(`#${targetID}-cards`);

	targetContainer.innerHTML = formatCardHand(cardsToRender);
};

export default renderCards;
