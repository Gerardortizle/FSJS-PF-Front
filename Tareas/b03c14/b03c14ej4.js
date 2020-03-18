/*
    Este ejercicio debe correr en Node.

    Tienes 3 valores: v1, v2 y v3.
    Convierte cada uno de ellos a number, string y boolean.
    Después, guarda cada uno en test y corre este ejercicio para ver el output.
*/

let v1 = "52.00"
let v2 = 0
let v3 = "hola"

let test;

//tu código va aquí vvv

//Convertidos los 3 valores a Number,String y Boolean
test = parseFloat(v1);
console.log(test+" es del tipo "+typeof(test));

test = v1.toString(v1);
console.log(test+" es del tipo "+typeof(test));

test = Boolean(v1);
console.log(test+" es del tipo "+typeof(test));

//Hasta aqui se convirtió v1

//Conversion de v2
test = parseFloat(v2);
console.log(test+" es del tipo "+typeof(test));

test = v2.toString();
console.log(test+" es del tipo "+typeof(test));

test = Boolean(v2);
console.log(test+" es del tipo "+typeof(test));

//Hasta aqui se convirtió v2

//conversión de v3

test = parseInt(v3);
console.log(test+" es del tipo "+typeof(test));

test = v3.toString(v3);
console.log(test+" es del tipo "+typeof(test));

test = Boolean(v3);
console.log(test+" es del tipo "+typeof(test));

//Hasta aqui se convirtió v3

//tu código va aquí ^^^


//eof
