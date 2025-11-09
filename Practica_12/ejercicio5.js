// Programa para sumar números hasta que se ingrese uno negativo
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;

function pedirNumero() {
    readline.question('Ingresa un número (negativo para terminar): ', (numero) => {
        numero = parseFloat(numero);
        
        if (isNaN(numero)) {
            console.log('Por favor, ingresa un número válido.');
            pedirNumero();
            return;
        }

        if (numero < 0) {
            console.log(`La suma total de los números ingresados es: ${suma}`);
            readline.close();
            return;
        }

        suma += numero;
        console.log(`Suma actual: ${suma}`);
        pedirNumero();
    });
}

pedirNumero();