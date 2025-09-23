
// ForEach
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let estudiantes = [
    {nombre: "Kenneth Mejia", nota: 95},
    {nombre: "Fabrizzio Pineda", nota: 100},
    {nombre: "Stanley Marquez", nota: 10}
]

const numeros = [1,2,3,4,5,6,7,8,9]


estudiantes.forEach(estudiante => {
    if(estudiante.nota < 80){
        console.log("Reprobado", estudiante)
    } else{
        console.log("Aprobado", estudiante)
    }
});

// Map
let impares = numeros.map((num, index) => {
    let par = num % 2 === 0
    if(par){
        console.log("Numero par", num)
    }
})

// // filter
// let excelente = estudiantes.filter((estudiante) => estudiante.nota > 90)
// console.log(excelente)
// rl.question("Nombre del estudiante que quieres buscar ", (estudianteBuscado)=>{

//     if(estudianteBuscado){
//         console.log(estudianteBuscado)
//     } else{
//         console.log("No se encontro el estudiante")
//     }
// })

rl.question("Ingresa nombres de estudiantes que quieras agregar seguidos por coma ", (alumnos) =>{
    rl.question("Ingresa la nota de cada estudiante separados por coma, en el orden en que los agregaste ", (notasAlumnos) =>{
        const almacenamiento = []
        const alumnostoArray = alumnos.split(",")
        const notasToArray = notasAlumnos.split(",")
        
        alumnostoArray.map((alumno, index) =>{
            almacenamiento.push({estudiante: alumno, nota: parseFloat(notasToArray[index])})
        })
        console.log(almacenamiento)
        rl.close()
    })
})

// Acc = Acumulador
let notaTotal = estudiantes.reduce((acc, estudiante) => acc + estudiante.nota, 0)
console.log("Promedio", notaTotal/estudiantes.length)

