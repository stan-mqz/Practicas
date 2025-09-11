/* Ejercicio 3: Lista de Tareas
Implementar un sistema de tareas pendientes con:
• Array de tareas (objetos con título, descripción, completada)
• Método para marcar como completada
• Método para filtrar tareas pendientes */

import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tareas = [
    { titulo: "Guia Sumativa 2", descripcion: "Resolver la guia sumativa utilizando lo aprendido en clases sobre Integrales", completada: true },
    { titulo: "Objetos y Arrays", descripcion: "Resolver la guia de ejercicios utilizando lo aprendido en clases sobre Objetos y Arrays", completada: false },
    { titulo: "Ubuntu", descripcion: "Realizar la instalacion de Ubuntu usando los pasos del archivo adjunto", completada: false },
    { titulo: "Tiro parabolico", descripcion: "Resolver los ejercicios de tiro parabolico usando lo aprendido en clases", completada: true }
]


console.log("=== TAREAS PENDIENTES ===")
tareas.filter(tarea => !tarea.completada).forEach((tarea, index) => {
    console.log(`${index + 1}. ${tarea.titulo}`)
})

rl.question("Ingrese el título de la tarea que ha completado: ", (tituloTarea) => {
    const buscarTarea = tareas.find(tarea => 
        tarea.titulo.toLowerCase() === tituloTarea.toLowerCase()
    )

    if (buscarTarea) {
        buscarTarea.completada = true
        console.log("Tarea completada")
    } else {
        console.log("Tarea no encontrada")
    }
    
    rl.close()
})
