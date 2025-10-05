/**  Ejercicio 2: Sumar todos los elementos
Pregunta al usuario los números a guardar en un array. 
Calcula y muestra la suma total usando reduce.*/
// Pide un límite y luego números, filtra los menores al límite y muestra el array filtrado.
import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({ input: stdin, output: stdout });

function pedirNumeros(limite, arr = []) {
  rl.question("Número (Enter para terminar): ", (input) => {
    if (input === "") {
      const filtrados = arr.filter((n) => n < limite);
      console.log("Números menores al límite:", filtrados);
      rl.close();
    } else if (isNaN(input)) {
      console.log("No es un número válido.");
      pedirNumeros(limite, arr);
    } else {
      pedirNumeros(limite, [...arr, Number(input)]);
    }
  });
}

rl.question("Ingresa el límite numérico: ", (lim) => {
  const limite = Number(lim);
  if (isNaN(limite)) {
    console.log("Límite inválido.");
    rl.close();
  } else {
    pedirNumeros(limite);
  }
});
