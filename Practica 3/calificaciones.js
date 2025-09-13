/* Ejercicio 2: Registro de Calificaciones
Crear un sistema que maneje:
• Array de materias con sus calificaciones
• Método para calcular promedio
• Método para determinar estado académico
 */

import readline from "readline"

// ===== CONFIGURACIÓN =====
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ===== DATOS =====
const materias = [
    {nombre: "Matematicas I", calificacion: 9.4},
    {nombre: "Ingles I", calificacion: 9.7},
    {nombre: "Diseño de Paginas Web", calificacion: 9.6},
    {nombre: "Logica de Programacion", calificacion: 9.8},
    {nombre: "Estadistica", calificacion: 9.5},
];

const estadosAcademicos = ["activo", "inactivo", "egresado", "expulsado"];

// ===== FUNCIONES DE CÁLCULO =====
function calcularPromedio(materias) {
    if (materias.length === 0) return 0;
    
    const suma = materias.reduce((sum, materia) => sum + materia.calificacion, 0);
    return suma / materias.length;
}

function mostrarCalificaciones(materias) {
    console.log("\n==== CALIFICACIONES ====");
    materias.forEach(materia => {
        console.log(`${materia.nombre}: ${materia.calificacion}`);
    });
}

function mostrarPromedio(promedio) {
    console.log(`\nPromedio general: ${promedio.toFixed(2)}`);
}

// ===== FUNCIONES DE INTERFAZ =====
function mostrarMenuEstados() {
    console.log("\n==== ESTADO ACADÉMICO DEL ESTUDIANTE ====");
    estadosAcademicos.forEach((estado, index) => {
        console.log(`${index + 1}- ${estado.toUpperCase()}`);
    });
    console.log("0- Salir");
}

function mostrarMenuPrincipal() {
    console.log("\n==== SISTEMA DE CALIFICACIONES ====");
    console.log("1- Ver calificaciones");
    console.log("2- Ver promedio");
    console.log("3- Cambiar estado académico");
    console.log("0- Salir");
}

function procesarOpcionEstados(opcion) {
    if (opcion >= 1 && opcion <= estadosAcademicos.length) {
        const estadoSeleccionado = estadosAcademicos[opcion - 1];
        console.log(`\nEl estado actual del estudiante es: ${estadoSeleccionado.toUpperCase()}`);
        return true;
    } else if (opcion === 0) {
        console.log("\nMuchas gracias por usar el sistema");
        return false;
    } else {
        console.log("\nOpción inválida. Inténtelo nuevamente");
        return true;
    }
}

function procesarOpcionPrincipal(opcion) {
    switch(opcion) {
        case 1:
            mostrarCalificaciones(materias);
            break;
        case 2:
            const promedio = calcularPromedio(materias);
            mostrarPromedio(promedio);
            break;
        case 3:
            mostrarMenuEstados();
            rl.question("Seleccione una opción: ", (seleccion) => {
                const opcionEstado = parseInt(seleccion);
                procesarOpcionEstados(opcionEstado);
                rl.close();
            });
            return;
        case 0:
            console.log("\nMuchas gracias por usar el sistema");
            rl.close();
            return;
        default:
            console.log("\nOpción inválida. Inténtelo nuevamente");
            break;
    }
}

// ===== FUNCIÓN PRINCIPAL =====
function iniciarSistema() {
    mostrarMenuPrincipal();
    rl.question("Seleccione una opción: ", (seleccion) => {
        const opcion = parseInt(seleccion);
        procesarOpcionPrincipal(opcion);
    });
}

// ===== EJECUCIÓN =====
iniciarSistema();  