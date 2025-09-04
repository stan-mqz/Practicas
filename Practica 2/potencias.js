/* Genera dos números aleatorios:
• La base debe ser un número entre 2 y 10.
• El exponente debe ser un número entre 1 y 5.
El programa debe pedir al usuario el resultado de la potencia.
• Convierte la respuesta con parseInt.
• Comprueba si es correcta comparando con Math.pow(base, exponente).
• Si el usuario falla, muestra la respuesta correcta y la diferencia absoluta con
Math.abs. 
*/

import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// *------------- Base y Exponente Random --------------* 
let baseMin = 2;
baseMin = Math.ceil(baseMin)
let baseMax = 10;
baseMax = Math.floor(baseMax)

const base = Math.floor(Math.random() * (baseMax - baseMin) + baseMin);

let expMin = 1;
expMin = Math.ceil(expMin)
let expMax = 5;
expMax = Math.floor(expMax)

const exponente = Math.floor(Math.random() * (expMax - expMin) + expMin);

console.log(`La base es: ${base}`)
console.log(`El exponente es: ${exponente}`)

// *------------- Pregunta al usuario -----------------*
rl.question("Ingrese el resultado de la potencia: ", (resultado) => {
    // Convertir string a entero
    const entero = parseInt(resultado)

    // Comprobar resultado de la potencia
    const correcta = Math.pow(base, exponente)

    // Determinar si el usuario respondio correctamente
    if(entero === correcta) {
        console.log(`Su respuesta ${entero} es correcta`)
    } else  {
        console.log(`La respuesta correcta es ${correcta}`)
        // Calcular diferencia de respuesta del usuario con la correcta por medio de Math.abs
        console.log(`La diferencia de su respuesta con la correcta es de ${Math.abs(resultado - correcta)}`)
    }
    rl.close()
})