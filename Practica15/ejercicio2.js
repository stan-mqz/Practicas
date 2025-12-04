const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pregunta(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

function validarNumeroPositivo(valor) {
    const num = parseFloat(valor);
    return !isNaN(num) && num > 0;
}

function validarEnteroPositivo(valor) {
    const num = parseInt(valor);
    return !isNaN(num) && num > 0 && num === parseFloat(valor);
}

async function calcularInteresSimple() {
    console.log('\n--- Interés Simple ---');
    
    let capital = await pregunta('Capital inicial: $');
    while (!validarNumeroPositivo(capital)) {
        console.log('Ingrese un valor válido.');
        capital = await pregunta('Capital inicial: $');
    }
    capital = parseFloat(capital);
    
    let tasa = await pregunta('Tasa de interés anual (%): ');
    while (!validarNumeroPositivo(tasa)) {
        console.log('Ingrese un valor válido.');
        tasa = await pregunta('Tasa de interés anual (%): ');
    }
    tasa = parseFloat(tasa) / 100;
    
    let tiempo = await pregunta('Tiempo (años): ');
    while (!validarNumeroPositivo(tiempo)) {
        console.log('Ingrese un valor válido.');
        tiempo = await pregunta('Tiempo (años): ');
    }
    tiempo = parseFloat(tiempo);
    
    const interes = capital * tasa * tiempo;
    const montoFinal = capital + interes;
    
    console.log(`\nInterés ganado: $${interes.toFixed(2)}`);
    console.log(`Monto final: $${montoFinal.toFixed(2)}`);
}

async function calcularInteresCompuesto() {
    console.log('\n--- Interés Compuesto ---');
    
    let capital = await pregunta('Capital inicial: $');
    while (!validarNumeroPositivo(capital)) {
        console.log('Ingrese un valor válido.');
        capital = await pregunta('Capital inicial: $');
    }
    capital = parseFloat(capital);
    
    let tasa = await pregunta('Tasa de interés anual (%): ');
    while (!validarNumeroPositivo(tasa)) {
        console.log('Ingrese un valor válido.');
        tasa = await pregunta('Tasa de interés anual (%): ');
    }
    tasa = parseFloat(tasa) / 100;
    
    let periodos = await pregunta('Períodos de capitalización por año: ');
    while (!validarEnteroPositivo(periodos)) {
        console.log('Ingrese un valor válido.');
        periodos = await pregunta('Períodos de capitalización por año: ');
    }
    periodos = parseInt(periodos);
    
    let anios = await pregunta('Años: ');
    while (!validarNumeroPositivo(anios)) {
        console.log('Ingrese un valor válido.');
        anios = await pregunta('Años: ');
    }
    anios = parseFloat(anios);
    
    const montoFinal = capital * Math.pow(1 + (tasa / periodos), periodos * anios);
    const interesGanado = montoFinal - capital;
    
    console.log(`\nInterés ganado: $${interesGanado.toFixed(2)}`);
    console.log(`Monto final: $${montoFinal.toFixed(2)}`);
}

async function tablaAmortizacion() {
    console.log('\n--- Tabla de Amortización ---');
    
    let prestamo = await pregunta('Monto del préstamo: $');
    while (!validarNumeroPositivo(prestamo)) {
        console.log('Ingrese un valor válido.');
        prestamo = await pregunta('Monto del préstamo: $');
    }
    prestamo = parseFloat(prestamo);
    
    let tasaMensual = await pregunta('Tasa de interés mensual (%): ');
    while (!validarNumeroPositivo(tasaMensual)) {
        console.log('Ingrese un valor válido.');
        tasaMensual = await pregunta('Tasa de interés mensual (%): ');
    }
    tasaMensual = parseFloat(tasaMensual) / 100;
    
    let cuotas = await pregunta('Número de cuotas: ');
    while (!validarEnteroPositivo(cuotas)) {
        console.log('Ingrese un valor válido.');
        cuotas = await pregunta('Número de cuotas: ');
    }
    cuotas = parseInt(cuotas);
    
    const cuotaMensual = prestamo * (tasaMensual * Math.pow(1 + tasaMensual, cuotas)) / (Math.pow(1 + tasaMensual, cuotas) - 1);
    
    console.log(`\nCuota mensual: $${cuotaMensual.toFixed(2)}`);
    console.log('\n--- Tabla de Amortización ---');
    console.log('Mes | Saldo Inicial | Interés | Capital | Cuota | Saldo Final');
    console.log('-'.repeat(70));
    
    let saldo = prestamo;
    let totalInteres = 0;
    let totalCapital = 0;
    
    for (let mes = 1; mes <= cuotas; mes++) {
        const interesMes = saldo * tasaMensual;
        const capitalMes = cuotaMensual - interesMes;
        const saldoFinal = saldo - capitalMes;
        
        totalInteres += interesMes;
        totalCapital += capitalMes;
        
        console.log(`${mes.toString().padStart(3)} | $${saldo.toFixed(2).padStart(12)} | $${interesMes.toFixed(2).padStart(7)} | $${capitalMes.toFixed(2).padStart(7)} | $${cuotaMensual.toFixed(2).padStart(5)} | $${saldoFinal.toFixed(2).padStart(11)}`);
        
        saldo = saldoFinal;
    }
    
    console.log('-'.repeat(70));
    console.log(`Total interés pagado: $${totalInteres.toFixed(2)}`);
    console.log(`Total pagado: $${(totalInteres + totalCapital).toFixed(2)}`);
}

async function simuladorAhorro() {
    console.log('\n--- Simulador de Ahorro ---');
    
    let ahorroMensual = await pregunta('Cantidad a ahorrar mensualmente: $');
    while (!validarNumeroPositivo(ahorroMensual)) {
        console.log('Ingrese un valor válido.');
        ahorroMensual = await pregunta('Cantidad a ahorrar mensualmente: $');
    }
    ahorroMensual = parseFloat(ahorroMensual);
    
    let tasaAnual = await pregunta('Tasa de interés anual (%): ');
    while (!validarNumeroPositivo(tasaAnual)) {
        console.log('Ingrese un valor válido.');
        tasaAnual = await pregunta('Tasa de interés anual (%): ');
    }
    const tasaMensual = parseFloat(tasaAnual) / 100 / 12;
    
    let meses = await pregunta('Número de meses: ');
    while (!validarEnteroPositivo(meses)) {
        console.log('Ingrese un valor válido.');
        meses = await pregunta('Número de meses: ');
    }
    meses = parseInt(meses);
    
    console.log('\n--- Crecimiento del Ahorro ---');
    console.log('Mes | Aporte | Interés | Saldo Total');
    console.log('-'.repeat(50));
    
    let saldo = 0;
    let totalAportado = 0;
    let totalIntereses = 0;
    
    for (let mes = 1; mes <= meses; mes++) {
        const interesMes = saldo * tasaMensual;
        saldo += ahorroMensual + interesMes;
        totalAportado += ahorroMensual;
        totalIntereses += interesMes;
        
        console.log(`${mes.toString().padStart(3)} | $${ahorroMensual.toFixed(2).padStart(6)} | $${interesMes.toFixed(2).padStart(7)} | $${saldo.toFixed(2).padStart(11)}`);
    }
    
    console.log('-'.repeat(50));
    console.log(`Total aportado: $${totalAportado.toFixed(2)}`);
    console.log(`Total intereses: $${totalIntereses.toFixed(2)}`);
    console.log(`Saldo final: $${saldo.toFixed(2)}`);
}

async function comparador() {
    console.log('\n--- Comparador ---');
    console.log('Comparación: Préstamo vs Ahorro');
    
    let monto = await pregunta('Monto a comparar: $');
    while (!validarNumeroPositivo(monto)) {
        console.log('Ingrese un valor válido.');
        monto = await pregunta('Monto a comparar: $');
    }
    monto = parseFloat(monto);
    
    let tasaPrestamo = await pregunta('Tasa de interés mensual del préstamo (%): ');
    while (!validarNumeroPositivo(tasaPrestamo)) {
        console.log('Ingrese un valor válido.');
        tasaPrestamo = await pregunta('Tasa de interés mensual del préstamo (%): ');
    }
    tasaPrestamo = parseFloat(tasaPrestamo) / 100;
    
    let cuotas = await pregunta('Número de cuotas: ');
    while (!validarEnteroPositivo(cuotas)) {
        console.log('Ingrese un valor válido.');
        cuotas = await pregunta('Número de cuotas: ');
    }
    cuotas = parseInt(cuotas);
    
    const cuotaPrestamo = monto * (tasaPrestamo * Math.pow(1 + tasaPrestamo, cuotas)) / (Math.pow(1 + tasaPrestamo, cuotas) - 1);
    const totalPrestamo = cuotaPrestamo * cuotas;
    const interesPrestamo = totalPrestamo - monto;
    
    let tasaAhorro = await pregunta('Tasa de interés anual del ahorro (%): ');
    while (!validarNumeroPositivo(tasaAhorro)) {
        console.log('Ingrese un valor válido.');
        tasaAhorro = await pregunta('Tasa de interés anual del ahorro (%): ');
    }
    const tasaMensualAhorro = parseFloat(tasaAhorro) / 100 / 12;
    
    const ahorroMensual = cuotaPrestamo;
    let saldoAhorro = 0;
    
    for (let mes = 1; mes <= cuotas; mes++) {
        const interesMes = saldoAhorro * tasaMensualAhorro;
        saldoAhorro += ahorroMensual + interesMes;
    }
    
    console.log('\n--- Resultados de Comparación ---');
    console.log(`\nEscenario Préstamo:`);
    console.log(`  Monto prestado: $${monto.toFixed(2)}`);
    console.log(`  Cuota mensual: $${cuotaPrestamo.toFixed(2)}`);
    console.log(`  Total pagado: $${totalPrestamo.toFixed(2)}`);
    console.log(`  Interés pagado: $${interesPrestamo.toFixed(2)}`);
    
    console.log(`\nEscenario Ahorro:`);
    console.log(`  Aporte mensual: $${ahorroMensual.toFixed(2)}`);
    console.log(`  Saldo final: $${saldoAhorro.toFixed(2)}`);
    console.log(`  Total aportado: $${(ahorroMensual * cuotas).toFixed(2)}`);
    console.log(`  Interés ganado: $${(saldoAhorro - ahorroMensual * cuotas).toFixed(2)}`);
    
    console.log('\n--- Conclusión ---');
    if (saldoAhorro > monto) {
        console.log('Es más beneficioso ahorrar. Tendrás más dinero al final.');
    } else {
        console.log('Si necesitas el dinero ahora, el préstamo es la opción, pero pagarás más en total.');
    }
}

function mostrarMenu() {
    console.log('\n=== CALCULADORA FINANCIERA AVANZADA ===');
    console.log('1. Calcular interés simple');
    console.log('2. Calcular interés compuesto');
    console.log('3. Tabla de amortización');
    console.log('4. Simulador de ahorro');
    console.log('5. Comparador');
    console.log('6. Salir');
}

async function main() {
    let continuar = true;
    
    do {
        mostrarMenu();
        const opcion = await pregunta('\nSeleccione una opción: ');
        
        switch (opcion) {
            case '1':
                await calcularInteresSimple();
                break;
            case '2':
                await calcularInteresCompuesto();
                break;
            case '3':
                await tablaAmortizacion();
                break;
            case '4':
                await simuladorAhorro();
                break;
            case '5':
                await comparador();
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