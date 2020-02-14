/*
    Este ejercicio debe correr en Node.

    Este ejercicio tiene varios errores.

    ¿Puedes identificarlos y corregirlos?

    Puntos extra si corriges los errores de runtime con bloques try-catch.
*/

//tu código va aquí vvv

console.log("si esto se imprime, ya no hay errores de compilación");

let nombre = "Humberto González Santos";

//slice() nos sirve para obtener un pedazo de un string
//lee la documentación:
//https://www.w3schools.com/jsref/jsref_slice_string.asp
let primernombre = nombre.slice(0,8);

//const primernombre = "Nombre: "

primernombre = ("El primer nombre es " +primernombre);

console.log(primernombre);

//tu código va aquí ^^^

//eof
