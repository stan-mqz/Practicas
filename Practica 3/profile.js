/* // Ejercicio 1: Perfil Personal
Crear un objeto que represente tu perfil personal con:
• Información básica (nombre, edad, carrera)
• Dirección (objeto anidado)
• Hobbies (array)
• Redes sociales (objeto con diferentes plataformas) */

let perfil = {
    info: {
        nombre: "Ken", 
        edad: 19, 
        carrera: "Ingenieria en Desarrollo de Software"},
    direccion: {
        casa: 123,
        pais: "El Salvador",
        departamento: "San Miguel"
    },
    hobbies: ["Leer", "Escuchar musica", "Jugar videojuegos", "Tocar instrumentos musicales"],
    redes:{
        instagram: "ken_mej2105",
        facebook: "Kenneth Mejia",
        linkedin: "Kenneth Mejia",
        twitter: "Ken_mej2105"
    }
}

console.log(perfil)