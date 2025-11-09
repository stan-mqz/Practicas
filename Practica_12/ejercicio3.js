//Contador de pares e impares: Pide 10 números, cuenta cuántos son pares y cuántos impares usando while

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let i = 0;
let evenNumbers = [];
let oddNumbers = [];

//Lo hice recursivo por que no me dejaba con whilexD
const askNumber = () => {
  if (i >= 10) {
    console.log(`Pares: ${evenNumbers}`);
    console.log(`Impares: ${oddNumbers}`);
    rl.close();
    return;
  }

  rl.question("Ingrese un numero ", (num) => {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }

    i++;

    askNumber();
  });
};

askNumber();
