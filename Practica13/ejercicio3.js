// votingSystem.js
import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let votesA = 0;
let votesB = 0;
let votesC = 0;

console.log("Sistema de votación");
console.log("Vote por A, B o C. Escriba 'fin' para terminar.");

const askForVote = () => {
  rl.question("Ingrese su voto: ", (input) => {
    const vote = input.trim().toLowerCase();

    if (vote === "fin") {
      console.log(`Votos para A: ${votesA}`);
      console.log(`Votos para B: ${votesB}`);
      console.log(`Votos para C: ${votesC}`);

      if (votesA > votesB && votesA > votesC)
        console.log("Ganador: A");
      else if (votesB > votesA && votesB > votesC)
        console.log("Ganador: B");
      else if (votesC > votesA && votesC > votesB)
        console.log("Ganador: C");
      else
        console.log("Hay un empate.");

      rl.close();
      return;
    }

    if (vote === "a") votesA++;
    else if (vote === "b") votesB++;
    else if (vote === "c") votesC++;
    else console.log("Voto inválido. Solo se permite A, B o C.");

    askForVote();
  });
};

askForVote();
