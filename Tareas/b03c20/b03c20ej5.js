/*
    Este ejercicio debe correr en Node.

    Imprime todos los elementos del arreglo a en orden.
    Pero cada 10 valores impresos, imprime también "ya imprimí otros 10".
    Está prohibido usar ciclos en este ejercicio.
*/

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];

//tu código va aquí vvv

numeros.map( x => {
    console.log(x);
    if(x===10){
        console.log("impri 10");
    }else if(x===20){
        console.log("imprimi 20");
    }else if(x===30){
        console.log("imprimi 30");
    }else if(x===40){
        console.log("imprimi 40");
    }else if(x===50){
        console.log("imprimi 50")
    }
})

//tu código va aquí ^^^

//eof
