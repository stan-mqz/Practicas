import { stdin, stdout } from "process";
import readline from "readline";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let excelent = [];
let good = [];
let satisfactory = [];
let needsToImprove = [];

const validateGrade = (studentsAmount) => {
  let studentData;
  if (studentsAmount === 0) {
    countStudents();
    rl.close();
    return;
  }

  rl.question("Ingresa el nombre del estudiante ", (name) => {
    rl.question(`Ingresa la calificacion de ${name} `, (grade) => {
      if (grade < 0 || grade > 100) {
        console.log("Calificacion invalida");
        return;
      }

      if (grade >= 90 && grade <= 100) {
        studentData = { name, grade };
        excelent.push(studentData);
      } else if (grade >= 80) {
        studentData = { name, grade };
        good.push(studentData);
      } else if (grade > 70) {
        studentData = { name, grade };
        satisfactory.push(studentData);
      } else {
        studentData = { name, grade };
        needsToImprove.push(studentData);
      }

      validateGrade(studentsAmount - 1);
    });
  });
};

const countStudents = () => {
  for (let i = 0; i < excelent.length; i++) console.log(excelent[i]);
  console.log("Total excelentes:", excelent.length);

  for (let i = 0; i < good.length; i++) console.log(good[i]);
  console.log("Total buenos:", good.length);

  for (let i = 0; i < satisfactory.length; i++) console.log(satisfactory[i]);
  console.log("Total satisfactorios:", satisfactory.length);

  for (let i = 0; i < needsToImprove.length; i++)
    console.log(needsToImprove[i]);
  console.log("Total necesitan mejorar:", needsToImprove.length);
};

rl.question("Ingresa el numero de estudiantes ", (num) => {
  validateGrade(num);
});
