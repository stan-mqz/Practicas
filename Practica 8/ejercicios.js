/* 
   Ejercicio 1: Declaración y llamada de funciones básicas
*/

function formatearSaludo(persona, horaDelDia) {
  const { nombre, edad } = persona;
  const esAdulto = edad >= 18;
  const trato = esAdulto ? "Estimado/a" : "Hola";
  const hora = (horaDelDia || "").toLowerCase();
  let saludoHora;
  if (hora === "mañana") saludoHora = `${trato}, buenos días`;
  else if (hora === "tarde") saludoHora = `${trato}, buenas tardes`;
  else if (hora === "noche") saludoHora = `${trato}, buenas noches`;
  else saludoHora = `${trato}`;
  return `${saludoHora}, ${nombre}. (${edad} años)`;
}

function calcularArea(radio) {
  if (typeof radio !== "number" || isNaN(radio) || radio < 0) {
    throw new Error("Radio debe ser un número no negativo");
  }
  return Math.PI * radio * radio;
}

console.log("// Ejercicio 1 - demostración");
console.log(formatearSaludo({ nombre: "Ana", edad: 20 }, "mañana"));
console.log(formatearSaludo({ nombre: "Luis", edad: 15 }, "tarde"));
console.log("Área r=3:", calcularArea(3));
console.log("Área r=0.5:", calcularArea(0.5));

/* Ejercicio 2: Expresiones de función y funciones anónimas
 */

function calcularCuboDeclaracion(n) {
  return n * n * n;
}

const calcularCuboExpresion = function (n) {
  return n * n * n;
};

function transformarArray(arr, callback) {
  return arr.map(function (x) {
    return callback(x);
  });
}

console.log("\n// Ejercicio 2 - demostración");
console.log("Cubo (declaración) de 2:", calcularCuboDeclaracion(2));
console.log("Cubo (expresión) de 3:", calcularCuboExpresion(3));

const numeros = [1, 2, 3, 4, 5];
const alCuadrado = transformarArray(numeros, function (x) {
  return x * x;
});
console.log("Original:", numeros);
console.log("Al cuadrado (callback anónima):", alCuadrado);

/* 
   Ejercicio 3: Funciones como argumentos (Higher-order functions)
    */
function procesarArray(arr, fn) {
  return arr.map(function (x) {
    return fn(x);
  });
}

function duplicar(x) {
  return x * 2;
}
function elevarAlCuadrado(x) {
  return x * x;
}
function calcularRaizCuadrada(x) {
  return Math.sqrt(x);
}

console.log("\n// Ejercicio 3 - demostración");
console.log("Duplicar:", procesarArray([1, 2, 3], duplicar));
console.log("Elevar al cuadrado:", procesarArray([1, 4, 9], elevarAlCuadrado));
console.log("Raíz cuadrada:", procesarArray([4, 9, 16], calcularRaizCuadrada));

/* 
   Ejercicio 4: Recursión
 */
function factorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("factorial: recibe un entero no negativo");
  }
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("fibonacci: recibe un entero no negativo");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function sumarDigitos(n) {
  if (!Number.isInteger(n)) {
    throw new Error("sumarDigitos: recibe un entero");
  }
  const absStr = Math.abs(n).toString();
  if (absStr.length === 1) return parseInt(absStr, 10);
  const primer = parseInt(absStr[0], 10);
  const resto = parseInt(absStr.slice(1), 10);
  return primer + sumarDigitos(resto);
}

console.log("\n// Ejercicio 4 - demostración");
console.log("factorial(5):", factorial(5)); // 120
console.log("fibonacci(0..6):", [0, 1, 2, 3, 4, 5, 6].map(fibonacci));
console.log("sumarDigitos(2025):", sumarDigitos(2025));
console.log("sumarDigitos(-123):", sumarDigitos(-123));

/* 
   Ejercicio 5: Scope y Closures
    */

function crearContador(inicial = 0) {
  let valor = inicial; // privado
  return {
    incrementar: function (paso = 1) {
      if (typeof paso !== "number") throw new Error("paso debe ser número");
      valor += paso;
      return valor;
    },
    decrementar: function (paso = 1) {
      if (typeof paso !== "number") throw new Error("paso debe ser número");
      valor -= paso;
      return valor;
    },
    obtenerValor: function () {
      return valor;
    },
  };
}

console.log("\n// Ejercicio 5 - demostración");
const contadorA = crearContador();
const contadorB = crearContador(10);
console.log("A inicial:", contadorA.obtenerValor());
console.log("B inicial:", contadorB.obtenerValor());
contadorA.incrementar();
contadorA.incrementar(2);
contadorB.decrementar(3);
console.log("A después:", contadorA.obtenerValor());
console.log("B después:", contadorB.obtenerValor());

/* 
   Ejercicio 6: Funciones con parámetros por defecto
    */
function crearPerfil(
  nombre,
  edad = 18,
  ciudad = "No especificada",
  profesion = "Estudiante"
) {
  if (!nombre) throw new Error("Nombre es obligatorio");
  return {
    nombre,
    edad,
    ciudad,
    profesion,
  };
}

console.log("\n// Ejercicio 6 - demostración");
console.log(crearPerfil("María"));
console.log(crearPerfil("Carlos", 25));
console.log(crearPerfil("Sofía", 30, "San Salvador", "Ingeniera"));
