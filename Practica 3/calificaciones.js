/* Ejercicio 2: Registro de Calificaciones
Crear un sistema que maneje:
• Array de materias con sus calificaciones
• Método para calcular promedio
• Método para determinar estado académico
 */

import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let materias = [
    {nombre: "Matematicas I", calificacion: 9.4},
    {nombre: "Ingles I", calificacion: 9.7},
    {nombre: "Diseño de Paginas Web", calificacion: 9.6},
    {nombre: "Logica de Programacion", calificacion: 9.8},
    {nombre: "Estadistica", calificacion: 9.5},
]


const toFloat = parseFloat(materias.calificacion)

const suma = materias.reduce((sum, materia) => (sum + materia.calificacion), 0)
const promedio = suma/materias.length
console.log(promedio)

const estadoAcademico = ["activo", "inactivo", "egresado", "expulsado"]

function seleccionEstadoAcademico(){
    console.log("====Estado academico del estudiante====")
    estadoAcademico.forEach((estado, index) => {
        console.log(`${index + 1}- ${estado.toUpperCase()}`)
    })
    console.log("0- Salir")
}

seleccionEstadoAcademico()

rl.question("Seleccione una opción: ", (seleccion) => {
    const opcion = parseInt(seleccion)
        
    if (opcion >= 1 && opcion <= estadoAcademico.length) {
        const estadoSeleccionado = estadoAcademico[opcion - 1]
        console.log(`El estado actual del estudiante es: ${estadoSeleccionado.toUpperCase()}`)
    } else if (seleccion == 0) {
        console.log("Muchas gracias por usar el sistema")
    } else {
        console.log("Opcion invalida. Intentelo Nuevamente")
    }
    rl.close()
})  