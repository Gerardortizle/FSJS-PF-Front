/*
    Este ejercicio debe correr en Node.

    Realiza la siguiente operación en código:
    84 + 96 - 25 * 79 ** 2 * 59 % 69 + 21 / 53

    Antes de ejecutarlo, trata de hacer el cálculo (una operación a la vez) en el orden correcto.
    Así verás si comprendes bien el orden de operadores de JS.
    Recuerda leer el orden correcto en la documentación.

    Finalmente, imprime el resultado de la operación truncado a 2 decimales.
*/

//tu código va aquí vvv

let resultado;

resultado = 84 + 96 - 25 * 79 ** 2 * 59 % 69 + 21 / 53;
resultado *= 100;
resultado = Math.trunc(resultado);
resultado /= 100;


console.log ("El resultado es " +resultado);
//tu código va aquí ^^^

//eof
