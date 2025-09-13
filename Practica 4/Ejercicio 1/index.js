import readline from "readline";
import { createEmploye } from "./createEmploye.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let employesList = [];

function main() {
  console.log(
    "1. Registrar nuevo empleado\n" +
      "2. Mostrar empleados\n" +
      "3. Buscar empleado por nombre\n" +
      "4. Calcular salario promedio\n" +
      "5. Salir"
  );

  rl.question("Ingrese la opción que desea: ", (option) => {
    switch (option) {
      case "1":
        rl.question("Ingrese el nombre del empleado: ", (name) => {
          rl.question("Ingrese la edad del empleado: ", (age) => {
            rl.question(
              "Ingrese el departamento del empleado: ",
              (department) => {
                rl.question("Ingrese el salario del empleado: ", (salary) => {
                  const newEmploye = createEmploye(
                    name,
                    age,
                    department,
                    salary
                  );
                  employesList.push(newEmploye);
                  main();
                });
              }
            );
          });
        });

        break;

      case "2":
        if (employesList.length === 0) {
          console.log("No hay empleados");
          main();
          return;
        }

        console.log(employesList);

        main();
        break;

      case "3":
        rl.question(
          "Ingrese el nombre del empleado que desea buscar: ",
          (searchName) => {
            const foundEmploye = employesList.find(employee => employee.name === searchName);
            if (foundEmploye) {
              console.log("Empleado encontrado:", foundEmploye);
            } else {
              console.log("No se encontró ningún empleado con ese nombre");
            }
            main();
          }
        );

        break;

      case "4":
        if (employesList.length === 0) {
          console.log("No hay empleados registrados para calcular promedio");
          main();
        } else {
          
          const totalSalaries = employesList.reduce((sum, employee) => {
            return sum + parseFloat(employee.salary);
          }, 0);
          
          const averageSalary = totalSalaries / employesList.length;
          console.log(`El salario promedio es: $${averageSalary.toFixed(2)}`);
          main();
        }
        break;

      case "5":
        rl.close();
        break;

      default:
        console.log("Opción no válida");
        main();
        break;
    }
  });
}

main();
