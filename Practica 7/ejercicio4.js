// Pide nombres, luego pregunta por uno y verifica si está en el array (case-insensitive).
import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({ input: stdin, output: stdout });

function pedirNombres(arr = []) {
  rl.question("Nombre (Enter para terminar): ", (nombre) => {
    if (nombre === "") {
      rl.question("¿Qué nombre quieres buscar?: ", (buscar) => {
        const existe = arr.some(
          (n) => n.toLowerCase() === buscar.toLowerCase()
        );
        console.log(
          existe
            ? `${buscar} está en la lista.`
            : `${buscar} NO está en la lista.`
        );
        rl.close();
      });
    } else {
      pedirNombres([...arr, nombre]);
    }
  });
}

pedirNombres();
