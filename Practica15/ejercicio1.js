const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let biblioteca = [];

function pregunta(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

function validarAnio(anio) {
    const anioNum = parseInt(anio);
    const anioActual = new Date().getFullYear();
    return !isNaN(anioNum) && anioNum > 0 && anioNum <= anioActual;
}

async function agregarLibro() {
    console.log('\n--- Agregar Libro ---');
    
    let titulo = await pregunta('Título: ');
    while (titulo.trim() === '') {
        console.log('El título no puede estar vacío.');
        titulo = await pregunta('Título: ');
    }
    
    const autor = await pregunta('Autor: ');
    
    let anio = await pregunta('Año de publicación: ');
    while (!validarAnio(anio)) {
        console.log('Año inválido. Ingrese un año válido.');
        anio = await pregunta('Año de publicación: ');
    }
    
    const genero = await pregunta('Género: ');
    
    biblioteca.push({
        titulo: titulo.trim(),
        autor: autor.trim(),
        anio: parseInt(anio),
        genero: genero.trim()
    });
    
    console.log('Libro agregado exitosamente.');
}

async function buscarLibros() {
    console.log('\n--- Buscar Libros ---');
    console.log('1. Buscar por título');
    console.log('2. Buscar por autor');
    
    const opcion = await pregunta('Seleccione opción: ');
    
    if (opcion === '1') {
        const termino = await pregunta('Ingrese título a buscar: ');
        const resultados = [];
        
        for (let i = 0; i < biblioteca.length; i++) {
            if (biblioteca[i].titulo.toLowerCase().includes(termino.toLowerCase())) {
                resultados.push(biblioteca[i]);
            }
        }
        
        if (resultados.length === 0) {
            console.log('No se encontraron libros.');
        } else {
            console.log('\nResultados encontrados:');
            resultados.forEach((libro, index) => {
                console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor} (${libro.anio}) [${libro.genero}]`);
            });
        }
    } else if (opcion === '2') {
        const termino = await pregunta('Ingrese autor a buscar: ');
        const resultados = [];
        
        for (let i = 0; i < biblioteca.length; i++) {
            if (biblioteca[i].autor.toLowerCase().includes(termino.toLowerCase())) {
                resultados.push(biblioteca[i]);
            }
        }
        
        if (resultados.length === 0) {
            console.log('No se encontraron libros.');
        } else {
            console.log('\nResultados encontrados:');
            resultados.forEach((libro, index) => {
                console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor} (${libro.anio}) [${libro.genero}]`);
            });
        }
    }
}

async function listarLibros() {
    console.log('\n--- Listar Libros ---');
    
    if (biblioteca.length === 0) {
        console.log('No hay libros en la biblioteca.');
        return;
    }
    
    const filtrar = await pregunta('¿Desea filtrar por género? (s/n): ');
    
    if (filtrar.toLowerCase() === 's') {
        const genero = await pregunta('Ingrese género: ');
        const filtrados = [];
        
        for (const libro of biblioteca) {
            if (libro.genero.toLowerCase() === genero.toLowerCase()) {
                filtrados.push(libro);
            }
        }
        
        if (filtrados.length === 0) {
            console.log('No hay libros de ese género.');
        } else {
            console.log(`\nLibros del género "${genero}":`);
            filtrados.forEach((libro, index) => {
                console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor} (${libro.anio})`);
            });
        }
    } else {
        console.log('\nTodos los libros:');
        biblioteca.forEach((libro, index) => {
            console.log(`${index + 1}. "${libro.titulo}" - ${libro.autor} (${libro.anio}) [${libro.genero}]`);
        });
    }
}

async function eliminarLibro() {
    console.log('\n--- Eliminar Libro ---');
    
    const titulo = await pregunta('Ingrese título del libro a eliminar: ');
    let indiceEncontrado = -1;
    
    for (let i = 0; i < biblioteca.length; i++) {
        if (biblioteca[i].titulo.toLowerCase() === titulo.toLowerCase()) {
            indiceEncontrado = i;
            break;
        }
    }
    
    if (indiceEncontrado === -1) {
        console.log('Libro no encontrado.');
    } else {
        const libroEliminado = biblioteca[indiceEncontrado];
        biblioteca.splice(indiceEncontrado, 1);
        console.log(`Libro "${libroEliminado.titulo}" eliminado exitosamente.`);
    }
}

function mostrarEstadisticas() {
    console.log('\n--- Estadísticas ---');
    
    if (biblioteca.length === 0) {
        console.log('No hay libros en la biblioteca.');
        return;
    }
    
    console.log(`Total de libros: ${biblioteca.length}`);
    
    let libroMasAntiguo = biblioteca[0];
    let libroMasReciente = biblioteca[0];
    
    for (let i = 1; i < biblioteca.length; i++) {
        if (biblioteca[i].anio < libroMasAntiguo.anio) {
            libroMasAntiguo = biblioteca[i];
        }
        if (biblioteca[i].anio > libroMasReciente.anio) {
            libroMasReciente = biblioteca[i];
        }
    }
    
    console.log(`Libro más antiguo: "${libroMasAntiguo.titulo}" (${libroMasAntiguo.anio})`);
    console.log(`Libro más reciente: "${libroMasReciente.titulo}" (${libroMasReciente.anio})`);
    
    const generosUnicos = [];
    for (const libro of biblioteca) {
        if (!generosUnicos.includes(libro.genero)) {
            generosUnicos.push(libro.genero);
        }
    }
    
    console.log(`Géneros disponibles: ${generosUnicos.join(', ')}`);
}

function mostrarMenu() {
    console.log('\n=== GESTOR DE BIBLIOTECA PERSONAL ===');
    console.log('1. Agregar libro');
    console.log('2. Buscar libros');
    console.log('3. Listar libros');
    console.log('4. Eliminar libro');
    console.log('5. Ver estadísticas');
    console.log('6. Salir');
}

async function main() {
    let continuar = true;
    
    do {
        mostrarMenu();
        const opcion = await pregunta('\nSeleccione una opción: ');
        
        switch (opcion) {
            case '1':
                await agregarLibro();
                break;
            case '2':
                await buscarLibros();
                break;
            case '3':
                await listarLibros();
                break;
            case '4':
                await eliminarLibro();
                break;
            case '5':
                mostrarEstadisticas();
                break;
            case '6':
                continuar = false;
                console.log('¡Hasta luego!');
                break;
            default:
                console.log('Opción inválida.');
        }
    } while (continuar);
    
    rl.close();
}

main();