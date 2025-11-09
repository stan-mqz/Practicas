
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularFactorial() {
    readline.question('Ingresa un número para calcular su factorial: ', (numero) => {
        numero = parseInt(numero);
        if (isNaN(numero) || numero < 0) {
            console.log('Por favor, ingresa un número válido no negativo.');
            calcularFactorial();
            return;
        }

        let factorial = 1;
        for (let i = 2; i <= numero; i++) {
            factorial *= i;
        }

        console.log(`El factorial de ${numero} es: ${factorial}`);
        readline.close();
    });
}

calcularFactorial();