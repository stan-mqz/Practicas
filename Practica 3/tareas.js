/* Ejercicio 3: Lista de Tareas
Implementar un sistema de tareas pendientes con:
• Array de tareas (objetos con título, descripción, completada)
• Método para marcar como completada
• Método para filtrar tareas pendientes */

import readline from "readline"

// ===== CONFIGURACIÓN =====
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ===== DATOS =====
let tareas = [
    { titulo: "Guia Sumativa 2", descripcion: "Resolver la guia sumativa utilizando lo aprendido en clases sobre Integrales", completada: true },
    { titulo: "Objetos y Arrays", descripcion: "Resolver la guia de ejercicios utilizando lo aprendido en clases sobre Objetos y Arrays", completada: false },
    { titulo: "Ubuntu", descripcion: "Realizar la instalacion de Ubuntu usando los pasos del archivo adjunto", completada: false },
    { titulo: "Tiro parabolico", descripcion: "Resolver los ejercicios de tiro parabolico usando lo aprendido en clases", completada: true }
];

// ===== FUNCIONES DE GESTIÓN DE TAREAS =====
function agregarTarea(titulo, descripcion) {
    const nuevaTarea = {
        titulo: titulo,
        descripcion: descripcion,
        completada: false
    };
    tareas.push(nuevaTarea);
    console.log(`\n✅ Tarea "${titulo}" agregada exitosamente`);
}

function marcarCompletada(titulo) {
    const tarea = buscarTareaPorTitulo(titulo);
    if (tarea) {
        tarea.completada = true;
        console.log(`\n✅ Tarea "${titulo}" marcada como completada`);
        return true;
    } else {
        console.log(`\n❌ Tarea "${titulo}" no encontrada`);
        return false;
    }
}

function buscarTareaPorTitulo(titulo) {
    return tareas.find(tarea => 
        tarea.titulo.toLowerCase() === titulo.toLowerCase()
    );
}

function obtenerTareasPendientes() {
    return tareas.filter(tarea => !tarea.completada);
}

function obtenerTareasCompletadas() {
    return tareas.filter(tarea => tarea.completada);
}

function obtenerTodasLasTareas() {
    return tareas;
}

// ===== FUNCIONES DE MOSTRAR INFORMACIÓN =====
function mostrarTareas(tareas, titulo) {
    console.log(`\n==== ${titulo} ====`);
    if (tareas.length === 0) {
        console.log("No hay tareas en esta categoría");
        return;
    }
    
    tareas.forEach((tarea, index) => {
        const estado = tarea.completada ? "✅" : "⏳";
        console.log(`${index + 1}. ${estado} ${tarea.titulo}`);
        console.log(`   📝 ${tarea.descripcion}`);
    });
}

function mostrarResumen() {
    const pendientes = obtenerTareasPendientes();
    const completadas = obtenerTareasCompletadas();
    
    console.log("\n==== RESUMEN DE TAREAS ====");
    console.log(`📊 Total de tareas: ${tareas.length}`);
    console.log(`⏳ Pendientes: ${pendientes.length}`);
    console.log(`✅ Completadas: ${completadas.length}`);
    console.log(`📈 Progreso: ${((completadas.length / tareas.length) * 100).toFixed(1)}%`);
}

// ===== FUNCIONES DE INTERFAZ =====
function mostrarMenu() {
    console.log("\n==== SISTEMA DE GESTIÓN DE TAREAS ====");
    console.log("1- Ver todas las tareas");
    console.log("2- Ver tareas pendientes");
    console.log("3- Ver tareas completadas");
    console.log("4- Marcar tarea como completada");
    console.log("5- Agregar nueva tarea");
    console.log("6- Ver resumen");
    console.log("0- Salir");
}

function procesarOpcion(opcion) {
    switch(opcion) {
        case 1:
            mostrarTareas(obtenerTodasLasTareas(), "TODAS LAS TAREAS");
            break;
        case 2:
            mostrarTareas(obtenerTareasPendientes(), "TAREAS PENDIENTES");
            break;
        case 3:
            mostrarTareas(obtenerTareasCompletadas(), "TAREAS COMPLETADAS");
            break;
        case 4:
            rl.question("Ingrese el título de la tarea a marcar como completada: ", (titulo) => {
                marcarCompletada(titulo);
                continuar();
            });
            return;
        case 5:
            rl.question("Ingrese el título de la nueva tarea: ", (titulo) => {
                rl.question("Ingrese la descripción: ", (descripcion) => {
                    agregarTarea(titulo, descripcion);
                    continuar();
                });
            });
            return;
        case 6:
            mostrarResumen();
            break;
        case 0:
            console.log("\n👋 ¡Gracias por usar el sistema de tareas!");
            rl.close();
            return;
        default:
            console.log("\n❌ Opción inválida. Inténtelo nuevamente");
            break;
    }
    continuar();
}

function continuar() {
    rl.question("\nPresione Enter para continuar...", () => {
        iniciarSistema();
    });
}

// ===== FUNCIÓN PRINCIPAL =====
function iniciarSistema() {
    mostrarMenu();
    rl.question("Seleccione una opción: ", (seleccion) => {
        const opcion = parseInt(seleccion);
        procesarOpcion(opcion);
    });
}

// ===== EJECUCIÓN =====
iniciarSistema();
