/*
Crea una arrow function llamada ordenarPorLongitud que reciba un array de strings y lo devuelva ordenado por la longitud de cada palabra (de menor a mayor).
*/



const arregloOrdenado = ['Holasam', 'Tres', 'Dos']

const ordenarPorLongitud = (arr) => {

    return arr.sort((a,b) => a.length - b.length)
}


console.log(ordenarPorLongitud(arregloOrdenado))

