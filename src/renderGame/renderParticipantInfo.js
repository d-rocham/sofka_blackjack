/* eslint import/no-cycle: [0] */

import { renderHandSum, renderCards } from "./renderGame";
import { getHandValue } from "../utils";

const renderParticipantInfo = (participant) => {
	renderCards(participant.participantIdentifier, participant.cards);

	const participantSum = getHandValue(participant.cards);
	renderHandSum(participant.participantIdentifier, participantSum);
};

export default renderParticipantInfo;
