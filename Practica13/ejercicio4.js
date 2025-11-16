import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let startNumber, endNumber, filter;

rl.question("Ingrese el número inicial: ", (n1) => {
  rl.question("Ingrese el número final: ", (n2) => {
    startNumber = Number(n1);
    endNumber = Number(n2);

    console.log("Opciones de filtro:");
    console.log("1. Mostrar solo pares");
    console.log("2. Mostrar solo impares");
    console.log("3. Mostrar solo múltiplos de un número");

    rl.question("Seleccione una opción: ", (option) => {
      if (option === "1") {
        for (let i = startNumber; i <= endNumber; i++) {
          if (i % 2 === 0) console.log(i);
        }
        rl.close();
      } 
      
      else if (option === "2") {
        for (let i = startNumber; i <= endNumber; i++) {
          if (i % 2 !== 0) console.log(i);
        }
        rl.close();
      } 
      
      else if (option === "3") {
        rl.question("Ingrese el número para los múltiplos: ", (num) => {
          filter = Number(num);

          for (let i = startNumber; i <= endNumber; i++) {
            if (i % filter === 0) console.log(i);
          }

          rl.close();
        });
      } 
      
      else {
        console.log("Opción inválida.");
        rl.close();
      }
    });
  });
});
