let movimientos = [
    { codigo: 101, clase: "ingreso", cantidad: 2500, fecha: "2024-03-10", rubro: "venta" },
    { codigo: 102, clase: "egreso", cantidad: 400, fecha: "2024-03-11", rubro: "alquiler" },
    { codigo: 103, clase: "ingreso", cantidad: 800, fecha: "2024-03-12", rubro: "servicio" }
];


function registrarMovimientos(...nuevosMovimientos) {
    nuevosMovimientos.forEach(mov => {
        if (!mov.codigo || !mov.clase || !mov.cantidad || !mov.fecha) {
            throw new Error("Movimiento inválido: falta información");
        }
    });

    movimientos = [...movimientos, ...nuevosMovimientos];

    console.log("Movimientos actualizados:", movimientos);
}


function obtenerSaldo() {
    return movimientos.reduce((saldo, mov) => {
        if (mov.clase === "ingreso") return saldo + mov.cantidad;
        if (mov.clase === "egreso") return saldo - mov.cantidad;
        return saldo;
    }, 0);
}


function resumenEgresos(periodo = "mes") {
    const egresos = movimientos.filter(mov => mov.clase === "egreso");

    return egresos.reduce((detalle, mov) => {
        detalle[mov.rubro] = (detalle[mov.rubro] || 0) + mov.cantidad;
        return detalle;
    }, {});
}


function filtrarMovimientos(filtros = {}) {
    const { clase, rubro, fecha } = filtros;

    return movimientos.filter(mov => {
        return (!clase || mov.clase === clase) &&
            (!rubro || mov.rubro === rubro) &&
            (!fecha || mov.fecha === fecha);
    });
}

registrarMovimientos(
    { codigo: 104, clase: "egreso", cantidad: 250, fecha: "2024-03-15", rubro: "transporte" },
    { codigo: 105, clase: "ingreso", cantidad: 1800, fecha: "2024-03-18", rubro: "venta" }
);

console.log("Saldo actual:", obtenerSaldo());

console.log("Egresos por rubro:", resumenEgresos());

console.log("Buscar solo transporte:", filtrarMovimientos({ rubro: "transporte" }));