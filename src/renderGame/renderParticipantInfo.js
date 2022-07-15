/* eslint import/no-cycle: [0] */

import { renderInnerHTML } from "./renderGame";
import { getHandValue, formatCardHand } from "../utils";

const renderParticipantInfo = (participant) => {
	renderInnerHTML(
		`#${participant.participantIdentifier}-cards`,
		formatCardHand(participant.cards)
	);

	const participantSum = getHandValue(participant.cards);
	renderInnerHTML(
		`#${participant.participantIdentifier}-sum`,
		participantSum
	);
};

export default renderParticipantInfo;
