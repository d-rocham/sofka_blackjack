import gameController from "./gameplay/gameController";
import "./style.css";

/* GAME STARTS HERE */

const startGameButton = document.querySelector("#new-game-button");

const accumulatedPrize = localStorage.setItem(
	"blackjack-acumulated-results",
	0
);

startGameButton.addEventListener("click", () =>
	gameController(accumulatedPrize)
);
