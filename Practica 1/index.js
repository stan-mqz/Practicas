

function esPalindromo(texto) {
    const limpio = texto.replace(/[^a-z0-9]/gi, '').toLowerCase()
    return limpio === limpio.split('').reverse().join('')
}

function contarVocales(texto) {
    const vocales = texto.match(/[aeiouáéíóú]/gi)
    return vocales ? vocales.length : 0
}

function sonAnagramas(palabraA, palabraB) {
    const limpiar = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
    return limpiar(palabraA) === limpiar(palabraB)
}

function palabraMasFrecuente(frase) {
    const palabras = frase.toLowerCase().replace(/[^a-záéíóúñ\s]/gi, '').split(/\s+/)
    const contador = {}
    let maxPalabra = ""
    let maxFrecuencia = 0
    for (const palabra of palabras) {
        if (!palabra) continue
        contador[palabra] = (contador[palabra] || 0) + 1
        if (contador[palabra] > maxFrecuencia) {
            maxFrecuencia = contador[palabra]
            maxPalabra = palabra
        }
    }
    return maxPalabra
}

console.log(esPalindromo("Anita lava la tina"))
console.log(contarVocales("Hola mundo"))
console.log(sonAnagramas("Roma", "Amor"))
console.log(palabraMasFrecuente("El sol brilla, el sol calienta, el sol ilumina"))
