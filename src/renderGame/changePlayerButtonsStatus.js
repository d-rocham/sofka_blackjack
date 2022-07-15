/* eslint no-return-assign: [0] */
/* eslint no-param-reassign: [0] */

/**
 *
 * @param {boolean} newStatus true for disabled, false for enabled
 * @returns {void}
 */
const changePlayerButtonsStatus = (newStatus) => {
	const gameButtons = document.querySelectorAll(".player-button");

	gameButtons.forEach((button) => (button.disabled = newStatus));
};

export default changePlayerButtonsStatus;
