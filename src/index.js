import gameController from "./gameplay/gameController";

const startGameButton = document.querySelector("#new-game-button");

startGameButton.addEventListener("click", () => gameController());
