/* 
Implementa una función crearCalculadoraAvanzada con funciones anidadas que demuestre el scope chain en 3 niveles. La función externa define operación, la intermedia define el primer número, y la interna recibe el segundo número y ejecuta la operación.
*/

const crearCalculadoraAvanzada = (operacion) => {
    const recibirPrimerNum = (num1) => {
        return function recibirSegundoNum(num2) {
            if (operacion === 'suma') return num1 + num2;
            if (operacion === 'resta') return num1 - num2;
            if (operacion === 'multiplicacion') return num1 * num2;
            if (operacion === 'division') return num1 / num2;
        }
    }
    return recibirPrimerNum;
}


const suma = crearCalculadoraAvanzada('suma');
const primerNumero = suma(5);
const resultado = primerNumero(3);
console.log('Suma:', resultado); 

const multiplicacion = crearCalculadoraAvanzada('multiplicacion');
console.log('Multiplicación:', multiplicacion(4)(2)); 

const resta = crearCalculadoraAvanzada('resta');
console.log('Resta:', resta(10)(4)); 

const division = crearCalculadoraAvanzada('division');
console.log('División:', division(15)(3)); 