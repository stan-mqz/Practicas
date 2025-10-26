/* 
Crea una IIFE que calcule el factorial de un número y lo almacene en una variable. La IIFE debe recibir el número como parámetro:
*/

const calcularFactorial = ((num) => {
  return {
    obtenerResultado: function () {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      return result;
    },
  };
})(5);


console.log(calcularFactorial.obtenerResultado())