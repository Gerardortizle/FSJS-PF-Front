/*
    Este ejercicio debe correr en Node.

    Usa la función getRandomNumber(0,100) para generar 10 números aleatorios.
    A cada uno de ellos, calcúlale su módulo 2.
    imprime en pantalla cada número junto con el resultado del módulo.
    ¿Puedes interpretar estos resultados para saber si cada número es par o impar?
*/

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max-min+1) ) + min;
}

//tu código va aquí vvv

// Se obtiene el numero aleatorio pasandole a la función los valores de 0 y 100 //
// Se hace 10 veces para obtener 10 valores aleatorios //
let a = getRandomNumber(0, 100);
let b = getRandomNumber(0, 100);
let c = getRandomNumber(0, 100);
let d = getRandomNumber(0, 100);
let e = getRandomNumber(0, 100);
let f = getRandomNumber(0, 100);
let g = getRandomNumber(0, 100);
let h = getRandomNumber(0, 100);
let i = getRandomNumber(0, 100);
let j = getRandomNumber(0, 100);


// En cada uno de los console se hace la concatenación y la coerción y además se calcula el módulo//
// de cada valor obtenido para conocer si el número es par o impar//
console.log("Número: "+a+" módulo 2: "+(a%2));
console.log("Número: "+b+" módulo 2: "+(b%2));
console.log("Número: "+c+" módulo 2: "+(c%2));
console.log("Número: "+d+" módulo 2: "+(d%2));
console.log("Número: "+e+" módulo 2: "+(e%2));
console.log("Número: "+f+" módulo 2: "+(f%2));
console.log("Número: "+g+" módulo 2: "+(g%2));
console.log("Número: "+h+" módulo 2: "+(h%2));
console.log("Número: "+i+" módulo 2: "+(i%2));
console.log("Número: "+j+" módulo 2: "+(j%2));




//tu código va aquí ^^^

//eof
