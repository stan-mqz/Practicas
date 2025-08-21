
function esPalindromo(texto) {
    const textoNormalizado = texto.replace(/[^a-z0-9]/gi, '').toLowerCase();
    
    return textoNormalizado === textoNormalizado.split('').reverse().join('');
}

function contarVocales(texto) {
    const textoMinusculas = texto.toLowerCase();
    
    const vocales = {
        'a': (textoMinusculas.match(/a/g) || []).length,
        'e': (textoMinusculas.match(/e/g) || []).length,
        'i': (textoMinusculas.match(/i/g) || []).length,
        'o': (textoMinusculas.match(/o/g) || []).length,
        'u': (textoMinusculas.match(/u/g) || []).length
    };
    
    return Object.values(vocales).reduce((total, count) => total + count, 0);
}

function sonAnagramas(palabraA, palabraB) {
    const normalizar = (palabra) => palabra.replace(/\s/g, '').toLowerCase();
    
    const palabraANormalizada = normalizar(palabraA);
    const palabraBNormalizada = normalizar(palabraB);
    
    if (palabraANormalizada.length !== palabraBNormalizada.length) {
        return false;
    }
    
    const letrasA = palabraANormalizada.split('').sort().join('');
    const letrasB = palabraBNormalizada.split('').sort().join('');
    
    return letrasA === letrasB;
}

function palabraMasFrecuente(frase) {
    const fraseNormalizada = frase.replace(/[^\w\s]/g, '').toLowerCase();
    
    const palabras = fraseNormalizada.split(/\s+/).filter(palabra => palabra.length > 0);
    
    const frecuencia = {};
    palabras.forEach(palabra => {
        frecuencia[palabra] = (frecuencia[palabra] || 0) + 1;
    });
    
    let palabraMasComun = '';
    let maxFrecuencia = 0;
    
    for (const [palabra, count] of Object.entries(frecuencia)) {
        if (count > maxFrecuencia) {
            maxFrecuencia = count;
            palabraMasComun = palabra;
        }
    }
    
    return palabraMasComun;
}

function mostrarResultado(titulo, resultado) {
    console.log(`\n${titulo}:`);
    console.log(`Resultado: ${resultado}`);
}

function ejecutarPruebas() {
    console.log("🚀 EJECUTANDO PRUEBAS DE MANIPULACIÓN DE STRINGS");
    console.log("=" .repeat(50));
    
    mostrarResultado("1. ¿'Anita lava la tina' es palíndromo?", esPalindromo("Anita lava la tina"));
    mostrarResultado("   ¿'Hola mundo' es palíndromo?", esPalindromo("Hola mundo"));
    mostrarResultado("   ¿'A man a plan a canal Panama' es palíndromo?", esPalindromo("A man a plan a canal Panama"));
    
    mostrarResultado("2. Vocales en 'Hola mundo':", contarVocales("Hola mundo"));
    mostrarResultado("   Vocales en 'AEIOU':", contarVocales("AEIOU"));
    mostrarResultado("   Vocales en 'JavaScript':", contarVocales("JavaScript"));
    
    mostrarResultado("3. ¿'roma' y 'amor' son anagramas?", sonAnagramas("roma", "amor"));
    mostrarResultado("   ¿'hola' y 'adios' son anagramas?", sonAnagramas("hola", "adios"));
    mostrarResultado("   ¿'listen' y 'silent' son anagramas?", sonAnagramas("listen", "silent"));
    
    mostrarResultado("4. Palabra más frecuente en 'hola mundo hola programacion hola':", 
                    palabraMasFrecuente("hola mundo hola programacion hola"));
    mostrarResultado("   Palabra más frecuente en 'el gato negro y el perro blanco':", 
                    palabraMasFrecuente("el gato negro y el perro blanco"));
}

if (typeof require !== 'undefined' && require.main === module) {
    ejecutarPruebas();
} else {
    console.log("📝 Archivo de funciones de manipulación de strings cargado.");
    console.log("💡 Usa 'ejecutarPruebas()' para ver ejemplos de uso.");
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        esPalindromo,
        contarVocales,
        sonAnagramas,
        palabraMasFrecuente,
        ejecutarPruebas
    };
}
