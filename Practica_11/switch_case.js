/*
Implementa un programa que solicite un número del 1 al 7 y muestre el día de la semana correspondiente (1 = Lunes, 2 = Martes, etc.). Si el número está fuera del rango, muestra un mensaje de error.
*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



const determineDay = (number) => {
    switch (number) {
        case '1':
            return 'Lunes';
        case '2':
            return 'Martes';
        case '3':
            return 'Miércoles';
        case '4':
            return 'Jueves';
        case '5':
            return 'Viernes';
        case '6':
            return 'Sábado';
        case '7':
            return 'Domingo';
        default:
            return 'Error: Por favor ingrese un número del 1 al 7';
    }
}

rl.question('Ingrese un número del 1 al 7: ', (number) => {
    console.log(determineDay(number));
    rl.close();
});

/*
Crea un programa que pida un número del 1 al 12 y muestre el mes correspondiente y la cantidad de días que tiene ese mes
*/

const determineMonth = (number) => {
    switch (number) {
        case '1':
            return 'Enero tiene 31 días';
        case '2':
            return 'Febrero tiene 28 o 29 días (29 en año bisiesto)';
        case '3':
            return 'Marzo tiene 31 días';
        case '4':
            return 'Abril tiene 30 días';
        case '5':
            return 'Mayo tiene 31 días';
        case '6':
            return 'Junio tiene 30 días';
        case '7':
            return 'Julio tiene 31 días';
        case '8':
            return 'Agosto tiene 31 días';
        case '9':
            return 'Septiembre tiene 30 días';
        case '10':
            return 'Octubre tiene 31 días';
        case '11':
            return 'Noviembre tiene 30 días';
        case '12':
            return 'Diciembre tiene 31 días';
        default:
            return 'Error: Por favor ingrese un número del 1 al 12';
    }
}

rl.question('Ingrese un número del 1 al 12 para saber el mes y sus días: ', (number) => {
    console.log(determineMonth(number));
    rl.close();
});

/* 
Escribe un programa tipo calculadora que solicite dos números y una operación (+, -, *, /, %) y muestre el resultado usando switch
*/

const calculate = (num1, num2, operation) => {
  const a = parseFloat(num1);
  const b = parseFloat(num2);

  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) {
        return "Error: No se puede dividir por cero";
      }
      return a / b;
    case "%":
      if (b === 0) {
        return "Error: No se puede calcular el módulo con cero";
      }
      return a % b;
    default:
      return "Error: Operación no válida. Use +, -, *, /, %";
  }
};

rl.question("Ingrese el primer número: ", (num1) => {
  rl.question("Ingrese el segundo número: ", (num2) => {
    rl.question("Ingrese la operación (+, -, *, /, %): ", (operation) => {
      const result = calculate(num1, num2, operation);
      console.log(`Resultado: ${result}`);
      rl.close();
    });
  });
});
