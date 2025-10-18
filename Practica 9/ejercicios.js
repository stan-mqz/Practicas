/* Ejercicio 5 */
function crearContador(inicial = 0) {
  let valor = inicial;
  return {
    incrementar: function (paso = 1) {
      valor += paso;
      return valor;
    },
    decrementar: function (paso = 1) {
      valor -= paso;
      return valor;
    },
    obtenerValor: function () {
      return valor;
    },
  };
}

const contadorA = crearContador();
const contadorB = crearContador(10);

console.log("A inicial:", contadorA.obtenerValor());
console.log("B inicial:", contadorB.obtenerValor());
contadorA.incrementar();
contadorB.decrementar(3);
console.log("A después:", contadorA.obtenerValor());
console.log("B después:", contadorB.obtenerValor());

/* Ejercicio 6 */
function crearPerfil(nombre, edad = 18, ciudad = "No especificada", profesion = "Estudiante") {
  return { nombre, edad, ciudad, profesion };
}

console.log(crearPerfil("Ana"));
console.log(crearPerfil("Luis", 25));
console.log(crearPerfil("Sofía", 30, "San Miguel", "Ingeniera"));

/* Ejercicio 7 */
function promedioRest(...numeros) {
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((acc, n) => acc + n, 0);
  return suma / numeros.length;
}

function promedioArguments() {
  if (arguments.length === 0) return 0;
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) suma += arguments[i];
  return suma / arguments.length;
}

console.log("Promedio rest:", promedioRest(4, 8, 6, 2));
console.log("Promedio arguments:", promedioArguments(10, 20, 30));

function mezclar(...arrays) {
  return arrays.flat();
}

console.log("Mezclar:", mezclar([1, 2], [3], [4, 5]));

function contarArgumentos() {
  return arguments.length;
}

console.log("Argumentos pasados:", contarArgumentos(1, "hola", true, [4, 5]));
