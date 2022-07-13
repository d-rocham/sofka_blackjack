const getHandValue = require("./utils");

const player = () => {
	let playerCards = [];

	const handleUserPlay = (answer, sessionCards) => {
		switch (answer) {
			case "H":
				break;
			case "S":
				break;

			default:
				console.log("Invalid input");
				break;
		}
	};

	return {
		playerCards,
	};
};

module.exports = player;
