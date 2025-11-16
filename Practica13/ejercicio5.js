import readline from "readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let inventory = [];

const showMenu = () => {
  console.log("\n--- MENÚ DE INVENTARIO ---");
  console.log("1. Agregar producto");
  console.log("2. Vender producto");
  console.log("3. Mostrar inventario");
  console.log("4. Salir");

  rl.question("Elija una opción: ", handleOption);
};

const handleOption = (option) => {
  switch (option) {
    case "1":
      addProduct();
      break;

    case "2":
      sellProduct();
      break;

    case "3":
      displayInventory();
      showMenu();
      break;

    case "4":
      console.log("Saliendo...");
      rl.close();
      break;

    default:
      console.log("Opción inválida.");
      showMenu();
  }
};

const addProduct = () => {
  rl.question("Nombre del producto: ", (name) => {
    rl.question("Cantidad: ", (qty) => {
      inventory.push({ name, quantity: Number(qty) });
      console.log("Producto agregado.");
      showMenu();
    });
  });
};

const sellProduct = () => {
  rl.question("Producto a vender: ", (name) => {
    rl.question("Cantidad a vender: ", (qty) => {
      const quantity = Number(qty);
      const item = inventory.find((p) => p.name === name);

      if (!item) {
        console.log("Producto no encontrado.");
      } else if (quantity > item.quantity) {
        console.log("Cantidad inválida. No hay suficiente stock.");
      } else {
        item.quantity -= quantity;
        console.log("Venta realizada.");
      }

      showMenu();
    });
  });
};

const displayInventory = () => {
  console.log("\n--- INVENTARIO ---");
  if (inventory.length === 0) {
    console.log("Inventario vacío.");
  } else {
    inventory.forEach((product) =>
      console.log(`${product.name} - Cantidad: ${product.quantity}`)
    );
  }
};

showMenu();
