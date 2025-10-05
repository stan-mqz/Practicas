import { stdin, stdout } from 'process'
import readline from 'readline'

const rl = readline.createInterface({
    input: stdin,
    output: stdout
})

// let palabras = []

// function pedirPalabra(){
//     rl.question('Ingresa una palabra o fin para terminar ', (entrada)=> {
//         if(entrada.toLocaleLowerCase() == 'fin'){
//             mostrarInvertio()
//         }else{
//             palabras.push(entrada)
//             pedirPalabra();
//         }
//     })
// }

// function mostrarInvertio(){
//     console.log(`Original `, palabras );
//     console.log(`Invertido: `, palabras.toReversed() );
//     rl.close()
// }

// pedirPalabra()



// const arrayNumeros = [],
//     perdirNumero = () => {
//         rl.question('Ingresa un número o fin para terminar: ', (data) => {
//             if (data == 'fin') {
//                 buscarPar()
//             } else {
//                 arrayNumeros.push(data * 1)
//                 perdirNumero()
//             }

//         })
//     },

//     buscarPar = () => {
//         const arrPares = arrayNumeros.find(numero => numero % 2 == 0)
//         if (arrPares) {
//             console.log(`El primer número par es ${arrPares[0]}`);
//         } else {
//             console.log(`No se encontraron pares`);
//         }
//         rl.close()
//     }

// perdirNumero();

let palabras = []

function pedirPalabra() {
    rl.question('Ingresa una palabra o fin para terminar: ', (entrada) => {
        if (entrada.toLowerCase() === 'fin') {
            mostrarLongitudes()
        } else {
            palabras.push(entrada.trim()) 
            pedirPalabra()
        }
    })
}

function mostrarLongitudes() {
    // Creamos objeto: palabra -> longitud
    const objeto = Object.fromEntries(
        palabras.map((palabra) => [palabra, palabra.length])
    )

    console.log("Objeto palabra-longitud:", objeto)
    rl.close()
}

pedirPalabra()