/* Solicita al usuario que ingrese una serie de números enteros separados por espacios.
• Convierte los valores a números usando Number.
• Obtén el número mayor y el menor utilizando Math.max y Math.min.
• Calcula el promedio y muéstralo con toPrecision(3).
 */
import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una serie de numeros enteros (separelos por espacios): ", (numbers) => {
    const toArray = numbers.split(" ")
    //  Conversion a numero
    const toNumber = []
    for (let i = 0; i < toArray.length; i++) {
        toNumber.push(Number(toArray[i]))
    }
    
    // Encontrar numero mayor y menor
    const maxNum = Math.max(...toNumber)
    const minNum = Math.min(...toNumber)
    
    // Calcular promedio con toPrecision(3)
    let suma = 0
    for (let i = 0; i < toNumber.length; i++) {
        suma = suma + toNumber[i]
    }
    const prom = (suma / toNumber.length).toPrecision(3)
    
    console.log(`Número mayor: ${maxNum}`)
    console.log(`Número menor: ${minNum}`)
    console.log(`Promedio: ${prom}`)

    rl.close()
})