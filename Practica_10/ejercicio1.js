/*
    Crea una arrow function llamada filtrarPares que reciba un array de números y devuelva solo los números pares.
*/

const filtrarPares = (arr) => {
  let elementosPares = [];

  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];

    if (element % 2 === 0) {
      elementosPares.push(element);
    }
  }

  return elementosPares;
};


const numeros = [1,2,3,4,5,6,7,8]

console.log(filtrarPares(numeros))
