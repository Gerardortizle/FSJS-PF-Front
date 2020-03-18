/*
    Este ejercicio debe correr en Node.

    Antes de ejecutar el código que aparece debajo,
    determina cuál será el valor de a antes del console.log.
    determina qué imprimirá el console.log.

    Ejecuta el ejercicio para que compares tu respuesta.
*/

let a = 1;
a /= (a++)*(++a)+(--a)-(a++)*(a--);

console.log("hola " + (a + true) + " adiós");


//  
// * a = 1
// * (a++)*(++a) //Primera multiplicación en la expresión
// *   1  * 2 =   2
// * (a++)*(a--) //Segunda multiplicación en la expresión
// *   1  * 1 =   1
// * (--a) = 0  // Queda la suma del decremento de la expresión
// *   1 - 1 = 
//
//

//eof
