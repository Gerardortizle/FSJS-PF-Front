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
//let resultado;
//Primero se realiza la operación con los exponentes  79 ** 2 
// 84 + 96 - 25 * 6241 * 59 % 69 + 21 / 53 

// Posteriormente se ejecutarán las expresiones con multiplicación, división y módulos

// 25 * 6241 * 59 = 9205475

// 84 + 96 - 9205475 % 69 + 21 / 53

// Luego segun el orden se hace el módulo

// 9205475 % 69 = 47

// 84 + 96 - 47 + 21 / 53

// Quedan las sumas y la división por lo que se hace primero la división

// 21 / 53  = 0.39622641509433965

// 84 + 96 - 47 + 0.39622641509433965

// Al final hace la suma de 84 + 96 y la resta de 47 + .03
// El resultado 133.39622641509433


resultado = 84 + 96 - 25 * 79 ** 2 * 59 % 69 + 21 / 53;
resultado *= 100;
resultado = Math.trunc(resultado);
resultado /= 100;
console.log ("El resultado es " +resultado);
//tu código va aquí ^^^
//eof