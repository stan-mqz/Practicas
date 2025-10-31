import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* 
Crea un programa que solicite un número y determine si es positivo, negativo o cero. Muestra el resultado en consola.
*/

// const isPositive = (n) => {
//   if (n === 0) {
//     return "Es cero";
//   }

//   if (n > 0) {
//     return 'Es positivo'
//   }

//   return 'Es negativo'
// };

// rl.question("Ingrese el numero ", (num) => {
//     console.log(isPositive(parseInt(num))) 
//     rl.close()
// });

/* 
Escribe un programa que pida la edad de una persona y determine si es: menor de edad (menor de 18), adulto (18-64) o adulto mayor (65 o más).  
*/


// const isAdult = (formatAge) => {

//     if (formatAge < 18) {
//         return 'Es menor de edad'
//     }


//     if (formatAge >= 18 && formatAge <= 64) {
//         return 'Es adulto'
//     }

//     return 'Es adulto mayor'
// }

// rl.question('Ingrese la edad ', (age) => {


//     const formatAge = parseInt(age)
//     console.log(isAdult(formatAge))

//     rl.close()
// })

/*Implementa un programa que solicite tres números y determine cuál es el mayor de los tres.*/


const biggestNumber = (n1,n2,n3) => {

    if (n1 === n2 && n2 === n3) {
        return 'Los 3 numeros son iguales'
    }

    if (n1 > n2 && n1 > n3) {
        return 'El primero es el mayor'
    }

    if (n2 > n3) {
        return 'El segundo es el mayor'
    }

    return 'El tercero es el mayor'

}

rl.question('Ingrese el primer numero ', (n1) => {
    rl.question('Ingrese el segundo numero ', (n2) => {
        rl.question('Ingrese el tercer numero', (n3) => {

            const formatN1 = parseInt(n1)
            const formatN2 = parseInt(n2)
            const formatN3 = parseInt(n3)

            console.log(biggestNumber(formatN1,formatN2, formatN3))

            rl.close()
        })
    })
})