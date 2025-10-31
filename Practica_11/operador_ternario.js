/*
Convierte el siguiente código if-else a operador ternario: verifica si un número es  par o impar y asigna el mensaje correspondiente a una variable.
*/

const isEven = (num) => {

    const result = num % 2 === 0 ? 'Es par' : 'Es impar'

    return result

}


console.log(isEven(1))

/* 
Crea una función que reciba la edad de una persona y use el operador ternario para devolver si puede votar (18 años o más) o no.
*/

const canVote = (age) => {
    return age >= 18 ? 'Puede votar' : 'No puede votar';
}

console.log(canVote(20)); 
console.log(canVote(16)); 

/* 
Implementa una función que reciba un precio y un booleano indicando si el usuario es miembro. Usa el operador ternario para aplicar un descuento del 20% si es miembro, o 0% si no lo es. Devuelve el precio final.
*/

const calculatePrice = (price, isMember) => {
    return isMember ? price * 0.8 : price; 
} 

console.log('Precio para miembro: $' + calculatePrice(100, true));  
console.log('Precio para no miembro: $' + calculatePrice(100, false)); 