/* // Ejercicio 1: Perfil Personal
Crear un objeto que represente tu perfil personal con:
• Información básica (nombre, edad, carrera)
• Dirección (objeto anidado)
• Hobbies (array)
• Redes sociales (objeto con diferentes plataformas) */

let perfil = {
    info: {
        nombre: "Stanley", 
        edad: 19, 
        carrera: "Ingenieria en Desarrollo de Software"},
    direccion: {
        casa: 123,
        pais: "El Salvador",
        departamento: "San Miguel"
    },
    hobbies: ["Leer", "Escuchar musica", "Jugar videojuegos", "Ver Series"],
    redes:{
        instagram: "stan_mqz",
        facebook: "Stan Marquez",
        linkedin: "Stanley Márqiez",
        twitter: "stanley_12"
    }
}

console.log(perfil)