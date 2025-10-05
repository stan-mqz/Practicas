// Pide números, elimina duplicados y muestra ambos arrays.
import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({ input: stdin, output: stdout });

function pedirNumeros(arr = []) {
  rl.question("Número (Enter para terminar): ", (num) => {
    if (num === "") {
      console.log("Original:", arr);
      const sinDuplicados = Array.from(new Set(arr));
      console.log("Sin duplicados:", sinDuplicados);
      rl.close();
    } else if (isNaN(num)) {
      console.log("No es un número válido.");
      pedirNumeros(arr);
    } else {
      pedirNumeros([...arr, Number(num)]);
    }
  });
}

pedirNumeros();
