/*
    Este ejercicio debe correr en Node.

    Usa la función getRandomNumber (escrita abajo) para generar un número aleatorio con 9 decimales.
    Inventa un algoritmo para redondearlo, conservando de 1 a 8 decimales.
*/

/* Función dada por el profesor*/
function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max-min+1) ) + min;
}

//getRandomNumber( 1000000000, 9999999999) / 1000000000;

//tu código va aquí vvv

let a = getRandomNumber(1000000000, 9999999999) / 1000000000;

//El valor resultante de a lo guarda en b multiplicandolo x 100000 para quitarle los decimales
let b = a * 100000000;

//Lo redondea para quitarle la ultima cifra
let c = Math.round(b);

//Lo divide entre 1000000 para conservar los decimales
let d = c / 100000000;

console.log(a);
console.log(b);
console.log(c);
console.log(d);



//tu código va aquí ^^^

//eof
