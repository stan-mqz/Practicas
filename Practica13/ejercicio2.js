import { stdin, stdout } from "process";
import readline from "readline";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

let products = [];

const productsList = (productsAmount) => {
  let product;

  if (productsAmount === 0) {
    requestProduct();
    return;
  }

  rl.question("Ingresa el nombre del producto ", (name) => {
    rl.question("Ingresa el precio del producto ", (price) => {
      const rawName = name; 
      const formatedName = name.trim().toLowerCase().replace(/\s+/g, ""); 

      product = { name: formatedName, rawName, price };
      products.push(product);

      productsList(productsAmount - 1);
    });
  });
};

const requestProduct = () => {
  let attempts = 3;

  const ask = () => {
    if (attempts === 0) {
      console.log("Has agotado tus intentos.");
      rl.close();
      return;
    }

    rl.question("Ingrese el producto que desea buscar ", (name) => {
      const formatedName = name.trim().toLowerCase().replace(/\s+/g, "");

      const productExists = products.find(
        (product) => product.name === formatedName
      );

      if (productExists) {
        console.log(
          `El precio de ${productExists.rawName} es: $${productExists.price}`
        );
        rl.close();
      } else {
        attempts--;
        console.log(`Producto no encontrado. Intentos restantes: ${attempts}`);
        ask();
      }
    });
  };

  ask();
};

rl.question("Ingrese la cantidad de productos ", (productsAmount) => {
  if (isNaN(productsAmount)) {
    console.log("Por favor ingrese un número válido.");
    rl.close();
    return;
  }
  productsList(Number(productsAmount));
});
