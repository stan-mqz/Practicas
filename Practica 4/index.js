import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inventario = {

  productos: [],

  agregarProducto: function () {
    rl.question("Ingresa el nombre del producto ", (name) => {
      rl.question("Ingresa la cantidad de producto disponible ", (amount) => {
        rl.question("Ingresa el precio unitario disponible ", (price) => {
          let id = Math.floor(Math.random() * 1000 + 1);
          const stock = parseInt(amount);
          const decimalPrecio = parseFloat(price);

          if (name && !isNaN(stock) && !isNaN(decimalPrecio)) {
            rl.question(
              "Agrega el nombre del proveedor del producto ",
              (nombreProveedor) => {
                rl.question(
                  "Agrega el télefono del proveedor ",
                  (telefonoProveedor) => {
                    let producto = {
                      id,
                      name,
                      cantidad: stock,
                      paprecio: decimalPrecio,
                      proveedor: {
                        nombreProveedor,
                        telefonoProveedor,
                      },
                    };
                    this.productos.push(producto);
                    console.log(this.productos);
                    rl.close();
                  }
                );
              }
            );
          } else {
            console.log("No se puede agregar el producto");
            rl.close();
          }
        });
      });
    });

    
  },
};



inventario.agregarProducto();
