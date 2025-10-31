/* 
Crea un programa que solicite tres números y los ordene de mayor a menor usando condicionales anidadas.
*/

const ordenarTresNumeros = (a, b, c) => {
    let mayor, medio, menor;

    if (a >= b && a >= c) {
        mayor = a;
        if (b >= c) {
            medio = b;
            menor = c;
        } else {
            medio = c;
            menor = b;
        }
    } else if (b >= a && b >= c) {
        mayor = b;
        if (a >= c) {
            medio = a;
            menor = c;
        } else {
            medio = c;
            menor = a;
        }
    } else {
        mayor = c;
        if (a >= b) {
            medio = a;
            menor = b;
        } else {
            medio = b;
            menor = a;
        }
    }

    console.log(`Orden: ${mayor}, ${medio}, ${menor}`);
}

ordenarTresNumeros(8, 3, 5);
ordenarTresNumeros(2, 9, 7);


/* 
Implementa un programa que pida el nombre de usuario y contraseña. 
Si el usuario es "admin" y la contraseña es "1234", muestra "Acceso concedido". 
Si el usuario es correcto pero la contraseña incorrecta, pide la contraseña nuevamente (máximo 3 intentos). 
Si el usuario es incorrecto, muestra "Usuario no encontrado".
*/

const autenticarUsuario = (usuario, contraseñasIntentadas) => {
    const usuarioCorrecto = "admin";
    const contraseñaCorrecta = "1234";

    if (usuario === usuarioCorrecto) {
        let intentos = 0;
        let acceso = false;

        while (intentos < contraseñasIntentadas.length && intentos < 3) {
            if (contraseñasIntentadas[intentos] === contraseñaCorrecta) {
                acceso = true;
                break;
            }
            intentos++;
        }

        if (acceso) {
            console.log("Acceso concedido");
        } else {
            console.log("Contraseña incorrecta. Acceso denegado.");
        }

    } else {
        console.log("Usuario no encontrado");
    }
}

autenticarUsuario("admin", ["0000", "1111", "1234"]);
autenticarUsuario("root", ["1234"]);
