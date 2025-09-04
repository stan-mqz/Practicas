/* El programa debe pedir al usuario que ingrese tres precios en formato de texto (ejemplo:
"12.5", "20.99", "30").
• Convierte cada valor a número usando parseFloat.
• Calcula la suma total.
• Muestra el resultado con exactamente dos decimales utilizando toFixed(2). */

import { parse } from 'path';
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingresa tres precios en formato de texto ", (precios) => {
    // Conversion a Array
    const preciosSplit = precios.split(" ")
    // String a Float
    const num1 = parseFloat(preciosSplit[0])
    const num2 = parseFloat(preciosSplit[1])
    const num3 = parseFloat(preciosSplit[2])
    // Suma de valores
    const preciosSum = num1 + num2 + num3
    // Resultado con dos decimales
    const resultado = preciosSum.toFixed(2)

    console.log(resultado)
    rl.close()
})