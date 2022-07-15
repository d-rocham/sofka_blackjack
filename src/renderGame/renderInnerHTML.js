/**
 * Helper function that wraps the Node.innerHTML method to avoid repetition
 * @param {String} target identifies the target in the dom. It must start with `.` or `#`
 * @param {String} content content to render.
 *
 * @returns {void}
 */

const renderInnerHTML = (target, content) => {
	const targetNode = document.querySelector(target);

	targetNode.innerHTML = content;
};

export default renderInnerHTML;
