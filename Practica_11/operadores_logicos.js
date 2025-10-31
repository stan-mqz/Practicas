import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


/*
Crea un programa que solicite un año y determine si es bisiesto. Un año es bisiesto si es divisible entre 4, excepto los años divisibles entre 100, a menos que también sean divisibles entre 400 
*/

const isLeapYear = (year) => {

    if (year % 4 === 0 || year % 100 === 0 && year % 400 === 0) {
        return 'Es bisiesto'
    }


    return 'No es bisiesto'


}

rl.question('Ingrese el año ', (year) => {
    const formatYear = parseInt(year)

    console.log(isLeapYear(formatYear))

    rl.close()
})

/*
Escribe un programa que pida una calificación numérica (0-100) y determine la letra correspondiente: A (90-100), B (80-89), C (70-79), D (60-69), F (menor a 60).
*/

const determineGrade = (score) => {
    const numScore = parseInt(score);
    
    if (numScore >= 90 && numScore <= 100) {
        return 'A';
    } else if (numScore >= 80 && numScore <= 89) {
        return 'B';
    } else if (numScore >= 70 && numScore <= 79) {
        return 'C';
    } else if (numScore >= 60 && numScore <= 69) {
        return 'D';
    } else if (numScore >= 0 && numScore < 60) {
        return 'F';
    } else {
        return 'Calificación inválida. Por favor ingrese un número entre 0 y 100.';
    }
}

rl.question('Ingrese la calificación (0-100): ', (score) => {
    console.log(`La calificación correspondiente es: ${determineGrade(score)}`);
    rl.close();
});