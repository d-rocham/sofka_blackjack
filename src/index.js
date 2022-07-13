import gameController from "./gameplay/gameController";
import "./style.css";

const startGameButton = document.querySelector("#new-game-button");

startGameButton.addEventListener("click", () => gameController());
