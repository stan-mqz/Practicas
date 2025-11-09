//Tabla de multiplicar: Solicita un número y muestra su tabla de multiplicar del 1 al 10 usando un ciclo for

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese la tabla de multiplicar ", (num) => {
  let result = 0;

  for (let i = 1; i <= 10; i++) {
    result = i * num;
    console.log(result);
  }

  rl.close();
});
