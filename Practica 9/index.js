//scope y closure
//SCOPE: se refiere al alcance de nuestra funcion, lo que es capaz de entregar/retornar
//CLOSURE: es un tipo de memoria que al ser llamada la funcion, esta misma puede recordar su contexto
// Crea una función crearContadorConPaso(paso) que devuelva una función. Cada vez que la función devuelta se llame, debe aumentar un contador interno en el valor de paso y devolver el nuevo valor.

function crearContadorConPaso(numPasos){
    //manera de almacenar el contexto
    let pasos = 0
    return function(){
        //incrementador basado en lo que se reciba como parametr
        pasos+=numPasos
        return pasos
    }
}

const contador5 = crearContadorConPaso(5);
// console.log(contador5()); // 5
// console.log(contador5()); // 10
// console.log(contador5()); // 15

//generador de contraseñas usando closure
function crearGeneradorDePassword(prefijo) {
    //para que cada contrasenia sea diferente
  let contador = 0;
  //parametro que se recibe al hacer la primera invocacion
  return function(sufijo) {
    contador++;
    //return y se muestra el resultado al concatenar los strings
    return `${prefijo}-${contador}-${sufijo}`;
  };
}

const generador = crearGeneradorDePassword("USR");
// console.log(generador("abc"));
// console.log(generador("xyz")); 

//Usamos los parametros por defecto para los casos que necesitamos si o si un valor
//es ahi su importancia de que uno de los valores no quede vacio
//simple funcion con default params
function crearUsuario(nombre = "Invitado", rol = "lector", activo = true) {
  return {
    nombre,
    rol,
    activo
  };
}
// al no incluir el estado, pues la funcion asuma que es activo por tener como default que ese valor en true
// console.log(crearUsuario("Ana", "admin"));
// //mientras que si no asignamos nada, todos  los valores seran asignados default (los que dejamos en la funcion)
// console.log(crearUsuario());

//Uso del operador REST (...)
//Muy util cuando no sabemos cuantos parametros vamos a pasar dentro de una funcion, hacemos uso de una palabra referente a lo que usaremos una general es args, en este caso se usa numeros a manera descriptiva pero antes de numeros esta el operador (...).
function calcular(operacion, ...numeros) {
  if (operacion === "suma") {
    return numeros.reduce((a, b) => a + b, 0);
  } else if (operacion === "multiplica") {
    return numeros.reduce((a, b) => a * b, 1);
  } else {
    return "Operación no soportada";
  }
}

console.log(calcular("suma", 1, 2, 3, 4)); 
console.log(calcular("multiplica", 2, 3, 4));
