// Funciones Avanzadas

// Closure Ejemplos
function crearContador() {
  let contador = 0;
  return function () {
    contador++;
    return contador;
  };
}

let contador1 = crearContador();
let contador2 = crearContador();
console.log(contador1());
console.log(contador1(), "<= contador 1\n");
console.log("Hola soy el contador 2 =>", contador2());

// El saldo de una cuenta bancaria
function cuentaDeAhorro(inicial) {
  let saldo = inicial;
  return {
    verSaldo: () => saldo,
    depositar: (x) => (saldo += x),
    retirar: (x) => (saldo -= x),
  };
}
let miCuenta = cuentaDeAhorro(100);
console.log(`Tu saldo es: ${miCuenta.verSaldo()}`);
miCuenta.depositar(250);
miCuenta.retirar(110);
console.log(`Tu saldo es: ${miCuenta.verSaldo()}`);

let numeros = [2, 4, 6, 7, 9];
function recorrerArray(arr, calback) {
  for (let item of arr) {
    calback(item);
  }
}
recorrerArray(numeros, (n) => console.log(n * n));

const procesarUsuario = (nombre, callback) => {
  console.log("Procesando usuario espere...");

  callback(nombre);
};

procesarUsuario("Stan", function (nombre) {
  console.log("Su nombre ha sido procesado", nombre);
});


const sumar = (a,b) => a + b

const saludo = () => 'Hola Mundo'

console.log(sumar(40,20))
console.log(saludo)
