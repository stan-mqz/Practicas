// index.js
import { stdin, stdout } from "process";
import readline from "readline";
import {
  playerOneTurnsEasy,
  playerOneTurnsHard,
  playerOneTurnsMedium,
  playerTwoTurnsEasy,
  playerTwoTurnsHard,
  playerTwoTurnsMedium,
} from "./playerTurns.js";

export const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const chooseDificulty = (difficulty) => {
  switch (difficulty) {
    case "facil":
      playerOneTurnsEasy(() => {
        playerTwoTurnsEasy();
      });
      break;

    case "medio":
      playerOneTurnsMedium(() => {
        playerTwoTurnsMedium();
      });
      break;

    case "dificil":
      playerOneTurnsHard(() => {
        playerTwoTurnsHard();
      });
      break;

    default:
      break;
  }
};

rl.question("Ingresa el nivel de dificultad ", (difficulty) => {
  chooseDificulty(difficulty);
});
