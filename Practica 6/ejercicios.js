/** Ejercicio 1 */
function generarContador() {
    let cuenta = 0;
    return function () {
        cuenta++;
        return cuenta;
    }
}

let primerContador = generarContador();
let segundoContador = generarContador();

console.log(primerContador());
console.log(`El valor actual de primerContador es: ${primerContador()}\n`);
console.log(`Hola, soy segundoContador y valgo: ${segundoContador()}`);


/** Ejercicio 2 */
function ejecutarOperacion(a, b, obtenerNumero) {
    const seleccion = obtenerNumero();

    if (seleccion < 4) {
        const resultado = a + b;
        console.log(`El oráculo decidió: SUMA => ${a} + ${b} = ${resultado}`);
        return resultado;

    } else if (seleccion < 7) {
        const resultado = a - b;
        console.log(`El oráculo decidió: RESTA => ${a} - ${b} = ${resultado}`);
        return resultado;

    } else {
        const resultado = a * b;
        console.log(`El oráculo decidió: MULTIPLICACIÓN => ${a} * ${b} = ${resultado}`);
        return resultado;
    }
}

ejecutarOperacion(5, 3, () => {
    const numeroAleatorio = () => Math.ceil(Math.random() * 10);
    return numeroAleatorio();
});


/** Ejercicio 3 */
const listaNumeros = [2, 4, 6, 8, 10];

const elevarCuadrado = () => {
    const cuadrados = listaNumeros.map(n => n ** 2);
    console.log(cuadrados);
}
elevarCuadrado();


/** Ejercicio 4 */
const sumaRecursiva = (array) => {
    const ultimo = array.pop();
    array[0] = array[0] + ultimo;
    console.log(array);

    if (array[1]) {
        sumaRecursiva(array);
    }

    return array;
}
console.log(`La suma acumulada es: ${sumaRecursiva(listaNumeros)}`);


/** Ejercicio 5 */
const usuarios = [
    { nombre: 'Pedro', edad: 14 },
    { nombre: 'Laura', edad: 22 },
    { nombre: 'Andrés', edad: 17 },
    { nombre: 'Clara', edad: 8 },
    { nombre: 'Raúl', edad: 25 },
    { nombre: 'Patricia', edad: 33 },
    { nombre: 'Esteban', edad: 12 },
    { nombre: 'Samantha', edad: 19 },
    { nombre: 'José', edad: 40 },
    { nombre: 'Valeria', edad: 28 }
];

const buscarMayorDe18 = () => {
    const persona = usuarios.find(u => u.edad > 18);
    console.log(persona);
}
buscarMayorDe18();
