/* 
Crea una función crearGestorTareas que use funciones anidadas para gestionar una lista de tareas privada. Debe retornar métodos 
para: agregarTarea, completarTarea, listarPendientes y contarTareas 
*/

function crearGestorTareas() {
   
    const tareas = [];

    return {
        agregarTarea: function(descripcion) {
            tareas.push({
                id: tareas.length + 1,
                descripcion: descripcion,
                completada: false
            });
            return `Tarea "${descripcion}" agregada`;
        },

        completarTarea: function(id) {
            const tarea = tareas.find(t => t.id === id);
            if (tarea) {
                tarea.completada = true;
                return `Tarea ${id} completada`;
            }
            return `Tarea ${id} no encontrada`;
        },

        listarPendientes: function() {
            return tareas.filter(t => !t.completada);
        },

        contarTareas: function() {
            return {
                total: tareas.length,
                pendientes: tareas.filter(t => !t.completada).length,
                completadas: tareas.filter(t => t.completada).length
            };
        }
    };
}

const gestor = crearGestorTareas();

console.log(gestor.agregarTarea("Estudiar JavaScript"));
console.log(gestor.agregarTarea("Hacer ejercicios"));
console.log(gestor.agregarTarea("Repasar closures"));

console.log("Tareas pendientes:", gestor.listarPendientes());

console.log(gestor.completarTarea(2));

console.log("Estado actual:", gestor.contarTareas());