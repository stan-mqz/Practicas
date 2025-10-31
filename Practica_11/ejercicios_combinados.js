/* 
Crea un programa que simule un sistema de autenticación bancaria. 
Solicita número de cuenta (4 dígitos), PIN (4 dígitos) y monto a retirar. 
Valida que la cuenta exista, el PIN sea correcto y haya saldo suficiente (saldo inicial: 1000). 
Usa condicionales anidadas y operadores lógicos.
*/

const banco = {
    "1234": { pin: "4321", saldo: 1000 },
    "5678": { pin: "8765", saldo: 1000 }
};

const retirarDinero = (cuenta, pin, monto) => {
    if (banco[cuenta]) {
        if (banco[cuenta].pin === pin) {
            if (banco[cuenta].saldo >= monto) {
                banco[cuenta].saldo -= monto;
                console.log(`Retiro exitoso. Nuevo saldo: $${banco[cuenta].saldo}`);
            } else {
                console.log("Saldo insuficiente.");
            }
        } else {
            console.log("PIN incorrecto.");
        }
    } else {
        console.log("Cuenta no encontrada.");
    }
}

retirarDinero("1234", "4321", 200);
retirarDinero("1234", "0000", 200);
retirarDinero("9999", "1234", 100);


/* 
Implementa un programa que calcule el precio de un boleto de cine. 
Solicita la edad del usuario y el día de la semana. 
Reglas: precio base 10 dólares, menores de 12 años y mayores de 65 tienen 40% de descuento, 
los miércoles hay 25% de descuento para todos. 
Los descuentos no son acumulables; aplica el mayor.
*/

const calcularPrecioBoleto = (edad, dia) => {
    const precioBase = 10;
    let descuento = 0;

    if (dia.toLowerCase() === "miércoles") {
        descuento = 0.25;
    }

    if (edad < 12 || edad > 65) {
        const descuentoEdad = 0.4;
        if (descuentoEdad > descuento) {
            descuento = descuentoEdad;
        }
    }

    const precioFinal = precioBase * (1 - descuento);
    console.log(`Precio final del boleto: $${precioFinal.toFixed(2)}`);
}

calcularPrecioBoleto(10, "lunes");
calcularPrecioBoleto(70, "miércoles");
calcularPrecioBoleto(30, "miércoles");
calcularPrecioBoleto(25, "viernes");
