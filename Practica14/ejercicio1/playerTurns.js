import { generateEasyOperation, generateHardOperation, generateMediumOperation } from "./generateOperations.js";
import { rl } from "./index.js";
import { validateAnswer, getAnswer } from "./answersSystem.js";

let playerOneAttemps = 5;
let playerTwoAttemps = 5;

let pointsPlayerOne = 0;
let pointsPlayerTwo = 0;

let playerStreak = 0;

export const playerOneTurnsEasy = (callback) => {
  if (playerOneAttemps === 0) {
    playerStreak = 0;
    console.log("Ha terminado tu turno jugador 1. Puntos:", pointsPlayerOne);   
    if (callback) callback();
    return;
  }

  console.log("Turno del jugador uno");

  const { question, result } = generateEasyOperation();

  rl.question(question, (answer) => {
    const isCorrect = getAnswer(result, answer);

    let { playerPoints, streak } = validateAnswer(isCorrect, playerStreak, pointsPlayerOne);
    pointsPlayerOne = playerPoints; 
    playerStreak = streak;
    playerOneAttemps--;

    playerOneTurnsEasy(callback);
  });
};

export const playerTwoTurnsEasy = () => {
  if (playerTwoAttemps === 0) {
    playerStreak = 0;
    console.log("Ha terminado tu turno jugador 2. Puntos:", pointsPlayerTwo);
    console.log("\n=== RESULTADOS FINALES ===");
    console.log(`Jugador 1: ${pointsPlayerOne} puntos`);
    console.log(`Jugador 2: ${pointsPlayerTwo} puntos`);
    rl.close();
    return;
  }

  console.log("Turno del jugador dos");

  const { question, result } = generateEasyOperation();

  rl.question(question, (answer) => {
   
    const isCorrect = getAnswer(result, answer);

    let { playerPoints, streak } = validateAnswer(isCorrect, playerStreak, pointsPlayerTwo);
    pointsPlayerTwo = playerPoints; 
    playerStreak = streak;
    playerTwoAttemps--;

    playerTwoTurnsEasy(); 
  });
};

export const playerOneTurnsMedium = (callback) => {
  if (playerOneAttemps === 0) {
    playerStreak = 0;
    console.log("Ha terminado tu turno jugador 1. Puntos:", pointsPlayerOne);   
    if (callback) callback();
    return;
  }

  console.log("Turno del jugador uno");

  const { question, result } = generateMediumOperation();

  rl.question(question, (answer) => {
    const isCorrect = getAnswer(result, answer);

    let { playerPoints, streak } = validateAnswer(isCorrect, playerStreak, pointsPlayerOne);
    pointsPlayerOne = playerPoints; 
    playerStreak = streak;
    playerOneAttemps--;

    playerOneTurnsMedium(callback);
  });
};

export const playerTwoTurnsMedium = () => {
  if (playerTwoAttemps === 0) {
    playerStreak = 0;
    console.log("Ha terminado tu turno jugador 2. Puntos:", pointsPlayerTwo);
    console.log("\n=== RESULTADOS FINALES ===");
    console.log(`Jugador 1: ${pointsPlayerOne} puntos`);
    console.log(`Jugador 2: ${pointsPlayerTwo} puntos`);
    rl.close();
    return;
  }

  console.log("Turno del jugador dos");

  const { question, result } = generateMediumOperation();

  rl.question(question, (answer) => {
   
    const isCorrect = getAnswer(result, answer);

    let { playerPoints, streak } = validateAnswer(isCorrect, playerStreak, pointsPlayerTwo);
    pointsPlayerTwo = playerPoints; 
    playerStreak = streak;
    playerTwoAttemps--;

    playerTwoTurnsMedium(); 
  });

  
};


export const playerOneTurnsHard = (callback) => {
  if (playerOneAttemps === 0) {
    playerStreak = 0;
    console.log("Ha terminado tu turno jugador 1. Puntos:", pointsPlayerOne);   
    if (callback) callback();
    return;
  }

  console.log("Turno del jugador uno");

  const { question, result } = generateHardOperation();

  rl.question(question, (answer) => {
    const isCorrect = getAnswer(result, answer);

    let { playerPoints, streak } = validateAnswer(isCorrect, playerStreak, pointsPlayerOne);
    pointsPlayerOne = playerPoints; 
    playerStreak = streak;
    playerOneAttemps--;

    playerOneTurnsHard(callback);
  });
};

export const playerTwoTurnsHard = () => {
  if (playerTwoAttemps === 0) {
    playerStreak = 0;
    console.log("Ha terminado tu turno jugador 2. Puntos:", pointsPlayerTwo);
    console.log("\n=== RESULTADOS FINALES ===");
    console.log(`Jugador 1: ${pointsPlayerOne} puntos`);
    console.log(`Jugador 2: ${pointsPlayerTwo} puntos`);
    rl.close();
    return;
  }

  console.log("Turno del jugador dos");

  const { question, result } = generateHardOperation();

  rl.question(question, (answer) => {
   
    const isCorrect = getAnswer(result, answer);

    let { playerPoints, streak } = validateAnswer(isCorrect, playerStreak, pointsPlayerTwo);
    pointsPlayerTwo = playerPoints; 
    playerStreak = streak;
    playerTwoAttemps--;

    playerTwoTurnsHard(); 
  });

  
};