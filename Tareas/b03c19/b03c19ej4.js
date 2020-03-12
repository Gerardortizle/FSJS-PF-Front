/*
    Este ejercicio debe correr en Chrome.

    Simular una calculadora en la terminal.
    Debe hacer suma, resta, multiplicación, división y módulo.
    Debe operar sólo con dos números.
    Prohibido utilizar if, switch o expresiones ternarias.
    Colocar los números y la operación en las variables
    Imprimir en pantalla el resultado.
*/

let num = document.getElementById("term1");
let res = document.getElementById("divresultados");


const op1 = 10;
const op2 = 20;
const signo = "+";



//tu código va aquí vvv

document.getElementById("divresultados").innerHTML = +op1 +signo + op2;


//tu código va aquí ^^^

//eof
