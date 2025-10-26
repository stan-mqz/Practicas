/*
Escribe una IIFE que cree un contador privado con dos métodos 
públicos: incrementar y obtenerValor. La IIFE debe retornar un objeto con estos métodos
*/


const counterFun = (() => {


    let counter = 0 

    return {
        incremetar : () => counter ++,
        decrementar : () => counter --,
        obtener : () => counter,
    }


})()


console.log(counterFun.incremetar())
console.log(counterFun.incremetar())
console.log(counterFun.decrementar())
console.log(counterFun.obtener())