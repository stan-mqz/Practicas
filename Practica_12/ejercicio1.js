//Suma de números naturales: Solicita un número N y usa un ciclo (for/while) para sumar los números del 1 al N

import readline from "readline"


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingresa la cantidad de numeros a sumar ", (num) => {
    
    const formatNum = parseInt(num)
    let result = 0

    for (let i = 1; i <= formatNum; i++) {
         result += i
    }

    console.log(result)
    rl.close()
})