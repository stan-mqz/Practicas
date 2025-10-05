/**  Ejercicio 2: Sumar todos los elementos
Pregunta al usuario los números a guardar en un array. 
Calcula y muestra la suma total usando reduce.*/
import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({ input: stdin, output: stdout });

function pedirNumeros(arr = []) {
  rl.question("Número (Enter para terminar): ", (input) => {
    if (input === "") {
      const suma = arr.reduce((acc, n) => acc + n, 0);
      console.log("Array ingresado:", arr);
      console.log("Suma total:", suma);
      rl.close();
    } else if (isNaN(input)) {
      console.log("No es un número válido.");
      pedirNumeros(arr);
    } else {
      pedirNumeros([...arr, Number(input)]);
    }
  });
}

pedirNumeros();
