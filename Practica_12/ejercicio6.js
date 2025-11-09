const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let suma = 0;
let contador = 0;

function pedirCalificacion() {
    readline.question('Ingresa una calificación (negativa para terminar): ', (calificacion) => {
        calificacion = parseFloat(calificacion);
        
        if (isNaN(calificacion)) {
            console.log('Por favor, ingresa un número válido.');
            pedirCalificacion();
            return;
        }

        if (calificacion < 0) {
            if (contador === 0) {
                console.log('No se ingresaron calificaciones.');
            } else {
                const promedio = suma / contador;
                console.log(`El promedio de las ${contador} calificaciones es: ${promedio.toFixed(2)}`);
            }
            readline.close();
            return;
        }

        suma += calificacion;
        contador++;
        console.log(`Calificación registrada. Total de calificaciones: ${contador}`);
        pedirCalificacion();
    });
}

pedirCalificacion();