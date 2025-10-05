/**  Ejercicio 1: Crear y llenar un array
Solicita al usuario la cantidad de elementos y luego los valores uno por uno. Al final
muestra el array completo por consola.*/
import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({ input: stdin, output: stdout });

function pedirValores(cantidad, callback) {
  const arr = [];
  let i = 0;
  function pedir() {
    if (i < cantidad) {
      rl.question(`Valor #${i + 1}: `, (val) => {
        arr.push(val);
        i++;
        pedir();
      });
    } else {
      callback(arr);
    }
  }
  pedir();
}

rl.question("¿Cuántos elementos tendrá el array?: ", (respuesta) => {
  const cantidad = Number(respuesta);
  if (isNaN(cantidad) || cantidad <= 0) {
    console.log("Cantidad inválida");
    rl.close();
  } else {
    pedirValores(cantidad, (arr) => {
      console.log("Array final:", arr);
      console.log("Cantidad de elementos:", arr.length);
      rl.close();
    });
  }
});
